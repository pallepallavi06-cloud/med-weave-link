
Project URL : https://med-weave-link.lovable.app/

# Medicare-
Modern hospital management for better patient care
🏥 Hospital Management System (HMS)
A secure, scalable, role-based Hospital Management System designed to manage hospital operations efficiently while protecting sensitive medical data using HIPAA-like security practices.

Features Overview

User Roles

Admin

Doctor

Patient

Receptionist


Each role has role-based access control (RBAC).

Authentication & Security

JWT Authentication (Access & Refresh Tokens)

Role-Based Access Control (RBAC)

Password hashing using bcrypt

Input validation & sanitization

Protection against SQL Injection & XSS

Audit logs for sensitive actions

Environment variable–based secrets

HIPAA-like data privacy practices

Core Modules

Patient Management

Patient registration & profile

Medical history

Prescription records


Doctor Module

Doctor profiles & departments

Availability scheduling

Assigned patients


Appointment System

Book / reschedule / cancel appointments

Doctor availability check

Status tracking:

Pending

Confirmed

Completed

Medical Records

Diagnosis notes

Prescriptions

Lab reports (PDF upload/download)

Billing System

Invoice generation

Payment status tracking

Billing history per patient


Inventory Management

Medicine stock tracking

Low-stock alerts

Supplier records


Admin Dashboard

User management

Analytics & charts

Logs & reports



---
Frontend Tech Stack

React (Hooks)

Material UI / Tailwind CSS

Responsive design

Role-based dashboards

Charts & analytics

Form validation & error handling



---

 Backend Tech Stack

Node.js + Express

PostgreSQL

RESTful APIs

JWT Authentication

Modular architecture

Swagger (API Documentation)
