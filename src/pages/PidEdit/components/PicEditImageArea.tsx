import React, { useRef } from 'react';
import '../../../base.scss';
import FaceArea from './FaceArea';


function PicEditImageArea({ state, methods }) {
  const imageRef = useRef(null);
  const { picURL } = state;
  
  return (
    <div className="pic-area">
      <div className="img-wrap" style={{position:'relative'}}>
        <img ref={imageRef} src={picURL} alt="uploaded" />
        <FaceArea state={state} methods={methods} imageRef={imageRef} />
      </div>
    </div>
  );
}

export default PicEditImageArea;
