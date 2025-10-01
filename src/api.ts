import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

export const updateToken = (value: string) =>
  (api.defaults.headers.common.Authorization = `Bearer ${value}`);
