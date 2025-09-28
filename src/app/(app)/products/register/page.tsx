"use client";

import { useRouter } from "next/navigation";
import { FormManualRegisterProducts } from "./_components/FormManualRegisterProducts";
import { FormCsvFileRegisterProducts } from "./_components/FormCsvFileRegisterProducts";
import { convertObjForFormData } from "@/services/formData";
import { api } from "@/api";
import { useState } from "react";

type OptionsTab = "forms" | "file";
const stlHandleForm = "rounded-field text-base-content z-10 h-8 w-1/2";

export default function CreateProductPage() {
  const [activeTab, setActiveTab] = useState<OptionsTab>("forms");
  const router = useRouter();

  const handleSubmit = async (values: any) => {
    const formData = convertObjForFormData(values);
    const res = await api.post("/products", formData);
    if (res.status === 201) {
      alert("Produto criado com sucesso!");
      router.push("/products");
    }
  };

  const props = { handleSubmit };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6 min-h-screen">
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
        <FormManualRegisterProducts {...props} />
        <FormCsvFileRegisterProducts {...props} />
      </div>

      <div className="flex flex-1 md:hidden justify-center">
        {activeTab === "forms" ? (
          <FormManualRegisterProducts {...props} />
        ) : (
          <FormCsvFileRegisterProducts {...props} />
        )}
      </div>
    </div>
  );
}
