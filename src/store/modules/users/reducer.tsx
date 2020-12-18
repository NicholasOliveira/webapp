import produce from 'immer';
import { toast } from 'react-toastify';
import FirebaseService from '../../../services/firebaseService';
import {
  user_add,
  validUser,
  validUserSucess,
  logoutUser,
  userConfig,
  loadeapp,
} from '../../actions/actionTypes';
import { criptografar } from '../../../utils/cipher';
import { action } from '../../../interfaces/userInterfaces';

const { innerWidth } = window;
const option = innerWidth > 800;
const INITIAL_STATE = { signed: false, statemenu: option, load: false };

export const dataReducer = (state = INITIAL_STATE, action: action) => {
  switch (action.type) {
    case user_add:
      const senhaHash: string = criptografar(action.payload.senha);
      const { nome, email } = action.payload;
      FirebaseService.createUser(email, senhaHash, nome);
      return { create: true };
    case validUserSucess:
      if (action.payload.status !== 201) {
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
    case loadeapp:
      const nextState3 = produce(state, draft => {
        draft.load = action.payload.load;
      });
      return nextState3;
    case logoutUser:
      return { logged: false };
    default:
      return state;
  }
};
