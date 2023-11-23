import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import mainApi from './store/apis/mainApi';
import graphs from './store/slices/graphs/slice';
import home from './store/slices/home/slice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    [mainApi.reducerPath]: mainApi.reducer,
    home,
    graphs,
  }),
);

export function makeStore(preloadedState = {}) {
  return configureStore({
    reducer: persistedReducer,
    preloadedState: Object.keys(preloadedState).length ? preloadedState : undefined,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([mainApi.middleware]),
  });
}

export const store = makeStore();

setupListeners(store.dispatch);

export const persistor = persistStore(store);
