import React from 'react';

// components
import Home from './components/Home';

// modules
// import API from '../../api';
import { useHistory } from 'react-router-dom';

// redux
import { useSelector, useDispatch } from 'react-redux';
import {
  selectPicture,
  // setFaceDetected,
  // setFaceArea,
  // setSelectedFaceIdx
} from '../../redux/modules/pic';
import { hideLoading, showLoading } from '../../redux/modules/message';
// import { setAddFriendSelected } from '../../redux/modules/friend';
import { RootState } from '../../index';

function HomeContainer() {
  const dispatch = useDispatch();
  const history = useHistory();

  // state
  const state = {
    picURL: useSelector((state:RootState) => state.pic.picURL),
  };

  // methods
  const methods = {
    onImageUpload(e) {
        const picURL = URL.createObjectURL(e.target.files[0]);
        dispatch(selectPicture(picURL));
      },
    onStart() {
      dispatch(showLoading());
      setTimeout(() => {
        dispatch(hideLoading());
        history.push('/edit');
      }, 1500);

      // API.uploadPic(state.picURL)
      //   .then(res => {
      //     const { faces_area, faces_crop, friend_list } = res.data;

      //     const addFriendSelected = new Array(faces_area.length).fill('yet');
      //     let selectedFaceIdx = new Array(faces_area.length).fill(true);
      //     let faceDetected = faces_crop.map(x => [x,'unknown']);
          
      //     friend_list.forEach(x => {
      //       selectedFaceIdx[x['idx']] = false;
      //       faceDetected[x['idx']] = [faceDetected[x['idx']][0], x['fname']];
      //     });

      //     dispatch(setFaceArea(faces_area));
      //     dispatch(setFaceDetected(faceDetected));
      //     dispatch(setSelectedFaceIdx(selectedFaceIdx));
      //     dispatch(setAddFriendSelected(addFriendSelected));

      //     setTimeout(() => {
      //       dispatch(hideLoading());
      //       history.push('/edit');
      //     }, 1000);
      //   })
      //   .catch(() => {
      //     dispatch(hideLoading());
      //   });
    },
  };

  return <Home state={state} methods={methods} />
}

export default HomeContainer;