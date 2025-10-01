import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const updateToken = (value: string) =>
  (api.defaults.headers.common.Authorization = `Bearer ${value}`);
