"use client";

import { Seller } from "@/types/user";
import { useState } from "react";

interface Props extends Seller {
  isOwner: boolean;
}

export const CardHeaderStore = ({
  name,
  bio,
  avatarUrl,
  role,
  isOwner,
}: Props) => {
  const [editing, setEditing] = useState(false);

  return (
    <div className="card w-full max-w-lg shadow-xl bg-base-100">
      <figure>
        <img
          src={avatarUrl}
          alt={name}
          className="w-full h-52 object-cover rounded-t-2xl"
        />
      </figure>

      <div className="card-body">
        {editing ? (
          <div className="space-y-3">
            <input
              type="text"
              defaultValue={name}
              className="input input-bordered w-full"
            />
            <textarea
              defaultValue={bio}
              className="textarea textarea-bordered w-full"
              rows={4}
            />
            <button
              className="btn btn-primary w-full"
              onClick={() => setEditing(false)}
            >
              Salvar Alterações
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="text-base text-gray-600">{bio}</p>
          </>
        )}
      </div>

      {!editing && (
        <div className="card-actions justify-end p-4">
          {role === "SELLER" && isOwner && (
            <>
              <button
                className="btn btn-outline"
                onClick={() => setEditing(true)}
              >
                Editar
              </button>
              <button className="btn btn-outline">Configurações</button>
            </>
          )}
        </div>
      )}
    </div>
  );
};
