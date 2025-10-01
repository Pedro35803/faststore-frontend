"use client";

import { Menu } from "./menu/Menu";

export const Header = () => {
  return (
    <nav className="navbar justify-between bg-base-100 rounded-box shadow-base-300/20 shadow-sm">
      <p className="text-xl font-bold">FastStore</p>
      <Menu />
    </nav>
  );
};
