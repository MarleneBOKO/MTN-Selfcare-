<template>
  <div class="flex h-full font-MTNBrighterSans bg-[#f2f2f2] text-[#21252] overflow-x-hidden">
    <!-- Navbar principale (non affichée pour profil-layout) -->
    <Navbar 
      v-if="$route.meta.layout !== 'profil-layout'" 
      class="fixed left-0 h-full w-[250px] hidden sm:block" 
    />

    <!-- Contenu principal -->
    <div 
      :class="[
        'flex flex-col w-full transition-all duration-300',
        $route.meta.layout !== 'profil-layout' ? 'sm:ml-[250px] ' : ''
      ]"
    >
      <!-- Header -->
      <Header 
        v-if="$route.meta.layout !== 'profil-layout'" 
        class="w-full" 
        @toggle-navbar="toggleNavbar" 
        :is-small-screen="isSmallScreen"
      />

      <!-- Contenu principal -->
      <main class="flex-1 w-full h-screen overflow-y-auto">
        <router-view />
      </main>
    </div>

    <!-- Navbar latérale en modal pour les petits écrans -->
    <div 
      v-if="isNavbarVisible" 
      class="fixed inset-0 z-40 bg-black bg-opacity-50" 
      @click="toggleNavbar"
    >
      <div class="flex justify-end p-4">
        <!-- Espace pour ajouter une action -->
      </div>
      <Navbar class="w-[250px] h-full" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Navbar from './components/Navbar.vue';
import Header from './components/Header.vue';

// Gestion de la visibilité de la navbar en modal
const isNavbarVisible = ref(false);

// Fonction pour alterner la visibilité de la navbar
const toggleNavbar = () => {
  isNavbarVisible.value = !isNavbarVisible.value;
};

// Détecter si l'écran est petit (mobile)
const isSmallScreen = computed(() => {
  return window.innerWidth < 640; // Taille de l'écran en pixels pour les petits écrans
});
</script>

<style>
html,
body,
#app {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
</style>
