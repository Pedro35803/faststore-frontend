import { useResource } from "@/common/useResource";
import { Product } from "@/types/product";
import { CardProduct } from "./_components/CardProduct";
import { Header } from "@/common/header/Header";

export default async function ProductPage() {
  const products = await useResource<Product[]>("/products?limit=40");
  return (
    <div className="grid grid-cols-3 gap-3">{products.map(CardProduct)}</div>
  );
}
