import "./component-styles/ChatEmptyState.css"



function ChatEmptyState(){

    return (
        <div className="chat-empty-state">
            <h2>Your Personal AI Assistant</h2>
            <p>What can I help you with today?</p>
            <p>Ask questions, brainstorm ideas, analyze documents, or get help solving problems.</p>
            <h3>Suggested Prompts</h3>
            <ul>
                <li><button className="suggested-prompt">💡 Help me plan a new project</button></li>
                <li><button className="suggested-prompt">📝 Review this piece of writing</button></li>
                <li><button className="suggested-prompt">🔍 Research a topic for me</button></li>
                <li><button className="suggested-prompt">🚀 Generate startup ideas</button></li>
                <li><button className="suggested-prompt">📊 Analyze some data</button></li>
            </ul>
        </div>
    )
}



export default ChatEmptyState;