import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import logoImage from '../../assets/img/icon/favicon.png';
import './Header.scss';

function Header() {
  const [path, setPath] = useState('');
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/edit':
        setPath('사진 수정하기');
        break;
      case '/result':
        setPath('수정 완료');
        break;
      default:
        setPath('');
    }
  }, [location.pathname]);

  const CurrentPath = () => <span style={{ marginRight: '105px' }}>{ path }</span>;

  return (
    <header className="header">
      <div className="logo">
        <img src={logoImage} alt="logo"/>
        <span className="service-name">FACE/OFF</span>
      </div>
      <CurrentPath />
      <div></div>
    </header>
  );
};

export default Header;