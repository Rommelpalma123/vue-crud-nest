import { defineStore } from 'pinia'
import { all, create, deleteById, findById, update } from '../utils/axios'
import type { CreateProduct, UpdateProduct, Product } from '../utils/Products'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [] as Product[]
  }),

  actions: {
    async addProduct(data: CreateProduct) {
      try {
        const response = await create(data) as CreateProduct
        return response
      } catch (error) {
        console.log('product could not be created', error)
      }
    },

    async updateProduct(id: string, data: UpdateProduct) {
      try {
        const response = await update(id, data)
        console.log(response)
        return response
      } catch (error) {
        console.log('product could not be updated', error)
      }
    },

    async deleteProduct(id: string) {
      try {
        const response = await deleteById(id)
        const findIndex = this.products.findIndex((product) => product._id === id)
        if (findIndex !== -1) {
          this.products.splice(findIndex, 1)
        }
        console.log('product deleted', response)
      } catch (error) {
        console.log('product could not be deleted', error)
      }
    },

    async finProductById(id: string) {
      try {
        const response = (await findById(id)) as Product
        return response
      } catch (error) {
        console.log('product could not be found', error)
      }
    },

    async allProduct() {
      try {
        const response = (await all()) as Product[]
        this.products = response
      } catch (error) {
        console.log(error)
      }
    }
  }
})
