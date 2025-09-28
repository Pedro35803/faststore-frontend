"use client";

import { CardProduct } from "../../products/_components/CardProduct";
import { CardHeaderStore } from "../_components/CardHeaderStore";

import { Seller } from "@/types/user";
import { Loading } from "@/common/Loading";
import { useAuth } from "@/common/authContext";
import { useResourceClient } from "@/common/useResourceClient";

import { usePathname } from "next/navigation";

export default function StorePageId() {
  const pathname = usePathname(); // retorna "/store/5"
  const id = pathname.split("/").pop();

  const store = useResourceClient<Seller>(`/stores/${id}`);
  const { user } = useAuth();

  if (!store) return <Loading />;

  return (
    <>
      <CardHeaderStore {...store} isOwner={store.id === user?.id} />
      <div className="grid grid-cols-3 gap-3">
        {store.products?.map(CardProduct)}
      </div>
    </>
  );
}
