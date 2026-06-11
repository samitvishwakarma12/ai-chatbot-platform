import "./component-styles/MessageBox.css";
import LoadingAnimation from "./LoadingAnimation";



function MessageBox({ messages, loading }){



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
      {loading && (
        <div
          className="assistant-message">
            <strong>Assistant:</strong> <LoadingAnimation/>
        </div>
      )}


    </div>
  );
}



export default MessageBox;