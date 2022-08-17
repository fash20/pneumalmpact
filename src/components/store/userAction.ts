import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
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
      AuthService.register(user.email, user.password)
        .then((res) => {
          // toast.success(res.data.message);
        })
        .catch((err) => toast.error(err.response.data.errors[0].msg));
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      } else {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (user: User, thunkAPI) => {
    try {      
      AuthService.login(user.email, user.password)
        .then((res) => {
          // toast.success(res.data.message);
          // if res !== null ? toast
          // toast.error(res.data.message)
        })
        .catch((err) => {
          // toast.error(err.response.data.errors[0].msg)
        });
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        toast.error(error.response.data.message)
        return thunkAPI.rejectWithValue(error.response.data.message);
      } else {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);


export const getUserDetails = createAsyncThunk(
  'user/getUser/Details',
  async(arg, {getState, rejectWithValue})=>{
    try{
      const {user} = getState() as any

      const config = {
        headers: {
          Authorization: `Bearer ${user.userToken}`,
        },
      }
      const { data } = await axios.get(`/api/user/profile`, config)
      return data
    }
    catch (error:any) {
      if (error.response && error.response.data.message) {
        toast.error(error.response.data.message)
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
)
