import { apiGet } from "@/services/serverGetReqApi";
import { CardProduct } from "../products/_components/CardProduct";
import { Product } from "@/types/product";

export default async function CartPage() {
  const carts = await apiGet<Product[]>("/cart/me");
  return (
    <>
      <h2 className="title text-left">Carrinho</h2>
      <div className="grid-common">{carts?.map(CardProduct)}</div>
    </>
  );
}
