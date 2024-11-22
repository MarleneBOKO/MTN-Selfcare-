<script setup>
import { ref, computed } from "vue";
import { defineProps } from 'vue';

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

const emit = defineEmits(["close"]);

const closeModal = () => { 
  emit("close");
};

const itemsByModalTitle = {
  Wabaa: [
    { title: "100 FCFA", content: "Wabaa 100F (4 min/24H)" },
    { title: "150 FCFA", content: "Wabaa 150F (6 min/24H)" },
    { title: "200 FCFA", content: "Wabaa 200F (8 min/24H)" },
    { title: "300 FCFA", content: "Wabaa 300F (12 min/24H)" },
    { title: "500 FCFA", content: "Wabaa 500F (20 min/3J)" },
  ],
  Internet: [
    { title: "100 FCFA", content: "100F/70Mo/24h" },
    { title: "150 FCFA", content: "150F/120Mo/24h" },
    { title: "200 FCFA", content: "200F/170Mo/24h" },
    { title: "250 FCFA", content: "250F/220Mo/24h" },
    { title: "300 FCFA", content: "300F/260Mo/24h" },
    { title: "500 FCFA", content: "500F/450Mo/03J" },
  ],
  "Yellow Game": [
    { title: "50 FCFA", content: "Yellow Game_Daily" },
    { title: "100 FCFA", content: "Yellow_Game_3Days(100F/200MB/3D)" },
    { title: "150 FCFA", content: "Yellow_Game_Weekly(150F/400MB/7D)" },

  ],
  Maxi: [
    { title: "100 FCFA", content: "100 (200F/24H)" },
    { title: "150 FCFA", content: "150 (330F/24H)" },
    { title: "200 FCFA", content: "200 (460F/24H)" },
    { title: "500 FCFA", content: "500 (1000F/3J)" },
    

  ],
  
  GoPack: [
    { title: "100 FCFA", content: "100F (3Min+3sms+3Mo/24H)" },
    { title: "150 FCFA", content: "150F (5Min + 5sms + 5Mo/24H)" },
    { title: "200 FCFA", content: "200F (7Min + 7sms + 7Mo/24H)" },
    { title: "300 FCFA", content: "300F (11min + 11sms + 11Mo/24H)" },
    { title: "500 FCFA", content: "500F (19min+19Mo/3J)" },
    

  ],
};

const items = computed(() => {
  return itemsByModalTitle[props.modalTitle] || [];
});

const openIndex = ref(null);

const toggleAccordion = (index) => {
  openIndex.value = openIndex.value === index ? null : index;
};
</script>



<template>
     <div class="space-y-2 ">          
      <div v-for="(item, index) in items" :key="index">
        
                    <h2>
              <button 
                type="button"
                @click="toggleAccordion(index)" 
                class="flex items-center justify-between w-full gap-3 p-5 font-medium text-gray-500 border border-b-0 border-gray-200 h-[70px] "
              >
              <div class="flex flex-col items-start justify-start">
                <span>{{ item.title }}</span>
                <p class="text-gray-500">{{ item.content }}</p>
              </div>

                <svg
                  class="w-3 h-3 transition-transform duration-200 rotate-90" 
                  :class="{ 'rotate-[-106]': openIndex === index }"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            
            <!-- Afficher le contenu de l'accordéon uniquement s'il est ouvert -->
            <div
            v-if="openIndex === index"
                          class="p-5 bg-[#f4f4f4]"
            >
              <div class="flex items-center gap-4 mt-2">
               <div class="flex flex-col w-[48%] p-[10px] bg-white border border-solid border-[#ced4d9] rounded-[7px] cursor-pointer ">
                  <div class="flex justify-between">
                    <label class="text-sm text-[#6c757d]">Activer</label>
                    <input
                  type="radio"
                  :name="'WABAA_' + item.title"
                  value="activate"
                  checked
                />
                  </div>
                  <span class="text-xs text-[#6c757d]">Activer sur votre numéro</span>
               </div>
               <div class="flex flex-col w-[48%] p-[10px] bg-white border border-solid border-[#ced4d9] rounded-[7px] cursor-pointer ">
                  <div class="flex justify-between">
                    <label class="text-sm text-[#6c757d]">Offrir</label>
                    <input
                      type="radio"
                      :name="'WABAA_' + item.title"
                      value="offer"
                      class="ml-4"
                    />
                  </div>
                  <span class="text-sm text-[#6c757d]">Activer sur autre numéro</span>
               </div>
                
              </div>
              <div class="mt-4">
                <label class="font-bold">Sélectionnez un mode de paiement</label>
                <div class="flex items-center mt-1">
                  <input
                    type="radio"
                    :name="'mode_WABAA_' + item.title"
                    value="main"
                    checked
                    class="hidden-radio"
                  />
                  <span class="ml-2 text-sm">Compte principal</span>
                  <input
                    type="radio"
                    :name="'mode_WABAA_' + item.title"
                    value="MO"
                    class="ml-4 hidden-radio"
                  />
                  <span class="ml-2 text-sm">Mobile Money</span>
                </div>
                <div class="flex justify-between mt-6">
                  <div></div>
                  <button type="button" class="px-[15px] text-[14px] font-medium h-[33px] text-black transition duration-200 rounded-full bg-[#ffcc01] hover:text-white">Activer</button>

                </div>
              </div>
            </div>
          </div>
             </div>
</template>



<style lang="scss" scoped>

</style>