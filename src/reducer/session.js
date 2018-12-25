import { LOGIN, LOGOUT } from '../action/type';

const Logout = {
  isLogged: false,
  username: undefined,
  password: undefined,
};

const session = (state = Logout, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        isLogged: true,
        username: action.username,
        password: action.password,
      };
    case LOGOUT:
      return Logout;
    default:
      return state;
  }
};
export default session;
