"use client";

import { TbChevronDown } from "react-icons/tb";
import { ItemLink, ItemLinkDropdown } from "./ItemMenu";
import { useAuth } from "@/common/authContext";

export const DropdownProduct = () => {
  const { type } = useAuth();
  if (type != "SELLER") return <ItemLink name="Produtos" />;
  return (
    <li className="dropdown relative inline-flex [--auto-close:inside] [--offset:9] [--placement:bottom-end]">
      <button
        id="dropdown-nav"
        type="button"
        className="dropdown-toggle dropdown-open:bg-base-content/10 dropdown-open:text-base-content"
        aria-haspopup="menu"
        aria-expanded="false"
        aria-label="Dropdown"
      >
        Produtos
        <TbChevronDown className="size-4 dropdown-open:rotate-180" />
      </button>
      <ul
        className="dropdown-menu dropdown-open:opacity-100 hidden"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="dropdown-nav"
      >
        <ItemLinkDropdown name="Meus Produtos" />
        <ItemLinkDropdown name="Registrar Produtos" />
        <hr className="border-base-content/25 -mx-2" />
        <ItemLinkDropdown name="Todos Produtos" />
      </ul>
    </li>
  );
};
