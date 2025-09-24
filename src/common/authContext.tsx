"use client";

import Cookies from "js-cookie";
import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../api";
import { User } from "../types/user";
import { ChildrenProps } from "@/types/common";

type AuthContext = {
  user?: User;
  type: User["role"] | undefined;
  isLogged: boolean;
  isLoading: boolean;
  logout: () => Promise<void>;
  login: (email: string, password: string) => Promise<User>;
};

const authContext = createContext({} as AuthContext);

export const AuthContextProvider = ({ children }: ChildrenProps) => {
  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState(true);

  const login = async (email: string, password: string): Promise<User> => {
    const res = await api.post("/auth/login", { email, password });
    if (res.status !== 201) throw { message: res.data, status: res.status };
    const { user, token } = res.data;
    setUser(user);
    Cookies.set("token", token);
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    return res.data;
  };

  const getUser = async () => {
    try {
      const res = await api.get<User | undefined>("/users/me");
      setUser(res.data);
    } catch {
      setUser(undefined);
    }
    setIsLoading(false);
  };

  const setTokenFromCookies = () => {
    const token = Cookies.get("token");
    if (token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
  };

  const logout = async () => {
    Cookies.set("token", "");
    setUser(undefined);
  };

  const isLogged = !!user;
  const type = user?.role;

  useEffect(() => {
    setTokenFromCookies();
    getUser();
  }, []);

  return (
    <authContext.Provider
      value={{
        user,
        type,
        login,
        logout,
        isLogged,
        isLoading,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export function useAuth() {
  return useContext(authContext);
}
