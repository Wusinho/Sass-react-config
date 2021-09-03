import axios from "axios";
import * as actions from "../api";

// eslint-disable-next-line consistent-return
const api =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action.type !== actions.logCallBegan.type) return next(action);

    const { onStart, onSuccess, onError } = action.payload;

    if (onStart) dispatch({ type: onStart });
    next(action);

    axios
      .post(
        "http://localhost:3000/logged_in",
      {mode: 'cors'},
      { withCredentials: true }
      )
      .then((response) => {
        dispatch(actions.logCallSuccess(response));
        if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
      })
      .catch((error) => {
        dispatch(actions.logCallFailed(error.message));
        if (onError) dispatch({ type: onError, payload: error.message });
      });
  };

export default api;
