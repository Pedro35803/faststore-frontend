"use client";

import { Formik, Form, ErrorMessage, useFormikContext } from "formik";
import { productFileSchema } from "@/scheme/product";
import { InputFile } from "@/common/inputFile";
import {
  inputRadioStyle,
  labelStyle,
  nameRadioShare,
  objIdRadio,
} from "./util";
import { DivFormProps } from "@/types/common";
import { ButtonRequest } from "@/common/ButtonRequest";

import ReactDOM from "react-dom/client";
import Swal from "sweetalert2";
import { getCsvHeaders } from "@/services/csv";
import { SortableList } from "./SortableList";
import { useRef } from "react";
import { api } from "@/api";
import { convertObjForFormData } from "@/services/formData";
import { useRouter } from "next/navigation";

const InputFileCSV = () => {
  const { setFieldValue } = useFormikContext();
  return (
    <InputFile
      text={
        <>
          Envie um arquivo <strong>CSV</strong> com os produtos
        </>
      }
      handleFileChange={(file) => setFieldValue("fileCSV", file)}
      name="fileCSV"
    />
  );
};

export const FormCsvFileRegisterProducts = () => {
  const listHeaderUserCsv = useRef<String[]>(null);
  const updateOrder = (item: String[]) => (listHeaderUserCsv.current = item);
  const router = useRouter();

  const renderModalMapCSV = (list: string[], fileCSV) => {
    Swal.fire({
      title: "Organizar Itens",
      html: `<div id="sortable-container"></div>`,
      showCancelButton: true,
      confirmButtonText: "Salvar",
      didOpen: () => {
        const container = document.getElementById("sortable-container");
        if (container) {
          const root = ReactDOM.createRoot(container);
          root.render(
            <SortableList onChangeOrder={updateOrder} listFields={list} />
          );
        }
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Processando registro...",
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading();
          },
        });
        try {
          const [name_field, price_field, description_field, picture_field] =
            listHeaderUserCsv.current;
          await api.post(
            "/products/csv",
            convertObjForFormData({
              file: fileCSV,
              name_field,
              price_field,
              description_field,
              picture_field,
            })
          );
          Swal.fire("Produto registrado com sucesso!", "", "success");
          router.push("/products");
        } catch (error) {
          Swal.fire("Erro ao registrar produto!", "", "error");
        }
      }
    });
  };

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
        onSubmit={async (values) => {
          const csvData = values.fileCSV;
          const headers = await getCsvHeaders(csvData);
          renderModalMapCSV(headers, csvData);
        }}
      >
        {() => (
          <Form className="flex w-full flex-1 flex-col items-center gap-4">
            <InputFileCSV />
            <ErrorMessage
              name="fileCSV"
              component="span"
              className="text-error text-sm mt-1"
            />
            <ButtonRequest>Enviar Arquivo</ButtonRequest>
          </Form>
        )}
      </Formik>
    </div>
  );
};
