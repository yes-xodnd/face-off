import React, { useEffect, useState } from 'react';

// components
import MessageConfirm from './MessageConfirm';
import ButtonUpload from './ButtonUploadBase';
import { ButtonLoginGoogle, ButtonLogoutGoogle } from './ButtonGoogle';
import { ButtonLoginKakao, ButtonLogoutKakao } from './ButtonKakao';
import ButtonFriend from './ButtonFriend';

// images
import homeImage from '../../assets/img/icon/home.png';
import uploadImage from '../../assets/img/icon/new.jpg';

import { useHistory, useLocation } from 'react-router-dom';
import './Menubar.scss';


function Menubar({ state, methods }) {
  const history = useHistory();
  const location = useLocation();
  
  // props
  const { isAuthed, provider } = state;
  const { login, logout, onSocialLoginSuccess, deletePicURL } = methods;

  // local state
  const [showMsg2, setShowMsg2] = useState(false);

  // vars
  const messageText = <>진행사항은 저장되지 않습니다. <br/> 메인화면으로 이동하시겠습니까?</>;

  // useEffect(() => {
  //   isAuthed ? login() : logout(false);
  // });

  // methods
  const goToHome = () => { 
    deletePicURL(); history.push('/');
    setShowMsg2(false);
  };
  const cancel = () => {
    setShowMsg2(false);
  }

  // components
  const ButtonHome = () => {
    const onClickHome = () => {
      if (location.pathname === '/edit') {
        setShowMsg2(true);
      } else {
        goToHome();
      }
    }
    return (<div onClick={onClickHome} className="base-btn-icon">
      <img src={homeImage} alt=""/></div>)
  };

  const ButtonLogout = () => (
    provider === 'google'
    ? <ButtonLogoutGoogle onLogout={logout} />
    : <ButtonLogoutKakao onLogout={logout} />
  );
  
  return (
    <div className="menu-wrap">
      { showMsg2 && <MessageConfirm onConfirm={goToHome} onCancel={cancel} text={messageText}  />}
      
      <div className="divider"></div>
      <div className="menu">

        {/* main icons */}
        <div className="flex">
          <ButtonHome />
          <ButtonUpload 
            content={<img src={uploadImage} alt=""/>}
            className="base-btn-icon" />
        </div> 


        {/* auth & setting icons */}
        <div className="flex">
          { !isAuthed && 
            <>
              <ButtonLoginGoogle onSocialLoginSuccess={onSocialLoginSuccess} />
              <ButtonLoginKakao onSocialLoginSuccess={onSocialLoginSuccess} />
            </>
          }
          { isAuthed &&
            <>
              <ButtonLogout />
              <ButtonFriend />
            </>
          }
        </div>
      </div>

      <div className="divider"></div>
    </div>
  )
}

export default Menubar;