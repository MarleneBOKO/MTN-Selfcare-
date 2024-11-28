<template>
    <div v-if="visible" class="fixed inset-0 z-50 bg-black bg-opacity-50" @click="closeModal">
      <div
        :class="[
          'transition-all duration-500 ease-in-out',
          isOpen ? 'translate-x-0' : '-translate-x-full' 
        ]"
        class="fixed lg:top-0 lg:left-0 top-[20%] left-0 z-50 lg:h-full overflow-y-auto bg-white shadow-lg w-full md:w-[40%] lg:bottom-0 h-[80%]"
      >
        <header class="flex items-center justify-between p-4 border-b bg-[#ffcc01] py-[15px] px-[20px] relative">
          <strong class="text-lg font-bold">Infos 53843978</strong>
        </header>
          <table class="min-w-full">
              <tbody>
              <tr class="bg-[rgba(0,0,0,.05)] h-[44px]">
                  <td class="p-4 font-bold text-[#212529] text-base">Numéro</td>
                  <td class="p-4 text-[#212529] text-base">53843978</td>
              </tr>
              <tr class="h-[44px]">
                  <td class="p-4 font-bold text-[#212529] text-base">Date d'enregistrement</td>
                  <td class="p-4 text-[#212529] text-base">01-10-2024 à 16:25</td>
              </tr>
              <tr class="bg-[rgba(0,0,0,.05)] h-[44px]">
                  <td class="p-4 font-bold text-[#212529] text-base">Nom</td>
                  <td class="p-4 text-[#212529] text-base">BOKO</td>
              </tr>
              <tr class="h-[44px]">
                  <td class="p-4 font-bold text-[#212529] text-base">Prénom</td>
                  <td class="p-4 text-[#212529] text-base">RUTH MARLENE </td>
              </tr>
              <tr class="bg-[rgba(0,0,0,.05)] h-[44px]">
                  <td class="p-4 font-bold text-[#212529] text-base">Occupation</td>
                  <td class="p-4 text-[#212529] text-base">4</td>
              </tr>
              <tr class="h-[44px]">
                  <td class="p-4 font-bold text-[#212529] text-base">Commune</td>
                  <td class="p-4 text-[#212529] text-base">-</td>
              </tr>
              <tr class="bg-[rgba(0,0,0,.05)] h-[44px]">
                  <td class="p-4 font-bold text-[#212529] text-base">Ville</td>
                  <td class="p-4 text-[#212529] text-base">COTONOU</td>
              </tr>
              <tr class="h-[44px]">
                  <td class="p-4 font-bold text-[#212529] text-base">Quartier</td>
                  <td class="p-4 text-[#212529] text-base">-</td>
              </tr>
              <tr class="bg-[rgba(0,0,0,.05)] h-[44px]">
                  <td class="p-4 font-bold text-[#212529] text-base">Naissance</td>
                  <td class="p-4 text-[#212529] text-base">25-06-2003</td>
              </tr>
              <tr class="h-[44px]">
                  <td class="p-4 font-bold text-[#212529] text-base">Lieu Naissance</td>
                  <td class="p-4 text-[#212529] text-base">Cotonou</td>
              </tr>
              <tr class="bg-[rgba(0,0,0,.05)] h-[44px]">
                  <td class="p-4 font-bold text-[#212529] text-base">Pièce</td>
                  <td class="p-4 text-[#212529] text-base">Autre</td>
              </tr>
              <tr class="h-[44px]">
                  <td class="p-4 font-bold text-[#212529] text-base">N° Pièce</td>
                  <td class="p-4 text-[#212529] text-base">20458553158024</td>
              </tr>
              <tr class="bg-[rgba(0,0,0,.05)] h-[44px]">
                  <td class="p-4 font-bold text-[#212529] text-base">Lieu de délivrance</td>
                  <td class="p-4 text-[#212529] text-base">ANIP</td>
              </tr>
              <tr class="h-[44px]">
                  <td class="p-4 font-bold text-[#212529] text-base">Maison</td>
                  <td class="p-4 text-[#212529] text-base">BOKO</td>
              </tr>
              </tbody>
          </table>
      </div>
  
      <button @click="closeModal" @click.stop aria-label="Close"         class="text-[#bfbfbf] justify-center items-center flex bg-white rounded-full h-[30px] w-[30px] absolute lg:right-[55%] lg:top-3 top-[15%] right-2 transform transition-all duration-500 ease-in-out"
      >
        <svg viewBox="0 0 16 16" class="w-5 h-5">
          <path fill="currentColor" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
        </svg>
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  
  const props = defineProps({
    isOpen: {
      type: Boolean,
      required: true,
    },
  });
  
  const emit = defineEmits(['close']);
  
  let isOpen = ref(props.isOpen);
  let visible = ref(props.isOpen);
  
  // Fonction pour fermer le modal avec un délai
  const closeModal = () => {
    // Déclenche l'animation de fermeture et après 500ms, cache le modal
    isOpen.value = false;
    setTimeout(() => {
      visible.value = false;
    }, 500); // Assure-toi que le modal est masqué après la durée de l'animation
  };
  
  // Utilisation du watch pour observer le changement de `isOpen`
  watch(
    () => props.isOpen,
    (newValue) => {
      if (newValue) {
        visible.value = true; // Affiche le modal
        setTimeout(() => {
          isOpen.value = true; // Lancement de l'animation de glissement
        }, 50); // Un petit délai pour permettre au DOM de se mettre à jour
      } else {
        // Déclenche la fermeture avec animation
        isOpen.value = false;
        visible.value = false;
      }
    }
  );
  </script>
  
  <style scoped>
  /* Transition pour glissement */
  .transition-all {
    transition: all 0.5s ease-in-out;
  }
  
  /* Position du modal fermé (hors de l'écran) */
  .-translate-x-full {
    transform: translateX(-100%);
  }
  
  /* Position du modal ouvert (visible à l'écran) */
  .translate-x-0 {
    transform: translateX(0);
  }
  </style>
  