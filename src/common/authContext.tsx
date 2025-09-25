"use client";

import Cookies from "js-cookie";
import { createContext, useContext, useEffect, useState } from "react";
import { api, updateToken } from "../api";
import { User } from "../types/user";
import { ChildrenProps } from "@/types/common";
import { LoadingPage } from "./LoadingPage";

type LoginProps = {
  email: string;
  password: string;
};

type AuthContext = {
  user?: User;
  type: User["role"] | undefined;
  isLogged: boolean;
  isLoading: boolean;
  logout: () => Promise<void>;
  login: (props: LoginProps) => Promise<User>;
};

const authContext = createContext({} as AuthContext);

const tokenKey = "token";

export const AuthContextProvider = ({ children }: ChildrenProps) => {
  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState(true);

  const login = async ({ email, password }: LoginProps): Promise<User> => {
    const res = await api.post("/login", { email, password });
    if (res.status !== 201) throw { message: res.data, status: res.status };
    const { user, token } = res.data;
    setUser(user);
    updateToken(`Bearer ${token}`);
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
    const token = Cookies.get(tokenKey);
    if (token) {
      updateToken(`Bearer ${token}`);
    }
  };

  const logout = async () => {
    Cookies.set(tokenKey, "");
    setUser(undefined);
  };

  const isLogged = !!user;
  const type = user?.role;

  useEffect(() => {
    setTokenFromCookies();
    getUser();
  }, []);

  if (isLoading) return <LoadingPage />;

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
