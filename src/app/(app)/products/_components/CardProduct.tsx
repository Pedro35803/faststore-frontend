import { Product } from "@/types/product";

export const CardProduct = (product: Product) => {
  return (
    <div className="card sm:max-w-sm" key={product.id}>
      <figure>
        <img
          src={product.imageUrl}
          alt="Imagem do Produto"
          className="h-50 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h5 className="card-title mb-2.5">{product.name}</h5>
        <p className="mb-4">{product.description}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Compre Agora</button>
          <button className="btn btn-secondary">Carrinho +</button>
        </div>
      </div>
    </div>
  );
};
