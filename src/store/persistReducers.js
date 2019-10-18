import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { PERSIST_KEY } from 'react-native-dotenv';

const persistConfig = {
  key: PERSIST_KEY,
  storage: AsyncStorage,
  whitelist: ['auth', 'user'],
};

export default reducers => {
  const persistedReducer = persistReducer(persistConfig, reducers);
  return persistedReducer;
};
