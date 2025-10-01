import { Seller } from "@/types/user";
import { CardStore } from "./_components/CardStore";
import { api } from "@/api";

export default async function StorePage() {
  const stores = (await api.get<Seller[]>(`/stores`)).data;
  return <div className="grid-common">{stores?.map(CardStore)}</div>;
}
