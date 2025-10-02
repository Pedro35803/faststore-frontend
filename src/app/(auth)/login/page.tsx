"use client";

import { useAuth } from "@/common/authContext";
import { ButtonRequest } from "@/common/ButtonRequest";
import { DivField } from "@/common/DivField";
import { HeaderReturn } from "@/common/header/HeaderReturn";
import { loginSchema } from "@/scheme/auth";
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { login, isLogged } = useAuth();
  const router = useRouter();

  if (isLogged) router.replace("/");

  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <div className="max-w-sm w-full">
        <HeaderReturn />
        <div className="card shadow-2xl bg-base-100 pb-6">
          <div className="card-body">
            <h2 className="title">Login</h2>

            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={loginSchema}
              onSubmit={async (values) => {
                await login(values);
                window.location.reload();
              }}
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
                  <ButtonRequest>Entrar</ButtonRequest>
                </Form>
              )}
            </Formik>
          </div>

          <div className="text-center mt-2">
            <p className="text-sm">
              Não tem conta?{" "}
              <a href="/register" className="link link-primary">
                Cadastre-se
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
