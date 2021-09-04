import axios from "axios";
import * as actions from "../api";

// eslint-disable-next-line consistent-return
const logged_in =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action.type !== actions.logCallBegan.type) return next(action);

    const { onStart, onSuccess, onError } = action.payload;

    if (onStart) dispatch({ type: onStart });
    next(action);

    axios
      .get(
        "http://localhost:3000/logged_in",
      // {mode: 'cors'},
      // { withCredentials: true }
      )
      .then((response) => {
        console.log(response.data)
        dispatch(actions.logCallSuccess(response));
        if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
      })
      .catch((error) => {
        console.log(error)
        dispatch(actions.logCallFailed(error.message));
        if (onError) dispatch({ type: onError, payload: error.message });
      });
  };

export default logged_in;
