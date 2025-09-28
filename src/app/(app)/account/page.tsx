"use client";

import { useAuth } from "@/common/authContext";
import { DivField } from "@/common/DivField";
import { Form, Formik } from "formik";
import { LevelAccount } from "./_components/LevelAccount";
import { AccountFormValues, userSchema } from "@/scheme/user";
import { BiPencil } from "react-icons/bi";
import { AxiosError, AxiosResponse } from "axios";
import { api } from "@/api";

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
      <div className="w-full max-w-md gap-6 flex flex-1 flex-col items-center">
        <h2 className="title">Editar Conta</h2>
        <LevelAccount level="initial" />
        <Formik
          initialValues={{ ...user, picture: createObjFile(user?.picture) }}
          validationSchema={userSchema}
          onSubmit={submit}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col flex-1 gap-4">
              <DivField label="Email" name="email" type="email" disabled />
              <DivField label="Nome" name="name" />
              <DivField label="Nome" name="name" />
              <div className="form-control mt-2">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Criando..." : "Registrar"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
