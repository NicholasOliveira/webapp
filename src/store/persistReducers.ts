import {createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['users','datetime']
};

export default (reducers:any) =>{
  const persistedReducer = persistReducer(persistConfig, reducers)
  return persistedReducer;
}
