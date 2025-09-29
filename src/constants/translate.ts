export const translateGlobal = {
  pt: {
    scheme: {
      user: {
        name: {
          required: "Nome é obrigatório",
        },
        email: {
          required: "E-mail é obrigatório",
          invalid: "E-mail inválido",
        },
        picture: {
          required: "Por favor, selecione uma imagem",
          format: "Formato de arquivo não suportado",
        },
      },
      seller: {
        storeName: {
          required: "Nome da loja é obrigatório",
        },
        description: {
          required: "Descrição é obrigatória",
        },
      },
      cnpj: {
        required: "CNPJ é obrigatório",
        incorrectSize: "Deve conter 14 dígitos",
      },
      phoneBrl: {
        required: "O telefone é obrigatório",
        incorrectSize: "O telefone deve conter entre 10 e 15 dígitos",
      },
      address: {
        street: {
          required: "A rua é obrigatória",
        },
        number: {
          max: "O número deve ter no máximo 5 dígitos",
          required: "O número é obrigatório",
        },
        neighborhood: {
          required: "O bairro é obrigatório",
        },
        city: {
          required: "A cidade é obrigatória",
        },
        state: {
          required: "O estado é obrigatório",
        },
        postalCode: {
          required: "O CEP é obrigatório",
          matches: "O CEP deve conter 8 dígitos",
        },
      },
      product: {
        name: {
          required: "O nome do produto é obrigatório",
        },
        price: {
          typeError: "Preço inválido",
          positive: "O preço deve ser positivo",
          required: "O preço é obrigatório",
        },
        description: {
          required: "A descrição é obrigatória",
        },
        publishDate: {
          typeError: "Data inválida",
          required: "A data de publicação é obrigatória",
        },
        imageUrl: {
          url: "URL inválida",
          required: "A URL da imagem é obrigatória",
        },
        fileCSV: {
          required: "O arquivo é obrigatório",
        },
      },
    },
  },
};
