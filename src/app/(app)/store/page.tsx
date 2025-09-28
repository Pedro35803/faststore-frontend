import { useResource } from "@/common/useResource";
import { Seller } from "@/types/user";
import { CardStore } from "./_components/CardStore";

export default async function StorePage() {
  const stores = await useResource<Seller[]>(`/stores`);
  return <div className="grid grid-cols-3 gap-3">{stores?.map(CardStore)}</div>;
}
