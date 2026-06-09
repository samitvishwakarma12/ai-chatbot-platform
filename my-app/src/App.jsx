import { useState } from "react";
import PromptBox from "./components/PromptBox";
import MessageBox from "./components/MessageBox";

function App() {
  const [messages, setMessages] = useState([]);

  return (
    <>
      <PromptBox
        messages={messages}
        setMessages={setMessages}
      />
      <MessageBox messages={messages} />
    </>
  );
}

export default App;