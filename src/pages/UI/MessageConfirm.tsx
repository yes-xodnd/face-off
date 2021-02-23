import React from 'react';

function MessageConfirm({ onConfirm, onCancel, text }) {

  return (
    <div className="overlay">
      <div className="msg-card">
        <div className="msg-card-header">Warning</div>
        <div className="msg-card-text">{ text }</div>
        <div className="msg-card-footer">
          <div onClick={onCancel} className="base-btn">취소</div>
          <div onClick={onConfirm} className="base-btn">확인</div>
        </div>
      </div>
    </div>
  );
}

export default MessageConfirm;