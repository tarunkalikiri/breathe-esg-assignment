# MODEL.md

## Overview

The application is designed as a multi-tenant ESG ingestion and analyst review platform.

The core objective is to ingest emissions-related operational data from multiple enterprise systems, normalize it into a common structure, and provide an analyst review workflow before audit approval.

---

# Core Models

## Tenant

Represents a client company onboarded into the platform.

Fields:
- id
- name

Why:
The assignment explicitly required multi-tenancy support. Every uploaded record belongs to a tenant.

---

## DataSource

Represents a single uploaded source file.

Fields:
- tenant
- source_type
- uploaded_at
- file_name

Why:
This model provides source-of-truth tracking for auditability. Analysts can trace every normalized row back to the uploaded source.

Supported source types:
- SAP
- Utility
- Travel

---

## EmissionRecord

Represents normalized ESG activity data.

Fields:
- tenant
- data_source
- category
- scope
- activity_date
- description
- quantity
- unit
- normalized_quantity
- normalized_unit
- status
- suspicious
- raw_payload
- created_at

Why:
This acts as the normalized canonical emissions table.

The raw source payload is preserved for audit traceability.

Normalization fields were included to support future unit conversions.

Status enables analyst review workflow:
- PENDING
- APPROVED
- REJECTED

Suspicious flag enables anomaly detection.

---

## AuditLog

Tracks analyst actions performed on records.

Fields:
- emission_record
- action
- performed_at
- notes

Why:
Supports audit review traceability and operational history.

---

# Scope Handling

The model supports:
- Scope 1
- Scope 2
- Scope 3

Scope values are attached directly to normalized records.

Examples:
- Fuel combustion → Scope 1
- Purchased electricity → Scope 2
- Procurement/travel → Scope 3

---

# Source-of-Truth Tracking

Each normalized record preserves:
- original uploaded source
- upload timestamp
- raw source payload

This allows auditors and analysts to trace every record back to ingestion source.

---

# Normalization Strategy

Different source systems expose different units and schemas.

The prototype normalizes:
- quantity
- units
- source structure

The current implementation preserves original units while storing normalized fields for future conversion support.

---

# Suspicious Record Detection

Simple anomaly rules were implemented:
- negative quantities
- unusually large quantities

Suspicious rows are highlighted for analyst review before approval.

---

# Tradeoff

For the 4-day prototype:
- SQLite was used instead of PostgreSQL
- authentication was omitted
- asynchronous ingestion was omitted

The focus was correctness of ingestion and review workflow rather than production scalability.