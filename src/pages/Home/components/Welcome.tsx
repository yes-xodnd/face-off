import React, { useState } from 'react';

// components
import WelcomeAbout from './WelcomeIAbout';
import WelcomeHowTo from './WelcomeIHowTo';
import WelcomeCredit from './WelcomeCredit';
import './Home.scss';

function Welcome() {
  const [selectedItem, setSelectedItem] = useState(0);

  const itemNames = [ 'FACE/OFF란?', '사용하는 법', '만든 이들', ];
  const titles = [ 'Welcome!', 'About', 'How To Use', 'Created by'];

  // components
  const Title = () => (<h1>{ titles[selectedItem] }</h1>);  

  const ItemLink = ({ name, idx }) => (
    <li onClick={() => setSelectedItem(idx+1)} className="list-item">
      {name}
    </li>
  );
  const ItemLinkList = () => {
    const items = itemNames.map((name, idx) => (
      <ItemLink name={name} idx={idx} key={idx} />
    ));
    return (<ul>{ items }</ul>);
  };
  const WelcomeItem0 = () => (
    <><p>
      FACE/OFF에 오신 것을 환영합니다.. <br/>
      아래 메뉴를 눌러 FACE/OFF에 대해 알아보십시오.
    </p><ItemLinkList /></>
  );
  const ButtonGoBack = () => (
    <>
      { selectedItem !== 0 && 
        <div className="back-btn" onClick={() => setSelectedItem(0)}>메인 화면으로...</div>
      }
    </>
  );
  const Copyright = () => (
    <p className="copyright">
      © copyright 2020-2049. Not all right reserved.<br/>Powered by SSAFY.</p>
    );

  const Contents = () => (
    <>
      { selectedItem === 0 && <WelcomeItem0 /> }
      { selectedItem !== 0 &&
        <div className="content-area">
          { selectedItem === 1 && <WelcomeAbout /> }
          { selectedItem === 2 && <WelcomeHowTo /> }
          { selectedItem === 3 && <WelcomeCredit />}
        </div>
      }
    </>
  )

  return (
    <>
      <section className="welcome">
        <div className="welcome-wrap">
          <Title />
          <div className="divider"></div>
          <ButtonGoBack />
          <Contents />
          <Copyright />
        </div>
      </section>
    </>
  );
}

export default Welcome;
