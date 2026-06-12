from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import asyncio

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PromptRequest(BaseModel):
    prompt: str

@app.post("/generate")
async def generate(request: PromptRequest):

    # simulate AI latency
    await asyncio.sleep(2)

    return {
        "response": (
            f"Demo response: I received '{request.prompt}'. "
            "This backend simulates an LLM API for portfolio demonstration purposes. "
            "Refer to the README for running a real local LLM version."
        )
    }

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(
        app,
        host="0.0.0.0",
        port=8000,
        reload=False
    )