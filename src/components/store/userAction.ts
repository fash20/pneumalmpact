import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import AuthService from "./auth";

interface User {
  email: string;
  password: string;
}

export const registerUser = createAsyncThunk(
  "auth/regiter",
  async (user: User, thunkAPI) => {
    try {
      const response = await AuthService.register(user.email, user.password)
      .then((res)=> {
        toast.success(res.data.message)       
      })
      .catch(err=> toast.error(err.response.data.errors[0].msg))
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      } else {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);
