import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import authReducer from "./authSlice";
import messageReducer from "./message";


const reducer = {
  auth: authReducer,
  message: messageReducer
}
const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch 


export default store;