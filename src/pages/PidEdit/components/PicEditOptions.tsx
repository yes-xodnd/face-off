import React from 'react';
import PicEditOptionsDetail from './PicEditOptionsDetail';
import './PicEditOptions.scss';

import iconImage1 from '../../../assets/img/icon/pixel.png';
import iconImage2 from '../../../assets/img/icon/blur3.png';
import iconImage3 from '../../../assets/img/icon/swap.png';
import iconImage4 from '../../../assets/img/icon/sticker2.png';

const iconImages = [
  iconImage1,
  iconImage2,
  iconImage3,
  iconImage4
];

const iconImageAlt = ['pixel', 'blur', 'swap', 'sticker'];

function PicEditOptions({ state, methods }) {
  // props
  const { optionTypeIdx, optionTypeNamesKr } = state;
  const { setOptionType } = methods;

  // const baseSrc = 'http://k3a207.p.ssafy.io/icon/';
  // const imgSrc = [ 'pixel.png', 'blur3.png', 'swap.png','sticker2.png'];

  // components
  const ButtonOptionTypes = optionTypeNamesKr.map((name, index) => {
    const buttonClassName = `option-item-btn ${ optionTypeIdx === index ? 'option-item-btn-active' : ''}`;

    return (
      <div onClick={() => setOptionType(index)} className='option-item' key={index}>
        <div className={buttonClassName}>
          <img src={iconImages[index]} alt={iconImageAlt[index]} />
        </div>
        <div className={`${optionTypeIdx === index ? 'font-blue' : ''}`}>{ name }</div>
      </div>
    )
  });
  
  return (
    <div className="pic-edit-options">
      <div className="option-item-wrap">{ ButtonOptionTypes }</div>
      <PicEditOptionsDetail state={state} methods={methods} />
    </div>
  );
}

export default PicEditOptions;