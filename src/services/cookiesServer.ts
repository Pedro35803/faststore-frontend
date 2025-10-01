import { cookies } from "next/headers";

export const getCookieAuth = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("nextauth.token")?.value;
  return token;
};
