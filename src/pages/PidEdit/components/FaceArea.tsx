import React, { useEffect, useState } from 'react';
import FaceAreaBox from './FaceAreaBox';


function FaceArea({ state, methods, imageRef }) {
  const [ratio, setRatio] = useState(getRatio(imageRef.current));

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  });

  const { faceArea, selectedFaceIdx } = state;
  const { setSelectedFaceIdx } = methods;
  
  function handleResize() {
    setRatio(getRatio(imageRef.current));
  };

  function getRatio(el) {
    return el ? el.width / el.naturalWidth : 0;
  }

  const onClickFaceBox = index => () => {
    setSelectedFaceIdx(
      selectedFaceIdx.map((v, i) => i === index ? !v : v));
  };

  const Boxes = faceArea.map((pos, index) => (
    <FaceAreaBox
      pos={pos}
      ratio={ratio}
      onClick={onClickFaceBox(index)}
      isSelected={selectedFaceIdx[index]}
      key={index}
    />
  ));
  
  return <>{ imageRef.current && Boxes }</>;
}

export default FaceArea;