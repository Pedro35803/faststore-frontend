import { useResource } from "@/common/useResource";
import { CardProduct } from "../products/_components/CardProduct";
import { Product } from "@/types/product";

export default async function CartPage() {
  const stores = await useResource<Product[]>(`/cart/me`);
  return (
    <>
      <h2 className="title text-left">Carrinho</h2>
      <div className="grid-common">{stores?.map(CardProduct)}</div>
    </>
  );
}
