"use client";

import React from "react";
import { MdStore } from "react-icons/md"; // ícone de loja

interface StoreAccountStatusProps {
  storeActive: boolean;
}

const statusLabel = {
  ACTIVE: "Ativa",
  DELETED: "Deletada",
  INACTIVE: "Desativada",
};

const statusStyle = {
  ACTIVE: "bg-green-200 text-green-800",
  DELETED: "bg-red-200 text-red-800",
  INACTIVE: "bg-gray-200 text-gray-800",
};

export const StoreStatus = ({ storeActive }: StoreAccountStatusProps) => {
  const status = storeActive ? "ACTIVE" : "INACTIVE";
  const style = statusStyle[status];

  return (
    <div className="flex flex-col items-center p-4 bg-primary rounded-lg shadow-md w-full max-w-xs">
      <MdStore className="text-4xl mb-2 text-green-500" />

      <h2 className="text-lg font-semibold mb-2">Status da Loja</h2>

      <span className={`px-4 py-2 rounded-full font-medium ${style}`}>
        {statusLabel[status]}
      </span>
    </div>
  );
};
