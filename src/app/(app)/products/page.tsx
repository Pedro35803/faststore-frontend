import { Product } from "@/types/product";
import { CardProduct } from "./_components/CardProduct";
import { apiGet } from "@/services/serverGetReqApi";
import { EmptyPage } from "@/common/EmptyPage";

export const revalidate = 60

export default async function ProductPage() {
  const products = await apiGet<Product[]>("/products?limit=40");
  if (products.length === 0) return <EmptyPage message="Nenhuma loja registrou produtos ainda"  />
  return (
    <div className="grid-common">
      {products.map((item) => (
        <CardProduct key={item.id} isFavorite={false} quantity={0} {...item} />
      ))}
    </div>
  );
}
