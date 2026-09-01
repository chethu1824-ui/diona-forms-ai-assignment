# Diona – Forms & AI Intern Assignment

## Overview

This repository contains my submission for the Diona Forms & AI Intern
assignment.

The assignment consists of two exercises that recreate the provided
Workers Compensation Board of Manitoba documents using:

- HTML
- CSS
- JavaScript

The implementation focuses on reproducing the document structure and
layout while keeping the data dynamic.

---

# Exercises

## Exercise 1 – Medical & Travel Expense Request

Exercise 1 recreates the Medical & Travel Expense Request document.

The implementation includes:

- Workers Compensation Board of Manitoba logo
- Header and contact information
- Claim number
- Worker name
- Prescription Drugs section
- Over-the-Counter Drugs section
- Bandages, Braces or Other Medical Supplies section
- Parking for Medical Appointments section
- Mileage to Medical Appointments section
- Bus or Taxi Fare section
- Privacy confirmation
- Worker App ID
- Submitted date and time
- Page numbers
- A4 page layout
- Print / Save PDF functionality

### Dynamic Data

The application contains two test datasets:

1. Reference data
2. Multiple records

The Reference data represents the sample information from the provided
document.

The Multiple records dataset contains additional records to demonstrate
that the tables are generated dynamically.

Changing the dataset and selecting **Render document** updates the document
without manually changing the HTML.

---

## Exercise 2 – Worker Progress Report

Exercise 2 recreates the Worker Progress Report document.

The implementation includes:

- Workers Compensation Board of Manitoba logo
- Header and contact information
- Claim number
- Report date
- Recovery information
- Return-to-work information
- Return-to-work date
- Duties / hours
- Expected return-to-work date
- Concerns about returning to work
- Employer contact information
- Recovery information
- Pain / discomfort scale
- Medical treatment information
- Healthcare provider information
- Treatment frequency
- Chiropractor / Physiotherapist information
- Home exercises
- Other information
- Medication information
- Next medical treatment date
- Certification
- Privacy confirmation
- Worker App ID
- Submitted date and time
- Page numbers
- A4 page layout
- Print / Save PDF functionality

### Dynamic Data

The report information is stored separately from the HTML structure and is
inserted into the document using JavaScript.

This allows the document to be rendered from different datasets without
manually modifying the HTML.

---

# Technologies Used

## HTML

HTML is used to create the document structure and content sections.

## CSS

CSS is used for:

- A4 page dimensions
- Document spacing
- Typography
- Tables
- Header and footer
- Page layout
- Checkboxes
- Page breaks
- Print-specific formatting

## JavaScript

JavaScript is used for:

- Storing document data
- Managing test datasets
- Rendering dynamic content
- Generating table rows
- Generating headers and footers
- Switching between datasets
- Rendering the document
- Triggering browser print functionality

---

# Project Structure

```text
Diona-Assignment/
│
├── Exercise-1/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── assets/
│       └── wcb-logo.jpg
│
├── Exercise-2/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── assets/
│       └── wcb-logo.jpg
│
├── videos/
│   ├── exercise-1-demo.mp4
│   └── exercise-2-demo.mp4
│
├── AI-Prompt-History.md
└── README.md