import React, { useState, useRef } from 'react';

import Message from './Message2';
import { selectPicture } from '../../redux/modules/pic';

import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// components
function ButtonUpload({ content, className }) {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const fileInput = useRef<HTMLInputElement>(null);

  // local state
  const [messageVisible, setMessageVisible] = useState(false);

  // methods
  const handleImageUpload = (e) => { 
    const picURL = URL.createObjectURL(e.target.files[0]);
    dispatch(selectPicture(''));
    dispatch(selectPicture(picURL));
    history.push('/');
  };

  const onClickButton = e => {
    if (location.pathname === '/edit') {
      setMessageVisible(true);
    } else {
      fileInput.current?.click();
    }
  }
  
  // message
  const text = <>진행사항은 저장되지 않습니다. <br/> 새 사진을 수정하시겠습니까?</>;
  const cancel = () => setMessageVisible(false);
  const confirm = () => {
    fileInput.current?.click();
    setMessageVisible(false);
  };
  
  return (
    <>
        <div onClick={onClickButton} className={className}>
          { content }
          <input 
            ref={fileInput}
            className="input-file"
            onChange={handleImageUpload}
            style={{ display:"none" }}
            type="file" accept="image/*" />
        </div>
        { messageVisible && <Message confirm={confirm} cancel={cancel} text={text} /> }
    </>
  )
}

export default ButtonUpload;