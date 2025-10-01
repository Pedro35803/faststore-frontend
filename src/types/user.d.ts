import { Product } from "./product";

export type UserRole = "CLIENT" | "SELLER";

export type CommonInResponse = {
  created_at: string;
  updated_at: string;
};

type UserStatus = "ACTIVE" | "INCOMPLETE" | "SUSPENDED" | "DELETED";

export interface User extends CommonInResponse {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  picture: string;
  seller?: Seller;
}

// Tipos auxiliares
export interface CartItem extends CommonInResponse {
  productId: string;
  quantity: number;
}

export interface Client extends User {
  accountLevel: "initial" | "silver" | "gold";
  favorites?: string[];
  cart?: CartItem[];
  purchaseHistory?: Purchase[];
}

export interface Seller extends User {
  id_user: string;
  store_name?: string;
  description?: string;
  store_active: boolean;

  // Relacionamentos
  user?: User;
  product?: Product[];

  // Dados de verificação / KYC simples
  cnpj: string;
  address?: {
    street?: string;
    city?: string;
    state?: string;
    country?: string;
    zip?: string;
  };
}
