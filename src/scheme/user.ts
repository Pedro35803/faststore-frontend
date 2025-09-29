import * as Yup from "yup";
import { translateGlobal } from "@/constants/translate";

const userTrl = translateGlobal.pt.scheme.user;

export const userSchema = Yup.object({
  name: Yup.string().required(userTrl.name.required),
  email: Yup.string()
    .required(userTrl.email.required)
    .email(userTrl.email.invalid),
  picture: Yup.mixed<File>()
    .test(
      "required",
      userTrl.picture.required,
      (value) => !!value && !!value.name
    )
    .test(
      "fileFormat",
      userTrl.picture.format,
      (value) => !value || (value && value.type?.includes("image/"))
    ),
});

export type AccountFormValues = Yup.InferType<typeof userSchema>;

const sellerTrl = translateGlobal.pt.scheme.seller;
const phoneTrl = translateGlobal.pt.scheme.phoneBrl;
const cnpjTrl = translateGlobal.pt.scheme.cnpj;

export const sellerSchema = userSchema.concat(
  Yup.object({
    storeName: Yup.string().required(sellerTrl.storeName.required),
    description: Yup.string().required(sellerTrl.description.required),
    cnpj: Yup.string()
      .required(cnpjTrl.required)
      .transform((value) => value.replace(/\D/g, ""))
      .matches(/^\d{14}$/, cnpjTrl.incorrectSize),
    phone: Yup.string()
      .required(phoneTrl.required)
      .transform((value) => value.replace(/\D/g, ""))
      .matches(/^(\d{10,15})$/, phoneTrl.incorrectSize),
  })
);

export type SellerFormValues = Yup.InferType<typeof sellerSchema>;
