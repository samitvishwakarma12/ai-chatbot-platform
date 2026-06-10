import { useState } from "react";
import "./PromptBox.css"

function PromptBox({ setMessages }) {
  const [prompt, setPrompt] = useState("");

  async function sendPrompt() {
    try {
      const currentPrompt = prompt


      setMessages((prev) => [
        ...prev,
        { role: "user", text: currentPrompt }
      
      ])

      setPrompt("");

      const res = await fetch("http://127.0.0.1:8000/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ "prompt": currentPrompt }),
      });

      

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: data.response }
      ])
    } 
    
    catch (err) {
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