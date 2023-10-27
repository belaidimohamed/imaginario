import { configureStore  , combineReducers} from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import themeReducer from './slices/themeSlice'


const rootReducer = combineReducers({ 
  user: userReducer,
  theme: themeReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

