export interface CreateProduct {
  name: string
  description: string
  precio: number
  categories: string
}

export interface UpdateProduct {
  name: string
  description: string
  precio: number
  categories: string
}

export interface UpdateProductForm {
  name: string
  description: string
  precio: number
  categories: string
}

export interface Product {
  _id: string
  name: string
  description: string
  precio: number
  categories: string
}

export interface ProductInputs {
  name: string
  description: string
  precio: number
  categories: string
}
