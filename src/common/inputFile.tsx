type InputProps = React.ComponentPropsWithRef<"input">;

type Props = {
  handleFileChange: () => void;
  text: string | React.ReactElement;
} & InputProps;

export const InputFile = ({ handleFileChange, text, ...rest }: Props) => {
  return (
    <label
      htmlFor="csvFile"
      className="cursor-pointer border-2 border-dashed border-primary-500 hover:border-primary-600 rounded-xl p-8 w-full flex flex-1 flex-col items-center justify-center text-center transition"
    >
      <span className="max-w-40">
        <p className="text-4xl mb-2">⬆️</p>
        <p className="text-primary-600 font-medium">{text}</p>
      </span>
      <input
        id="csvFile"
        type="file"
        accept=".csv"
        className="hidden"
        onChange={handleFileChange}
        {...rest}
      />
    </label>
  );
};
