"use client";

import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa"; // React Icons

export const HeaderReturn = () => {
  const router = useRouter();

  return (
    <header className="py-4">
      <button
        onClick={() => router.back()}
        className="flex gap-2 items-center font-bold"
      >
        <FaArrowLeft className="w-5 h-5" />
        Voltar
      </button>
    </header>
  );
};
