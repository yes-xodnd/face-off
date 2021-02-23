import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

// components
import EditImageArea from './PicEditImageArea';
import PicEditOptions from './PicEditOptions';
import PicEditFaces from './PicEditFaces';

import './PicEdit.scss';

function PicEdit({ state, methods }) {
  const history = useHistory();
  const [ menu , setMenu ] = useState(0);

  useEffect(() => {
    if (!picURL) history.push('/');
  })

  // props
  const {
    picURL,
    faceDetected,
    selectedFaceIdx,
    optionTypeNamesKr,
    optionTypeIdx,
    optionLevel } = state;
  const { setSelectedFaceIdx, onUploadOptions } = methods;
  
  const optionSelected = 
  `: ${optionTypeNamesKr[optionTypeIdx]} ${optionTypeIdx < 2 ? optionLevel : ''}`;

  // components
  const MenuItem = ({index, name}) => {
    const className = `menu-item ${menu === index ? 'menu-item-active' : ''}`;
    return (
      <div onClick={() => setMenu(index)} className={className}>
        { name }
        <span className="font-blue">{index === 0 && optionSelected }</span>
      </div>
    );
  }
  return (
    <>
      { picURL && 
        <>
        <div className="pic-edit">
          <div className="image-area-wrap" >
            <EditImageArea state={state} methods={methods} />
          </div>
          <div className="menu-wrap">

            <div className="menu-item-wrap">
              <MenuItem index={0} name={'옵션'} />
              <MenuItem index={1} name={'얼굴 선택'} />
            </div>
            
            <div className="menu-detail-wrap">
              { menu === 0 && 
                <PicEditOptions state={state} methods={methods} /> 
              }
              { menu === 1 && 
                <PicEditFaces 
                state={{ faceDetected, selectedFaceIdx}}
                methods={{setSelectedFaceIdx}} /> 
              }
            </div>
          </div>
        </div>
        
        <div className="divider"></div>
        
        <section className="btn-wrap">
          <button
            onClick={onUploadOptions}
            className={`base-btn ${ selectedFaceIdx.length ? 'font-blue' : ''}`} >
            실행
          </button>
        </section>
      </>
      }
    </>
  );
}

export default PicEdit;
