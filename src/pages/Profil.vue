<script setup>
import { useRoute } from 'vue-router';
import { ref, computed, onMounted, onUnmounted, watchEffect } from 'vue';
import NavbarProfil from '../components/NavbarProfil.vue';
import HeaderProfil from '../components/HeaderProfil.vue';

// Détecter si l'écran est petit (mobile)
const isSmallScreen = ref(false);
const isNavbarVisible = ref(false);

const pageTitle = ref('');
const route = useRoute();

watchEffect(() => {
  pageTitle.value = route.meta.pageTitle || 'Page par défaut';
});

// Fonction pour vérifier la taille de l'écran
const checkScreenSize = () => {
  isSmallScreen.value = window.innerWidth <= 1024; 
};

onMounted(() => {
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize);
});

// Fonction pour basculer la visibilité de la navbar
const toggleNavbar = () => {
  isNavbarVisible.value = !isNavbarVisible.value;
};
</script>

<template>
  <div class="flex h-full font-MTNBrighterSans bg-[#f2f2f2] text-[#21252] ">
    <!-- Navbar latérale (affichée uniquement sur grand écran) -->
    <NavbarProfil 
      v-if="$route.meta.layout === 'profil-layout'" 
      class="fixed left-0 h-full w-[340px] z-20 hidden lg:block md:hidden " 
    />

    <div class="flex flex-col w-full lg:ml-[250px]" style="box-shadow: 0 4px 6px rgba(54, 64, 73, .08);">
      <!-- Header -->
      <HeaderProfil 
        v-if="$route.meta.layout === 'profil-layout'" 
        :pageTitle="pageTitle" 
        class="w-full" 
        @toggle-navbar="toggleNavbar" 
      />

      <main class="flex-1 w-full h-screen overflow-y-auto bg-white">
        <!-- Contenu principal -->
        <router-view />
      </main>
    </div>

    <!-- Navbar latérale pour petit écran (modal) -->
    <div 
      v-if="isNavbarVisible " 
      class="fixed inset-0 z-40 bg-black bg-opacity-50"
      @click="toggleNavbar"
    >
      <NavbarProfil class="w-[340px] h-full " />
    </div>
  </div>
</template>


<style scoped>
/* Styles supplémentaires pour la disposition du modal et des transitions */
</style>













