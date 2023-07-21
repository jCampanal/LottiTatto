//#region Imports
import { combineReducers } from "@reduxjs/toolkit";
//#endregion

//#region Reducer
const createReducer = (asyncReducers) => (state, action) => {
    const combinedReducer = combineReducers({
      ...asyncReducers,
    });
  
    return combinedReducer(state, action);
  };
//#endregion
