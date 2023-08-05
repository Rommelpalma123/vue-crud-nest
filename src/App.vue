<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-app-bar-nav-icon @click="toggleSidebar" />
      <v-spacer></v-spacer>
      <v-btn to="/" exact>
        Lista de Productos
      </v-btn>
      <v-btn to="/crearteProduct" exact>
        Create Product
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const sidebarOpen = ref(false);
const router = useRouter();

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;
};
</script>

<style>
/* Your custom styles for the navbar can be added here */
</style>
