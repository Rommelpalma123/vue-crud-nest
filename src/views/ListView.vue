<template>
  <v-container>
    <v-btn
      prepend-icon="$vuetify"
      @click="route.push('/crearteProduct')"
      variant="tonal"
      color="primary"
      elevation="2"
    >
      Crear
    </v-btn>
    <v-table fixed-header style="background-color: rgb(204, 182, 182)" height="400px">
      <thead>
        <tr>
          <th>nombre</th>
          <th>descripcion</th>
          <th>precio</th>
          <th>categoria</th>
          <th class="text-center">delete</th>
          <th class="text-center">update</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in store.products" :key="product.name">
          <td>{{ product.name }}</td>
          <td>{{ product.precio }}</td>
          <td>{{ product.description }}</td>
          <td>{{ product.categories }}</td>
          <td class="text-center">
            <font-awesome-icon
              :icon="['fas', 'trash']"
              style="color: #ff1900"
              @click="deleteProductById(product._id)"
            />
          </td>
          <td class="text-center">
            <font-awesome-icon
              :icon="['fas', 'pen-to-square']"
              style="color: #1c6b8d"
              @click="goToUpdateProduct(product._id)"
            />
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script setup lang="ts">
import { useProductStore } from '../store/products'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const store = useProductStore()
const route = useRouter()
const router = useRouter()

onMounted(async () => {
  await store.allProduct()
})

const deleteProductById = async (id: string) => {
  await store.deleteProduct(id)
}

const goToUpdateProduct = (id: string) => {
  router.push(`/updateProduct/${id}`)
}
</script>
