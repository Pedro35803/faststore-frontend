import { useResource } from "@/common/useResource";
import { Product } from "@/types/product";
import { CardProduct } from "./_components/CardProduct";
import { HeaderReturn } from "@/common/HeaderReturn";

export default async function ProductPage() {
  const products = await useResource<Product[]>("/products?limit=40");
  return (
    <div className="container font-sans min-h-screen">
      <div className="flex flex-col items-center">
        <div>
          <HeaderReturn />
          <div className="grid grid-cols-3 gap-3">
            {products.map(CardProduct)}
          </div>
        </div>
      </div>
    </div>
  );
}
