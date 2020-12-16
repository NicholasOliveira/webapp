import { all } from 'redux-saga/effects';

import data from './users/sagas';

export default function* rootSaga() {
  return yield all([data]);
}
