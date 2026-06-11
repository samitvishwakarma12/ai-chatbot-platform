import { useState } from "react";
import "./component-styles/PromptBox.css";
import handlePrompt from "./hooks/handlePrompt";


function PromptBox({ setMessages, setLoading }){

  async function handlePromptSubmit(){
    try{
      setLoading(true);
      await handlePrompt(prompt, setPrompt, setMessages);
    }
    finally{
      setLoading(false);
    }
  }


  const [prompt, setPrompt] = useState("");

  return (
    <div className="prompt-box">
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="  Your prompt goes here..."
      />

      <button onClick={async () => handlePromptSubmit()}>
        Send
      </button>
    </div>
  );
}



export default PromptBox;