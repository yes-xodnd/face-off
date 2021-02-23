import React, { useRef } from 'react';
import '../../../base.scss';
import FaceArea from './FaceArea';


function EditImageArea({ state, methods }) {
  const imageRef = useRef(null);
  const { picURL } = state;
  
  return (
    <div className="pic-area">
      <div className="img-wrap" style={{position:'relative'}}>
        <img ref={imageRef} src={picURL} alt="" />
        <FaceArea state={state} methods={methods} />
      </div>
    </div>
  );
}

export default EditImageArea;
