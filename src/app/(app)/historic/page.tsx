import { useResource } from "@/common/useResource";
import { CardProduct } from "../products/_components/CardProduct";
import { Product } from "@/types/product";

export default async function HistoricPage() {
  const stores = await useResource<Product[]>(`/historic/me`);
  return (
    <>
      <h2 className="title text-left">Produtos Comprados</h2>
      <div className="grid-common">{stores?.map(CardProduct)}</div>
    </>
  );
}
