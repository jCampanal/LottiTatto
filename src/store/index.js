//#region Imports
import { configureStore } from "@reduxjs/toolkit";
import createReducer from "./rootReducer";
//#endregion

//#region Global Const
const STORAGE_KEY='LottiTattoo'
const middlewares = [];
//#endregion

//#region Store
const store = configureStore({
  reducer: createReducer(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(middlewares),
  devTools: process.env.NODE_ENV === "development",
  preloadedState: localStorage.getItem(STORAGE_KEY)
    ? JSON.parse(localStorage.getItem(STORAGE_KEY))
    : {},
});




store.asyncReducers = {};

export const injectReducer = (key, reducer) => {
  if (store.asyncReducers[key]) {
    return false;
  }
  store.asyncReducers[key] = reducer;
  store.replaceReducer(createReducer(store.asyncReducers));
  return store;
};

const saveState = (state) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (err) {}
};

store.subscribe(() => {
   saveState(store.getState());
});
//#endregion

export default store;