import { Seller } from "@/types/user";
import { CardStore } from "./_components/CardStore";
import { EmptyPage } from "@/common/EmptyPage";
import { apiGet } from "@/services/serverGetReqApi";

export const revalidate = 60;

export default async function StorePage() {
  const stores = await apiGet<Seller[]>(`/stores`);
  if (stores.length === 0) return <EmptyPage message="Sem lojas ativas no momento" />;
  return <div className="grid-common">{stores?.map(CardStore)}</div>;
}
