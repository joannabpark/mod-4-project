
export const loginSuccess = (user) => {
  return {
    type: 'LOGIN_SUCCESS',
    user: user
  }
}

export const logoutSuccess = () => {
  return {
    type: 'LOGOUT_SUCCESS',
  }
}

export const fetchUserSuccess = (user) => {
  return {
      type: 'FETCH_USER_SUCCESS',
      user: user
  }
}

export const createUserSuccess = (user) => {
  return {
    type: "CREATE_USER_SUCCESS",
    user: user,
  };
};

export const currentUser = (user) => {
  return {
    type: "CURRENT_USER",
    user: user
  }
}