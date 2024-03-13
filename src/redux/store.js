import { combineSlices, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice';

import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

const Config = {
    key: 'root',
    version: 1,
    storage,
  };
  
  const Reducer = combineSlices({
    filters: filtersReducer,
    contacts: contactsReducer,
  });
  
  const TaskReducer = persistReducer(Config, Reducer);

  export const store = configureStore({
    reducer: TaskReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
  
  export const persistor = persistStore(store);