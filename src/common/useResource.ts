"use client";

import { useCallback, useEffect, useState } from "react";
import { api } from "../api";

export const useResource = <T>(path: string, list: string[] = []) => {
  const [resource, setResource] = useState<T>();

  const getResource = useCallback(async () => {
    const res = await api.get<T>(path);
    setResource(res.data);
  }, [path, list]);

  useEffect(() => {
    getResource();
  }, [getResource]);

  return resource;
};
