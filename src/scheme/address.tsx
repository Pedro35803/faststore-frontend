import { translateGlobal } from "@/constants/Translate";
import * as yup from "yup";

const trl = translateGlobal.pt.scheme.address;

export const addressSchema = yup.object({
  street: yup.string().required(trl.street.required),
  number: yup.string().max(5, trl.number.max).required(trl.number.required),
  complement: yup.string().nullable(),
  neighborhood: yup.string().required(trl.neighborhood.required),
  city: yup.string().required(trl.city.required),
  state: yup.string().required(trl.state.required),
  postalCode: yup
    .string()
    .required(trl.postalCode.required)
    .transform((value) => value.replace(/\D/g, ""))
    .matches(/^\d{8}$/, trl.postalCode.matches),
});

export type FormAdrress = yup.InferType<typeof addressSchema>;
