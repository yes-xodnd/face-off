
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

// sticker Images
import image0 from '../../../assets/img/sticker/Pikachu2.jpg';
import image1 from '../../../assets/img/sticker/hedgehog.png';
import image2 from '../../../assets/img/sticker/angry.png';
import image3 from '../../../assets/img/sticker/2.png';
import image4 from '../../../assets/img/sticker/cat.png';
import image5 from '../../../assets/img/sticker/smith.png';
import image6 from '../../../assets/img/sticker/santa.png';
import image7 from '../../../assets/img/sticker/darang.png';

const stickerImages = [
  image0, image1, image2, image3,
  image4, image5, image6, image7,
];


function PicEditStickerContainer() {
  const dispatch = useDispatch();

  const state = {
    ...useSelector((state: RootState) => state.sticker),
    isAuthed: useSelector((state: RootState) => state.auth.isAuthed),
    stickerImages,
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