import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from '../../store/api';

// import { createSelector } from 'reselect';

export const sessionSlice = createSlice({
  name: "session",
  initialState: {
    user: {},
    isLoggedIn: false,
    loading: false,
  },
  reducers: {
    signUp: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    editUser: (state, action) => {
      state.user = action.payload;
    },
    logOut: (state, action) => {
      state.user = {};
      state.isLoggedIn = false;
    },
    champsRequested: (champs) => {
      champs.loading = true;
    },
    champsReceived: (champs, action) => {
      champs.list = action.payload;
      champs.isLoggedIn = true;
      champs.loading = false;
    },
    champsRequestFailed: (champs) => {
      champs.loading = false;
    },
  },
});

export const selectCurrentUser = (state) => state.entities.session.user.user;
export const selectIsLoggedIn = (state) => state.entities.session.isLoggedIn;
export const {
  signUp,
  logOut,
  editUser,
  champsRequested,
  champsReceived,
  champsRequestFailed,
} = sessionSlice.actions;
export default sessionSlice.reducer;

const url = '/champs';

export const loadchamps = (data) => apiCallBegan({
  url,
  data,
  onStart: champsRequested.type,
  onSuccess: champsReceived.type,
  onError: champsRequestFailed.type,
});