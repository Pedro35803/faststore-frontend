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
  fileCSV: Yup.mixed()
    .required(product.fileCSV.required) // obrigatoriedade
    // .test(
    //   "fileType",
    //   "Somente arquivos CSV são permitidos",
    //   (value) => value && value.type === "text/csv"
    // )
    // .test(
    //   "fileSize",
    //   "Arquivo muito grande",
    //   (value) => value && value.size <= 5 * 1024 * 1024 // 5MB
    // ),
});

export type ProductFormValues = Yup.InferType<typeof productSchema>;
export type ProductFileFormValues = Yup.InferType<typeof productFileSchema>;
