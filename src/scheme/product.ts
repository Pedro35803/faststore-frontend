import * as Yup from "yup";

export const productSchema = Yup.object().shape({
  name: Yup.string().required("O nome do produto é obrigatório"),
  price: Yup.number()
    .typeError("Preço inválido")
    .positive("O preço deve ser positivo")
    .required("O preço é obrigatório"),
  description: Yup.string().required("A descrição é obrigatória"),
  publishDate: Yup.date()
    .typeError("Data inválida")
    .required("A data de publicação é obrigatória"),
  imageUrl: Yup.string()
    .url("URL inválida")
    .required("A URL da imagem é obrigatória"),
});

export const productFileSchema = Yup.object().shape({
  fileCSV: Yup.string().required("O arquivo é obrigatório"),
})