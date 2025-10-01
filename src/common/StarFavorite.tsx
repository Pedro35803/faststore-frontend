"use client";

import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

type ButtonProps = React.ComponentPropsWithRef<"button">;

type FavoriteProps = {
  initial?: boolean;
  onChange?: (value: boolean) => Promise<void>;
} & Pick<ButtonProps, "className">;

export const StarFavorite = ({
  initial = false,
  onChange,
  className,
}: FavoriteProps) => {
  const [favorite, setFavorite] = useState(initial);

  const toggleFavorite = async () => {
    setFavorite(!favorite);
    await onChange?.(!favorite);
  };

  return (
    <button
      onClick={toggleFavorite}
      className={twMerge(
        "relative w-10 h-10 flex items-center justify-center",
        className
      )}
    >
      <FaStar
        stroke="2"
        className={`transition-transform duration-300 stroke-[2] ${
          favorite ? "text-yellow-400 scale-125" : "text-gray-400 scale-100"
        }`}
        size={24}
      />
      {favorite && (
        <span
          className="absolute w-10 h-10 rounded-full bg-yellow-300 animate-ping-once"
          style={{ animationIterationCount: 1 }}
        ></span>
      )}
    </button>
  );
};
