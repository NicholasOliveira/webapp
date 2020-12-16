import { addDateTime } from '../../actions/actionTypes';

export const loadData = (category: string) => ({});

export const DataTimeNew = (data: object) => ({
  type: addDateTime,
  payload: data,
});

export const setErrorData = (error: Error) => ({});
