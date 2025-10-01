"use client";

import { useRouter } from "next/navigation";
import { FormManualRegisterProducts } from "./_components/FormManualRegisterProducts";
import { FormCsvFileRegisterProducts } from "./_components/FormCsvFileRegisterProducts";
import { convertObjForFormData } from "@/services/formData";
import { api } from "@/api";
import { useState } from "react";
import { useAuth } from "@/common/authContext";
import Swal from "sweetalert2";

type OptionsTab = "forms" | "file";
const stlHandleForm = "rounded-field text-base-content z-10 h-8 w-1/2";

export default function CreateProductPage() {
  const [activeTab, setActiveTab] = useState<OptionsTab>("forms");
  const router = useRouter();
  const { user, isLogged } = useAuth();

  const handleSubmitFormManual = async (values: any) => {
    const res = await api.post("/products", values);
    if (res.status === 201) {
      Swal.fire("Produto registrado com sucesso!", "", "success");
      router.push("/products");
    }
  };

  if (isLogged && user?.status !== "ACTIVE") router.push("/account");

  const propsForm = { handleSubmit: handleSubmitFormManual };

  return (
    <div className="max-w-5xl flex-1 mx-auto p-6 space-y-6 min-h-screen">
      <h1 className="title">Criar Produto</h1>

      <div className="relative flex gap-2 w-full md:hidden">
        <div
          className={`rounded-field bg-base-100 shadow-base-300/20 absolute h-8 w-1/2 shadow-sm transition-transform duration-400 ease-in-out 
          ${activeTab === "forms" ? "translate-x-0" : ""}
          ${activeTab === "file" ? "translate-x-full" : ""}
          `}
        />

        <button onClick={() => setActiveTab("forms")} className={stlHandleForm}>
          Formulário Manual
        </button>
        <button onClick={() => setActiveTab("file")} className={stlHandleForm}>
          Envio de Arquivo
        </button>
      </div>

      <div className="hidden md:flex flex-1 justify-between gap-4">
        <FormManualRegisterProducts {...propsForm} />
        <FormCsvFileRegisterProducts />
      </div>

      <div className="flex flex-1 md:hidden justify-center">
        {activeTab === "forms" ? (
          <FormManualRegisterProducts {...propsForm} />
        ) : (
          <FormCsvFileRegisterProducts />
        )}
      </div>
    </div>
  );
}
