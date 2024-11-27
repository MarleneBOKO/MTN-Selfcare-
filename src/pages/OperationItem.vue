<script setup>
import { defineProps, defineEmits } from 'vue';  

const props = defineProps({
  boldText: {
    type: String,
    required: true
  },
  paragraphText: {
    type: String,
    required: true
  },
  loading: {
    type: Boolean,
    default: false, 
  },
});

const emit = defineEmits(['showModal']);

const handleClick = () => {
  emit('showModal', props.boldText);
};
</script>

<template>
  <div class="flex lg:flex-col md:flex-col flex-row rounded-[15px] bg-white overflow-hidden w-full lg:items-stretch items-center md:items-stretch"  
  
  >
  <!-- Section Texte -->
  <div class="flex flex-col justify-center p-[15px] gap-1 flex-grow">
    <h3 class="text-[16px] text-black whitespace-nowrap font-bold">{{ boldText }}</h3>
    <p class="text-sm text-[#6c757d] whitespace-nowrap lg:whitespace-normal md:whitespace-normal">{{ paragraphText }}</p>
  </div>

  <!-- Bouton et Flèche -->
  <div @click="handleClick" 
       class="lg:bg-[#106887] md:bg-[#106887] bg-none flex items-center lg:flex-row md:flex-row flex-row px-[15px] h-9 w-auto rounded-b-lg cursor-pointer lg:hover:bg-[#4c95cd] md:hover:bg-[#4c95cd] lg:justify-between md:justify-between">
    <!-- Texte pour grand écran -->
    <span class="hidden text-sm text-white lg:block md:block">Afficher</span>
    <!-- Flèche SVG -->
    <svg xmlns="http://www.w3.org/2000/svg" 
         class="w-4 h-4 lg:text-white md:text-white text-[#106887] fill-current ml-2 lg:ml-0 md:ml-0" 
         viewBox="0 0 32 32">
      <path d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10z" />
    </svg>
  </div>
</div>

</template>

<style scoped>
/* Ajoutez des styles spécifiques si nécessaire */
</style>