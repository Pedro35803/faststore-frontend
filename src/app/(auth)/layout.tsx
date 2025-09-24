import { HeaderReturn } from "@/common/header/HeaderReturn";

export default function AuthRouter({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
