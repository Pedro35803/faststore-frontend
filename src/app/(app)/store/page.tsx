import { Seller } from "@/types/user";
import { CardStore } from "./_components/CardStore";
import { api } from "@/api";
import { EmptyPage } from "@/common/EmptyPage";

export const revalidate = 60

export default async function StorePage() {
  const stores = (await api.get<Seller[]>(`/stores`)).data;
  if (stores.length === 0) return <EmptyPage />;
  return <div className="grid-common">{stores?.map(CardStore)}</div>;
}
