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
                 <span class="text-sm text-[#6c757d]">Activer sur votre numéro</span>
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

<script setup>
import { ref } from "vue";
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

const items = ref([
 { title: "10000 FCFA", content: "10000 (14000F/30J)" },
 { title: "15000 FCFA", content: "15000 (21000F/30J)" },
 { title: "20000 FCFA", content: "20000 (28000F/30J)" },
 { title: "25000 FCFA", content: "25000 (37000F/30J)" },
 { title: "30000 FCFA", content: "30000 (45000F/30J)" },
 { title: "40000 FCFA", content: "40000 (60000F/30J)" },
 { title: "50000 FCFA", content: "50000 (75000F/30J)" },
 
 
]);

const openIndex = ref(null);

const toggleAccordion = (index) => {
 openIndex.value = openIndex.value === index ? null : index;
};

</script>

<style lang="scss" scoped>

</style>