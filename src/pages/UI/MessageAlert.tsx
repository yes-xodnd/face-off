import React from 'react';

function MessageAlert({ state, methods }) {
  const { isVisible, title, text } = state;
  const { close } = methods;

  return (
    <>
      { isVisible &&
      <div className="overlay">
        <div className="msg-card">
          <div className="msg-card-header">{ title }</div>
          <div className="msg-card-text">{ text }</div>
          <div className="msg-card-footer">
            <div onClick={close} className="base-btn">확인</div>
          </div>
        </div>
      </div>
      }
    </>
  );
}

export default MessageAlert;