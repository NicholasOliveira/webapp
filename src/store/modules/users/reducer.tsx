import produce from 'immer';
import { toast } from 'react-toastify';
import FirebaseService from '../../../services/firebaseService';
import {
  user_add,
  validUser,
  logoutUser,
  userConfig,
} from '../../actions/actionTypes';
import { criptografar } from '../../../utils/cipher';
import { action } from '../../../interfaces/userInterfaces';

const { innerWidth } = window;
const option = innerWidth > 800;
const INITIAL_STATE = { signed: false, statemenu: option };

export const dataReducer = (state = INITIAL_STATE, action: action) => {
  switch (action.type) {
    case user_add:
      const senhaHash: string = criptografar(action.payload.senha);
      const { nome, email } = action.payload;
      FirebaseService.pushData('users', {
        nome,
        email,
        senhaHash,
      });
      return { create: true };
    case validUser:
      const senhaHashDecrypt: string = criptografar(action.payload.senha);
      const emailLogin = action.payload.email;
      const data: any = FirebaseService.login(emailLogin, senhaHashDecrypt);
      if (data.status !== 201) {
        toast.error('Falha ao efetuar login');
        return { logged: false };
      }
      const nextState = produce(state, draft => {
        draft.signed = true;
      });
      return nextState;
    case userConfig:
      const nextState2 = produce(state, draft => {
        draft.statemenu = Boolean(action.payload);
      });
      return nextState2;
    case logoutUser:
      return { logged: false };
    default:
      return state;
  }
};
