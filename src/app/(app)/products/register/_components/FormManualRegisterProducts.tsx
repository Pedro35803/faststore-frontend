"use client";

import { Formik, Form } from "formik";
import { DivField } from "@/common/DivField";
import { productSchema } from "@/scheme/product";
import { inputRadioStyle, labelStyle, nameRadioShare, objIdRadio } from "./util";
import { ButtonSend } from "./ButtonSend";
import { DivFormProps } from "@/types/common";

export const FormManualRegisterProducts = ({ handleSubmit }: DivFormProps) => {
  return (
    <div className="flex-1 relative block border p-6 rounded-lg">
      <input
        type="radio"
        name={nameRadioShare}
        className={inputRadioStyle}
        id={objIdRadio.manualRegister}
      />

      <h2 className="font-semibold mb-4">Cadastro Manual</h2>

      <label htmlFor={objIdRadio.manualRegister} className={labelStyle} />

      <Formik
        initialValues={{
          name: "",
          price: "",
          description: "",
          publishDate: "",
          imageUrl: "",
        }}
        validationSchema={productSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="flex flex-col gap-4">
            <DivField label="Nome" name="name" />
            <DivField label="Preço" name="price" type="number" />
            <DivField label="Descrição" name="description" type="textarea" />
            <DivField
              label="Data de Publicação"
              name="publishDate"
              type="date"
            />
            <DivField label="URL da Imagem" name="imageUrl" type="url" />
            <ButtonSend />
          </Form>
        )}
      </Formik>
    </div>
  );
};
