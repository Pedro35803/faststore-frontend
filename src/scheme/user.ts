import * as Yup from "yup";

export const userSchema = Yup.object({
  name: Yup.string().required(),
  email: Yup.string().required().email(),
  picture: Yup.mixed<File>()
    .test("required", "Por favor, selecione uma imagem", (value) => {
      return !!value && !!value.name;
    })
    .test(
      "fileFormat",
      "Formato de arquivo não suportado",
      (value) => !value || (value && value.type?.includes("image/"))
    ),
});

export type AccountFormValues = Yup.InferType<typeof userSchema>;
