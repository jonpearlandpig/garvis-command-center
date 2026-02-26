# GARVIS PoC Final Runbook

Overview
- Tech: Next.js frontend (Vercel), FastAPI backend (local/dev)
- Flow: AKB creation -> Groq adapter -> Demo -> Provenance/Audit
- Time: 10-15 minutes

Steps
1. Start backend: `uvicorn garvis42.backend.main:app --reload --port 8000`
2. Start frontend: `npm run dev` (in frontend dir)
3. Create AKB in UI
4. Select Groq adapter, enter API key
5. Run demo, review output
6. Export audit
7. Cleanup
