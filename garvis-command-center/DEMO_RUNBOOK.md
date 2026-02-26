# GARVIS PoC Demo Runbook (Groq-first)

Overview
- Tech: Frontend Next.js (TypeScript) on Vercel; Backend Python FastAPI on local/dev container
- Flow: AKB creation -> Groq adapter selection -> Run Demo -> Show provenance & audit
- Time: ~15 minutes

Prereqs
- GROQ_API_KEY in CI/Env (or test key)
- Local backend running (or CI environment)
- Frontend deployed to Vercel (or local dev)

Steps
- Step 0: Start Local Demo (optional)
    - Run backend locally (uvicorn garvis42.backend.main:app --reload --port 8000)
    - Start frontend (npm run dev) and browse to http://localhost:3000
- Step 1: AKB Creation
    - In the UI, enter AKB Name (e.g., MarketingPlanGen) and Owner
    - Create AKB
- Step 2: Groq Adapter
    - Open adapter dropdown, choose Groq
    - Enter GROQ_API_KEY in the UI (under adapter settings)
- Step 3: Run Demo
    - Click Run Demo: Evaluate & Generate Document
- Step 4: Review Output
    - Inspect content, explainability, and provenance lines
- Step 5: Audit Export
    - Export audit to JSON/CSV
- Step 6: Cleanup
    - Stop services, collect logs

Notes
- The UI supports light/dark mode; ensure the theme toggle is visible and working.
- Pro tip: Run the same demo against multiple AKBs to show data isolation.

Appendix: Troubleshooting
- If the Groq API key is invalid or missing, ensure the UI shows an explicit error and the backend returns a clear message.
