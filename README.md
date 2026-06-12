# AI Chatbot Platform — Local LLM Edition (`master`)

A minimal full-stack chatbot: a React (Vite) chat UI talking to a FastAPI backend that proxies prompts to a locally running [Ollama](https://ollama.com) instance using the `llama3` model.

> This branch runs **entirely on your machine** against a local LLM. For a deployable mock backend with no LLM dependency, see the [`demo-deployment`](../../tree/demo-deployment) branch.

## Architecture

```
React (Vite) UI  ─►  FastAPI backend (app.py)  ─►  Ollama (llama3)
   :5173                   :8000                      :11434
```

## Prerequisites

- Node.js 18+ and npm
- Python 3.10+
- [Ollama](https://ollama.com) installed locally, with the `llama3` model pulled and the server running:

```bash
ollama pull llama3
ollama serve
```

## Backend setup

```bash
pip install -r requirements.txt
python app.py
```

Starts the FastAPI server at `http://127.0.0.1:8000`, exposing a single endpoint:

| Method | Path        | Body                  | Response                |
|--------|-------------|-----------------------|--------------------------|
| POST   | `/generate` | `{ "prompt": "..." }` | `{ "response": "..." }`  |

**Important — Ollama host IP:** `app.py` calls Ollama at `http://172.20.192.1:11434/api/generate`. This is the default WSL2-to-Windows-host gateway IP, used when Ollama runs on Windows while the FastAPI server runs inside WSL/Linux. If Ollama and the backend run on the same OS, change this URL to `http://127.0.0.1:11434/api/generate`.

## Frontend setup

```bash
cd my-app
npm install
npm run dev
```

Opens the chat UI at `http://localhost:5173`. Prompts are sent to the backend at the hardcoded URL `http://127.0.0.1:8000/generate`.

## Project structure

```
app.py              # FastAPI backend → Ollama proxy
requirements.txt    # Python dependencies
script.js           # Standalone vanilla JS prototype (legacy, not used by the React app)
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
            ├── handlePrompt.jsx   # POSTs to http://127.0.0.1:8000/generate
            └── updateMessages.jsx
```

## Tech stack

- **Frontend:** React 19, Vite, ESLint
- **Backend:** FastAPI, Uvicorn, Requests, Pydantic
- **LLM runtime:** Ollama (`llama3`)

## Notes

- CORS is fully open (`allow_origins=["*"]`) for local development — restrict this before exposing the backend beyond localhost.
- `script.js` is a leftover minimal test client (expects `#prompt`, `#response`, `#submit-prompt-btn` elements) and is not wired into the React build.