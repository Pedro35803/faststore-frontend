"use client";

import { Menu } from "./menu/Menu";

export const Header = () => {
  return (
    <nav className="navbar bg-base-100 rounded-box shadow-base-300/20 shadow-sm">
      <div className="flex flex-1 items-center">
        <a
          className="link text-base-content link-neutral text-xl font-bold no-underline"
          href="/"
        >
          FastStore
        </a>
      </div>
      <Menu />
    </nav>
  );
};
