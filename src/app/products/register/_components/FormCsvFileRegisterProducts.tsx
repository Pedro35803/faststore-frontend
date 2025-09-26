"use client";

import { Formik, Form, ErrorMessage } from "formik";
import { productFileSchema } from "@/scheme/product";
import { InputFile } from "@/common/inputFile";
import {
  inputRadioStyle,
  labelStyle,
  nameRadioShare,
  objIdRadio,
} from "./util";
import { DivFormProps } from "@/types/common";
import { ButtonSend } from "./ButtonSend";

export const FormCsvFileRegisterProducts = ({ handleSubmit }: DivFormProps) => {
  return (
    <div className="flex-1 relative flex-col items-center z-20 gap-4 border p-6 rounded-lg hidden md:flex">
      <h2 className="font-semibold mb-4">Envio de Arquivo</h2>
      <input
        type="radio"
        name={nameRadioShare}
        className={inputRadioStyle}
        id={objIdRadio.csvFile}
      />
      <label htmlFor={objIdRadio.csvFile} className={labelStyle} />
      <Formik
        initialValues={{ fileCsv: "" }}
        validationSchema={productFileSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="flex w-full flex-1 flex-col items-center gap-4">
            <InputFile
              text={
                <>
                  Envie um arquivo <strong>CSV</strong> com os produtos
                </>
              }
              handleFileChange={() => {}}
              name="fileCSV"
            />
            <ErrorMessage
              name="fileCSV"
              component="span"
              className="text-error text-sm mt-1"
            />
            <ButtonSend />
          </Form>
        )}
      </Formik>
    </div>
  );
};
