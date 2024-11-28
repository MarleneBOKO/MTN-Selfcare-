<template>
  <div class=" gap-7 lg:py-[40px] lg:px-[60px] md:px-[60px] px-4 flex flex-col lg:flex-row md:flex-col md:py-[40px] py-[90px]">
    <div class="flex flex-col justify-between h-full gap-8">
      <div class="flex flex-col w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <h1 class="lg:text-2xl md:text-2xl font-bold text-[#21252] sm:text-lg">Ma consommation</h1>
        <p class="mb-4 lg:text-[16px] md:text-[16px] text-[#6c757d] sm:text-sm text-nowrap">Consommation sur les sept derniers jours</p>
    
        <div class="grid w-full grid-cols-2 gap-8 lg:grid-cols-4 md:grid-cols-2">
          <ConsommationItem
            iconClass="kgk-mtn-BW_Icons_MyMTN_Voice_4"
            spanText="Appels"
            boldText="00:00:00"
            paragraphText="0 FCFA"
             :loading="isLoading"
          />
          <ConsommationItem
          iconClass="kgk-mtn-BW_Icons_MyMTN_SMS_4"
            spanText="SMS"
            boldText="0"
            paragraphText="0 FCFA"
             :loading="isLoading"
          />
          <ConsommationItem
           iconClass="kgk-mtn-BW_Icons_MTNPlay_Social_4"
            spanText="Autres"
            boldText="0 FCFA"
            paragraphText=""
             :loading="isLoading"
          />
          <ConsommationItem
            iconClass="kgk-mtn-BW_Icons_MyMTN_Data_4"
            spanText="Internet"
            boldText="0 MB"
            paragraphText=""
             :loading="isLoading"
          />
        </div>
        <router-link to="/consommation" class="text-[#106887] cursor-pointer text-sm flex items-center justify-end w-full gap-1 px-[15px] mt-6">
          Voir plus
          <i data-v-c3c0fa0a="" class="mdi mdi-arrow-right text-[18px] text-[#106887] text-center" ></i>
        </router-link>
      </div>
      <div class="flex flex-col justify-between">
        <div class="flex flex-col">
        <h3 class="text-lg font-bold text-[#21252]">Mes souscriptions</h3>
        <p class="mb-4 text-[16px] text-[#6c757d]"> Produits & services souscrits et en cours de validité sur mon compte </p>
          <div v-if="showNoSubscription" class="bg-white p-[20px] text-[#6c757d] text-sm border-l-[10px] border-l-[#ffcc01] rounded-[10px] mb-[15px]"> Vous n'avez souscrit à aucun service pour le moment. </div>
         <div v-else class="flex flex-col gap-6 lg:flex-row">
          <Subscription 
          title="INTERNET"
          amount="100"
          shortDetails="100 (200F/24h)"
          longDetails=" 250F/220Mo/24h actif. Restant 105 Mo valable jusqu'au 25-11-24 11:30:15.Activez vos forfaits sans frais par MoMo "
        /> 

        <Subscription 
          title="Maxi"
          amount="200"
          shortDetails="200 (460F/24h)"
          longDetails=" Votre forfait Maxi 200F a expire le 24-11-2024 a 17:35:01. Active un forfait egal ou superieur au plus tard le 25-11-24 17:35:01 et beneficie de ton solde restant.Payez sans frais par MoMo. "
        />
         </div>
    
            <div class="flex flex-col">
          <h3 class="lg:text-lg font-bold text-[#21252] md:text-lg text-[16px]">Gérer ma SIM</h3>

            <p class="mb-4 lg:text-[16px] md:text-[16px] text-sm text-[#6c757d]">  Opérations et paramétrages pour carte SIM  </p>

          <div class="grid w-full gap-8 lg:grid-cols-4 md:grid-cols-2">
            <div class="min-w-[190px]">
              <OperationItem
            boldText="Infos carte SIM"
            paragraphText=" Informations perso liées à la SIM "
            @click="toggleModal"
            class="cursor-pointer"

          /></div>
          <div class="min-w-[190px]">
          <OperationItem
            boldText="PUK"
            paragraphText=" Récupérer mon code PUK "
             @click="openModal('PUK')"
             class="cursor-pointer"

          /></div>
          <div class="min-w-[190px]">
          <OperationItem
            boldText="Activer internet"
            paragraphText=" Recevoir les paramètres internet "
             @click="openModal('Activer internet')"
             class="cursor-pointer"

          /></div>
          <div class="min-w-[190px]">
          <OperationItem
            boldText="Désactiver internet"
            paragraphText=" Désactiver internet sur ma SIM "
             @showModal="openModal"
             @click="openModal('Désactiver internet')"

             class="cursor-pointer"

          /></div>
        </div>
                  <ModalYellow 
              v-if="isModalVisible" 
              :icon="modalContent.icon" 
              :modalTitle="modalContent.title" 
              :description="modalContent.description" 
              :boldtext="modalContent.boldtext"
              :buttonText="modalContent.buttonText" 
              @close="isModalVisible = false" 
               />        
               <router-link to="/carte" class="text-[#106887] cursor-pointer text-sm flex items-center justify-end w-full gap-1 px-[15px] mt-6">
          Voir plus
          <i data-v-c3c0fa0a="" class="mdi mdi-arrow-right text-[18px] text-[#106887] text-center" ></i>
        </router-link>
        </div>
      </div>
      </div>
    </div>
    <div class="flex flex-col flex-1 h-full">
  <div class="bg-white p-[20px] rounded-[12px] mb-[30px] flex flex-col min-w-[300px] h-[190px] justify-between relative">
    <div class="absolute left-0 h-[20px] top-[20px] bg-[#ffcc01] w-[10px]"></div>
    
    <h3 class="text-[16px] font-bold ">Infos carte SIM</h3>
    <div class="flex flex-col gap-6">
      <div class="py-[15px] px-0 border border-[#e1e0e0] border-x-0 mt-[15px] items-center gap-3  flex">
        <i data-v-461d4ec4="" class="text-black kgk-mtn-sim-card" style="font-size:22px;"></i>

        <div class="flex items-center justify-center gap-1">
          <span>53843978</span>
          <i data-v-461d4ec4="" class="ml-1 kgk-mtn-verified" style="color: rgb(20, 182, 237);"></i>
        </div>
    </div>
    <button @click="toggleModal" class="w-full rounded-[30px] items-center h-[35px] justify-center text-[#106887] border border-[#106887] text-sm px-[15px] hover:bg-[#6494a5] hover:border-[#106887]">Afficher les détails</button>
    <ModalInfo :isOpen="isModalOpen" @close="toggleModal" />

        </div>
  </div>
  <div class="bg-white p-[20px] rounded-[12px] mb-[30px] flex flex-col min-w-[300px] h-[74px] relative ">
    <div class="absolute left-0 h-[20px] top-[20px] bg-[#ffcc01] w-[10px] "></div>
    
    <h3 class="text-[16px] font-bold">Mes autres numéros</h3>
    <div>
     
    </div>
  </div>
</div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ConsommationItem from './ConsommationItem.vue'
import OperationItem from './OperationItem.vue';
import ModalInfo from './ModalInfo.vue';
import ModalYellow from './ModalYellow.vue';
import Subscription from './Subscription.vue';

const isModalVisible = ref(false);
const modalTitle = ref('');
const modalContent = ref({});
const showNoSubscription = Math.random() < 0.5;
const isModalOpen = ref(false);
const isLoading = ref(true); // État de chargement

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false; 
  }, 3000);
});

