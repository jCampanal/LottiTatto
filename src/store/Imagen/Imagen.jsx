import { createSlice } from "@reduxjs/toolkit";





const ImagenSlice = createSlice({
    name: "imagenSlice",
    initialState: {
      Open: false,
      Close: false,    
      Content: null,    
    },
    reducers: {
      setOpenImagen: (state, action) => {
        state.Open = action.payload;
      },
      setCloseImagen: (state, action) => {               
          state.Close = action.payload;
      },
      setContentImagen: (state, action) => {        
          state.Content = action.payload;
      },
      
    },
   
  });
  
  export const { setOpenImagen, setCloseImagen, setContentImagen } = ImagenSlice.actions;
  
  export const selectOpen = (state) => state.imagen.Open;
  export const selectClose = (state) => state.imagen.Close;
  export const selectContent = (state) => state.imagen.Content;
  
  export default ImagenSlice.reducer;