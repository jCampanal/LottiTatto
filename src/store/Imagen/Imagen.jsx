import { createSlice } from "@reduxjs/toolkit";





const ImagenSlice = createSlice({
    name: "imagen",
    initialState: {
      Open: false,    
      Content: null,    
    },
    reducers: {
      setOpenImagen: (state, action) => {
        state.Open = action.payload;
      },
      setContentImagen: (state, action) => {        
          state.Content = action.payload;
      },
      
    },
   
  });
  
  export const { setOpenImagen, setContentImagen } = ImagenSlice.actions;
  
  export const selectOpen = (state) => state.imagen.Open;
  export const selectContent = (state) => state.imagen.Content;
  
  export default ImagenSlice.reducer;