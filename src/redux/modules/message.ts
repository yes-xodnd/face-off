import { createAction, createReducer } from '@reduxjs/toolkit';

// types
const SHOW_MESSAGE = 'message/SHOW_MESSAGE';
const HIDE_MESSAGE = 'message/HIDE_MESSAGE';
const SHOW_LOADING = 'message/SHOW_LOADING';
const HIDE_LOADING = 'message/HIDE_LOADING';


// actions
export const showMessage = createAction(
  SHOW_MESSAGE,
  function prepare(title = '', text = '') {
    return { payload: { title, text} };
  }
)
export const hideMessage = createAction(HIDE_MESSAGE);
export const showLoading = createAction(SHOW_LOADING);
export const hideLoading = createAction(HIDE_LOADING);

// state
const initState = {
  isLoading: false,
  isVisible: false,
  title: '',
  text: '',
};

// reducer
const message = createReducer(initState, builder => {
  builder
  .addCase(showMessage, (state, action) => {
    const { title, text } = action.payload;
    state.isVisible = true;
    state.title = title;
    state.text = text;
  })
  .addCase(hideMessage, state => {
    state.isVisible = false;
    state.title = '';
    state.text = '';
  })
  .addCase(showLoading, state => {
    state.isLoading = true;
  })
  .addCase(hideLoading, state => {
    state.isLoading = false;
  });
});

export default message;
