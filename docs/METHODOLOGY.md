# Abundance Methodology

## Purpose

Abundance is designed to turn fragmented opportunity information into transparent action pathways. This document describes the proposed production method. It does not claim that the current front-end prototype performs live verification or eligibility determination.

## Operating principles

1. **Evidence before exposure.** Do not recommend a live opportunity until its source and current terms are captured.
2. **Classify before simplifying.** Preserve the difference between no-cost access, competitive funding, eligibility-based support, subsidies, reimbursements, and promotions.
3. **Explain without overclaiming.** A match can indicate possible relevance. It cannot guarantee eligibility, availability, or selection.
4. **Minimize sensitive data.** Ask only for information necessary to improve a specific match.
5. **Keep consequential decisions human-owned.** Users decide whether to disclose information, pursue a pathway, and submit an application.

## Proposed opportunity workflow

### 1. Discover

Prioritize sources with clear authority and stable provenance:

- government agencies and public institutions;
- the official provider or funder;
- accredited educational institutions;
- established nonprofit organizations;
- employer or membership benefit portals;
- official program APIs, feeds, or structured pages.

Discovery is not verification. A search result, aggregator, social post, or newsletter may identify a lead, but the record should point back to an authoritative source before publication.

### 2. Capture provenance

Each production record should retain:

- official source URL;
- provider and source type;
- source title and program title;
- retrieved and last-verified timestamps;
- geography and service area;
- exact deadline language;
- eligibility text and required documentation;
- benefit type and estimated value basis;
- known exclusions, fees, and conditions;
- reviewer and review status.

### 3. Normalize without erasing meaning

Convert source material into a consistent schema while preserving the original language. A normalized summary must not silently broaden eligibility, remove conditions, or convert competitive funding into guaranteed support.

### 4. Classify the support

| Classification | Meaning |
| --- | --- |
| Truly no cost | The verified terms identify no required participant payment for the stated benefit |
| Fully funded if selected | The stated benefit is covered, but access is competitive or conditional |
| Eligibility based | Access depends on income, residency, employment, age, status, or another stated criterion |
| Partially subsidized | The provider covers only part of the total cost |
| Reimbursement based | The participant may need to pay first and meet reimbursement conditions |
| Promotional or trial | Access is temporary, commercial, or likely to create later cost |

### 5. Verify

Verification should answer:

- Does the official source still exist?
- Is the program currently open, rolling, scheduled, paused, or closed?
- Are the terms consistent across the relevant official pages?
- Is the deadline explicit, and which time zone applies?
- What costs remain with the participant?
- Is the estimated value sourced, calculated, or unknown?
- Does the record require specialist or legal review?

High-value, sensitive, or ambiguous records should require human review before recommendation.

### 6. Match transparently

A target matching model may consider:

- stated eligibility alignment;
- geography and travel flexibility;
- user goals and category interests;
- deadline urgency;
- estimated effort;
- evidence quality and verification recency;
- potential value and uncovered costs;
- privacy sensitivity.

The current prototype uses simple illustrative relevance scores. It does not calculate real eligibility confidence.

### 7. Explain the pathway

Every recommendation should show:

- why it appeared;
- which facts support the match;
- which criteria remain unknown;
- what the funding classification means;
- when the source was last verified;
- the next verification and application steps.

### 8. Learn from outcomes

With user consent, the system may record whether a pathway was opened, saved, verified, applied to, awarded, rejected, expired, or found inaccurate. Outcome data should improve source quality and workflow design without being used to infer sensitive traits beyond the user's stated purpose.

## Quality gates for a pilot

Before a record is shown as live and verified, require:

- an authoritative source;
- a clear funding classification;
- a verification timestamp;
- explicit geography and availability state;
- documented eligibility language;
- known participant costs;
- a named review owner for exceptions.

The central test is simple: can a user distinguish what is known, what is estimated, what remains uncertain, and what they must verify for themselves?

