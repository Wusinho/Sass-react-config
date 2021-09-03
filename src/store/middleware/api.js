import axios from 'axios';
import * as actions from '../api';

// eslint-disable-next-line consistent-return
const api = ({ dispatch }) => (next) => (action) => {
  if (action.type !== actions.champCallBegan.type) return next(action);

  const {
    data, onStart, onSuccess, onError,
  } = action.payload;

  const { email, password } = data

  if (onStart) dispatch({ type: onStart });
  next(action);

  axios.get('http://localhost:3000/sessions',{
    email: email,
    password: password,
  }, { withCredentials: true }
  )
    .then((response) => {
      dispatch(actions.champCallSuccess(response));
      if (onSuccess) dispatch({ type: onSuccess, payload: response });
    })
    .catch((error) => {
      dispatch(actions.champCallFailed(error.message));
      if (onError) dispatch({ type: onError, payload: error.message });
    });
};

export default api;
