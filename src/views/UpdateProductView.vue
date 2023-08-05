<template>
  <h1 class="container">update product</h1>
  <div class="mb-3 container mt-4 m-3">
    <input type="text" class="form-control m-3" v-model="name" required />
    <input
      type="text"
      class="form-control m-3"
      v-model="description"
      required
    />
    <input type="number" class="form-control m-3" v-model="precio" required />
    <select v-model="categories" class="form-select m-3" aria-label="Default select example">
      <option selected>Select one Categori</option>
      <option value="cabello">cabello</option>
      <option value="unas">uñas</option>
      <option value="maquillaje">maquillaje</option>
      <option value="depilacion">depilacion</option>
      <option value="tintes">tintes</option>
      <option value="tratamientos">tratamientos</option>
    </select>

    <button class="m-3 btn btn-primary mb-3" @click="updatedProductById">enviar</button>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from '@/store/products'
import { ref, reactive, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { UpdateProductForm } from '@/utils/Products'

const router = useRoute()
const route = useRouter()
const productId = router.params.id as string
const store = useProductStore()
const name = ref('')
const description = ref('')
const precio = ref(0)
const categories = ref('')

onMounted(async () => {
  const product: UpdateProductForm | undefined = await store.finProductById(productId)
  if (product) {
    name.value = product?.name
    description.value = product?.description
    precio.value = product?.precio
    categories.value = product?.categories
  } else {
    console.log('product not fount')
  }
})

const updatedProductById = async () => {
  const data = reactive<UpdateProductForm>({
    name: name.value,
    description: description.value,
    precio: precio.value,
    categories: categories.value
  })
  await store.updateProduct(productId, data);
  route.push('/')

}
</script>

<style scoped></style>
