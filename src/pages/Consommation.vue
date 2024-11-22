<template>
  <div class="gap-7 lg:py-[40px] lg:px-[60px] md:px-[60px] px-4 flex flex-col lg:flex-row md:flex-col md:py-[40px] py-[90px]">
    <div class="flex flex-col justify-between w-full h-full gap-7">
      <div class="flex flex-col">
        <h1 class="lg:text-2xl md:text-2xl text-lg font-bold text-[#21252]">Ma consommation</h1>
        <p class="mb-4 lg:text-[16px] md:text-[16px] text-sm text-[#6c757d]">
          Détails de la consommation des produits & services MTN et internet
        </p>
      </div>

     <div class="flex flex-col-reverse w-full gap-10 lg:flex-row md:flex-col">
      <div class="flex flex-col  lg:w-[75%] md:w-full">
        <div class="relative flex flex-col w-full">
          <div class="flex gap-5">
            <span
              ref="produitTab"
              :class="{'text-black font-bold': activeTab === 'produit'}"
              @click="setActiveTab('produit')"
              class="cursor-pointer"
            >
              Produits & services
            </span>
            <span
              ref="internetTab"
              :class="{'text-black font-bold': activeTab === 'internet'}"
              @click="setActiveTab('internet')"
              class="cursor-pointer"
            >
              Internet
            </span>
          </div>
          <div class="absolute bottom-0 left-0 w-full h-[1px] bg-gray-300 top-11">
            <div
              class="h-1 transition-all duration-300 bg-black"
              :style="{
                width: indicatorWidth + 'px',
                transform: 'translateX(' + indicatorPosition + 'px)'
              }"
            ></div>
          </div>
        </div>

      <div class="mt-10 ">
        <transition name="fade">
            <div
              v-if="activeTab === 'produit'"
              key="produit"
              class="flex flex-col items-center justify-center rounded-2xl p-[15px] min-h-[250px] px-0 mt-4 bg-white border border-[#dee2e6]"
            >
              <i class="mdi mdi-alert-circle-check" style="color: #dda129; font-size: 62px;"></i>
              <b class="text-center">Aucune donnée de consommation pour cette période</b>
            </div>
          </transition>

          <transition name="fade">
            <div
              v-if="activeTab === 'internet'"
              key="internet"
              class="flex flex-col items-center justify-center rounded-2xl p-[15px] min-h-[250px] px-0 mt-4 bg-white border border-[#dee2e6]"
            >
              <i class="mdi mdi-alert-circle-check" style="color: #dda129; font-size: 62px;"></i>
              <b class="text-center">Aucune donnée de consommation pour cette période</b>
            </div>
          </transition>
      </div>
    </div>
    <div class="flex flex-col flex-1 h-full">
  <div class="bg-white p-[20px] rounded-[12px] mb-[30px] flex flex-col min-w-[300px] min-h-[190px] justify-between relative">
    <div class="flex flex-col">
      <div class="absolute left-0 h-[20px] top-[20px] bg-[#ffcc01] w-[10px]"></div>
        <h3 class="text-[16px] font-bold ">Sélectionnez une période</h3>
    <div class="flex flex-wrap mt-3">
      <a href="" type="button" class="h-[34.6px] flex items-center justify-center  mb-2 mr-2 border border-[#106887] text-[#106887] rounded-[30px] text-sm px-[15px] hover:bg-[#95aac9] hover:text-white hover:border-[#95aac9]">Aujourd'hui</a>
      <a href="" type="button" class="h-[34.6px] flex items-center justify-center mb-2 mr-2 border border-[#106887] text-[#106887] rounded-[30px] text-sm px-[15px] hover:bg-[#95aac9] hover:text-white hover:border-[#95aac9]">Hier</a>
      <a href="" type="button" class="h-[34.6px] flex items-center justify-center mb-2 mr-2 border border-[#106887] text-[#106887] rounded-[30px] text-sm px-[15px] hover:bg-[#95aac9] hover:text-white hover:border-[#95aac9]">7 derniers jours</a>
      <a href="" type="button" class="h-[34.6px] flex items-center justify-center mb-2 mr-2 border border-[#106887] text-[#106887] rounded-[30px] text-sm px-[15px] hover:bg-[#95aac9] hover:text-white hover:border-[#95aac9] hover:border">Ce mois</a>

    </div>
    </div>
    <div class="flex flex-col gap-3">
    <!-- Titre -->
    <div class="py-[15px] items-center flex">
      <div class="h-[20px] bg-[#ffcc01] w-[10px] ml-[-20px] mr-[20px]"></div>
      <h3 class="text-[16px] font-bold">Définir une période</h3>
    </div>

<!-- Sélection de la période -->
<div class="flex flex-col gap-2">
  <!-- Champ pour Date de début -->
  <div
    role="group"
    class="border border-solid border-[#ced4da] rounded p-2 flex items-center gap-2"
  >
    <button type="button" class="h-auto">
      <svg
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        class="w-4 h-4 transition-colors hover:text-[#6494a5]"
      >
        <path
          d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
        ></path>
      </svg>
    </button>
    <!-- Input DatePicker -->
    <DatePicker
      v-model="startDate"
      format="dd MMMM yyyy"
      placeholder="Date de début"
      class="custom-datepicker"
    />
  </div>

  <!-- Champ pour Date de fin -->
  <div
    role="group"
    class="border border-solid border-[#ced4da] rounded p-2 flex items-center gap-2"
  >
    <button type="button" class="h-auto">
      <svg
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        class="w-4 h-4 transition-colors hover:text-[#6494a5]"
      >
        <path
          d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
        ></path>
      </svg>
    </button>
    <!-- Input DatePicker -->
    <DatePicker
      v-model="endDate"
      format="dd MMMM yyyy"
            placeholder="Date de fin"
      class="custom-datepicker"
    />
  </div>
