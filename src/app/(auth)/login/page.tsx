"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email("Email inválido").required("O email é obrigatório"),
  password: Yup.string().required("A senha é obrigatória"),
});

const handleSubmit = (values: { email: string; password: string }) => {
  console.log(values);
  // aqui você pode chamar sua API de login
};

export default function LoginPage() {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="card max-w-sm w-full shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">Login</h2>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col gap-4">
                <div className="form-control">
                  <label className="label">
                    <p className="label-text">Email</p>
                    <Field
                      type="email"
                      name="email"
                      placeholder="exemplo@email.com"
                      className="input input-bordered"
                    />
                    <ErrorMessage
                      name="email"
                      component="span"
                      className="text-error text-sm mt-1"
                    />
                  </label>
                </div>

                <div className="form-control">
                  <label className="label">
                    <p className="label-text">Senha</p>
                    <Field
                      type="password"
                      name="password"
                      placeholder="••••••••"
                      className="input input-bordered"
                    />
                    <ErrorMessage
                      name="password"
                      component="span"
                      className="text-error text-sm mt-1"
                    />
                  </label>
                </div>

                <div className="form-control mt-2">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Entrando..." : "Entrar"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>

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
