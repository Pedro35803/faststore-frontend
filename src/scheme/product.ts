import * as Yup from "yup";
import { translateGlobal } from "@/constants/translate";

const { product } = translateGlobal.pt.scheme;

export const productSchema = Yup.object().shape({
  name: Yup.string().required(product.name.required),
  price: Yup.number()
    .typeError(product.price.typeError)
    .positive(product.price.positive)
    .required(product.price.required),
  description: Yup.string().required(product.description.required),
  picture: Yup.string()
    .url(product.imageUrl.url)
    .required(product.imageUrl.required),
});

export const productFileSchema = Yup.object().shape({
  fileCSV: Yup.string().required(product.fileCSV.required),
});

export type ProductFormValues = Yup.InferType<typeof productSchema>;
export type ProductFileFormValues = Yup.InferType<typeof productFileSchema>;
