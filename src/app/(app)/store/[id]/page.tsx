"use client";

import { CardProduct } from "../../products/_components/CardProduct";
import { CardHeaderStore } from "../_components/CardHeaderStore";

import { Seller } from "@/types/user";
import { Loading } from "@/common/Loading";
import { useAuth } from "@/common/authContext";

import { usePathname } from "next/navigation";
import { useResource } from "@/common/useResource";

export default function StorePageId() {
  const pathname = usePathname();
  const id = pathname.split("/").pop();
  const { user } = useAuth();

  const store = useResource<Seller>(`/stores/${id}`);

  if (!store) return <Loading />;

  return (
    <>
      <CardHeaderStore {...store} isOwner={store.id === user?.id} />
      <div className="grid-common">
        {store.product?.map((props) => (
          <CardProduct key={props.id} {...props} />
        ))}
      </div>
    </>
  );
}
