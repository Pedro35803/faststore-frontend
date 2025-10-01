"use client";

import { api } from "@/api";
import { useAuth } from "@/common/authContext";
import { ButtonRequest } from "@/common/ButtonRequest";
import { DivField } from "@/common/DivField";
import { HeaderReturn } from "@/common/header/HeaderReturn";
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { SelectRole } from "./_components/SelectRole";
import { RegisterFormValues, registerSchema } from "@/scheme/auth";

export default function RegisterPage() {
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (values: RegisterFormValues) => {
    const register = await api.post("/register", values);
    if (register.status === 201) {
      await login(values);
      router.push("/products");
    }
  };
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <div className="max-w-sm w-full">
        <HeaderReturn />
        <div className="card shadow-2xl bg-base-100 pb-6">
          <div className="card-body">
            <h2 className="title">Registro</h2>

            <Formik
              initialValues={{
                email: "",
                password: "",
                confirmPassword: "",
                role: "",
              }}
              validationSchema={registerSchema}
              onSubmit={handleSubmit}
            >
              {() => (
                <Form className="flex flex-col gap-4">
                  <DivField
                    label="Email"
                    name="email"
                    placeholder="exemplo@email.com"
                    type="email"
                  />
                  <DivField
                    label="Senha"
                    name="password"
                    placeholder="••••••••"
                    type="password"
                  />
                  <DivField
                    label="Confirma Senha"
                    name="confirmPassword"
                    placeholder="••••••••"
                    type="password"
                  />
                  <DivField name="role" label="Tipo de Usuário">
                    <SelectRole />
                  </DivField>
                  <ButtonRequest>Registrar</ButtonRequest>
                </Form>
              )}
            </Formik>
          </div>

          <div className="text-center mt-2">
            <p className="text-sm">
              Já possui uma conta?{" "}
              <a href="/register" className="link link-primary">
                Faça Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