const modalData = {
  "MTN Infos carte SIM": {
    icon: "kgk-mtn-phonelink_lock",
    title: "Informations carte SIM",
    description: "Voici les informations personnelles liées à votre carte SIM.",
    boldtext:"",
    buttonText: "Afficher"
  },
  "PUK": {
    icon: "kgk-mtn-phonelink_lock",
    title: "Code PUK",
    description: "Veuillez cliquer sur le bouton ci-dessous pour afficher votre code PUK.",
    boldtext:"",
    buttonText: "Afficher"
  },
  "Activer internet": {
    icon: "kgk-mtn-BW_Icons_MTNMoMo_GlobalConnect_4",
    title: "Activation Internet",
    description: "Vous n'arrivez pas à avoir accès à internet ?",
    boldtext:" Cliquez sur le bouton pour recevoir les paramètres de configuration internet de MTN directement sur votre SIM.",
    buttonText: "Envoyer"
  },
  "Désactiver internet": {
    icon: "kgk-mtn-phonelink_lock",
    title: "Désactivation Internet",
    description: "Vous souhaitez désactiver internet sur votre SIM ? ",
    boldtext:"Cliquez sur le bouton ci-dessous.",
    buttonText: "Envoyer"
  }
};

// Fonction pour ouvrir le ModalInfo
const toggleModal = () => {
isModalOpen.value = !isModalOpen.value;
};

// Fonction pour ouvrir d'autres modaux (par exemple, ModalYellow)
const openModal = (title) => {
  modalContent.value = modalData[title];
  isModalVisible.value = true;
};

</script>
