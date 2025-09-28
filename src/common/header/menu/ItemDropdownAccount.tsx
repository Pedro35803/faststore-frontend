"use client";

import { useAuth } from "@/common/authContext";
import {
  MdAccountCircle,
  MdHistory,
  MdManageAccounts,
  MdSettings,
} from "react-icons/md";

const trlRole = {
  SELLER: "Vendedor",
  CLIENT: "Client",
};

export const HeaderAccount = () => {
  const { user } = useAuth();
  return (
    <div className="dropdown relative inline-flex [--auto-close:inside] [--offset:8] [--placement:bottom-end]">
      <button
        id="dropdown-avatar"
        type="button"
        className="dropdown-toggle flex items-center"
        aria-haspopup="menu"
        aria-expanded="false"
        aria-label="Dropdown"
      >
        <div className="avatar">
          <div className="size-9.5 rounded-full">
            <MdAccountCircle size={40} />
          </div>
        </div>
      </button>
      <ul
        className="dropdown-menu dropdown-open:opacity-100 hidden min-w-60"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="dropdown-avatar"
      >
        <li className="dropdown-header gap-2">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <MdAccountCircle size={36} />
            </div>
          </div>
          <div>
            <h6 className="text-base-content text-base font-semibold">
              {user?.name}
            </h6>
            <small className="text-base-content/50">
              {trlRole[user?.role] || ""}
            </small>
          </div>
        </li>
        <li>
          <a className="dropdown-item" href="/account">
            <MdManageAccounts size={24} />
            Meu Perfil
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/settings">
            <MdSettings size={24} />
            Configurações
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/historic">
            <MdHistory size={24} />
            Histórico de Compras
          </a>
        </li>
        <li className="dropdown-footer gap-2">
          <a className="btn btn-error btn-soft btn-block" href="/logout">
            <span className="icon-[tabler--logout]"></span>
            Sair
          </a>
        </li>
      </ul>
    </div>
  );
};
