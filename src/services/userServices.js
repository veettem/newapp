import axios from "axios";
const baseURL = process.env.REACT_APP_API_KEY;

export const signUpService = async (data) => {
  return axios.post(`${baseURL}/users/create-user`, data, {
    headers: { "Content-Type": "Application/json", Accept: "*/*" },
  });
};

export const logInService = async (data) => {
  return axios.post(`${baseURL}/users/login-user`, data, {
    headers: { "Content-Type": "Application/json", Accept: "*/*" },
  });
};
