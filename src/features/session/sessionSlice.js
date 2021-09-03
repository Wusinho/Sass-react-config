import { createSlice } from '@reduxjs/toolkit';
// import { createSelector } from 'reselect';

export const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    user: {},
    isLoggedIn: false
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
    }
  }
});

export const selectCurrentUser = (state) => state.entities.session.user.user;
export const selectIsLoggedIn = (state) => state.entities.session.isLoggedIn;
export const { signUp, logOut, editUser } = sessionSlice.actions;
export default sessionSlice.reducer;

// export const selectIsLoggedIn = createSelector(
//   (state) => state.session.isLoggedIn
// );

// export const selectCurrentUser = createSelector(
//   (state) => state.session.user.user
// );