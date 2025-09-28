"use client";

import { useFormikContext } from "formik";

export const ButtonSend = () => {
  const { handleSubmit } = useFormikContext();
  return (
    <button
      onClick={() => handleSubmit()}
      className="mt-4 btn btn-primary w-full"
    >
      Criar Produto
    </button>
  );
};
