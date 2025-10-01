"use client";

import { useState } from "react";
import Swal from "sweetalert2";

import { api } from "@/api";
import { useAuth } from "@/common/authContext";
import { coinPtBr } from "@/services/coin";
import { Product } from "@/types/product";

type Props = { quantity: number } & Product;

export const CardProduct = ({ quantity, ...product }: Props) => {
  const { isLogged, user } = useAuth();

  const [isCart, setIsCart] = useState(false);

  const toggleCard = async () => {
    try {
      if (isCart) await api.post("/cart/me", { id_product: product.id });
      else await api.delete("/cart/" + product.id);
    } catch (error) {
      console.error(error);
    } finally {
      setIsCart(!isCart);
    }
  };

  const openModalBuy = ({ id, name, price }: Product) => {
    Swal.fire({
      title: "Comprar",
      text: "",
      html: `
        <div class="flex flex-col items-center w-full gap-2">
          <p class="text-2xl font-bold">Deseja realizar a compra deste produto?<p>
          <div class="flex justify-between gap-4 max-w-xs">
            <p class="text-xl text-secondary">${name}</p>
            <p class="text-xl text-secondary">${coinPtBr(price)}</p>
          </div>
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
          didOpen: () => {
            Swal.showLoading();
          },
        });
        try {
          await api.post("/orders", { id_product: id });
          Swal.fire("Produto comprado com sucesso!", "", "success");
        } catch (error) {
          Swal.fire("Erro ao comprar o produto!", "", "error");
        }
      }
    });
  };

  return (
    <div className="card sm:max-w-sm" key={product.id}>
      <figure>
        <img
          src={product.picture}
          alt="Imagem do Produto"
          className="h-50 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <span className="flex justify-between items-center gap-2">
          <h5 className="card-title mb-2.5">{product.name}</h5>
          <h5 className="text-xl mb-2.5">{coinPtBr(product.price)}</h5>
        </span>
        <p className="mb-4">{product.description}</p>
        {user?.role === "CLIENT" && (
          <div className="card-actions">
            <button
              className="btn btn-primary"
              onClick={() => openModalBuy(product)}
              disabled={!isLogged}
            >
              Compre Agora
            </button>
            <button
              className="btn btn-secondary"
              onClick={toggleCard}
              disabled={!isLogged}
            >
              Carrinho {isCart ? "-" : "+"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
