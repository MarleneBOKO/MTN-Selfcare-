<script setup>
import { useRoute } from 'vue-router';
import { watchEffect, ref, onMounted, onUnmounted } from 'vue';

const pageTitle = ref('');

const route = useRoute();

watchEffect(() => {
  pageTitle.value = route.meta.pageTitle || 'Page par défaut';
});

// Détecter si l'écran est petit (mobile)
const isSmallScreen = ref(false);

// Fonction pour vérifier la taille de l'écran
const checkScreenSize = () => {
  isSmallScreen.value = window.innerWidth <= 1024; // Taille de l'écran pour les petits écrans
};

onMounted(() => {
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize);
});
</script>

<template>
    <header class="z-10 flex justify-between w-full  border-b  border-gray-200 h-[70px]  font-MTNBrighterSans">
      <div v-if="isSmallScreen" class="flex items-center px-4 py-3 gap-2 w-full bg-[#fc0]">
        <svg @click="$emit('toggle-navbar')" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
        <h5 class="text-xl font-medium text-center">{{ pageTitle }}</h5>
      </div>


      <div v-else class="flex items-center justify-start w-full gap-2 px-6 py-3 ml-20 bg-white" style="box-shadow: 0 4px 6px rgba(54, 64, 73, .08);">
        <h5 class="text-xl font-medium">{{ pageTitle }}</h5>
      </div>
    </header>
  </template>
  

  
  <style scoped>
 
  </style>
  