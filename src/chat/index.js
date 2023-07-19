import './style.css'
import React, { Fragment } from 'react'
import { useManageChat } from './common';
import ChatContent from './chatContent';
import UserText from './userText';
import DefaultText from './defaultText';

export default function ChatPanel() {  
    const { userText, animation, showDefault, isLoading, chatList, copyResponse, handleOutgoingChat, inputKeyChangeHandler, chatInputHandler, themeChangeHandler, deleteHandler } = useManageChat(); 
    return (
      <div>
    <div className="chat-container">
        {showDefault ? <DefaultText /> :
        chatList.map((data, index) =>
        <Fragment>
        <UserText userText={data.user} />
        {animation ? <ChatContent copyResponse={copyResponse} isLoading={isLoading} aichat={data.ai} /> : null}
        </Fragment>)}
    </div>
    <div className="typing-container">
      <div className="typing-content">
        <div className="typing-textarea">
          <textarea id="chat-input" rows="1" value={userText} spellCheck="false" placeholder="Send a message" required
          onChange={chatInputHandler}
          onKeyDown={inputKeyChangeHandler}
          ></textarea>
          <span id="send-btn" className="material-symbols-rounded" onClick={handleOutgoingChat}>send</span>
        </div>
        <div className="typing-controls">
          <span id="theme-btn" className="material-symbols-rounded" onClick={themeChangeHandler}>light_mode</span>
          <span id="delete-btn" className="material-symbols-rounded" onClick={deleteHandler}>delete</span>
      </div>
      </div>
    </div>
    </div>
    )
  }
