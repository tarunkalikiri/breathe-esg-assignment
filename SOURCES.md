# SOURCES.md

# SAP Research

Research Focus:
- SAP ECC exports
- procurement reporting
- fuel usage operational exports

Chosen Prototype Format:
- CSV export

What was learned:
SAP exports commonly contain:
- inconsistent column naming
- inconsistent units
- operational plant references
- manually exported reporting structures

Sample data includes:
- diesel usage
- petrol usage
- procurement records

What would break in production:
- multilingual exports
- inconsistent schemas
- missing units
- large file sizes

---

# Utility Research

Research Focus:
- electricity usage reporting
- facilities operational workflows

Chosen Prototype Format:
- CSV export from utility portal

What was learned:
Utility exports commonly contain:
- billing periods
- meter IDs
- usage units
- tariff information

Sample data assumptions:
- electricity usage records
- operational billing cycles

What would break in production:
- PDF-only utilities
- OCR extraction issues
- inconsistent utility schemas

---

# Travel Research

Research Focus:
- Concur reporting
- Navan reporting
- corporate travel operational exports

Chosen Prototype Format:
- CSV export

What was learned:
Travel exports commonly contain:
- travel categories
- airport codes
- hotel records
- transport types

Sample data assumptions:
- fuel
- procurement
- travel operational activities

What would break in production:
- missing airport distances
- inconsistent vendor categorization
- duplicated travel records