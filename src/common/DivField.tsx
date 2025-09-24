import { Field, ErrorMessage } from "formik";

type InputProps = React.ComponentPropsWithRef<"input">;

type Props = {
  label: string;
  name: string;
} & InputProps;

export const DivField = ({ name, label, ...rest }: Props) => {
  return (
    <div className="form-control">
      <label className="label">
        <p className="label-text">{label}</p>
        <Field
          name={name}
          type="text"
          className="input input-bordered"
          {...rest}
        />
        <ErrorMessage
          name={name}
          component="span"
          className="text-error text-sm mt-1"
        />
      </label>
    </div>
  );
};
