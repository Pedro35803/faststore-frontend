"use client";

import React from "react";
import { MdAccountCircle } from "react-icons/md";

import { UserStatus } from "@/types/user";

interface AccountStatusProps {
  accountStatus: UserStatus;
}

const accountLabel: Record<UserStatus, string> = {
  ACTIVE: "Ativa",
  INCOMPLETE: "Incompleta",
  SUSPENDED: "Suspensa",
  DELETED: "Deletada",
};

const accountStyle: Record<UserStatus, string> = {
  ACTIVE: "bg-blue-200 text-blue-800",
  INCOMPLETE: "bg-yellow-200 text-yellow-800",
  SUSPENDED: "bg-orange-200 text-orange-800",
  DELETED: "bg-red-200 text-red-800",
};

export const AccountStatus: React.FC<AccountStatusProps> = ({
  accountStatus,
}) => {
  const style = accountStyle[accountStatus];

  return (
    <div className="flex flex-col items-center p-4 bg-primary rounded-lg shadow-md w-full max-w-xs">
      <MdAccountCircle className="text-4xl mb-2 text-blue-500" />
      <h2 className="text-lg font-semibold mb-2">Status da Conta</h2>
      <span className={`px-4 py-2 rounded-full font-medium ${style}`}>
        {accountLabel[accountStatus]}
      </span>
    </div>
  );
};
