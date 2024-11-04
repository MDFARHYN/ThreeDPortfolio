// components/redux/store.ts
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import uiReducer from './uiSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
   
};

const rootReducer = combineReducers({
  ui: uiReducer, // Nest `uiReducer` under the `ui` key
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
