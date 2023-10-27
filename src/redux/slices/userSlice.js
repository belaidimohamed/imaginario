import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id:null,
  token: null,
  username:'ahmed'
};

export const userSlice= createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData(state, {payload: {userData}}) {
      console.log(userData)
      state.id = userData.id;
      state.token = userData.token;
      state.username = userData.username
    },
    logout(state) {
      state.id = null
      state.token = null
      state.username = ''
    }
  }
}); 

// Action creators are generated for each case reducer function
export const { setUserData,logout } = userSlice.actions;

export default userSlice.reducer;