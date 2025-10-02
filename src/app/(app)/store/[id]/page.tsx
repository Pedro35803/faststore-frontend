"use client";

import { CardProduct } from "../../products/_components/CardProduct";
import { CardHeaderStore } from "../_components/CardHeaderStore";

import { Seller } from "@/types/user";
import { Loading } from "@/common/Loading";
import { useAuth } from "@/common/authContext";

import { usePathname } from "next/navigation";
import { useResource } from "@/common/useResource";
import { EmptyPage } from "@/common/EmptyPage";

export default function StorePageId() {
  const pathname = usePathname();
  const id = pathname.split("/").pop();
  const { user } = useAuth();

  const store = useResource<Seller>(`/stores/${id}`);

  if (!store) return <Loading />;
  if (store.product.length === 0)
    return (
      <EmptyPage
        message={
          <>
            Sem produtos registrados para essa loja
            <br />
            <a className="btn btn-primary" href="/products/register">
              Registrar Produtos
            </a>
          </>
        }
      />
    );

  return (
    <>
      <CardHeaderStore {...store} isOwner={store.id === user?.id} />
      <div className="grid-common">
        {store.product?.map((props) => (
          <CardProduct
            key={props.id}
            isFavorite={false}
            quantity={0}
            {...props}
          />
        ))}
      </div>
    </>
  );
}
