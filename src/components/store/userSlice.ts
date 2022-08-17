import { AsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser, getUserDetails } from "./userAction";

const userData = localStorage.getItem('user')
? JSON.parse( localStorage.getItem('user'))
: null

interface UserData {
  user: string,
  token: string
}

export interface State{
  loading: boolean,
  userData: UserData
  error: string,
  success: boolean,
}

const  initialState = {
  loading: false,
  userData: userData,
  error: "",
  success: false,
};


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [registerUser.pending as any]: (state:State) => {
      state.loading = true
      state.error = null
    },
    [registerUser.fulfilled as any]: (state:State, {payload}) => {
      state.loading = false
      state.error = payload
    },
    [registerUser.rejected as any]: (state:State, {payload}) => {
      state.loading = false
      state.error = payload
    },
    [loginUser.pending as any]:(state:State) => {
      state.loading = true
      state.error = null
    },
    [loginUser.fulfilled as any]: (state:State, {payload})=> {
      state.loading = false
      state.userData.token = payload.token
      state.userData.user = payload.user
    },
    [loginUser.rejected as any]: (state:State, {payload})=>{
      state.loading = false
      state.error = payload
    },
    [getUserDetails.pending as any] : (state:State, {payload})=>{
      state.loading = true

    }, 
    [getUserDetails.fulfilled as any] : (state:State, {payload})=>{
      state.loading = false
      state.userData = payload.user
    }, 
    [getUserDetails.fulfilled as any] : (state:State, {payload})=>{
      state.loading = false
    }, 
  },
});

export default userSlice.reducer
