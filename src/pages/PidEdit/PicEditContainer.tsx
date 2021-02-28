import React from 'react';
import { useHistory } from 'react-router-dom';

// components
import PicEdit from './components/PicEdit';

// modules
import API from '../../api';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { 
  showMessage,
  showLoading,
  hideLoading,
} from '../../redux/modules/message';
import {
  setOptionType,
  setOptionLevel,
  setSelectedFaceIdx,
  setResultPicture
} from '../../redux/modules/pic';
import { RootState } from '../../index';


function PicEditContainer() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { selectedSticker } = useSelector((state: RootState) => state.sticker);

  // state
  const state = {
    ...useSelector((state: RootState) => state.pic),
    optionTypeNamesKr: ['픽셀', '흐리게', '가상얼굴', '스티커']
  };

  // methods
  const methods = {
    setOptionType(optionType: number) {
      dispatch(setOptionType(optionType));
    },
    handleOptionLevel(e) {
      dispatch(setOptionLevel(Number(e.target.value)));
    },
    setSelectedFaceIdx(selectedFaceIdx: any) {
      dispatch(setSelectedFaceIdx(selectedFaceIdx));
    },
    onUploadOptions() {
      const targetFace = state.faceArea.filter(
        (area, index) => state.selectedFaceIdx[index]);

      if (!targetFace.length) {
        dispatch(showMessage('Error', '가리고 싶은 얼굴을 선택해주세요.'));
      } else {
        dispatch(showLoading());

        API.fetchResult(
          state.picURL,
          state.optionType,
          state.optionLevel,
          selectedSticker,
          targetFace
        )
          .then(res => {
            dispatch(setResultPicture('data:image/png;base64, ' + res.data.img));
            dispatch(hideLoading());
            history.push('/result');
          })
          .catch(() => {
            dispatch(hideLoading())
          })
      }
    },
  };
  
  return <PicEdit state={state} methods={methods} />
}

export default PicEditContainer;