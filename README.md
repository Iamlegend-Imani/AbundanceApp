# Abundance MVP

A front-end prototype for a personalized search engine that helps people discover legitimate free, sponsored, funded, donated, and zero-cost opportunities.
https://theabundanceapp.base44.app/

## Related Work: From Signal to Safeguard

AbundanceApp and From Signal to Safeguard address different problems but share a common systems-building approach.

AbundanceApp explores how legitimate opportunities can be discovered, verified, matched, and maintained using source provenance, eligibility criteria, verification dates, expiration logic, and human review.

[From Signal to Safeguard](https://github.com/Iamlegend-Imani/FromSignaltoSafeguard/blob/main/README.md) applies that same evidence-centered discipline to AI-cyber governance. The public research prototype separates observations from interpretation, makes uncertainty visible, routes decisions to named human owners, suggests safeguards, and generates an auditable decision record using fictional scenarios only.

Together, these projects demonstrate my broader practice: building transparent systems that help people act on consequential information without automating away human judgment.


## Core product loop

1. User creates a lightweight matching profile.
2. Abundance aggregates verified opportunities from trusted sources.
3. Matching ranks opportunities by eligibility, estimated value, urgency, and application effort.
4. "I Want This" reverse-searches the funding ecosystem around a desired outcome.
5. Users save opportunities into an application pipeline and track claimed value.

## Current prototype

This prototype is intentionally front-end only. It includes:
- For You dashboard
- Estimated matched value
- Opportunity cards
- Explore filters
- "I Want This" reverse-search experience
- Applications pipeline
- Profile controls
- Demo opportunity data and interactions

Open `index.html` in any modern browser.

## Production architecture

Recommended next build:
- Frontend: Next.js + TypeScript
- Database/Auth: Supabase (Postgres + Auth)
- Search/Matching: Postgres full-text first; embeddings later
- Data ingestion: scheduled workers + official APIs/RSS + structured web extraction
- AI layer: LLM used for normalization, eligibility explanation, and application assistance
- Verification: source URL, source type, last verified date, expiration logic, human/admin review for high-value listings
- Notifications: email/push for high-fit opportunities and deadlines

## Suggested data model

### users
- id
- location
- search_radius
- travel_flexibility
- interests
- career_goals
- education_goals
- optional_eligibility_flags
- privacy_preferences

### opportunities
- id
- title
- provider
- category
- description
- source_url
- source_type
- geography
- eligibility_text
- deadline
- estimated_value_min
- estimated_value_max
- truly_free
- last_verified_at
- status

### matches
- user_id
- opportunity_id
- fit_score
- eligibility_confidence
- value_score
- urgency_score
- effort_score
- why_match

### applications
- user_id
- opportunity_id
- status
- next_action
- deadline
- notes
- claimed_value

## Important trust principle

Never describe an opportunity as "free" unless its terms are verified. Clearly separate:
- Truly free
- Fully funded if selected
- Income/eligibility based
- Partially subsidized
- Reimbursement-based
- Free trial / promotional (generally exclude)

The brand should feel expansive and empowering, not like a benefits directory.
