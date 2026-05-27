# Breathe ESG Assignment

Live Frontend:
https://breathe-esg-assignment-iota.vercel.app

Live Backend:
https://breathe-esg-assignment-sf55.onrender.com

---

# Overview

This project is a prototype ESG ingestion and analyst review platform built using Django REST Framework and React.

The system ingests operational ESG data from enterprise-style sources, normalizes records into a unified structure, and allows analysts to review and approve suspicious records before audit workflows.

---

# Features

- CSV ingestion pipeline
- Multi-source ESG data support
- Analyst review dashboard
- Suspicious record detection
- Approval workflow
- Source-of-truth tracking
- Multi-tenant data model
- REST API backend
- React frontend

---

# Supported Sources

## SAP
- Fuel data
- Procurement data

## Utility
- Electricity usage exports

## Corporate Travel
- Travel activity exports

---

# Tech Stack

Frontend:
- React
- Vite
- Axios

Backend:
- Django
- Django REST Framework

Deployment:
- Render
- Vercel

---

# Local Setup

## Backend

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

python manage.py migrate

python manage.py runserver
Frontend
cd frontend

npm install

npm run dev
API Endpoints
Upload CSV

POST

/api/upload/
Get Records

GET

/api/records/
Approve Record

POST

/api/approve/<id>/
Sample CSV
category,scope,activity_date,description,quantity,unit
Fuel,Scope 1,2026-05-01,Diesel consumption for Plant A,1200,liters
Fuel,Scope 1,2026-05-02,Petrol usage for generators,500,liters
Procurement,Scope 3,2026-05-03,Steel procurement,2500,kg
Fuel,Scope 1,2026-05-04,Suspicious fuel entry,-100,liters
Notes

This project was intentionally designed as a realistic 4-day prototype prioritizing:

ingestion workflow
normalization
audit traceability
analyst review flow

over enterprise-scale production infrastructure.
