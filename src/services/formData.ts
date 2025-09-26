export const convertObjForFormData = (values: object) => {
  const formData = new FormData();
  Object.entries(values).forEach(([key, value]) => {
    if (value instanceof File || value instanceof Blob) {
      // Caso seja arquivo
      formData.append(key, value);
    } else if (Array.isArray(value)) {
      // Caso seja array (ex: múltiplos valores/arquivos)
      value.forEach((v, i) => formData.append(`${key}[${i}]`, v));
    } else if (value !== undefined && value !== null) {
      // Valores comuns
      formData.append(key, String(value));
    }
  });
  return formData;
};
