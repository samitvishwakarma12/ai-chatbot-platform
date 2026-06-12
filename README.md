# AI Chatbot Platform — Demo Deployment (`demo-deployment`)

A deployable, mock-backend version of the AI Chatbot Platform, built for portfolio/demo purposes. The FastAPI backend simulates an LLM response — no Ollama, GPU, or API keys required — so the whole stack can run on free-tier hosting.

> This branch swaps the real local LLM call for a canned, latency-simulated response. For the version that talks to a real local LLM via Ollama, see the [`master`](../../tree/master) branch.

**Live demo:** https://ai-chatbot-platform-eta.vercel.app

## Architecture

```
React (Vite) UI  ─►  FastAPI backend (app.py)  ─►  simulated response
   (Vercel)             (0.0.0.0:8000)              (asyncio.sleep)
```

## Backend setup

```bash
pip install -r requirements.txt
python app.py
```

Starts the FastAPI server on `0.0.0.0:8000`, suitable for containers and hosted environments (Render, Railway, Fly.io, etc.).

| Method | Path        | Body                  | Response                                                                                                                    |
|--------|-------------|-----------------------|------------------------------------------------------------------------------------------------------------------------------|
| POST   | `/generate` | `{ "prompt": "..." }` | `{ "response": "Demo response: I received '<prompt>'. This backend simulates an LLM API for portfolio demonstration purposes. Refer to the README for running a real local LLM version." }` |

The endpoint waits ~2 seconds (`asyncio.sleep`) to simulate real LLM latency. CORS is open to all origins.

## Frontend setup

```bash
cd my-app
npm install
```

Create a `.env` file in `my-app/` pointing at your deployed backend URL (**include the trailing slash**, since it's concatenated directly with `generate`):

```
VITE_DEMO_CHATBOT_BACKEND=https://your-backend-host.example.com/
```

Run locally:

```bash
npm run dev
```

Build for deployment (e.g. Vercel):

```bash
npm run build
```

## Project structure

```
app.py              # FastAPI mock backend (simulated response)
requirements.txt    # Python dependencies
my-app/             # React + Vite frontend
└── src/
    ├── App.jsx
    └── chat/
        ├── NavBar.jsx
        ├── ChatEmptyState.jsx
        ├── MessageBox.jsx
        ├── PromptBox.jsx
        ├── LoadingAnimation.jsx
        └── hooks/
            ├── handlePrompt.jsx   # POSTs to ${VITE_DEMO_CHATBOT_BACKEND}generate
            └── updateMessages.jsx
```

## Tech stack

- **Frontend:** React 19, Vite, ESLint — deployed to Vercel
- **Backend:** FastAPI, Uvicorn, Pydantic — deployable to any Python-capable host

## Notes

- No external LLM service, GPU, or API keys needed — ideal for showcasing the UI/UX without infrastructure cost.
- CORS is wide open (`allow_origins=["*"]`); restrict to your frontend's domain in a real production deployment.