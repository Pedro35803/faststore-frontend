"use client";

import { useAuth } from "@/common/authContext";
import Link from "next/link";

export default function HomePage() {
  const { isLogged, type } = useAuth();
  return (
    <div className="flex flex-1 gap-4 flex-col items-center h-screen justify-center">
      <section className="max-w-3xl w-full text-center space-y-6 items-center">
        {/* Logo / Nome da Loja */}
        <h1 className="text-5xl font-bold text-primary">FastStore</h1>
        <p className="text-lg text-base-content/70">
          Sua loja online simplificada. Conecte vendedores e clientes de forma
          rápida e prática.
        </p>

        {/* Botões principais */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {!isLogged ? (
            <>
              <Link href="/login" className="btn btn-primary">
                Entrar
              </Link>
              <Link href="/register" className="btn btn-outline">
                Criar conta
              </Link>
            </>
          ) : (
            <>
              <Link href="/account" className="btn btn-outline">
                Editar Conta
              </Link>
            </>
          )}
          <Link href="/products" className="btn btn-secondary">
            Ver produtos
          </Link>
          <Link href="/store" className="btn btn-secondary">
            Ver Lojas
          </Link>
          {type === "CLIENT" && (
            <>
              <Link href="/cart" className="btn btn-warning">
                Ver Carrinho
              </Link>
              <Link href="/favorites" className="btn btn-warning">
                Ver Favoritos
              </Link>
            </>
          )}
          {type === "SELLER" && (
            <Link href="/dashboard" className="btn btn-warning">
              Ver Carrinho
            </Link>
          )}
        </div>
      </section>

      {/* Sessão de features */}
      <section className="grid md:grid-cols-3 gap-6 mt-16 w-full max-w-4xl">
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Para Clientes</h2>
            <p>
              Pesquise, favorite e compre com facilidade. Seu carrinho e
              histórico sempre salvos.
            </p>
          </div>
        </div>
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Para Vendedores</h2>
            <p>
              Cadastre produtos manualmente ou via CSV. Gerencie sua loja de
              forma prática.
            </p>
          </div>
        </div>
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Segurança</h2>
            <p>
              Autenticação segura e dados persistentes para uma experiência
              confiável.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
