<script setup>
  import { ref, onMounted } from 'vue';
  
  const props = defineProps({
    isOpen: {
      type: Boolean,
      required: true,
    },
  });
  
  const emit = defineEmits(['close']);
  
  const closeModal = () => {
    emit('close');
  };
  const isVisible = ref(false);

// Appliquer un délai avant de rendre visible le modal
onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 100); // Vous pouvez ajuster ce délai selon votre préférence
});

const handleClose = () => {
  isVisible.value = false;
  setTimeout(() => {
    emit('close');
  }, 100); // Correspond à la durée de la transition
};
  </script>

<template>
    <transition 
    name="smooth-slide"
    enter-active-class="transition-all duration-300 ease-out transform"
    leave-active-class="transition-all duration-300 ease-in transform"
    enter-from-class="scale-95 translate-y-full opacity-0 md:translate-y-0 md:-translate-y-full"
    enter-to-class="scale-100 translate-y-0 opacity-100"
    leave-from-class="scale-100 translate-y-0 opacity-100"
    leave-to-class="scale-95 translate-y-full opacity-0 md:translate-y-0 md:-translate-y-full"
  >
    <div  v-if="isOpen"  class="absolute inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50">
      <div class="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-center lg:inset-0 md:inset-0">
        <div 
        class="absolute inset-0 bg-black bg-opacity-50"
        @click="handleClose"
      ></div>
        <div class="bg-white z-40 lg:rounded-md md:rounded-md shadow-lg lg:w-[500px] lg:h-[310px] w-full h-full md:w-[500px] md:h-[310px]">
          <header class="flex lg:rounded-t-md md:rounded-t-md items-center justify-between p-4 border-b h-[62px] bg-[#ffcc01]">
            <h5 class="text-xl font-bold">Changer mon code de transfert</h5>
          </header>
        <div class="flex flex-col p-4 ">
          <form class="space-y-4">
            <div class="form-group">
              <label  class="text-xs font-bold text-left text-black">Nouveau code</label>
              <div  class="block w-full  p-[0.375rem_0.75rem] text-base font-normal leading-6 text-[#495057] bg-white bg-clip-padding border border-[#ced4da] rounded-md">
                <input type="password" placeholder="Entrer le nouveau code" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm " >
              </div>
              <small  class="text-[10px]  text-[#6c757d]">Numéro à 4 chiffres</small>

            </div>
            <div class="">
              <label  class="text-xs font-bold text-left text-black">Confirmer le code</label>
              <div  class="block w-full  p-[0.375rem_0.75rem] items-center justify-center text-base font-normal leading-6 text-[#495057] bg-white bg-clip-padding border border-[#ced4da] rounded-md">
                <input  type="password" placeholder="Confirmer le nouveau code" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm ">
              </div>
            </div>
            <div class="mt-3 mb-3 text-right">
              <button type="button" class="px-[15px] text-[14px] font-medium h-[33px] text-black transition duration-200 rounded-full bg-[#ffcc01] hover:text-white">Valider</button>
            </div>
          </form>
        </div>
        </div>
        <button 
            @click="handleClose" 
            aria-label="Close" 
            class="absolute z-40 cursor-pointer top-[-20%] right-2 sm:top-14 lg:top-[25%] lg:right-[30%] md:top-[25%] md:right-[30%] w-[30px] h-[30px] text-black bg-white rounded-full hover:bg-opacity-80 flex items-center justify-center"
          >
            &times;
          </button>
      </div>
      

    </div>
  </transition>

</template>



<style lang="scss" scoped>

</style>