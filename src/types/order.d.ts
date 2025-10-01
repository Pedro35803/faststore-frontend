import { Product } from "./product";

export type OrderItem = {
  id: string;
  quantity: number;
  price: number;
  product: Product;
};

export type Order = {
  id: string;
  total_price: number;
  status: "PENDENT" | "COMPLETED" | "CANCELLED";
  created_at: string;
  orderItem: OrderItem[];
};