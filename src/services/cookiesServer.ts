import { cookies } from "next/headers";

export const getCookieAuth = () => {
  const cookieStore = cookies();
  const token = cookieStore.get("nextauth.token")?.value;
  return token;
};
