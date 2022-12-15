import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import userReducer  from "./userSlice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from "redux";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'



const persistConfig = {
  key: 'root',
  storage,
}


const reducer = combineReducers({ auth: authReducer,users: userReducer})
//   reducer:{
//       auth: authReducer,
//       users: userReducer
//   },
// });

const persistedReducer = persistReducer(persistConfig, reducer)





const store =  configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


export const persistor = persistStore(store)

export default store;