"use client";

import { DivField } from "@/common/DivField";
import { HeaderReturn } from "@/common/header/HeaderReturn";
import { Form, Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email("Email inválido").required("O email é obrigatório"),
  password: Yup.string().required("A senha é obrigatória"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "As senhas devem ser iguais")
    .required("Confirme a senha"),
});

type FormValues = Yup.InferType<typeof validationSchema>;

const handleSubmit = (values: FormValues) => {
  console.log(values);
  // aqui você pode chamar sua API de login
};

export default function RegisterPage() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <div className="max-w-sm w-full">
        <HeaderReturn />
        <div className="card shadow-2xl bg-base-100 pb-6">
          <div className="card-body">
            <h2 className="title">Registro</h2>

            <Formik
              initialValues={{ email: "", password: "", confirmPassword: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
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
