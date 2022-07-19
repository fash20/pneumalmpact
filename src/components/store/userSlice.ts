import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./userAction";

const initialState = {
  loading: false,
  userInfo: {},
  userToken: "",
  error: "",
  success: false,
};

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
  },
});

export default userSlice.reducer
