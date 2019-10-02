import createDataContext from './createDataContext';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'login': {
      return state;
    }
    case 'signup': {
      return state;
    }
    case 'logout': {
      return state;
    }
    default:
      return state;
  }
};

const login = dispatch => {
  return (email, password, callback) => {
    dispatch({ type: 'login', payload: { email, password } });
    if (callback) {
      callback();
    }
  };
};

const signup = dispatch => {
  return (email, password, callback) => {
    dispatch({ type: 'signup', payload: { email, password } });
    if (callback) {
      callback();
    }
  };
};

const logout = dispatch => {
  return callback => {
    dispatch({ type: 'logout' });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(authReducer, { login, logout, signup }, []);
