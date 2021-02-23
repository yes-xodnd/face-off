
import React from 'react';
import API from '../../../api';

// component
import PicEditSticker from './PicEditSticker';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { 
  setStickerBase,
  setSelectedSticker,
  setSelectedStickerIdx, 
  setStickerUser,
  addStickerUser,
  deleteStickerUser 
} from '../../../redux/modules/sticker';

import { showMessage } from '../../../redux/modules/message';
import { RootState } from '../../../index';


function PicEditStickerContainer() {
  const dispatch = useDispatch();

  const state = {
    ...useSelector((state: RootState) => state.sticker),
    isAuthed: useSelector((state: RootState) => state.auth.isAuthed),
  };

  const methods = {
    fetchStickerBase() {
      API.fetchStickerBase()
      .then(res => dispatch(setStickerBase(res.data)));
    },
    fetchStickerUser() {
      API.fetchStickerUser()
      .then(res => dispatch(setStickerUser(res.data)));
    },
    selectSticker(imgURL, idx, type) {
      dispatch(setSelectedSticker(imgURL));
      dispatch(setSelectedStickerIdx(idx, type));
    },
    addSticker(item) {
      API.addSticker(item)
      .then(res => dispatch(addStickerUser(res.data)));
    },
    deleteSticker(sid) {
      API.deleteSticker(sid);
      dispatch(deleteStickerUser(sid));
    },
    showMessage() {
      dispatch(showMessage('Error', '로그인한 유저만 사용할 수 있는 기능입니다.'));
    }
  };

  return <PicEditSticker state={state} methods={methods} />;
}

export default PicEditStickerContainer;