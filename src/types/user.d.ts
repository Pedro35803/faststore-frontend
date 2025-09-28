import { Product } from "./product";

export type UserRole = "CLIENT" | "SELLER";

export interface User {
  id: string;               // identificador único
  name: string;             // nome do usuário
  email: string;            // e-mail único
  role: UserRole;           // CLIENT ou SELLER
  createdAt: Date;          // data de criação da conta
  updatedAt?: Date;         // última atualização
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
  favorites?: string[];           // ids de produtos favoritados
  cart?: CartItem[];              // carrinho de compras
  purchaseHistory?: Purchase[];   // histórico de compras
}


export interface Seller extends User {
  storeName?: string;
  bio?: string;
  avatarUrl?: string;

  // Controle de conta
  isActive: boolean;
  lastLoginAt?: string;
  
  // Relacionamentos
  productIds?: ProductId[]; // lista de ids dos produtos do vendedor (útil p/ listagens leves)
  products?: Product[];     // quando for carregar junto

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