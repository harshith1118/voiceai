from fastapi import FastAPI
from pydantic import BaseModel
import os

import vertexai
from vertexai.generative_models import GenerativeModel

# ----------------------------------
# Initialize Vertex AI (Cloud Run safe)
# ----------------------------------
vertexai.init(
    project="gen-lang-client-0481212088",
    location="us-central1",
)

# Load Gemini model
gemini = GenerativeModel("gemini-2.5-flash")

app = FastAPI(title="VoiceResolve API")

# ----------------------------------
# Request model
# ----------------------------------
class IssueRequest(BaseModel):
    message: str

# ----------------------------------
# API Endpoint
# ----------------------------------
@app.post("/analyze")
def analyze_issue(request: IssueRequest):
    prompt = f"""
You are an AI government officer assistant.
Summarize the issue, assign urgency (High/Medium/Low),
and suggest one immediate action.

Issue:
{request.message}
"""

    response = gemini.generate_content(prompt)

    return {
        "response": response.text.strip()
    }
