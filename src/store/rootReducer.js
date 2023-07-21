//#region Imports
import { combineReducers } from "@reduxjs/toolkit";
import Imagen from './Imagen'
//#endregion

//#region Reducer
const createReducer = (asyncReducers) => (state, action) => {
    const combinedReducer = combineReducers({
        Imagen,
      ...asyncReducers,
    });
  
    return combinedReducer(state, action);
  };
//#endregion

export default createReducer;