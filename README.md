# Garvis Command Center - Governance PoC

This repository houses the Garvis command center, providing the user interface and orchestration layer for the Garvis Governance PoC. It integrates with a separate backend service (`garvis42`) that handles core governance logic.

## Overview
The Garvis Governance PoC aims to provide an auditable, truth-focused AI governance platform. This repository contains the Next.js-based frontend application, which interacts with a FastAPI backend.

## Key Features
- **Intuitive Onboarding**: Guides users through initial setup.
- **AKB Management**: Create and manage Authoritative Knowledge Bundles.
- **Governance Demo**: Showcase policy evaluation and AI-driven document generation with provenance.
- **Dual LLM Support**: Toggle between OpenAI-like and LocalMock AI adapters.
- **Auditable AI**: Outputs include provenance, confidence scores, and explanations.
- **Cross-AKB Access Control (CAC)**: Basic policy enforcement for data isolation.

## Getting Started (Local Development)

### Prerequisites
- Docker and Docker Compose
- Python (v3.11+ recommended) for the backend

### 1. Clone Repositories
You need both the backend and frontend repositories.

```bash
# Clone the main frontend repo
git clone <URL_to_garvis-command-center>
cd garvis-command-center
# You might need to clone garvis42 separately if it's a different repo
# git clone <URL_to_garvis42>
# cd garvis42 # You'll work inside this repo for backend setup
```

### 2. Backend Setup (garvis42)

Navigate to the backend directory and set up the environment.

```bash
# Assuming you are in the garvis42 directory
cd ../garvis42 # Or navigate to wherever garvis42 is located relative to command-center
# --- Basic Python Backend Setup ---
python -m venv venv
source venv/bin/activate # On Windows: venv\Scripts\activate
pip install -r backend/requirements.txt

# --- Basic Backend Run (No Docker) ---
# If you want to run backend without docker:
# uvicorn backend.main:app --reload --port 8000
```

### 3. Configure Docker Compose

Ensure your docker-compose.yml has the correct paths and environment variables.

```yaml
# garvis-command-center/docker-compose.yml
version: '3.8'

services:
  backend:
    build:
      context: ../garvis42 # Assumes garvis42 is a sibling directory
      dockerfile: backend/Dockerfile
    ports:
      - "8000:80"
    environment:
      NEXT_PUBLIC_BACKEND_URL: http://backend:8000/governance # For frontend to reach backend
      PERSISTENCE_DB_PATH: /app/garvis_governance.db # SQLite file location inside container

  frontend:
    build:
      context: . # Path to garvis-command-center repo
      dockerfile: frontend/Dockerfile
    ports:
      - "3000:3000"
    environment:
      NEXT_PUBLIC_BACKEND_URL: http://backend:8000/governance # Frontend connects to backend via service name
    depends_on:
      - backend
    volumes:
      - ./frontend:/app/frontend # Mount local code for hot-reloading (during development)
      - ./frontend/node_modules:/app/frontend/node_modules

<<<<<<< HEAD
# Add your backend/Dockerfile here as well if separate. Example:
# backend/Dockerfile
# FROM python:3.11-slim
# WORKDIR /app
# COPY backend/requirements.txt .
# RUN pip install --no-cache-dir -r requirements.txt
# COPY backend/ .
# EXPOSE 8000
# CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--proxy-headers"]
```

Make sure a backend/Dockerfile exists in your garvis42 repo.

### 4. Run with Docker Compose

Navigate to the garvis-command-center directory and start the services.

```bash
cd garvis-command-center
docker compose up --build
```

This will build the images and start both the backend and frontend services. The application will be accessible at http://localhost:3000.

Demo Walkthrough (10-15 mins)

Follow this short script to demonstrate the Garvis PoC:

1. Start Local Demo: Ensure Docker Compose is running (docker compose up --build).
2. Open UI: Navigate to http://localhost:3000 in your browser.
3. Onboarding (Optional): Briefly mention the optional onboarding steps if they are implemented beyond the intro page.
4. AKB Creation:
    - On the /demo page, enter an AKB Name (e.g., "MarketingPlanGen") and Owner (e.g., "MarOpsTeam").
    - Click "Create AKB". Observe the success message.
5. LLM Adapter Selection:
    - Note the adapter selection dropdown. Show that you can choose between "OpenAI-like LLM" and "Mock LLM".
    - Click "Set Adapter". (For the demo, it highlights flexibility, but for consistent results, you might explain you'll use default or a specific one).
6. Run Governance Demo:
    - With an AKB created, click the "Run Demo: Evaluate & Generate Document" button.
    - Observe the "pending approval" state if applicable or direct generation.
7. Review Results:
    - See the generated document content.
    - Crucially, point out the Explainability section: show the sources cited (e.g., AKB ID, AI adapter names) and the confidence score.
8. Inspect Audit Trail:
    - Mention that all actions (AKB creation, evaluation, doc generation) are logged immutably.
    - (Optional UI addition): Add a button to view/fetch audit logs. For now, mention it's available via POST /governance/audit/export?format=json.
9. Provenance & Truthfulness:
    - Emphasize how the generated content is not a black box; it's linked to data sources, policy decisions (CAC checks implicitly), and AI confidence.
10. CAC Showcase (Conceptual):
    - Mention that if this AKB tried to access data from another AKB it's not linked to, the CAC policy would block it, and this would be logged in the audit trail. (Demonstrating this would require a more complex setup).

Deploying to Vercel (Frontend Only)

1. Build Frontend:
  ```bash
    cd garvis-command-center/frontend
    npm ci # or yarn install
    npm run build # or yarn build
  ```
2. Vercel Deployment:
    - Deploy the garvis-command-center repo to Vercel.
    - Configure Vercel's build settings:
          - Build Command: npm run build (or yarn build)
          - Output Directory: .next
    - Set Environment Variables in Vercel:
          - NEXT_PUBLIC_BACKEND_URL: This MUST point to your deployed backend API (e.g., https://your-backend-api.com/governance). For local testing on Vercel, you can use Vercel's preview URLs or a tunnel.
          - NODE_ENV: production
          - PORT: 3000 (or Vercel's recommended port)

Backend Deployment

For the backend, you can containerize it using the provided backend/Dockerfile and deploy it as an API service (e.g., on AWS Lambda, Google Cloud Run, or a traditional server). You'll need to manage its environment variables (like API keys, persistence DB connection strings).
=======

# Merge History

Merged useful parts from gogarvis-assistant (older Lovable starter with Supabase + AKB fetch wiring) into this primary Garvis dashboard.
Kept command-center as canonical for AKB moat, onboarding quests, operator registry.
Added: Supabase hooks, FastAPI backend URL env support, additional AKB and onboarding components/hooks.
>>>>>>> 4cc3439 (Merge gogarvis-assistant: add Supabase hooks, AKB, onboarding, FastAPI support, and unify Garvis frontend)
