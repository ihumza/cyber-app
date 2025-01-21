import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Default to localStorage for web
import { combineReducers } from 'redux';
import authReducer from './slices/authSlice';

// Persist configuration
const persistConfig = {
  key: 'root', // Key for localStorage
  storage,
};

// Combine reducers
const rootReducer = combineReducers({
  auth: authReducer, // Add more reducers if needed
});

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store with persisted reducer
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Ignore serializability warnings for Redux Persist
    }),
});

// Persistor for persisting the store
export const persistor = persistStore(store);

export default store;
