import axios from "axios";

interface User{
    email: string,
    password: string
}

const API_URL = "http://178.62.239.5:3000/v1/api/auth/";
const register = (email:string, password: string) => {
  return axios.post(API_URL + "register", {
    email,
    password,
  });
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