import { Loading } from "./Loading";

export const LoadingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <Loading />
      <h1 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
        Carregando...
      </h1>
      <p className="mt-2 text-gray-500 dark:text-gray-400">
        Aguarde enquanto carregamos os dados.
      </p>
    </div>
  );
};
