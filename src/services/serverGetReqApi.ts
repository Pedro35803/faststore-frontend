"use server";

import { api, updateToken } from "@/api";
import { getCookieAuth } from "./cookiesServer";

export const apiGet = async <T>(url: string): Promise<T> => {
  const token = await getCookieAuth();
  updateToken(token);

  const response = await api.get<T>(url);
  return response.data;
};
