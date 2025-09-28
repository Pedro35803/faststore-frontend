"use client";

import { useAuth } from "@/common/authContext";

import { HeaderAccount } from "./ItemDropdownAccount";
import { DropdownProduct } from "./ItemDropdownProduct";
import { ItemLink } from "./ItemMenu";

import { useRouter } from "next/navigation";

export const Menu = () => {
  const { type, isLogged } = useAuth();
  const router = useRouter();

  return (
    <div className="navbar-end flex items-center gap-4">
      <div className="flex items-center gap-7.5">
        <div
          id="dropdown-navbar-collapse"
          className="md:navbar-end collapse hidden grow basis-full overflow-hidden transition-[height] duration-300 max-md:w-full"
        >
          <ul className="menu md:menu-horizontal gap-2 p-0 text-base max-md:mt-2">
            <ItemLink name="Home" link="/" />

            {type == "SELLER" && <ItemLink name="Dashboard" />}
            {type == "CLIENT" && <ItemLink name="Carrinho" link="/cart" />}
            {type == "CLIENT" && (
              <ItemLink name="Favoritos" link="/favorites" />
            )}
            <ItemLink name="Lojas" link="/store" />

            <DropdownProduct />
          </ul>
        </div>
        {isLogged ? (
          <HeaderAccount />
        ) : (
          <button
            className="btn btn-error w-20"
            onClick={() => router.push("/login")}
          >
            Entrar
          </button>
        )}
      </div>
    </div>
  );
};
