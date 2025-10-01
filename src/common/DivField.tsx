"use client";

import { Field, ErrorMessage } from "formik";
import { twMerge } from "tailwind-merge";

type InputProps = React.ComponentPropsWithRef<"input">;

type Props = { label: string } & InputProps;

export const DivField = ({
  name,
  label,
  children,
  className,
  ...rest
}: Props) => {
  return (
    <div className="form-control w-full">
      <label className="label w-full">
        <p className="label-text">{label}</p>
        {!children ? (
          <Field
            name={name}
            type="text"
            className={twMerge("input input-bordered", className)}
            {...rest}
          />
        ) : (
          children
        )}
        <ErrorMessage
          name={name}
          component="span"
          className="text-error text-sm mt-1"
        />
      </label>
    </div>
  );
};
