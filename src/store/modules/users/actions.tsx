import {
  user_add,
  validUser,
  logoutUser,
  userConfig,
  validUserRequest,
  validUserSucess,
  loadeapp,
} from '../../actions/actionTypes';

export const loadData = (category: string) => ({});

export const setUserConfig = (data: object) => ({
  type: userConfig,
  payload: data,
});

export const validateUserRequest = (data: object) => ({
  type: validUserRequest,
  payload: data,
});

export const validateUserSucess = (data: object) => ({
  type: validUserSucess,
  payload: data,
});

export const loadApp = (data: object) => ({
  type: loadeapp,
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
