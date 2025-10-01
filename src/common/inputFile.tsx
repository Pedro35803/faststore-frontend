import { useState } from "react";
import { AiOutlineUpload, AiOutlineFile } from "react-icons/ai";

type InputProps = React.ComponentPropsWithRef<"input">;

type Props = {
  handleFileChange: (file: File | null) => void;
  text: string | React.ReactElement;
} & InputProps;

export const InputFile = ({ handleFileChange, text, ...rest }: Props) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
    handleFileChange(file);
  };

  return (
    <label
      htmlFor="csvFile"
      className="cursor-pointer border-2 border-dashed border-primary-500 hover:border-primary-600 rounded-xl p-8 w-full flex flex-1 flex-col items-center justify-center text-center transition"
    >
      <span className="max-w-40 flex flex-col items-center">
        <p className="text-4xl mb-2">
          {selectedFile ? <AiOutlineFile /> : <AiOutlineUpload />}
        </p>
        <p className="text-primary-600 font-medium">
          {selectedFile ? selectedFile.name : text}
        </p>
      </span>
      <input
        id="csvFile"
        type="file"
        accept=".csv"
        className="hidden"
        onChange={onChange}
        {...rest}
      />
    </label>
  );
};
