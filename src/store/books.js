/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { apiCallBegan, champCallBegan } from './api';

export const champSlice = createSlice({
  name: 'champs',
  initialState: {
    loading: false,
    list: {},
  },
  reducers: {
    champsRequested: (champs) => {
      champs.loading = true;
    },
    champsReceived: (champs, action) => {
      champs.list = action.payload;
      champs.loading = false;
    },
    champsRequestFailed: (champs) => {
      champs.loading = false;
    },
  },
});

export const {
  champsReceived,
  champsRequested,
  champsRequestFailed,
  champSelection,
  champCategory,
  selectedRequested,
  selectedReceived,
  slectedRequestFailed,
} = champSlice.actions;

export default champSlice.reducer;

const url = '/champs';

export const loadchamps = (data) => apiCallBegan({
  url,
  data,
  onStart: champsRequested.type,
  onSuccess: champsReceived.type,
  onError: champsRequestFailed.type,
});
