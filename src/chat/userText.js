import React from "react";

export default function UserText({ userText }) {
  return (
    <div className='chat outgoing'>
    <div className="chat-content">
      <div className="chat-details">
        <img
          src="https://pluspng.com/img-png/user-png-icon-download-icons-logos-emojis-users-2240.png"
          alt="user-img"
        />
        <p>{userText}</p>
      </div>
    </div>
    </div>
  );
}
