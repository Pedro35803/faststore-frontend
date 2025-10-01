import { Seller } from "@/types/user";

export const CardStore = ({
  id_user,
  picture,
  seller,
  store_name,
  description,
}: Seller) => {
  console.log(store_name);
  console.log(seller);
  return (
    <div
      key={id_user}
      className="card bg-base-100 shadow-md border hover:shadow-lg transition"
    >
      {picture && (
        <figure>
          <img
            src={picture}
            alt={store_name}
            className="h-48 w-full object-cover"
          />
        </figure>
      )}
      <div className="card-body">
        <h2 className="card-title">{store_name}</h2>
        <p className="text-sm text-gray-500">{description}</p>
        <div className="card-actions justify-end">
          <a className="btn btn-primary btn-sm" href={`/store/${id_user}`}>
            Ver produtos
          </a>
        </div>
      </div>
    </div>
  );
};
