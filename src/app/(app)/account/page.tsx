"use client";

import { useAuth } from "@/common/authContext";
import { DivField } from "@/common/DivField";
import { Form, Formik } from "formik";
import { LevelAccount } from "./_components/LevelAccount";
import { AccountFormValues, sellerSchema, userSchema } from "@/scheme/user";
import { AxiosError, AxiosResponse } from "axios";
import { api } from "@/api";
import { ButtonRequest } from "@/common/ButtonRequest";
import { ImgPerfil } from "./_components/ImgPerfil";
import { useRouter } from "next/navigation";

const createObjFile = (url: string = "") => {
  const filename = url.split("/").pop();
  const extension = filename.split(".").pop();
  const file = new File([url], filename, { type: `image/${extension}` });
  return file;
};

export default function AccountPage() {
  const { user, isLogged } = useAuth();
  const router = useRouter();

  if (!isLogged) return router.push("/login");

  const submit = async (fields: AccountFormValues) => {
    try {
      await api.patch(`/user/me`, fields);
      router.push("/products");
      // openModal();
    } catch (err) {
      const error = err as AxiosError;
      console.log(error);
      // if (error.response) {
      //   const { data, status }: AxiosResponse = error.response;
      //   if (status !== 201) {
      //     const message = data?.message || data;
      //     setError("email", { type: "custom", message });
      //   }
      // }
    }
  };

  return (
    <div className="items-center flex-1">
      <div className="w-full gap-1 flex flex-1 flex-col items-center">
        <h2 className="title">Editar Conta</h2>
        <Formik
          initialValues={{
            ...user,
            ...user?.seller,
            picture: createObjFile(user?.picture),
          }}
          validationSchema={user?.role === "CLIENT" ? userSchema : sellerSchema}
          onSubmit={submit}
        >
          {({ errors }) => (
            <Form className="flex flex-col flex-1 items-center gap-4 w-full max-w-2xl">
              <ImgPerfil />
              {user?.role === "CLIENT" && (
                <LevelAccount level={user?.accountLevel} />
              )}
              <div className="flex gap-4 w-full">
                <div className="w-full">
                  <DivField label="Email" name="email" type="email" disabled />
                  <DivField label="Nome" name="name" />
                </div>
                {user?.role === "SELLER" && (
                  <div className="w-full">
                    <DivField name="cnpj" label="Seu CNPJ" />
                    <DivField name="store_name" label="Nome da Loja" />
                    <DivField name="description" label="Descrição da Loja" />
                  </div>
                )}
              </div>
              <ButtonRequest>Salvar</ButtonRequest>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
