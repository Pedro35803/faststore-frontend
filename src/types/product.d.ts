export interface Product {
  id: string; // identificador único (UUID, ObjectId, etc.)
  name: string; // nome do produto
  price: number; // preço em formato numérico
  description: string; // descrição do produto
  publishedAt: Date; // data de publicação
  imageUrl: string; // URL da imagem

  // Campos opcionais que podem ser úteis
  stock?: number; // quantidade disponível
  category?: string; // categoria do produto
  sellerId?: string; // referência ao vendedor que cadastrou
  isActive?: boolean; // status do produto (ex.: ocultado se vendedor desativar conta)
  favoritesCount?: number; // número de vezes que foi favoritado
  soldCount?: number; // quantidade vendida
}
