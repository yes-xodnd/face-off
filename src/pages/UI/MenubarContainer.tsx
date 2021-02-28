import React from 'react';

// components
import Menubar from './Menubar';

// modules
// import API from '../../api';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../../redux/modules/auth';
import { RootState } from '../../index';
import { selectPicture } from '../../redux/modules/pic';
import { showMessage } from '../../redux/modules/message';

function MenubarContainer() {
  const dispatch = useDispatch();
  const state = {
    isAuthed: useSelector(
      (state: RootState) => state.auth.isAuthed),
    provider: sessionStorage.getItem('provider'),
    friendsArray: useSelector(
      (state:RootState) => state.friend.friendsArray),
  };

  const methods = {
    onSocialLoginSuccess(email: string, provider: string) {
      sessionStorage.setItem('provider', provider);
      dispatch(login());
    },
    logout(message = true) {
      sessionStorage.clear();
      dispatch(logout());
      if (message) {
        dispatch(showMessage('Success', '정상적으로 로그아웃되었습니다.'))
      };
    },
    // login() {
    //   dispatch(login());
    // },
    deletePicURL() {
      dispatch(selectPicture(''));
    },
  };

  return <Menubar state={state} methods={methods} />
}

export default MenubarContainer;