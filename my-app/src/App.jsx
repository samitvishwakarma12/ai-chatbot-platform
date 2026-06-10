import { useState } from "react";
import PromptBox from "./components/PromptBox";
import MessageBox from "./components/MessageBox";
import NavBar from "./components/NavBar";
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