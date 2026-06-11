import { useState } from "react";
import PromptBox from "./chat/PromptBox";
import MessageBox from "./chat/MessageBox";
import NavBar from "./chat/NavBar";
import "./App.css";
import updateMessages from "./chat/hooks/updateMessages";



function App(){
  const [loading, setLoading] = useState();
  const [messages, setMessages] = useState([]);

  return (
    <div className="app">
      <NavBar/>
      <hr></hr>
      <MessageBox messages={messages} loading={loading} />
      <PromptBox setMessages={setMessages} setLoading={setLoading} />
    </div>
  );
}



export default App;