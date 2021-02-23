import React from 'react';
import PicEditStickerContainer from './PicEditStickerContainer';

import samplePixel1 from '../../../assets/img/sample/pixel1.png';
import samplePixel2 from '../../../assets/img/sample/pixel2.png';
import samplePixel3 from '../../../assets/img/sample/pixel3.png';
import samplePixel4 from '../../../assets/img/sample/pixel4.png';
import samplePixel5 from '../../../assets/img/sample/pixel5.png';
import sampleBlur1 from '../../../assets/img/sample/blur1.png';
import sampleBlur2 from '../../../assets/img/sample/blur2.png';
import sampleBlur3 from '../../../assets/img/sample/blur3.png';
import sampleBlur4 from '../../../assets/img/sample/blur4.png';
import sampleBlur5 from '../../../assets/img/sample/blur5.png';

const sampleImage = [
  [
    samplePixel1,
    samplePixel2,
    samplePixel3,
    samplePixel4,
    samplePixel5,
  ],
  [
    sampleBlur1,
    sampleBlur2,
    sampleBlur3,
    sampleBlur4,
    sampleBlur5,
  ],
];



function PicEditOptionsDetail({ state, methods }) {
  const { optionTypeIdx, optionLevel } = state;
  const { handleOptionLevel } = methods;
  // const sampleSrc = 'http://k3a207.p.ssafy.io/icon/';

  return (
    <>
        { optionTypeIdx < 2 &&
        <div className="option-detail-wrap">
          <div className="option-level">
            <div className="base-face">
              <img src={sampleImage[optionTypeIdx][optionLevel - 1]} alt="sample"/>
            </div>
            <div className="option-level-input-wrap">
              <input 
                onChange={handleOptionLevel}
                type="range" min="1" max="5" value={optionLevel} step="1" />
            </div>
          </div>
        </div>
        }
        { optionTypeIdx === 2 && 
          <div className="option-level">인공지능이 생성한 가상 얼굴로 대체합니다.</div>
        }
        {
          optionTypeIdx === 3 &&
          <PicEditStickerContainer />
        }
    </>
  );
}

export default PicEditOptionsDetail;
