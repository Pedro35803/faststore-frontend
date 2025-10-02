import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import FlyonuiScript from "@/common/FlyonuiScript";
import { AuthContextProvider } from "@/common/authContext";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FastStore",
  description: "Uma loja fictícia para compra e venda de items",
};

type CSSVars = { [key: `--${string}`]: string | number };

const rootStyle: React.CSSProperties & CSSVars = {
  "--vsc-domain": "localhost",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={rootStyle}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthContextProvider>{children}</AuthContextProvider>
        <FlyonuiScript />
      </body>
    </html>
  );
}
