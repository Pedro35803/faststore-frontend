import { apiGet } from "@/services/serverGetReqApi";
import { CardOrder } from "./_components/CardOrder";
import { Order } from "@/types/order";
import { EmptyPage } from "@/common/EmptyPage";

export const revalidate = 30;

export default async function HistoricPage() {
  const orders = await apiGet<Order[]>(`/history/me`);
  if (orders.length === 0) return <EmptyPage />;
  return (
    <>
      <h2 className="title text-left">Histórico de Compras</h2>
      <div className="grid-common">{orders?.map(CardOrder)}</div>
    </>
  );
}
