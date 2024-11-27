<script setup>
import { ref, onMounted } from 'vue';
import OperationItem from './OperationItem.vue';
import ModalInfo from './ModalInfo.vue';
import ModalForfait from './ModalForfait.vue';

const isModalOpen = ref(false);
const modalContent = ref({ title: '' }); 
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  modalTitle: {
    type: String,
    required: true
  },
});
const isLoading = ref(true); 

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false; 
  }, 3000);
});

const modalData = {
  "Wabaa": {
    title: "Wabaa",
  },
  "Internet": {
    title: "Internet",
  },
  "Yellow Game": {
    title: "Yellow Game",
  },
  "Maxi": {
    title: "Maxi",
  },
  "Gopack": {
    title: "GoPack",
  }
};

const toggleModal = (title = null) => {
  if (title && modalData[title]) {
    modalContent.value = modalData[title];
    isModalOpen.value = true; 
  } else {
    isModalOpen.value = false; 
  }
};

</script>


<template>
  <div class="w-full px-2 lg:py-[40px] lg:px-[60px] md:px-[60px]  md:py-[40px] py-[90px]">
    <div class="flex flex-col gap-7">
      <div>
        <h1 class="lg:text-2xl md:text-2xl text-base font-bold text-[#21252]">Forfaits</h1>
        <p class="mb-4 lg:text-[16px] md:text-[16px] text-sm text-[#6c757d]">
          Sélectionner le forfait que tu souhaites activer
        </p>
      </div>
      <div class="grid w-full gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <OperationItem 
  boldText="Wabaa" 
  paragraphText="" 
  @click="toggleModal('Wabaa')" 
  :loading="isLoading"
class="cursor-pointer"
/>
<OperationItem 
  boldText="Internet" 
  paragraphText="" 
  @click="toggleModal('Internet')" 
  :loading="isLoading"
  class="cursor-pointer"

/>
<OperationItem 
  boldText="Yellow Game" 
  paragraphText="" 
  @click="toggleModal('Yellow Game')" 
  :loading="isLoading"
  class="cursor-pointer"

/>
<OperationItem 
  boldText="Maxi" 
  paragraphText="" 
  @click="toggleModal('Maxi')" 
  :loading="isLoading"
  class="cursor-pointer"

/>
<OperationItem 
  boldText="GoPack" 
  paragraphText="" 
  @click="toggleModal('Gopack')" 
  :loading="isLoading"
  class="cursor-pointer"

/>
      </div>
      <div>
        <h1 class="text-lg font-bold text-[#21252]">Services</h1>
        <p class="mb-4 text-[16px] text-[#6c757d]">
          Profite de tous les services disponibles
        </p>
      </div>
    </div>
  </div>
  <ModalForfait :isOpen="isModalOpen" @close="toggleModal" :modalTitle="modalContent.title" />

</template>

