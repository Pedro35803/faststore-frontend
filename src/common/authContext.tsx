"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { api, updateToken } from "../api";
import { User } from "../types/user";
import { ChildrenProps, LoginProps } from "@/types/common";
import { LoadingPage } from "./LoadingPage";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import { useRouter } from "next/navigation";

type AuthContext = {
  user?: User;
  type: User["role"] | undefined;
  isLogged: boolean;
  isLoading: boolean;
  logout: () => Promise<void>;
  login: (props: LoginProps) => Promise<User>;
};

const authContext = createContext({} as AuthContext);

const keyToken = "nextauth.token";
const seconds_in_hour = 3600;

export const AuthContextProvider = ({ children }: ChildrenProps) => {
  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState(true);

  const login = async ({ email, password }: LoginProps): Promise<void> => {
    const res = await api.post("/login", { email, password });
    if (res.status !== 201) throw { message: res.data, status: res.status };

    const { user, token } = res.data;

    setCookie(undefined, keyToken, token, { maxAge: seconds_in_hour });
    updateToken(token);

    setUser(user);
  };

  const getUser = async () => {
    try {
      const res = await api.get<User>("/user/me");
      setUser(res.data);
    } catch {
      setUser(undefined);
    } finally {
      setIsLoading(false);
    }
  };

  const setTokenFromCookies = () => {
    const { [keyToken]: token } = parseCookies();
    if (token) {
      updateToken(token);
    }
  };

  const logout = async () => {
    destroyCookie(undefined, keyToken);
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
