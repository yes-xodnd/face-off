import React from 'react';
import { calcFacePos } from '../../../util';


function FaceAreaBox({ pos, ratio, isSelected, onClick }) {
  const [top, left, width, height] = calcFacePos(pos, ratio);

  const style = {
    borderColor: isSelected ? 'red' : 'lawngreen',
    borderWidth: isSelected ? '2px' : '1px',
    borderStyle: isSelected ? 'dashed' : 'solid',
    backgroundColor: isSelected ? 'rgba(0, 0, 0, 0.5)' : 'none',
    top, left, width, height
  };

  return (
    <div
      onClick={onClick}
      style={style}
    >
    </div>
  );
}

export default FaceAreaBox;