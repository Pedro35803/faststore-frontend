import { Seller } from "@/types/user";

export const CardStore = ({ id, avatarUrl, name, bio }: Seller) => {
  return (
    <div
      key={id}
      className="card bg-base-100 shadow-md border hover:shadow-lg transition"
    >
      {avatarUrl && (
        <figure>
          <img
            src={avatarUrl}
            alt={name}
            className="h-48 w-full object-cover"
          />
        </figure>
      )}
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-sm text-gray-500">{bio}</p>
        <div className="card-actions justify-end">
          <a className="btn btn-primary btn-sm" href={`/store/${id}`}>
            Ver produtos
          </a>
        </div>
      </div>
    </div>
  );
};
