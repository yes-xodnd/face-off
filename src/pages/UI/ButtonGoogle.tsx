import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

import logoImage from '../../assets/img/icon/google.png';
import logoutImage from '../../assets/img/icon/logout3.png';

const clientId = '237475771915-u5sqqo0e7lhvtf296fckun9g2cdrpia7.apps.googleusercontent.com';

export function ButtonLoginGoogle({ onSocialLoginSuccess }) {
  const onSuccess = (res) => {
    onSocialLoginSuccess(res.profileObj.email, 'google');
  };
  const onFailure = (error) => {
    alert('오류가 발생했습니다. 다시 시도해주세요.');
  };

  return (
    <GoogleLogin
      clientId={clientId}
      render={renderProps => (
        <div title="구글 로그인" className="base-btn-icon" onClick={renderProps.onClick}>
          <img className="menu-logo-img" src={logoImage} alt=""/>
        </div>
      )}
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
    />
  )
}

export function ButtonLogoutGoogle({ onLogout }) {

  return (
      <GoogleLogout
        clientId={clientId}
        render={renderProps => (
          <div
            onClick={renderProps.onClick} 
            className="base-btn-icon">
            <img className="menu-logo-img" src={logoutImage} alt=""/>
          </div>
        )}
        buttonText="Logout"
        onLogoutSuccess={() => onLogout()} />
  )
}
