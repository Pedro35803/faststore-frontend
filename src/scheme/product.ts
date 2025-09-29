import * as Yup from "yup";
import { translateGlobal } from "@/constants/translate";

export const productSchema = Yup.object().shape({
  name: Yup.string().required(translateGlobal.pt.scheme.product.name.required),
  price: Yup.number()
    .typeError(translateGlobal.pt.scheme.product.price.typeError)
    .positive(translateGlobal.pt.scheme.product.price.positive)
    .required(translateGlobal.pt.scheme.product.price.required),
  description: Yup.string().required(
    translateGlobal.pt.scheme.product.description.required
  ),
  publishDate: Yup.date()
    .typeError(translateGlobal.pt.scheme.product.publishDate.typeError)
    .required(translateGlobal.pt.scheme.product.publishDate.required),
  imageUrl: Yup.string()
    .url(translateGlobal.pt.scheme.product.imageUrl.url)
    .required(translateGlobal.pt.scheme.product.imageUrl.required),
});

export const productFileSchema = Yup.object().shape({
  fileCSV: Yup.string().required(
    translateGlobal.pt.scheme.product.fileCSV.required
  ),
});

export type ProductFormValues = Yup.InferType<typeof productSchema>;
export type ProductFileFormValues = Yup.InferType<typeof productFileSchema>;
