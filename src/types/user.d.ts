export type UserRole = "CLIENT" | "SELLER";

export interface User {
  id: string;               // identificador único
  name: string;             // nome do usuário
  email: string;            // e-mail único
  passwordHash: string;     // senha armazenada com hash
  role: UserRole;           // CLIENT ou SELLER
  createdAt: Date;          // data de criação da conta
  updatedAt?: Date;         // última atualização

  // Cliente
  favorites?: string[];     // ids de produtos favoritados
  cart?: CartItem[];        // carrinho de compras
  purchaseHistory?: Purchase[]; // histórico de compras

  // Vendedor
  storeName?: string;       // nome da loja (opcional para exibir)
  products?: string[];      // ids de produtos cadastrados
  isActive?: boolean;       // status da conta (se desativado, produtos ocultos)
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
