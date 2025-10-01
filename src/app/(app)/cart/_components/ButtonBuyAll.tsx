"use client";

import Swal from "sweetalert2";
import { api } from "@/api";
import { coinPtBr } from "@/services/coin";
import { useRouter } from "next/navigation";

type CartResponse = {
  total_price: number;
};

export const BuyButton = ({ total_price }: CartResponse) => {
  const router = useRouter();

  const openModalBuy = async () => {
    Swal.fire({
      title: "Comprar",
      html: `
        <div class="flex flex-col items-center w-full gap-2">
          <p class="text-2xl font-bold">Deseja realizar a compra deste produto?<p>
          <p class="text-xl text-secondary">
            Custo Total: ${coinPtBr(total_price)}
          </p>
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: "Comprar",
      cancelButtonText: "Cancelar",
      icon: "info",
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Processando compra...",
          allowOutsideClick: false,
          didOpen: () => Swal.showLoading(),
        });

        try {
          await api.post("/orders/cart", {});
          Swal.fire("Todos produtos comprados com sucesso!", "", "success");
          router.refresh();
        } catch (error) {
          Swal.fire("Erro ao comprar o produto!", "", "error");
        }
      }
    });
  };

  return (
    <button className="btn btn-primary" onClick={openModalBuy}>
      {`Comprar Tudo ${coinPtBr(total_price)}`}
    </button>
  );
};
