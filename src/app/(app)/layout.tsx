"use client";

import { Header } from "@/common/header/Header";
import { ChildrenProps } from "@/types/common";

export default function AuthLayout({ children }: ChildrenProps) {
  return (
    <div className="container font-sans min-h-screen">
      <div className="flex flex-col items-center py-5">
        <div className="space-y-5 w-full">
          <Header />
          {children}
        </div>
      </div>
    </div>
  );
}