</div>


    <!-- Bouton Rechercher -->
    <button
      class="w-full rounded-[30px] items-center h-[35px] justify-center text-white bg-[#ffe05c] text-sm px-[15px] hover:bg-[#6494a5] transition-colors"
    >
      Rechercher
    </button>
  </div>
  </div>


<!-- Message de confirmation -->
<div class="bg-white p-[20px] rounded-[12px] mb-[30px] flex flex-col min-w-[300px] gap-3 relative">
    <div class="absolute left-0 h-[20px] top-[20px] bg-[#ffcc01] w-[10px] "></div>

    <h3 class="text-[16px] font-bold">Alerte email</h3>
    <div class="flex justify-between w-full"> 
      <span class="text-sm text-[#6c757d]">Recevoir les alertes des produits & services:</span>
      <label class="inline-flex items-center cursor-pointer">
        <input type="checkbox" v-model="emailAlert" @change="handleEmailAlertChange" class="sr-only peer">
        <div :class="['relative w-10 h-6 border peer-focus:outline-none peer-focus:ring-4 rounded-full peer', emailAlert ? 'bg-green-500' : 'bg-white']">
          <!-- Bouton qui se déplace après la confirmation -->
          <div :class="['after:content-[\'\'] after:absolute after:top-[2px] after:start-[4px] after:bg-[#adb5bd]  after:rounded-full after:h-4 after:w-4 after:transition-all', { 'after:translate-x-full after:bg-white': movedEmail }]"></div>
        </div>
      </label>
    </div>

    <div class="flex justify-between w-full">
      <span class="text-sm text-[#6c757d]">Recevoir les alertes internet:</span>
      <label class="inline-flex items-center cursor-pointer">
        <input type="checkbox" v-model="internetAlert" @change="handleInternetAlertChange" class="sr-only peer">
        <div :class="['relative w-10 h-6 border peer-focus:outline-none peer-focus:ring-4 rounded-full peer', internetAlert ? 'bg-green-500' : 'bg-white']">
          <div :class="['after:content-[\'\'] after:absolute after:top-[2px] after:start-[4px] after:bg-[#adb5bd]  after:rounded-full after:h-4 after:w-4 after:transition-all', { 'after:translate-x-full after:bg-white': movedInternet }]"></div>
        </div>
      </label>
    </div>
  </div>
</div>
     </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import Flatpickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import DatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";



const activeTab = ref('produit'); 
const produitTab = ref(null); 
const internetTab = ref(null); 
const indicatorWidth = ref(0); 
const indicatorPosition = ref(0); 

const startDate = ref(null);
const endDate = ref(null);



function setActiveTab(tab) {
  activeTab.value = tab;
  updateIndicator();
}

function updateIndicator() {
  const activeElement = activeTab.value === 'produit' ? produitTab.value : internetTab.value;
  if (activeElement) {
    indicatorWidth.value = activeElement.offsetWidth;
    indicatorPosition.value = activeElement.offsetLeft;
  }
}

onMounted(() => {
  updateIndicator();
});

watch(activeTab, () => {
  updateIndicator();
});
const emailAlert = ref(false);
const internetAlert = ref(false);
const movedEmail = ref(false);  
const movedInternet = ref(false);  

function handleEmailAlertChange() {
  if (emailAlert.value) {
    const confirmation = window.confirm("Voulez-vous vraiment activer l'abonnement aux notifications des produits et services par email ?");
    
    if (confirmation) {
      console.log("Abonnement email confirmé !");
      movedEmail.value = true;  
    } else {
      emailAlert.value = false;  
      console.log("Abonnement email annulé.");
    }
  } else {
    const confirmation = window.confirm("Voulez-vous vraiment désactiver l'abonnement aux notifications des produits et services par email ?");
    
    if (confirmation) {
      movedEmail.value = false;  
      console.log("Abonnement email désactivé.");
    } else {
      emailAlert.value = true;  
      console.log("Abonnement email maintenu actif.");
    }
  }
}

function handleInternetAlertChange() {
  if (internetAlert.value) {
    // Si on veut activer
    const confirmation = window.confirm("Voulez-vous vraiment activer l'abonnement aux notifications internet par email ?");
    
    if (confirmation) {
      console.log("Abonnement internet confirmé !");
      movedInternet.value = true;  
    } else {
      internetAlert.value = false;  
      console.log("Abonnement internet annulé.");
    }
  } else {
    const confirmation = window.confirm("Voulez-vous vraiment désactiver l'abonnement aux notifications internet par email ?");
    
    if (confirmation) {
      movedInternet.value = false;  
      console.log("Abonnement internet désactivé.");
    } else {
      internetAlert.value = true;  
      console.log("Abonnement internet maintenu actif.");
    }
  }
}

</script>

<style>
.fade-enter-active {
    transition: opacity .15s linear;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}
.custom-datepicker .react-datepicker__triangle {
  display: none;
}

.custom-datepicker input {
  border: none; 
  outline: none; 
  padding: 0; 
}

.custom-datepicker input:focus {
  border: 1px solid #ced4da; 
  box-shadow: 0 0 0 0.2rem rgba(100, 148, 165, 0.25); 
}
.dp__input_icon {
  display: none;
}
.dp__button svg{
  display: none;
}
.dp__input_icons{
  display: none;
}
</style>