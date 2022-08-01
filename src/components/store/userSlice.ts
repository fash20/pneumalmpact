import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./userAction";

const initialState = {
  loading: false,
  userData: {},
  userToken: "",
  error: "",
  success: false,
};

const userData = localStorage.getItem('userToken')
? localStorage.getItem('userToken')
: null

const loginInitialState = {
  loading: false,
  userData: {},
  userToken: '',
  error: "",
  success: false,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [registerUser.pending as any]: (state) => {
      state.loading = true
      state.error = null
    },
    [registerUser.fulfilled as any]: (state, {payload}) => {
      state.loading = false
      state.error = payload
    },
    [registerUser.rejected as any]: (state, {payload}) => {
      state.loading = false
      state.error = payload
    },
    [loginUser.pending as any]:(state) => {
      state.loading = true
      state.error = null
    },
    [loginUser.fulfilled as any]: (state, {payload})=> {
      state.loading = false
      state.userToken = payload.token
      state.userData = payload
    },
    [loginUser.rejected as any]: (state, {payload})=>{
      state.loading = false
      state.error = payload
    }
  },
});

export default userSlice.reducer
