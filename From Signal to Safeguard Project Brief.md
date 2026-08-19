# From Signal to Safeguard

## A public AI–cyber catastrophic-risk governance toolkit

**Applicant:** Imani-Faith Kirika  
**Status:** Working draft v0.1 — August 2026  
**Proposed pilot:** 8 weeks, approximately 120 hours

## One-sentence summary

I am developing a public, testable toolkit that helps safety teams, evaluators, and policy or operations teams translate frontier-AI cyber-capability evidence into accountable thresholds, named decision owners, escalation paths, safeguards, and auditable decisions.

## Problem and working hypothesis

Frontier-model cyber capabilities are dual-use and increasingly consequential. The UK AI Security Institute evaluates capabilities such as vulnerability discovery, exploitation, malware development, and sustained autonomous activity in simulated networks. The U.S. Center for AI Standards and Innovation evaluates AI capabilities that may create national-security risks, including cybersecurity risks. Frontier developers have also published frameworks that connect capability thresholds to stronger safeguards.

The working hypothesis for this project is narrow: even when evaluation evidence exists, teams may benefit from a lightweight, source-grounded operating layer that makes the transition from **signal** to **decision** explicit. That layer should show:

- what evidence was observed and how reliable it is;
- which capability or risk threshold may have been crossed;
- what uncertainty or disagreement remains;
- who owns the decision and who must be consulted;
- which safeguard, restriction, escalation, or pause should be considered;
- how exceptions are approved, time-limited, reviewed, and recorded.

This is a hypothesis to test with practitioners, not a claim that one universal framework will fit every institution.

## Research question

How can public frontier-AI cyber-risk frameworks and evaluation evidence be translated into a practical, auditable decision workflow without concealing uncertainty or creating a false sense of safety?

## Proposed outputs

1. **Framework crosswalk**  
   A source-grounded comparison of public cyber-capability thresholds, evaluation concepts, safeguards, and governance mechanisms from AISI/CAISI, NIST, Anthropic, and OpenAI.

2. **Evidence-to-decision scorecard**  
   A structured template covering evidence quality, capability indicators, uncertainty, severity, reversibility, affected systems, decision owner, dependencies, and required review.

3. **Escalation and exception protocol**  
   A decision tree for when evidence should trigger further evaluation, access restrictions, additional monitoring, safeguard upgrades, senior review, or a pause pending more evidence.

4. **Auditable decision record**  
   A compact record of the decision, evidence considered, dissent or uncertainty, accountable owner, expiry or review date, and conditions that would reopen the decision.

5. **Fictional tabletop exercises**  
   At least two non-operational scenarios designed to test whether users can apply the toolkit consistently. The exercises will not contain exploit instructions, live vulnerabilities, or sensitive operational details.

6. **Public v1.0 toolkit and limitations memo**  
   A revised release incorporating practitioner feedback, test results, unresolved questions, and explicit limits on appropriate use.

## Eight-week pilot plan

### Weeks 1–2: Scope and evidence map

- Review and crosswalk relevant public frameworks and evaluations.
- Define the intended users, decisions, boundaries, and threat scenarios.
- Publish a short problem statement and source map.

**Assessment:** traceability to primary sources; clear exclusions; feedback on whether the problem is real and sufficiently narrow.

### Weeks 3–4: Toolkit v0.1

- Build the evidence-to-decision scorecard, escalation logic, exception protocol, and decision-record template.
- Separate observed evidence, inference, decision, and unresolved uncertainty.

**Assessment:** internal consistency; usability on two fictional scenarios; no unsupported claims of completeness.

### Weeks 5–6: Practitioner review and tabletop tests

- Seek feedback from three to five people working in frontier-model evaluation, AI governance, cyber policy, or safety operations.
- Run at least two structured tabletop tests using fictional cases.
- Record disagreements, failure points, and missing information.

**Dependency:** participation from external reviewers. Outreach is controlled by the applicant; completed reviews depend on others.

### Weeks 7–8: Revision and publication

- Revise the toolkit based on evidence and feedback.
- Publish v1.0, a limitations memo, a change log, and recommended next tests.
- Decide whether further work should focus on policy research, safety operations, evaluation governance, or discontinuation.

**Assessment:** public deliverables; documented revisions; reviewer feedback; a clear continue, narrow, pivot, or stop decision.

