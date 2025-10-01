import { Product } from "@/types/product";
import { CardProduct } from "./_components/CardProduct";
import { api } from "@/api";

export const revalidate = 60

export default async function ProductPage() {
  const response = await api.get<Product[]>("/products?limit=40");
  const products = response.data;
  return (
    <div className="grid-common">
      {products.map((item) => (
        <CardProduct key={item.id} isFavorite={false} quantity={0} {...item} />
      ))}
    </div>
  );
}
