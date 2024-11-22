<template>
  <div class="absolute bottom-0 left-0 right-0 z-40 flex items-center justify-center md:inset-0 lg:inset-0 " style="">
    <!-- Fond de l'overlay -->
    <div class="fixed inset-0 bg-black bg-opacity-50 md:inset-0 lg:inset-0 " ></div>

    <!-- Conteneur principal -->
    <div class="relative bottom-0">
      <!-- Contenu du modal -->
      <div class="bg-white lg:rounded-md shadow-lg lg:w-[500px] lg:h-[310px] md:w-[500px] md:h-[310px] w-full ">
        <header class="flex items-center justify-between p-4 border-b h-[62px] bg-[#ffcc01] lg:rounded-t-md">
          <h5 class="text-xl font-bold">{{ modalTitle }}</h5>
        </header>
        <div class="flex flex-col items-center justify-center p-4 text-center">
          <i class="mdi mdi-cellphone"></i>
          <i class="text-3xl text-yellow-500 mdi mdi-kgk-mtn-phonelink_lock modal-header-icon"></i>
          <h3 class="text-2xl font-bold">{{ modalTitle }}</h3>
          <p class="text-[#6c757d] text-sm">
            {{ description }}<br>{{ boldtext }}
          </p>
          <div class="mt-4 mb-2">
            <button 
              type="button" 
              class="px-[15px] text-[14px] font-medium h-[33px] text-black transition duration-200 rounded-full bg-[#ffcc01] hover:text-white"
            >
              {{ buttonText }}
            </button>
          </div>
        </div>
      </div>

      <!-- Bouton de fermeture à côté du modal, remonté -->
      <button 
        @click="$emit('close')" 
        aria-label="Close" 
        class="absolute  top-[-20%] right-2 sm:top-14 lg:top-2 lg:right-[-40px] md:top-2 md:right-[-40px] w-[30px] h-[30px] text-black bg-white rounded-full hover:bg-opacity-80 flex items-center justify-center"
      >
        &times;
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  modalTitle: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  boldtext: {
    type: String,
    required: true
  },
  buttonText: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
/* Vous pouvez ajouter des styles supplémentaires ici si nécessaire */
</style>
