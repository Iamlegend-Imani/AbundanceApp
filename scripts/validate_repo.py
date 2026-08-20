#!/usr/bin/env python3
"""Dependency-free structural checks for the Abundance prototype repository."""

from __future__ import annotations

import re
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlparse
from xml.etree import ElementTree


ROOT = Path(__file__).resolve().parents[1]

REQUIRED_FILES = (
    "README.md",
    "index.html",
    "assets/styles.css",
    "assets/app.js",
    "docs/METHODOLOGY.md",
    "docs/TRUST_AND_SAFETY.md",
    "docs/ARCHITECTURE.md",
    "docs/ROADMAP.md",
    "docs/assets/abundance-product-preview.svg",
)

FORBIDDEN_FILES = (
    "index",
    "From Signal to Safeguard Project Brief.md",
    ".github/workflows/jekyll-docker.yml",
)

TEXT_SUFFIXES = {".html", ".css", ".js", ".md", ".py", ".yml", ".yaml"}


class PrototypeParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.ids: list[str] = []
        self.local_references: list[str] = []
        self.has_main = False
        self.has_title = False

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attributes = dict(attrs)
        if tag == "main":
            self.has_main = True
        if tag == "title":
            self.has_title = True
        if attributes.get("id"):
            self.ids.append(attributes["id"] or "")

        for key in ("href", "src"):
            reference = attributes.get(key)
            if reference and is_local_reference(reference):
                self.local_references.append(reference)


def is_local_reference(reference: str) -> bool:
    parsed = urlparse(reference)
    return not parsed.scheme and not parsed.netloc and not reference.startswith(("#", "mailto:", "tel:"))


def local_target(source_file: Path, reference: str) -> Path:
    path_only = unquote(reference.split("#", 1)[0].split("?", 1)[0])
    return (source_file.parent / path_only).resolve()


def validate_required_files(errors: list[str]) -> None:
    for relative_path in REQUIRED_FILES:
        target = ROOT / relative_path
        if not target.is_file() or target.stat().st_size == 0:
            errors.append(f"Missing or empty required file: {relative_path}")

    for relative_path in FORBIDDEN_FILES:
        if (ROOT / relative_path).exists():
            errors.append(f"Obsolete or misplaced file is still present: {relative_path}")


def validate_text(errors: list[str]) -> None:
    for path in ROOT.rglob("*"):
        if not path.is_file() or path.suffix.lower() not in TEXT_SUFFIXES:
            continue
        content = path.read_text(encoding="utf-8")
        relative = path.relative_to(ROOT)
        if "\u2014" in content:
            errors.append(f"Em dash found in {relative}")


def validate_html(errors: list[str]) -> None:
    html_path = ROOT / "index.html"
    html = html_path.read_text(encoding="utf-8")
    parser = PrototypeParser()
    parser.feed(html)

    duplicates = sorted({identifier for identifier in parser.ids if parser.ids.count(identifier) > 1})
    if duplicates:
        errors.append(f"Duplicate HTML ids: {', '.join(duplicates)}")
    if not parser.has_main:
        errors.append("index.html is missing a main landmark")
    if not parser.has_title:
        errors.append("index.html is missing a title element")
    if "Demonstration mode" not in html:
        errors.append("index.html must visibly identify demonstration mode")

    for reference in parser.local_references:
        target = local_target(html_path, reference)
        if ROOT not in target.parents and target != ROOT:
            errors.append(f"HTML reference escapes repository root: {reference}")
        elif not target.exists():
            errors.append(f"Broken local HTML reference: {reference}")


def validate_markdown_links(errors: list[str]) -> None:
    link_pattern = re.compile(r"\[[^\]]+\]\(([^)]+)\)")
    for markdown_path in ROOT.rglob("*.md"):
        content = markdown_path.read_text(encoding="utf-8")
        for reference in link_pattern.findall(content):
            clean_reference = reference.strip().split(" ", 1)[0]
            if not is_local_reference(clean_reference):
                continue
            target = local_target(markdown_path, clean_reference)
            if ROOT not in target.parents and target != ROOT:
                errors.append(f"Markdown reference escapes repository root: {markdown_path.relative_to(ROOT)} -> {reference}")
            elif not target.exists():
                errors.append(f"Broken local Markdown link: {markdown_path.relative_to(ROOT)} -> {reference}")


def validate_prototype_boundaries(errors: list[str]) -> None:
    script = (ROOT / "assets/app.js").read_text(encoding="utf-8")
    readme = (ROOT / "README.md").read_text(encoding="utf-8")
    html = (ROOT / "index.html").read_text(encoding="utf-8")

    for phrase in ("Illustrative pathway", "Official source unavailable", "fictional composite"):
        if phrase not in script and phrase not in readme and phrase not in html:
            errors.append(f"Missing prototype boundary language: {phrase}")


def validate_svg(errors: list[str]) -> None:
    try:
        ElementTree.parse(ROOT / "docs/assets/abundance-product-preview.svg")
    except ElementTree.ParseError as error:
        errors.append(f"Invalid SVG preview: {error}")


def main() -> int:
    errors: list[str] = []
    validate_required_files(errors)
    validate_text(errors)
    validate_html(errors)
    validate_markdown_links(errors)
    validate_prototype_boundaries(errors)
    validate_svg(errors)

    if errors:
        print("Repository validation failed:")
        for error in errors:
            print(f"- {error}")
        return 1

    print("Repository validation passed.")
    print(f"Checked {len(REQUIRED_FILES)} required files and {len(FORBIDDEN_FILES)} obsolete paths.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
