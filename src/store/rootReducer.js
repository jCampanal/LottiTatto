//#region Imports
import { combineReducers } from "@reduxjs/toolkit";
import imagen from './Imagen'
//#endregion

//#region Reducer
const createReducer = (asyncReducers) => (state, action) => {
    const combinedReducer = combineReducers({
        imagen,
      ...asyncReducers,
    });
  
    return combinedReducer(state, action);
  };
//#endregion

export default createReducer;