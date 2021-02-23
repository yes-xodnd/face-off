import React from 'react';

// style
import './WelcomeCredit.scss';

// image 
import teamImage1 from '../../../assets/img/team/team1.png';
import teamImage2 from '../../../assets/img/team/team2.png';
import teamImage3 from '../../../assets/img/team/team3.png';
import teamImage4 from '../../../assets/img/team/team4.png';
import teamImage5 from '../../../assets/img/team/team5.png';
import teamImage6 from '../../../assets/img/team/team6.png';
import teamImage7 from '../../../assets/img/team/team7.png';

const teamImages = [
  teamImage1,
  teamImage2,
  teamImage3,
  teamImage4,
  teamImage5,
  teamImage6,
  teamImage7,
];

const teamInfo = [
  { role: '백엔드', name: '팀장 문명기' },
  { role: '백엔드', name: '정세린'},
  { role: 'AI', name: '양지용'},
  { role: 'AI', name: '오정엽'},
  { role: '프론트엔드', name: '이원준'},
  { role: '프론트엔드', name: '박태웅'},
  { role: '특별출연', name: '가상인간 Nick'},
];


function Credit() {
  const Team = teamInfo.map((person, idx) => {
    const style = {
      animationDelay: (500 * (idx + 2)) + 'ms',
    };

    return (
    <figure style={style} key={idx} className="p-box">
      <div className="p-img">
        <img src={teamImages[idx]} alt="teammate face"/>
      </div>
      <figcaption className="p-caption">
        {person.name} <br />
        {person.role}
      </figcaption>
    </figure>
    );
  });

  return (
    <>
      <div className="credit-wrap">
        <h1>SSAFY A207</h1>
        <div className="team-grid">
          { Team }
        </div>
      </div>
    </>
  );
}

export default Credit;
