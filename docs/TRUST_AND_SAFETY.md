# Trust and Safety Boundaries

## Product promise

Abundance may help people discover and understand possible routes to funding or support. It must not present possibility as certainty.

## Current prototype boundary

The repository prototype uses fictional composite opportunities. It does not:

- connect to live program sources;
- verify current availability or deadlines;
- determine legal eligibility;
- guarantee funding, acceptance, savings, or value;
- submit applications;
- provide financial, legal, medical, or benefits advice.

## Evidence boundaries

### Never invent missing terms

If a source does not state a deadline, value, included expense, or eligibility condition, the system should mark the field as unknown. It should not infer a favorable answer.

### Separate discovery from verification

Third-party pages, social posts, search results, and newsletters may surface leads. A production listing should link to the official provider or authoritative source whenever one exists.

### Make uncertainty visible

Recommended user-facing states include:

- verified and open;
- verified and rolling;
- verification due;
- terms unclear;
- temporarily paused;
- closed or expired;
- illustrative only.

## AI boundary

AI may assist with:

- extracting and normalizing source language;
- detecting conflicting or missing fields;
- proposing a funding classification;
- explaining eligibility language in plain terms;
- generating a checklist from verified terms;
- routing ambiguous records to human review.

AI should not:

- declare final eligibility;
- guarantee selection or payment;
- fabricate sources, values, or deadlines;
- conceal uncertainty behind a confidence score;
- make consequential disclosures for the user;
- submit an application without informed, revocable consent;
- rank people by protected or inferred sensitive traits.

## Privacy boundary

Use the least sensitive data necessary for the requested match.

- Keep public profile information separate from optional eligibility details.
- Explain why each sensitive field is requested.
- Allow matching without optional sensitive data when practical.
- Encrypt sensitive data in transit and at rest in a production system.
- Provide deletion, export, and consent controls.
- Do not sell personal eligibility data.
- Do not use health, disability, immigration, income, or family information for unrelated advertising.

## Fraud and abuse controls

A production pilot should include:

- domain and source-identity checks;
- suspicious fee and payment-request warnings;
- duplicate and impersonation detection;
- manual review for high-value or high-risk listings;
- user reporting and correction workflows;
- expiration and reverification rules;
- a record of edits and reviewer decisions.

## Human accountability

Each high-risk exception should have a named review owner. Users retain the final decision to pursue a pathway and must verify the official terms before acting.

The product should optimize for informed action, not maximum clicks, application volume, or the appearance of abundance.

