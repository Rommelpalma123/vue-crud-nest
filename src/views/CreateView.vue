<template>
  <div class="mb-3 container mt-4">
    <v-text-field v-model="name" color="white" label="Name" required />
    <v-text-field v-model="description" color="white" label="Description" required />
    <v-text-field v-model="precio" color="white" label="Price" required />
    <select v-model="categories" class="form-select" aria-label="Default select example">
      <option selected>Categories</option>
      <option value="cabello">cabello</option>
      <option value="unas">uñas</option>
      <option value="maquillaje">maquillaje</option>
      <option value="depilacio
      n">depilacion</option>
      <option value="tintes">tintes</option>
      <option value="tratamientos">tratamientos</option>
    </select>

    <v-btn color="primary" class="mt-1" @click="creteProduct"> clear </v-btn>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from '@/store/products'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const store = useProductStore()
const route = useRouter()
const name = ref('')
const description = ref('')
const precio = ref('')
const categories = ref('')

const creteProduct = async () => {
  const data = {
    name: name.value,
    description: description.value,
    precio: parseFloat(precio.value),
    categories: categories.value
  }
  await store.addProduct(data)
  route.push('/')
}

const fff = {
  Cabello: 'cabello',
  Uñas: 'unas',
  Maquillaje: 'maquillaje',
  Depilacion: 'depilacion',
  Tintes: 'tintes',
  Tratamientos: 'tratamientos'
} 
const categoriess = ref(['cabello', 'unas', 'maquillaje', 'depilacion', 'tintes', 'tratamientos'])
</script>

<style scoped></style>
