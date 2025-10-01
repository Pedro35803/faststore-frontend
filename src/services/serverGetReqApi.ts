"use server"; 

import { cookies } from "next/headers";
import { api, updateToken } from "@/api";
import { redirect } from "next/navigation";

export const apiGet = async <T>(url: string): Promise<T> => {
  const cookieStore = cookies(); // já é síncrono
  const token = cookieStore.get("nextauth.token")?.value;

  if (!token) {
    redirect("/");
  }

  updateToken(token);

  const response = await api.get<T>(url);
  return response.data;
};
