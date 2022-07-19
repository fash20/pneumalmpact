import axios from "axios";

interface User{
    email: string,
    password: string
}

const API_URL = "https://api.pneumaimpact.ng/v1/api/auth/";

const config = {
  headers: {
  'Content-Type': 'application/json',
  },
  }

const register = (email:string, password: string) => {
  return axios.post(API_URL + "register", {
    email,
    password,
  }, config);
};


const login = (email: string, password: string) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data) {
        const user ={
          user:response.data.user.email,
          token: response.data.token
        }
        localStorage.setItem("user", JSON.stringify(user));
      }
      return response.data;
    })
    .catch(err=> err);
};


const logout = () => {
  localStorage.removeItem("user");
};


const authService = {
  register,
  login,
  logout,
};
export default authService;