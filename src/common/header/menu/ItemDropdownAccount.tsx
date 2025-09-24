"use client";

import { MdAccountCircle } from "react-icons/md";

export const HeaderAccount = () => {
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
              Usuário Logado
            </h6>
            <small className="text-base-content/50">Cliente</small>
          </div>
        </li>
        <li>
          <a className="dropdown-item" href="/profile">
            <span className="icon-[tabler--user]"></span>
            Meu Perfil
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/settings">
            <span className="icon-[tabler--settings]"></span>
            Configurações
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
