import { useState } from "react";
import PromptBox from "./components/PromptBox";
import MessageBox from "./components/MessageBox";
import "./App.css"

function App() {
  const [messages, setMessages] = useState([]);

  return (
    <div className="app">
      <PromptBox
        messages={messages}
        setMessages={setMessages}
      />
      <MessageBox messages={messages} />
    </div>
  );
}

export default App;