import { useState } from "react";

function App() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);

  async function sendPrompt() {
    console.log("clicked");

    try {
      const res = await fetch("http://127.0.0.1:8000/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          prompt
        })
      });

      console.log("status:", res.status);

      const data = await res.json();

      console.log("data:", data);

      setMessages(prev => [
        ...prev,
        { role: "user", text: prompt },
        { role: "assistant", text: data.response }
      ]);

      setPrompt("");
    }
    catch (err) {
      console.error("fetch failed:", err);
    }
  }

  return (
    <>
      {messages.map((msg, index) => (
        <p key={index}>
          <strong>{msg.role}:</strong> {msg.text}
        </p>
      ))}

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button onClick={sendPrompt}>
        Send
      </button>
    </>
  );
}

export default App;