import { useFormikContext } from "formik";

export const SelectRole = () => {
  const { setFieldValue } = useFormikContext();
  return (
    <select
      name="role"
      onChange={(e) => setFieldValue("role", e.target.value)}
      className="select max-w-sm appearance-none"
      aria-label="select"
    >
      <option disabled selected>
        Escolha entre Cliente e Vendedor
      </option>
      <option value="CLIENT">Cliente</option>
      <option value="SELLER">Vendedor</option>
    </select>
  );
};