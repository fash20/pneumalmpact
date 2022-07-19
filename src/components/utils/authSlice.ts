import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";
import AuthService from "./auth";

const user = JSON.parse(localStorage.getItem("user"));

interface User {
  email: string,
  password: string
}



export const login = createAsyncThunk(
  'auth/login',
  async  (user:User, thunkAPI) => {
    try{
    const response = await AuthService.login(user.email, user.password);
    thunkAPI.dispatch(setMessage(response.status));
    return { user: response };
  } catch (error: any) {
    const message =
      (error.response &&
        error.response.data &&
        error.response.data.message) ||
      error.message ||
      error.toString();
    thunkAPI.dispatch(setMessage(message));
    console.log(error.AxiosError)
    return thunkAPI.rejectWithValue({value:error.response});
  }
}
);


export const register = createAsyncThunk(
  "auth/register",
  async ( user:User, thunkAPI) => {
    try {
      const response = await AuthService.register(user.email, user.password);
      thunkAPI.dispatch(setMessage(response.data.message));
      return response.data;
    } catch (error:any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue({value:error.response});
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await AuthService.logout();
});

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

  
  
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers:{},
  extraReducers: {
    [register.fulfilled as any ]: (state: { isLoggedIn: boolean; }, action: any) => {
      state.isLoggedIn = false;
    },
    [register.rejected as any]: (state: { isLoggedIn: boolean; }, action: any) => {
      state.isLoggedIn = false;
    },
    [login.fulfilled as any]: (state: { isLoggedIn: boolean; user: any; }, action: { payload: { user: any; }; }) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [login.rejected as any]: (state: { isLoggedIn: boolean; user: any; }, action: any) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [logout.fulfilled as any ]: (state: { isLoggedIn: boolean; user: any; }, action: any) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});
const { reducer } = authSlice;
export default reducer;
