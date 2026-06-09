import "./MessageBox.css"

function MessageBox({ messages }) {
  return (
    <div className="message-box">
      {messages.map((msg, index) => (
        <p
          key={index}
          className={msg.role === "user" ? "user-message" : "assistant-message"}
        >
          <strong>{msg.role}:</strong> {msg.text}
        </p>
      ))}
    </div>
  );
}

export default MessageBox;