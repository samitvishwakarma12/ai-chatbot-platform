import { useState } from "react";
import PromptBox from "./chat/PromptBox";
import MessageBox from "./chat/MessageBox";
import NavBar from "./chat/NavBar";
import "./App.css"

function App() {
  const [messages, setMessages] = useState([]);

  return (
    <div className="app">
      <NavBar/>
      <hr></hr>
      <PromptBox
        setMessages={setMessages}
      />
      <MessageBox messages={messages} />
    </div>
  );
}

export default App;