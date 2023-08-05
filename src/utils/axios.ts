import axios from 'axios'
import type { CreateProduct, UpdateProduct } from './Products'

//const API_URL = 'https://backend-ecommerce-pty6.onrender.com/api'
const API_URL = 'http://localhost:3000/api'

export const create = (data: CreateProduct) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${API_URL}/productos`, data)
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        console.log(error)
        reject(error)
      })
  })
}

export const update = (id: string, data: UpdateProduct) => {
  return new Promise((resolve, reject) => {
    axios
      .patch(`${API_URL}/productos/${id}`, data)
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        console.log(error)
        reject(error)
      })
  })
}

export const all = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/productos`)
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        console.log(error)
        reject(error)
      })
  })
}

export const deleteById = (id: string) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${API_URL}/productos/${id}`)
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        console.log(error)
        reject(error)
      })
  })
}

export const findById = (id: string) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/productos/${id}`)
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        console.log(error)
        reject(error)
      })
  })
}
