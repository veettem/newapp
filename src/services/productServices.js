import axios from "axios";
const baseURL = process.env.REACT_APP_API_KEY;

export const getProducts = async () => {
  return axios.get(`${baseURL}/products/get-products`);
};
