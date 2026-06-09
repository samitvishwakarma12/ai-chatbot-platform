function MessageBox({ messages }) {
  return (
    <>
      {messages.map((msg, index) => (
        <p key={index}>
          <strong>{msg.role}:</strong> {msg.text}
        </p>
      ))}
    </>
  );
}

export default MessageBox;