import { apiGet } from "@/services/serverGetReqApi";
import { CardProduct } from "../products/_components/CardProduct";
import { Product } from "@/types/product";
import { BuyButton } from "./_components/ButtonBuyAll";

type Cart = {
  product: Product;
  quantity: number;
  id: string;
};

type Response = {
  id: string;
  total_price: number;
  cart: Cart[];
};

export const revalidate = 10;

export default async function CartPage() {
  const carts = await apiGet<Response>("/cart/me");

  return (
    <>
      <div className="flex justify-between items-center gap-2">
        <h2 className="title text-left">Carrinho</h2>
        <BuyButton {...carts} />
      </div>
      <div className="grid-common">
        {carts?.cart.map((item) => (
          <CardProduct
            key={item?.id}
            isFavorite={false}
            quantity={item.quantity}
            {...item.product}
          />
        ))}
      </div>
    </>
  );
}
