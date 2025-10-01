"use client";

import { api } from "@/api";
import { useAuth } from "@/common/authContext";
import { coinPtBr } from "@/services/coin";
import { Product } from "@/types/product";
import { useState } from "react";

export const CardProduct = (product: Product) => {
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
            <button className="btn btn-primary" disabled={!isLogged}>
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
