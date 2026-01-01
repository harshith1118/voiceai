# 🎤 VoiceResolve — AI-Powered Civic Issue Assistant

VoiceResolve is a voice-driven civic issue reporting assistant that allows citizens to speak naturally to report problems such as water leakage, garbage collection delays, or infrastructure issues.

The system combines a modern **Next.js Frontend**, **ElevenLabs conversational voice agents**, and a **Google Cloud Vertex AI (Gemini) backend** to analyze issues, assess urgency, and recommend immediate actions — all through speech.

This project was built for the ElevenLabs Challenge.

---

## 🚀 Live Project

- **Frontend (Voice Interface):** [Deployed on Vercel]
- **Backend API (Google Cloud Run):** `https://voiceresolve-api-702123324614.us-central1.run.app`

---

## 🧠 How It Works (Architecture)

1.  **User Visits Web App:** A Next.js application hosting the ElevenLabs Conversational Widget.
2.  **Voice Input:** User speaks a civic issue to the agent.
3.  **ElevenLabs Agent:** Handles Speech-to-Text (ASR) and conversational flow.
4.  **Backend Processing:**
    *   Agent sends data to the **FastAPI Backend**.
    *   Backend sends a prompt to **Gemini 2.5 Flash (Vertex AI)**.
    *   Gemini generates a structured response: **Issue Summary**, **Urgency**, and **Action**.
5.  **Response:** The agent speaks the Gemini-generated advice back to the user via TTS.

---

## 🛠️ Tech Stack

### **Frontend**
-   **Framework:** Next.js 14 (App Router)
-   **Styling:** Tailwind CSS
-   **Integration:** ElevenLabs Conversational AI Widget
-   **Deployment:** Vercel

### **Backend**
-   **Language:** Python
-   **Framework:** FastAPI
-   **AI Model:** Google Vertex AI (Gemini 2.5 Flash)
-   **Deployment:** Google Cloud Run (Serverless)

### **Voice & AI**
-   **ElevenLabs:** Conversational Agent, TTS, ASR.
-   **Google Cloud:** Vertex AI Platform.

---

## 📂 Repository Structure

```
myvoice/
├── voice-resolve-frontend/  # Next.js Web Application
│   ├── app/                # App Router Pages
│   ├── components/         # UI Components (ElevenLabs Widget)
│   └── public/             # Static Assets
│
├── voice_ai/               # FastAPI Backend Service
│   ├── app.py              # Main Application Logic
│   ├── requirements.txt    # Python Dependencies
│   └── Dockerfile.txt      # Docker Configuration
│
└── README.md               # Project Documentation
```

---

## 🏁 Getting Started

### 1. Backend Setup (`voice_ai`)

Navigate to the backend directory:
```bash
cd voice_ai
```

Install dependencies:
```bash
pip install -r requirements.txt
```

Run the server locally:
```bash
uvicorn app:app --reload
```
*Note: Requires Google Cloud Credentials configured for Vertex AI.*

### 2. Frontend Setup (`voice-resolve-frontend`)

Navigate to the frontend directory:
```bash
cd voice-resolve-frontend
```

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## ▶️ API Usage (Backend)

**Endpoint:** `POST /analyze`

**Request:**
```json
{
  "message": "There is a water leakage near a government school."
}
```

**Response:**
```json
{
  "response": "**Summary:** Water leakage near a government school...\n\n**Urgency:** High\n\n**Immediate Action:** Dispatch public works team immediately."
}
```

---

## 🧪 Demo Video

📺 Demo Video (3 minutes):
(YouTube / Vimeo link to be added before final submission)

---

## 🧩 Challenge Compliance

✅ Uses ElevenLabs Agents
✅ Uses Google Cloud Vertex AI (Gemini)
✅ Fully voice-driven interaction
✅ Hosted on Google Cloud (Backend) & Vercel (Frontend)
✅ Public, open-source repository
✅ MIT Licensed

---

## 👤 Author

**Harshith**
Solo Participant — Built end-to-end

---

## 📜 License (MIT)

MIT License

Copyright (c) 2025 Harshith

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.