## Success criteria

- A public, versioned toolkit with primary-source traceability.
- At least two documented tabletop tests using fictional scenarios.
- Feedback requested from at least five relevant practitioners, with a target of three completed reviews.
- A change log showing how evidence altered the design.
- A limitations memo identifying where the toolkit should not be used.
- A decision about whether the approach merits further development.

## Non-goals and safety boundaries

The pilot will not:

- develop offensive cyber capabilities or provide exploit instructions;
- test models against live systems or handle undisclosed vulnerabilities;
- claim to replace expert judgment, formal evaluation, or regulatory authority;
- present a generic corporate compliance checklist as frontier-AI safety work;
- promise that procedural consistency alone can eliminate catastrophic risk;
- collect sensitive personal, security, or proprietary information.

## Why this applicant

My comparative advantage is translating between technical evidence, organizational risk, and executable decisions. Across more than a decade in technology, data, AI, product, client experience, and operations, I have repeatedly turned ambiguous work into named owners, decision criteria, workflows, exception signals, and review cadences.

In recent AI work, I developed the operational foundation for distinguishing automated, augmented, and human-only decisions; keeping humans as final arbiters where error risk is material; and requiring staged evidence, controls, ownership, and exception handling before expanding AI authority. I also built an early resource-discovery application and designed its verification layer around source provenance, validation dates, eligibility language, duplicates, expiration, unresolved questions, and potentially unsafe records. I am currently completing cybersecurity coursework to strengthen my grounding in threats, controls, incident response, and risk.

These are analogous strengths, not a claim of established frontier-AI safety expertise. The pilot is intentionally designed to test whether those strengths transfer into useful AI–cyber catastrophic-risk governance work.

## Theory of change

Advanced AI could increase the scale, speed, or autonomy of cyber operations. Capability evaluations and risk frameworks can identify concerning evidence, but that evidence affects outcomes only if institutions translate it into timely and accountable action. A tested decision-operations toolkit could make ownership, thresholds, uncertainty, escalation, safeguards, and exceptions easier to inspect and challenge. If practitioners find it useful, this could reduce ambiguity or delay when cyber capabilities approach dangerous thresholds, strengthening the operational layer through which evidence becomes mitigation. The contribution is indirect and uncertain; the pilot is designed to test the weakest links rather than assume impact.

## Principal uncertainty

The largest uncertainty is whether the intended users experience this translation problem in a form that a public, lightweight toolkit can improve. Evidence against the project would include reviewers reporting that existing processes already solve the problem, that the toolkit creates more overhead than clarity, or that necessary information is too institution-specific or sensitive to standardize. If that evidence appears, the project will narrow, pivot, or stop rather than manufacture a use case.

## Proposed budget

| Item | Estimate |
|---|---:|
| Applicant research, design, testing, and publication stipend — 120 hours at $35/hour | $4,200 |
| Four practitioner-review honoraria at $150 each | $600 |
| API, compute, and project-tooling costs | $300 |
| Research access and source-management costs | $200 |
| Editing, design, and accessibility support | $200 |
| **Total request** | **$5,500** |

The stipend funds a bounded eight-week pilot and protects the time needed for source review, system design, testing, revision, and publication. It is not a request for general living expenses or an open-ended salary.

## Initial primary sources

- [UK AI Security Institute — Frontier AI Trends Report](https://www.aisi.gov.uk/frontier-ai-trends-report)
- [UK AI Security Institute — How fast is autonomous AI cyber capability advancing?](https://www.aisi.gov.uk/blog/how-fast-is-autonomous-ai-cyber-capability-advancing)
- [NIST — Center for AI Standards and Innovation](https://www.nist.gov/caisi)
- [NIST — AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)
- [Anthropic — Responsible Scaling Policy](https://www.anthropic.com/responsible-scaling-policy)
- [OpenAI — Preparedness Framework](https://openai.com/index/updating-our-preparedness-framework/)

## Existing analogous work

- [The Abundance App prototype](https://theabundanceapp.base44.app)
- A redacted AI decision-governance workflow or scorecard can be added after confidentiality review.

---

**Applicant review required before publication:** Confirm the proposed hours, stipend rate, budget items, descriptions of prior work, and every statement about personal contribution. Remove or revise anything that is not exactly accurate.
