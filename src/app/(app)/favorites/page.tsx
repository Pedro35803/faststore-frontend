import { useResource } from "@/common/useResource";
import { CardProduct } from "../products/_components/CardProduct";
import { Product } from "@/types/product";

export default async function FavoritePage() {
  const stores = await useResource<Product[]>(`/favorites/me`);
  return (
    <>
      <h2 className="title text-left">Produtos Favoritados</h2>
      <div className="grid-common">{stores?.map(CardProduct)}</div>
    </>
  );
}
