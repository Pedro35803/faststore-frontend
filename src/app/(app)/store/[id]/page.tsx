"use client";

import { CardProduct } from "../../products/_components/CardProduct";
import { CardHeaderStore } from "../_components/CardHeaderStore";

import { useResource } from "@/common/useResource";
import { Seller } from "@/types/user";
import { useAuth } from "@/common/authContext";

import { usePathname } from "next/navigation";

export default async function StorePage() {
  const { id } = usePathname();
  const { user } = useAuth();
  const store = await useResource<Seller>(`/stores/${id}`);
  return (
    <>
      <CardHeaderStore {...store} isOwner={store.id === user?.id} />
      <div className="grid grid-cols-3 gap-3">
        {store.products?.map(CardProduct)}
      </div>
    </>
  );
}
