import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type:'dark',
};

export const themeSlice= createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme(state) {
      state.type =  state.type =='light'? 'dark':'light';
    },
  }
}); 

// Action creators are generated for each case reducer function
export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;