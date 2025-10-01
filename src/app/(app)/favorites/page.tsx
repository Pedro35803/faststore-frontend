import { apiGet } from "@/services/serverGetReqApi";
import { CardProduct } from "../products/_components/CardProduct";
import { Product } from "@/types/product";

export const revalidate = 10

export default async function FavoritePage() {
  const stores = await apiGet<Product[]>(`/favorite/me`);
  return (
    <>
      <h2 className="title text-left">Produtos Favoritados</h2>
      <div className="grid-common">
        {stores?.map((item) => (
          <CardProduct key={item.id} isFavorite={true} {...item} quantity={1} />
        ))}
      </div>
    </>
  );
}
