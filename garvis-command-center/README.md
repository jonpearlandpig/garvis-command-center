# Garvis Command Center

Lightweight UI for Garvis governance PoC. Frontend (Next.js, TS) tied to a Python FastAPI backend running locally; ready for deployment to Vercel for the frontend.

## Highlights
- Groq-first LLM adapter support with runtime API key input
- Light/dark theming (orange accents)
- Onboarding + demo flow
- Simple audit/export
- CI hooks for PRs

## Prereqs
- Node.js 18+, npm
- Python 3.11+, pip
- GROQ_API_KEY in CI/Env
- Local backend running on http://localhost:8000/governance

## Local Run
- Frontend: `cd garvis-command-center/frontend; npm i; npm run dev`
- Backend: `cd garvis42; python -m venv venv; source venv/bin/activate; pip install -r backend/requirements.txt; uvicorn garvis42.backend.main:app --reload`
- Demo: Navigate to http://localhost:3000/demo

## Deployment to Vercel
- Connect repo garvis-command-center to Vercel
- Root Directory: frontend
- Build Command: npm run build
- Output Directory: .next
- Env vars: NEXT_PUBLIC_BACKEND_URL, GROQ_API_KEY (if you want to test Groq in prod)

## Patch-Format
- This repo patch uses file replacements (diff/patched blocks), same pattern as prior patches.
- Apply via `git apply patch-file.patch`
- Run smoke tests locally after patching

## Changelog
- Groq adapter added
- Runtime adapter key/modeled config in UI
- Light/dark theme with orange accents
- CI upgraded to multi-repo structure and fast fail
- Docs and runbook added

This patch set is designed to be drop-in; update any paths to match your repo structure if you’ve diverged.
