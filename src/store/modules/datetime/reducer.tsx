import produce from 'immer';
import { toast } from 'react-toastify';
import FirebaseService from '../../../services/firebaseService';
import { addDateTime, getDateTime } from '../../actions/actionTypes';
import { action } from '../../../interfaces/datetimeInteraces';
import { fakeDate } from '../../../Data/fakeDate';

const INITIAL_STATE = fakeDate;

export const datetime = (state = INITIAL_STATE, action: action) => {
  switch (action.type) {
    case addDateTime:
      const { id, date, entrada, almoco, saida } = action.payload;
      FirebaseService.pushData('datetime', {
        id,
        date,
        entrada,
        almoco,
        saida,
      });
      toast.success('Horário adicionado com sucesso!');
      return [...state, { id, date, entrada, almoco, saida }];
    case getDateTime:
      const nextState = produce(state, draft => {});
      return nextState;
    default:
      FirebaseService.getDataList('datetime', (data: any) => data);
      return state;
  }
};
