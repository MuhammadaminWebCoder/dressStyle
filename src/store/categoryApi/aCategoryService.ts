import axios from "axios";

const BASE_URL = import.meta.env.VITE_API;

export const getCategories = async () => {
  const response = await axios.get(`${BASE_URL}/categories`);
  return response.data;
};
