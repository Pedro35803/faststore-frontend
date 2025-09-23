import { api } from "@/api";

export const useResource = async <T>(url: string) => {
  const response = await api.get<T>(url);
  return response.data;
};
