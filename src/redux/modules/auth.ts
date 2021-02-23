import { createAction,createReducer } from '@reduxjs/toolkit';

// types
const LOG_IN = "auth/LOG_IN";
const LOG_OUT = "auth/LOG_OUT";

// actions
export const login = createAction(LOG_IN);
export const logout = createAction(LOG_OUT);

// state
const initState = {
  isAuthed: !!sessionStorage.getItem('userId'),
}

// reducer
const auth = createReducer(initState, (builder) => {
  builder
  .addCase(login, (state) => {
    state.isAuthed = true;
  })
  .addCase(logout, (state) => {
    state.isAuthed = false;
  })
})

export default auth;