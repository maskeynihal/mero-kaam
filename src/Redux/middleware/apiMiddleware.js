import * as apiActions from 'Redux/actions/apiActions';
import loginApi from 'Services/loginApi';
import { LOGIN_URL } from 'Constants/api';

export default ({ dispatch }) => (next) => async (action) => {
  next(action);
  if (action.type === apiActions.API_REQUEST) {
    const { url, method, data } = action.meta;

    try {
      if (url === LOGIN_URL) {
        const { response, error } = await loginApi(data);

        if (error) {
          dispatch(apiActions.apiError({ error: response }));
        } else {
          dispatch(apiActions.apiSuccess({ response }));
        }
      }
    } catch (error) {
      dispatch(apiActions.apiError({ error: error.response }));
    }
  }
};
