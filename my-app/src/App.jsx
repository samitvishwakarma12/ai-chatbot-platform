import { useState } from "react";
import PromptBox from "./chat/PromptBox";
import MessageBox from "./chat/MessageBox";
import NavBar from "./chat/NavBar";
import "./App.css"
import updateMessages from "./chat/hooks/updateMessages";



function App(){



  const [messages, setMessages] = useState([]);

  return (
    <div className="app">
      <NavBar/>
      <hr></hr>
      <MessageBox messages={messages} />
      <PromptBox setMessages={setMessages} />
    </div>
  );
}



export default App;