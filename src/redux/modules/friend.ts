import { createAction, createReducer } from '@reduxjs/toolkit';

// types
const SET_FRIENDS_ARRAY: string = 'friend/SET_FRIENDS_ARRAY';
const SET_FRIEND_MAIN_FACE: string = 'friend/SET_FRIEND_MAIN_FACE';
const SET_FRIEND_OTHER_FACES: string = 'friend/SET_FRIEND_OTHER_FACES';
const SET_ADD_FRIEND_SELECTED: string = 'friend/SET_ADD_FRIEND_SELECTED';

// actions
export const setFriendsArray = createAction(
  SET_FRIENDS_ARRAY,
  function prepare(friendsArray) {
    return { payload: { friendsArray } };
  }
);
export const setFriendMainFace = createAction(
  SET_FRIEND_MAIN_FACE,
  function prepare(mainFace) {
    return {payload : { mainFace }};
  }
);
export const setFriendOtherFaces = createAction(
  SET_FRIEND_OTHER_FACES,
  function prepare(otherFaces) {
    return {payload : { otherFaces }};
  }
);
export const setAddFriendSelected = createAction(
  SET_ADD_FRIEND_SELECTED,
  function prepare(addFriendSelected) {
    return {payload : { addFriendSelected }};
  }
);

// state
const initState = {
  friendsArray: [],
  mainFace: {},
  otherFaces: [],
  addFriendSelected: [],
}

// reducer
const friend = createReducer(initState, builder => {
  builder
  .addCase(setFriendsArray, (state, action) => {
    state.friendsArray = action.payload.friendsArray;
  })
  .addCase(setFriendMainFace, (state,action) => {
    state.mainFace = action.payload.mainFace;
  })
  .addCase(setFriendOtherFaces, (state,action) => {
    state.otherFaces = action.payload.otherFaces;
  })
  .addCase(setAddFriendSelected, (state,action) => {
    state.addFriendSelected = action.payload.addFriendSelected;
  })
})

export default friend;
