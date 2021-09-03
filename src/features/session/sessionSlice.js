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
    apiRequested: (api) => {
      api.loading = true;
    },
    apiReceived: (api, action) => {
      api.list = action.payload;
      api.isLoggedIn = true;
      api.loading = false;
    },
    apiRequestFailed: (api) => {
      api.loading = false;
    },
  },
});

export const selectCurrentUser = (state) => state.entities.session.user.user;
export const selectIsLoggedIn = (state) => state.entities.session.isLoggedIn;
export const {
  signUp,
  logOut,
  editUser,
  apiRequested,
  apiReceived,
  apiRequestFailed,
} = sessionSlice.actions;
export default sessionSlice.reducer;

const url = '/api';

export const loadapi = (data) => apiCallBegan({
  url,
  data,
  onStart: apiRequested.type,
  onSuccess: apiReceived.type,
  onError: apiRequestFailed.type,
});