import React from 'react'
import aiLogo from './ai.png'

export default function ChatContent({ copyResponse, isLoading, aichat }) {
  return (
    <div className='chat incoming'>
    <div className="chat-content">
      <div className="chat-details">
        <img
          src={aiLogo}
          style={{borderRadius: "50%"}}
          alt="chatbot-img"
        />
        {isLoading && !aichat ? 
        <div className="typing-animation">
          <div className="typing-dot" style={{"--delay": "0.2s"}}></div>
          <div className="typing-dot" style={{"--delay": "0.3s"}}></div>
          <div className="typing-dot" style={{"--delay": "0.4s"}}></div>
        </div> :
        <p className={aichat && aichat.includes('Oops! Something went wrong') ? 'error' : ''}>{aichat}</p>}
      </div>
      <span
        onClick={(e) => copyResponse(e.target)}
        className="material-symbols-rounded"
      >
        content_copy
      </span>
    </div>
     </div>
    
  );
}
