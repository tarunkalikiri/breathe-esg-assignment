# TRADEOFFS.md

# 1. Real Enterprise Integrations Not Implemented

Not built:
- SAP APIs
- utility APIs
- Concur/Navan APIs

Reason:
The prototype focuses on ingestion architecture and normalization logic rather than production integrations.

CSV ingestion provided the fastest realistic prototype path.

---

# 2. Authentication and RBAC Omitted

Not built:
- authentication
- role-based access control
- analyst permissions

Reason:
The assignment emphasized ingestion workflow and audit review rather than user management.

These features would normally be critical in production.

---

# 3. Advanced Emissions Calculations Omitted

Not built:
- emissions factor libraries
- airport distance calculations
- automatic Scope classification
- unit conversion engines

Reason:
The prototype focused on ingestion, normalization, and analyst review workflows.

The normalized schema was designed to support future emissions calculations.