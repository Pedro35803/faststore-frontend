import { FaBoxOpen } from "react-icons/fa";
import React from "react";

interface EmptyPageProps {
  message?: string | React.ReactElement;
}

export const EmptyPage: React.FC<EmptyPageProps> = ({
  message = "Esta página está vazia",
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 text-center text-gray-500">
      <div className="text-6xl mb-4 text-gray-300">
        <FaBoxOpen />
      </div>
      <p className="text-lg font-medium">{message}</p>
    </div>
  );
};
