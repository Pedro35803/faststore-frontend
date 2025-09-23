import { useResource } from "@/common/useResource";
import { Product } from "@/types/product";
import { CardProduct } from "./_components/CardProduct";

export default async function ProductPage() {
  const products = await useResource<Product[]>("/products?limit=40");
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="grid grid-cols-3 gap-3">
          {products.map(CardProduct)}
        </div>
      </main>
    </div>
  );
}
