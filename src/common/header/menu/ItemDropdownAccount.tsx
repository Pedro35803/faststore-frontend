"use client";

import { useAuth } from "@/common/authContext";
import {
  MdAccountCircle,
  MdHistory,
  MdManageAccounts,
  MdSettings,
} from "react-icons/md";
import { TbLogout } from "react-icons/tb";

const trlRole = {
  SELLER: "Vendedor",
  CLIENT: "Client",
};

export const HeaderAccount = () => {
  const { user, logout } = useAuth();
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
            {user?.picture ? (
              <img
                src={user.picture}
                alt="imagem de perfil"
                className="size-10"
              />
            ) : (
              <MdAccountCircle size={40} />
            )}
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
              {user?.picture ? (
                <img
                  src={user.picture}
                  alt="imagem de perfil"
                  className="size-10"
                />
              ) : (
                <MdAccountCircle size={36} />
              )}
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
        {user?.role === "CLIENT" && (
          <li>
            <a className="dropdown-item" href="/historic">
              <MdHistory size={24} />
              Histórico de Compras
            </a>
          </li>
        )}
        {user?.role === "SELLER" && (
          <li>
            <a className="dropdown-item" href="/dashboard">
              <MdHistory size={24} />
              Dashboard
            </a>
          </li>
        )}
        <li className="dropdown-footer gap-2">
          <button className="btn btn-error btn-soft btn-block" onClick={logout}>
            <TbLogout className="size-5" />
            Sair
          </button>
        </li>
      </ul>
    </div>
  );
};
