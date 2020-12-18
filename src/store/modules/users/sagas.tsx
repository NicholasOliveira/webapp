import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import FirebaseService from '../../../services/firebaseService';
import { action } from '../../../interfaces/userInterfaces';
import { criptografar } from '../../../utils/cipher';
import { validateUserSucess, loadApp } from './actions';
import { validUserRequest } from '../../actions/actionTypes';

// worker Saga: will be fired on validateUserSucess actions
function* fetchUser(action: action) {
  const senhaHashDecrypt = criptografar(action.payload.senha);
  const emailLogin = action.payload.email;
  FirebaseService.updateUser('Nicholas Oliveira');
  try {
    yield put(loadApp({ load: true }));
    const user = yield call(
      FirebaseService.login,
      emailLogin,
      senhaHashDecrypt
    );
    yield put(validateUserSucess(user));
    yield put(loadApp({ load: false }));
  } catch (e) {
    return yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* mySaga() {
  yield takeLatest(validUserRequest, fetchUser);
}

export default mySaga;
