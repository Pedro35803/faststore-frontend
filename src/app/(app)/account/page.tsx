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

const createObjFile = (url: string = "") => {
  const filename = url.split("/").pop();
  const extension = filename.split(".").pop();
  const file = new File([url], filename, { type: `image/${extension}` });
  return file;
};

export default function AccountPage() {
  const { user } = useAuth();

  async function submit(fields: AccountFormValues) {
    try {
      const formData = new FormData();
      Object.entries(fields).forEach(([key, value]) => {
        formData.append(key, value);
      });
      await api.patch(`/users/${user?.id}`, formData);
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
  }

  return (
    <div className="items-center flex-1">
      <div className="w-full gap-6 flex flex-1 flex-col items-center">
        <h2 className="title">Editar Conta</h2>
        <Formik
          initialValues={{ ...user, picture: createObjFile(user?.picture) }}
          validationSchema={user?.role === "CLIENT" ? userSchema : sellerSchema}
          onSubmit={submit}
        >
          {() => (
            <Form className="flex flex-col flex-1 items-center gap-4 w-full max-w-lg">
              <ImgPerfil />
              {user?.role === "CLIENT" && (
                <LevelAccount level={user?.accountLevel} />
              )}
              <DivField label="Email" name="email" type="email" disabled />
              <DivField label="Nome" name="name" />
              {user?.role === "SELLER" && (
                <>
                  <DivField name="cnpj" label="Seu CNPJ" />
                  <DivField name="phone" label="Seu Telefone" />
                </>
              )}
              <ButtonRequest>Salvar</ButtonRequest>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
