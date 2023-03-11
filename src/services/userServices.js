import axios from "axios";
const baseURL = "http://localhost:9000/api";

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
