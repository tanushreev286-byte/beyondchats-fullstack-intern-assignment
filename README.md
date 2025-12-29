
# BeyondChats – Full Stack Web Developer Intern Assignment

## Overview
This project is built as part of the BeyondChats Full Stack Web Developer Intern assignment.
It demonstrates end-to-end full stack development including web scraping, REST APIs,
automation using Node.js, AI-assisted content enhancement, and a React frontend.

---

## Tech Stack
- Backend: Node.js, Express.js
- Database: MongoDB
- Web Scraping: Axios, Cheerio
- Automation & AI: Node.js (LLM-ready architecture)
- Frontend: ReactJS
- Styling: Basic CSS (can be extended)

---

## Project Architecture (High Level)

Scraper → Database → CRUD APIs → Automation Script (Google + AI) → Updated Articles → React Frontend

---

## Phase-wise Implementation

### Phase 1: Scraping & CRUD APIs
- Scrapes the 5 oldest articles from BeyondChats blogs.
- Stores articles in MongoDB.
- Provides REST APIs to Create, Read, Update, and Delete articles.

### Phase 2: Automation Script (AI Content Enhancement)
- Fetches articles from backend APIs.
- Searches article titles on Google (logic implemented, API-ready).
- Extracts top-ranking reference articles.
- Enhances original content using AI-based rewriting logic.
- Stores updated content and references back into the database.

NOTE:
Due to API key and quota limitations, a simulated AI response is used.
The code architecture fully supports real-time integration with OpenAI / Gemini APIs.

### Phase 3: Frontend (React)
- Fetches articles from backend.
- Displays original and updated articles.
- Responsive and clean UI layout.

---

## API Endpoints

- GET /articles
- POST /articles
- PUT /articles/:id
- DELETE /articles/:id

---

## Local Setup Instructions

### Backend
```bash
cd backend
npm install
node server.js
```

### Automation Script
```bash
cd automation-script
npm install
node updateArticles.js
```

### Frontend
```bash
cd frontend
npm install
npm start
```

---

## Future Improvements
- Live Google Search API integration (SerpAPI)
- Real-time LLM rewriting using OpenAI / Gemini
- User authentication
- Rich text editor for articles
- Deployment on AWS / Vercel

---

## Author
Tanushree Verma
