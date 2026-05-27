# DECISIONS.md

# SAP Source

Chosen format:
- CSV export

Reason:
CSV exports are extremely common in enterprise SAP workflows and realistic for procurement and fuel reporting teams.

Ignored:
- IDocs
- BAPIs
- OData integrations

Reason:
These integrations require significantly more implementation complexity and infrastructure than appropriate for a 4-day prototype.

Handled assumptions:
- inconsistent units
- inconsistent naming
- manually exported operational reports

---

# Utility Source

Chosen format:
- CSV export from utility portal

Reason:
Facilities teams commonly export electricity usage manually from utility portals.

Ignored:
- PDF parsing
- OCR extraction
- utility APIs

Reason:
These significantly increase implementation complexity.

Handled assumptions:
- billing periods differ from calendar months
- electricity units vary by provider

---

# Travel Source

Chosen format:
- CSV export

Reason:
Corporate travel tools like Concur and Navan commonly support CSV exports for reporting.

Handled assumptions:
- flights
- hotels
- transport categories

Ignored:
- live API integrations
- airport distance calculation

Reason:
The focus was ingestion architecture rather than travel emissions calculation accuracy.

---

# Review Workflow

Decision:
Analyst approval required before records are considered finalized.

Reason:
The assignment explicitly emphasized analyst review before audit sign-off.

---

# Normalization Design

Decision:
Preserve both:
- raw payload
- normalized fields

Reason:
Audit workflows require traceability back to source data.

---

# Frontend Design

Decision:
Minimal dashboard UI.

Reason:
The assignment prioritized:
- data modeling
- ingestion correctness
- engineering judgment

over visual complexity.

---

# Database Choice

Decision:
SQLite

Reason:
Fastest development setup for prototype delivery.

Production systems would use PostgreSQL.