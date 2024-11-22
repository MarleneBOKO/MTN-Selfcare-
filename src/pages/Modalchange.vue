<script setup>
  import { ref } from 'vue';
  
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
  </script>

<template>
    <div  v-if="isOpen"  class="absolute inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50">
      <div class="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-center lg:inset-0 md:inset-0">
        <div class="bg-white lg:rounded-md md:rounded-md shadow-lg lg:w-[500px] lg:h-[310px] w-full h-full md:w-[500px] md:h-[310px]">
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
      </div>
      <div class="fixed inset-0 bg-black bg-opacity-50"></div>
      <button @click="closeModal" @click.stop aria-label="Close" class="absolute  top-[45%] right-2 sm:top-14 lg:top-2 lg:right-[-40px] md:top-2 md:right-[-40px] w-[30px] h-[30px] text-black font-bold bg-white rounded-full hover:bg-opacity-80 flex items-center justify-center">&times; </button>

    </div>
</template>



<style lang="scss" scoped>

</style>