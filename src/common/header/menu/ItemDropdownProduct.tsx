"use client";

import { TbChevronDown } from "react-icons/tb";
import { ItemLink, ItemLinkDropdown } from "./ItemMenu";
import { useAuth } from "@/common/authContext";

export const DropdownProduct = () => {
  const { type, user } = useAuth();
  if (type != "SELLER") return <ItemLink name="Produtos" link="/products" />;
  return (
    <li className="dropdown relative inline-flex">
      <button
        id="dropdown-default"
        type="button"
        className="dropdown-toggle"
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
        <ItemLinkDropdown name="Meus Produtos" link={`/store/${user?.id}`} />
        <ItemLinkDropdown name="Registrar Produtos" link="/products/register" />
        <hr className="border-base-content/25 -mx-2" />
        <ItemLinkDropdown name="Todos Produtos" link="/products" />
      </ul>
    </li>
  );
};
