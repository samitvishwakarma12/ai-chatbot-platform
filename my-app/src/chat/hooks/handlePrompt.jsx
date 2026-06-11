import { useState } from "react";
import updateMessages from "./updateMessages";



async function handlePrompt(prompt, setPrompt, setMessages){

    updateMessages(setMessages, "user", prompt);

    setPrompt("");

    const data = await sendPrompt(prompt);

    updateMessages(
        setMessages,
        "assistant",
        data.response
    ); 
}



async function sendPrompt(prompt){



    try {

      const response = await fetch("http://127.0.0.1:8000/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      

      const data = await response.json();
      return data
    } 
    


    catch (err) {
      console.error("fetch failed:", err);
    }


}



export default handlePrompt;