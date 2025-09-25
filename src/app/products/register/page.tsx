"use client";

import { Formik, Form } from "formik";
import { useRouter } from "next/navigation";
import { DivField } from "@/common/DivField";
import { productSchema } from "@/scheme/product";
import { api } from "@/api";

export default function CreateProductPage() {
  const router = useRouter();

  const handleSubmit = async (values: any) => {
    const res = await api.post("/api/products", values);
    if (res.status === 201) {
      alert("Produto criado com sucesso!");
      router.push("/products");
    }
  };

  const handleCsvUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    const res = await api.post("/api/products/upload", formData);
    if (res.status === 201) {
      alert("Produtos importados com sucesso!");
      router.push("/products");
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6 min-h-screen">
      <h1 className="title">Criar Produto</h1>

      <div className="flex flex-1 justify-between gap-4">
        <div className="flex-1 peer-checked/form:hidden block border p-6 rounded-lg">
          <div className="flex justify-between w-full ">
            <h2 className="font-semibold mb-4">Cadastro Manual</h2>
            <input
              type="radio"
              name="radio-0"
              className="radio"
              id="defaultRadio1"
            />
          </div>
          <Formik
            initialValues={{
              name: "",
              price: "",
              description: "",
              publishDate: "",
              imageUrl: "",
            }}
            validationSchema={productSchema}
            onSubmit={handleSubmit}
          >
            {({ handleSubmit }) => (
              <Form className="flex flex-col gap-4">
                <DivField label="Nome" name="name" />
                <DivField label="Preço" name="price" type="number" />
                <DivField
                  label="Descrição"
                  name="description"
                  type="textarea"
                />
                <DivField
                  label="Data de Publicação"
                  name="publishDate"
                  type="date"
                />
                <DivField label="URL da Imagem" name="imageUrl" type="url" />

                <button
                  onClick={() => handleSubmit()}
                  className="mt-4 btn btn-primary"
                >
                  Criar Produto
                </button>
              </Form>
            )}
          </Formik>
        </div>

        <div className="flex flex-1 flex-col items-center gap-4 border p-6 rounded-lg">
          <div className="flex justify-between w-full ">
            <h2 className="font-semibold mb-4">Cadastro Manual</h2>
            <input
              type="radio"
              name="radio-0"
              className="radio"
              id="defaultRadio1"
            />
          </div>
          <p className="text-sm text-gray-600">
            Envie um arquivo <strong>CSV</strong> com os produtos
          </p>
          <input
            type="file"
            accept=".csv"
            className="file-input file-input-bordered w-full max-w-xs"
            onChange={handleCsvUpload}
          />
        </div>
      </div>
    </div>
  );
}
