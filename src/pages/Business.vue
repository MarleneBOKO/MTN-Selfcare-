<template>
  <div class="gap-7 lg:py-[40px] lg:px-[60px] md:px-[60px] px-4 flex flex-col lg:flex-row md:flex-col  justify-between lg:justify-start mb:justify-center md:py-[40px] py-[90px]">
    <div class="flex flex-col items-start justify-start gap-3 md:justify-center md:items-center lg:justify-normal lg:items-stretch">
      <div class="flex flex-col items-start justify-start">
        <h1 class="lg:text-2xl md:text-2xl text-lg font-bold text-[#21252]">Aperçu de votre compte</h1>
        <p class="mb-4 text-[16px] text-[#6c757d]">Numéro de compte:</p>
      </div>
      <div class="grid w-full gap-6 lg:grid-cols-3">
    <div class="flex flex-col gap-8">
      <div 
        class="p-5 bg-white rounded-xl relative min-lg:h-[217px] h-[95px] flex lg:flex-col md:flex-col justify-between lg:justify-start mb:justify-center"
        :style="{
          height: expandedStates[0] && isSmallScreen ? '217px' : (isSmallScreen ? '95px' : '217px'), 
          width: '100%', 
        }"
      >
        <div 
          v-if="isSmallScreen && !expandedStates[0]" 
          class="text-[16px] font-bold text-[#212529] "
        >
          Total des ventes
        </div>

        <div class="absolute left-0 top-[20px] h-[20px] bg-[#ffcc01] w-[10px]"></div>
        <div v-if="expandedStates[0] || !isSmallScreen" class="flex flex-col items-center flex-1">
          <UnpaidTotalCard
            title="Total des ventes"
            contentText="Disponibilité limitée"
            iconClass="mdi icon mdi-briefcase-variant"
            paracontent=""
            :loading="isLoading"

          />
        </div>
        <div
          class="w-[30px] h-[30px] rounded-full border-2 border-solid border-[#ccc] flex items-center justify-center lg:hidden md:hidden cursor-pointer"
          @click="toggleExpand(0)"
        >
          <i :class="expandedStates[0] ? 'mdi mdi-chevron-down' : 'mdi mdi-chevron-right'" style="font-size: 24px !important;"></i>
        </div>
      </div>


      <!-- Deuxième carte -->
      <div class="p-5 bg-white   rounded-xl relative lg:h-[217px] h-[95px] flex lg:flex-col md:flex-col justify-between lg:justify-start mb:justify-center"
      :style="{
          height: expandedStates[1] && isSmallScreen ? '217px' : (isSmallScreen ? '95px' : '217px'), 
          width: '100%', 
      display: 'flex',
      
          
        }" >
      
        <div v-if="isSmallScreen && !expandedStates[1]"  class="text-[16px] font-bold text-[#212529]">
          Consommation du compte
        </div>
          <div class="absolute left-0 top-[20px] h-[20px] bg-[#ffcc01] w-[10px]"></div>
        <div v-if="expandedStates[1] || !isSmallScreen" class="flex flex-col items-center flex-1">
          <UnpaidTotalCard
            title="Consommation du compte"
            contentText="Aucune consommation disponible pour ce compte"
            iconClass="mdi icon mdi-briefcase-variant"
            paracontent=""
            :loading="isLoading"

          />
        </div>
        <div
          class="w-[30px] h-[30px] rounded-full border-2 border-solid border-[#ccc] flex items-center justify-center lg:hidden md:hidden cursor-pointer"
          @click="toggleExpand(1)"
        >
          <i :class="expandedStates[1] ? 'mdi mdi-chevron-down' : 'mdi mdi-chevron-right'" style="font-size: 24px !important;"></i>
        </div>
      </div>

      <!-- Troisième carte -->
      <div class="p-5 bg-white rounded-xl relative lg:h-[217px] w-auto h-[95px] flex lg:flex-col md:flex-col justify-between lg:justify-start mb:justify-center"
      :style="{
          height: expandedStates[2] && isSmallScreen ? '217px' : (isSmallScreen ? '95px' : '217px'), 
          width: 'full'
        }" >
      
        <div v-if="isSmallScreen && !expandedStates[2]" 
        class="text-[16px] font-bold text-[#212529]">
          Consommation des services
        </div>
          <div class="absolute left-0 top-[20px] h-[20px] bg-[#ffcc01] w-[10px]"></div>
          <div v-if="expandedStates[2] || !isSmallScreen" class="flex flex-col items-center flex-1">
            <UnpaidTotalCard
            title="Consommation des services"
            contentText="Aucune consommation disponible pour ce compte"
            iconClass="mdi icon mdi-briefcase-variant"
            paracontent=""
            :loading="isLoading"

          />
        </div>
        <div
          class="w-[30px] h-[30px] rounded-full border-2 border-solid border-[#ccc] flex items-center justify-center lg:hidden md:hidden cursor-pointer"
          @click="toggleExpand(2)"
        >
          <i :class="expandedStates[2] ? 'mdi mdi-chevron-down' : 'mdi mdi-chevron-right'" style="font-size: 24px !important;"></i>
        </div>
      </div>
    </div>

    <!-- Deuxième colonne -->
    <div class="flex flex-col items-start justify-center gap-8 lg:col-span-2 md:justify-center md:items-center lg:justify-normal lg:items-stretch">
      <!-- Quatrième carte -->
      <div class="p-5 bg-white rounded-xl relative lg:h-[253px] w-full h-[95px] flex lg:flex-col md:flex-col justify-between lg:justify-start mb:justify-center"
      :style="{
          height: expandedStates[3] && isSmallScreen ? '253px' : (isSmallScreen ? '95px' : '253px'), 
        }" >
      
        <div           v-if="isSmallScreen && !expandedStates[3]" 
        class="text-[16px] font-bold text-[#212529]">
          Liste des factures
        </div>
          <div class="absolute left-0 top-[20px] lg:h-[50px] md:h-[50px] h-[25px] bg-[#ffcc01] w-[10px]"
          :style="{
          height: expandedStates[3] && isSmallScreen ? '50px' : (isSmallScreen ? '25px' : '50px'), 
        }" ></div>
          <div v-if="expandedStates[3] || !isSmallScreen" class="flex flex-col items-center flex-1">
            <UnpaidTotalCard
            title="Liste des factures"
            contentText="Aucune facture disponible"
            iconClass="mdi icon mdi-briefcase-variant"
            paracontent="Veuillez cocher les factures que vous souhaitez payer"
            :loading="isLoading"

          />
        </div>
        <div
          class="w-[30px] h-[30px] rounded-full border-2 border-solid border-[#ccc] flex items-center justify-center lg:hidden md:hidden cursor-pointer"
          @click="toggleExpand(3)"
        >
          <i :class="expandedStates[3] ? 'mdi mdi-chevron-down' : 'mdi mdi-chevron-right'" style="font-size: 24px !important;"></i>
        </div>
      </div>

      <!-- Cinquième carte -->
      <div class="p-5 bg-white rounded-xl relative w-full lg:h-[253px] md:w-[358px] lg:w-auto h-[95px] flex lg:flex-col md:flex-col justify-between lg:justify-start mb:justify-center"
      :style="{
          height: expandedStates[4] && isSmallScreen ? '253px' : (isSmallScreen ? '95px' : '253px'), 
          width: '100%', 
    
        }" >
      
        <div v-if="isSmallScreen && !expandedStates[4]" 
        class="text-[16px] font-bold text-[#212529]">
          Mini relevé de compte
        </div>
          <div class="absolute left-0 top-[20px] h-[20px] bg-[#ffcc01] w-[10px]"></div>
          <div v-if="expandedStates[4] || !isSmallScreen" class="flex flex-col items-center flex-1">
            <UnpaidTotalCard
            title="Mini relevé de compte"
            contentText="Aucun relevé disponible"
            iconClass="mdi icon mdi-briefcase-variant"
            paracontent=""
            :loading="isLoading"

          />
        </div>
        <div
          class="w-[30px] h-[30px] rounded-full border-2 border-solid border-[#ccc] flex items-center justify-center lg:hidden md:hidden cursor-pointer"
          @click="toggleExpand(4)"
        >
          <i :class="expandedStates[4] ? 'mdi mdi-chevron-down' : 'mdi mdi-chevron-right'" style="font-size: 24px !important;"></i>
        </div>
      </div>
    </div>
  </div>

    </div>
  </div>
</template>

<script setup>
import UnpaidTotalCard from './UnpaidTotalCard.vue';
import { ref, onMounted, onUnmounted } from "vue";

const isLoading = ref(true); 

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false; 
  }, 3000);
});
const expandedStates = ref([false, false, false, false, false]);
const isSmallScreen = ref(window.innerWidth < 1024);

const toggleExpand = (index) => {
  expandedStates.value[index] = !expandedStates.value[index];
};

const handleResize = () => {
  isSmallScreen.value = window.innerWidth < 1024;
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>
