import { coinPtBr } from "@/services/coin";
import { apiGet } from "@/services/serverGetReqApi";

type DashboardData = {
  totalProductsSold: number;
  totalRevenue: number;
  totalProducts: number;
  bestSellingProduct: string;
};

const styleCard =
  "bg-base-200 rounded-lg p-4 shadow-sm flex flex-col items-center justify-center";

export default async function Dashboard() {
  const data = await apiGet<DashboardData>("/dashboard");

  if (!data)
    return (
      <p className="text-base-content text-center p-4">No data available.</p>
    );

  return (
    <div className="p-6 bg-base-100 h-full">
      <h1 className="text-2xl font-bold text-base-content mb-6">
        Dashboard do Vendedor
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className={styleCard}>
          <p className="text-sm text-base-content/70">
            Total de Produtos Vendidos
          </p>
          <p className="text-xl font-semibold text-base-content">
            {data.totalProductsSold}
          </p>
        </div>

        <div className={styleCard}>
          <p className="text-sm text-base-content/70">Faturamento Total</p>
          <p className="text-xl font-semibold text-base-content">
            {coinPtBr(data.totalRevenue)}
          </p>
        </div>

        <div className={styleCard}>
          <p className="text-sm text-base-content/70">Produtos Cadastrados</p>
          <p className="text-xl font-semibold text-base-content">
            {data.totalProducts}
          </p>
        </div>

        <div className={styleCard}>
          <p className="text-sm text-base-content/70">Produto Mais Vendido</p>
          <p className="text-xl font-semibold text-base-content text-center">
            {data.bestSellingProduct}
          </p>
        </div>
      </div>
    </div>
  );
}
