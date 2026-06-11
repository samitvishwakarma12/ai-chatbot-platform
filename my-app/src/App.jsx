import { useState } from "react";
import PromptBox from "./chat/PromptBox";
import MessageBox from "./chat/MessageBox";
import NavBar from "./chat/NavBar";
import "./App.css";
import updateMessages from "./chat/hooks/updateMessages";
import ChatEmptyState from "./chat/ChatEmptyState";



function App(){
  const [emptyChatState, setEmptyChatState] = useState(true)
  const [loading, setLoading] = useState();
  const [messages, setMessages] = useState([]);

  return (
    <div className="app">
      <NavBar/>
      <hr></hr>
      {emptyChatState ? <ChatEmptyState/> : <MessageBox messages={messages} loading={loading} />}
      <PromptBox setMessages={setMessages} setLoading={setLoading} setEmptyChatState={setEmptyChatState} />
    </div>
  );
}



export default App;