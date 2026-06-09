import { useState } from "react";
import "./PromptBox.css"

function PromptBox({ messages, setMessages }) {
  const [prompt, setPrompt] = useState("");

  async function sendPrompt() {
    try {
      const res = await fetch("http://127.0.0.1:8000/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { role: "user", text: prompt },
        { role: "assistant", text: data.response },
      ]);

      setPrompt("");
    } catch (err) {
      console.error("fetch failed:", err);
    }
  }

  return (
    <div className="prompt-box">
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button onClick={sendPrompt}>
        Send
      </button>
    </div>
  );
}

export default PromptBox;