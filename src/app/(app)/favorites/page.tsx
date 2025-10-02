import { apiGet } from "@/services/serverGetReqApi";
import { CardProduct } from "../products/_components/CardProduct";
import { Product } from "@/types/product";
import { EmptyPage } from "@/common/EmptyPage";

export const revalidate = 10;

export default async function FavoritePage() {
  const prodFavorite = await apiGet<Product[]>(`/favorite/me`);
  if (prodFavorite.length === 0) return <EmptyPage />;
  return (
    <>
      <h2 className="title text-left">Produtos Favoritados</h2>
      <div className="grid-common">
        {prodFavorite?.map((item) => (
          <CardProduct key={item.id} isFavorite={true} {...item} quantity={1} />
        ))}
      </div>
    </>
  );
}
