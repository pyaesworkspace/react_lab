import axios from "axios";

const API_URL = "https://jsonplaceholder.org";

export const apiClient = axios.create({
  baseURL: API_URL,
});
