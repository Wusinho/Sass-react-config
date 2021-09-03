import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';
import api from './middleware/api';
import logged_in from './middleware/logged_in'

const store = configureStore({
  reducer,
  middleware: [
    api,
    logged_in,
  ],
});

export default store;
