# A-Bold-Code-Experience
This repository hosts the source code for my personal portfolio website, designed to showcase my resume experience, skills, projects, and academic journey as a Computer Technology student at Bowie State University.
# Live Portfolio

> (https://allenm0227.github.io/A-Bold-Code-Experiece/index.html)

## 🧭 Site Structure

The portfolio has five main sections:

- **Home** – Quick intro and overview.
- **About** – Education, competencies, and background.
- **Experience** – Roles such as AAAS Student Innovator, Resident Assistant, and Lifeguard.
- **Projects** – Highlighted work such as Echo Reads, Bulldog Scholars Academy, and CCF media.
- **Resume** – Viewable and downloadable PDF resume, with an embedded QR code for quick access.

There is also a **Contact** page with a simple contact form.

## 🤖 Chatbot

A simple, client-side chatbot is implemented in `script.js`. It:

- Opens as a floating chat bubble on every page.
- Answers FAQs about:
  - Skills and programming languages
  - Key projects (Echo Reads, Bulldog Scholars, CCF media)
  - Experience and roles
  - Availability for internships
- Uses rule-based matching on the user's message (no server required).

## 📱 QR Code

The QR code is generated via a public QR service and points to this repository:

- Displayed on the **Home** page.
- Displayed on the **Resume** page next to the embedded PDF.
- Intended to also be placed directly on the resume document before exporting to PDF.

## 🧩 Projects & GitHub

The **Projects** section links back to this repository and will be expanded with additional project-specific repositories over time.

Additional Repository For Data Science Research Group App (AAAS Showcase):
https://github.com/allenm0227/Echo-Reads-Research 

## 🛠 Tech Stack

- HTML5
- CSS3 (responsive design, card layout, gradients)
- Vanilla JavaScript (navigation highlighting, modal, chatbot, contact-form demo)

## ▶️ How to Run Locally

```bash
git clone https://github.com/allenm0227/A-Bold-Code-Experiece.git
cd A-Bold-Code-Experiece
# Option 1: open https://allenm0227.github.io/A-Bold-Code-Experiece/index.html directly in a browser
# Option 2: serve with Python
python -m http.server 8000
# then go to http://localhost:63342/CTEC450/index.html
