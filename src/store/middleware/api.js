import axios from "axios";
import * as actions from "../api";

// eslint-disable-next-line consistent-return
const api =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);

    const { data, onStart, onSuccess, onError } = action.payload;

    const { username, password } = data;
    if (onStart) dispatch({ type: onStart });
    next(action);

    axios
      .post(
        "https://shielded-waters-88645.herokuapp.com/login/",
      {
        username: username,
        password: password,
      },
      )
      .then((response) => {
        dispatch(actions.apiCallSuccess(response));
        if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
      })
      .catch((error) => {
        dispatch(actions.apiCallFailed(error.message));
        if (onError) dispatch({ type: onError, payload: error.message });
      });
  };

export default api;
