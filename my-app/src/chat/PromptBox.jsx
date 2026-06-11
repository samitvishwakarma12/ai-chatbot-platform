import { useState } from "react";
import "./component-styles/PromptBox.css";
import handlePrompt from "./hooks/handlePrompt";


function PromptBox({ setMessages }){



  const [prompt, setPrompt] = useState("");

  return (
    <div className="prompt-box">
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="  Your prompt goes here..."
      />

      <button onClick={async () => handlePrompt(prompt, setPrompt, setMessages)}>
        Send
      </button>
    </div>
  );
}



export default PromptBox;