import React from "react";
import logoImage from '../../assets/img/icon/kakao.png';
import logoutImage from '../../assets/img/icon/logout3.png';

const Kakao = window['Kakao'];

try {
  Kakao.init('416a3da039b588e8fcd7e5de4a07e25f');
} catch (error) {}

export function ButtonLoginKakao({ onSocialLoginSuccess }) {

  const kakaoLoginClickHandler = () => {
    Kakao.Auth.login({
      scope: 'account_email',
      success() {
        Kakao.API.request({
          url: "/v2/user/me",
          success(response) {
            localStorage.clear();
            onSocialLoginSuccess(response.kakao_account.email,'kakao');
          },
          fail(error) {
            alert('오류가 발생했습니다. 다시 시도해주세요.');
          },
        });
      },
    });
  };
  return (
    <div className="base-btn-icon" onClick={kakaoLoginClickHandler}>
      <img src={logoImage} alt=""/>
    </div>
  );
}

export function ButtonLogoutKakao({ onLogout }) {

  const logoutHandler = () => {
    Kakao.Auth.logout(() => {});
    onLogout();
  }

  return (
    <div
      className="base-btn-icon"
      onClick={logoutHandler}>
      <img className="menu-logo-img" src={logoutImage} alt=""/>
    </div>
  );
}