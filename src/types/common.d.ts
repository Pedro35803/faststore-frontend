import { ReactNode } from "react";

export type ChildrenProps = {
  children: ReactNode;
};

export type DivFormProps = {
  handleSubmit: (values: object) => void
}