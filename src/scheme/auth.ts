import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string().email("Email inválido").required("O email é obrigatório"),
  password: Yup.string().required("A senha é obrigatória"),
});

export type LoginFormValues = Yup.InferType<typeof loginSchema>;

export const registerSchema = loginSchema.concat(
  Yup.object({
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "As senhas devem ser iguais")
      .required("Confirme a senha"),
  })
);

export type RegisterFormValues = Yup.InferType<typeof registerSchema>;
