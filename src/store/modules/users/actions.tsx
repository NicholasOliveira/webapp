import {
  user_add,
  validUser,
  logoutUser,
  userConfig,
} from '../../actions/actionTypes';

export const loadData = (category: string) => ({});

export const setUserConfig = (data: object) => ({
  type: userConfig,
  payload: data,
});

export const validateUser = (data: object) => ({
  type: validUser,
  payload: data,
});

export const exitUser = () => ({
  type: logoutUser,
});

export const setData = (data: object) => ({
  type: user_add,
  payload: data,
});

export const setErrorData = (error: Error) => ({});
