import { Product } from "./product";

export type UserRole = "CLIENT" | "SELLER";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  picture?: string;
  createdAt: Date;
  updatedAt?: Date;
}

// Tipos auxiliares
export interface CartItem {
  productId: string;
  quantity: number;
}

export interface Purchase {
  id: string;
  products: CartItem[];
  total: number;
  purchasedAt: Date;
}

export interface Client extends User {
  favorites?: string[];
  cart?: CartItem[];
  purchaseHistory?: Purchase[];
}

export interface Seller extends User {
  storeName?: string;
  description?: string;

  // Controle de conta
  isActive: boolean;
  lastLoginAt?: string;

  // Relacionamentos
  productIds?: ProductId[]; // lista de ids dos produtos do vendedor (útil p/ listagens leves)
  products?: Product[]; // quando for carregar junto

  // Dados de verificação / KYC simples
  documentNumber?: string; // CPF/CNPJ (se necessário)
  address?: {
    street?: string;
    city?: string;
    state?: string;
    country?: string;
    zip?: string;
  };
}
