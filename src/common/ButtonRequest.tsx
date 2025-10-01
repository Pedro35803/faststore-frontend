import { ChildrenProps } from "@/types/common";
import { useFormikContext } from "formik";

export const ButtonRequest = ({ children }: ChildrenProps) => {
  const { isSubmitting, handleSubmit } = useFormikContext();
  return (
    <div className="form-control w-full flex justify-end mt-2">
      <button
        type="submit"
        onClick={() => handleSubmit}
        className="btn btn-primary"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Enviando..." : children}
      </button>
    </div>
  );
};
