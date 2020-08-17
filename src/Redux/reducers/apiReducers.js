import { authActions, apiActions } from 'Redux/actions';

export default (
  state = {
    isAuthenticated: !!localStorage.getItem('karyaAuthToken'),
    authToken: localStorage.getItem('karyaAuthToken') || '',
    isLoading: false,
    hasError: false
  },
  action
) => {
  switch (action.type) {
    case apiActions.API_SUCCESS:
      localStorage.setItem('karyaAuthToken', action.payload.token);

      return { ...state, isAuthenticated: true, authToken: action.payload.token };

    case apiActions.API_ERROR:
      return { ...state, error: action.payload };

    case authActions.LOGOUT:
      localStorage.setItem('karyaAuthToken', '');

      return { ...state, isAuthenticated: false, authToken: '' };

    default:
      return state;
  }
};
