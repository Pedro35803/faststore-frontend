"use client";

import { Client } from "@/types/user";
import React from "react";
import { MdEmojiEvents } from "react-icons/md"; // ícone de medalha

interface LevelAccountProps {
  level: Client["level_account"];
}

const trlLabel = {
  silver: "Plata",
  gold: "Ouro",
  initial: "Inicial",
};

const styleLevel = {
  silver: "bg-gray-200 text-gray-800",
  gold: "bg-yellow-200 text-yellow-800",
  initial: "bg-blue-200 text-blue-800",
};

export const LevelAccount: React.FC<LevelAccountProps> = ({
  level,
}: LevelAccountProps) => {
  const style = styleLevel[level] || styleLevel.initial;

  return (
    <div className="flex flex-col items-center p-4 bg-primary rounded-lg shadow-md w-full max-w-xs">
      <MdEmojiEvents className="text-4xl mb-2 text-yellow-500" />

      <h2 className="text-lg font-semibold mb-2">Level da Conta</h2>

      <span className={`px-4 py-2 rounded-full font-medium ${style}`}>
        {trlLabel[level]}
      </span>
    </div>
  );
};
