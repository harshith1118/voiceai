# 🎤 VoiceResolve — AI-Powered Civic Issue Assistant

VoiceResolve is a voice-driven civic issue reporting assistant that allows citizens to speak naturally to report problems such as water leakage, garbage collection delays, or infrastructure issues.

The system combines ElevenLabs conversational voice agents with Google Cloud Vertex AI (Gemini) to analyze issues, assess urgency, and recommend immediate actions — all through speech.

This project was built for the ElevenLabs Challenge.

---

🚀 Live Project URL

👉 Hosted API (Google Cloud Run):
https://voiceresolve-api-702123324614.us-central1.run.app

👉 ElevenLabs Voice Agent (Conversational Interface):
Accessible via ElevenLabs Agent Widget / Voice Interface

---

🧠 How It Works (Architecture)

1. **User speaks a civic issue** (voice input)
2. **ElevenLabs Agent handles**:
    - Speech-to-text (ASR)
    - Conversational flow
3. **Backend API** (FastAPI on Google Cloud Run):
    - Receives issue text
    - Sends prompt to Gemini (Vertex AI)
    - Generates structured response:
        - Issue summary
        - Urgency (High / Medium / Low)
        - Immediate action
4. **ElevenLabs TTS** speaks the response back to the user

✅ Entire interaction is voice-first and conversational, satisfying challenge rules.

---

🛠️ Tech Stack

-   **ElevenLabs**
    -   Conversational AI Agent
    -   Text-to-Speech (TTS)
    -   Speech-to-Text (ASR)
-   **Google Cloud**
    -   Vertex AI (Gemini 2.5 Flash)
    -   Cloud Run (serverless backend hosting)
-   **Backend**
    -   Python
    -   FastAPI
    -   Google Cloud AI Platform SDK

---

📂 Repository Structure
```
voice-resolve-backend/
├── app.py              # FastAPI backend
├── requirements.txt    # Python dependencies
├── README.md           # Project documentation
├── LICENSE             # MIT License
```

---

▶️ API Usage Example

**POST** `/analyze`

Request:
```json
{
  "message": "There is a water leakage near a government school."
}
```

Response:
```json
{
  "response": "**Summary:** Water leakage near a government school...\n\n**Urgency:** High\n\n**Immediate Action:** Dispatch public works team immediately."
}
```

---

🧪 Demo Video

📺 Demo Video (3 minutes):
(YouTube / Vimeo link to be added before final submission)

---

🧩 Challenge Compliance

✅ Uses ElevenLabs Agents
✅ Uses Google Cloud Vertex AI (Gemini)
✅ Fully voice-driven interaction
✅ Hosted on Google Cloud
✅ Public, open-source repository
✅ MIT Licensed

---

👤 Author

Harshith
Solo Participant — Built end-to-end

---

📜 License (MIT)
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
