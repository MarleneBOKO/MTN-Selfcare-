<script setup>
import OperationItem from './OperationItem.vue';
import ModalInfo from './ModalInfo.vue';
import ModalYellow from './ModalYellow.vue';
import Modalchange from './Modalchange.vue'
import { ref } from 'vue';

const isModalVisible = ref(false);
const modalTitle = ref('');
const modalContent = ref({});

const isModalOpen = ref(false);
const isModalOpenchange = ref(false);

const toggleModal = () => {
isModalOpen.value = !isModalOpen.value;
};
const toggleModalChange = () => {
  isModalOpenchange.value = !isModalOpenchange.value;
};
const modalData = {
"MTN Infos carte SIM": {
  icon: "kgk-mtn-phonelink_lock",
  title: "Informations carte SIM",
  description: "Voici les informations personnelles liées à votre carte SIM.",
  buttonText: "Afficher"
},
"PUK": {
  icon: "kgk-mtn-phonelink_lock",
  title: "Code PUK",
  description: "Veuillez cliquer sur le bouton ci-dessous pour afficher votre code PUK.",
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
},
"Bloquer ma SIM": {
  icon: "kgk-mtn-phonelink_lock",
  title: "Bloquer ma SIM",
  description: " Vous avez été victime d'un vol et vous souhaitez protéger votre compte? Bloquez votre carte SIM pour éviter qu'une tierce personne ne l'utilise. ",
  boldtext:"Cliquez sur le bouton ci dessous pour le bloquer.",
  buttonText: "Bloquer ma SIM"
},
"Débloquer ma SIM": {
  icon: "kgk-mtn-phonelink_lock",
  title: "Débloquer ma SIM",
  description: "Vous avez bloqué votre SIM par erreur ?  ",
  boldtext:"Cliquez sur le bouton ci dessous pour la débloquer. ",
  buttonText: "Débloquer ma SIM"
},
"Désactiver internet": {
  icon: "kgk-mtn-phonelink_lock",
  title: "Désactivation Internet",
  description: "Vous souhaitez désactiver internet sur votre SIM ? Cliquez sur le bouton ci-dessous.",
  buttonText: "Envoyer"
}
};

const openModal = (title) => {
modalContent.value = modalData[title];
isModalVisible.value = true;
};
</script>



<template>
  <div class=" lg:py-[40px] lg:px-[60px] md:px-[60px] px-4 flex flex-col lg:flex-row md:flex-col md:py-[40px] py-[90px]">
    <div class="flex flex-col justify-between h-full ">
        <div class="flex flex-col ">
          <h1 class="lg:text-2xl md:text-2xl text-lg font-bold text-[#21252]">Gérer ma carte SIM</h1>
          <p class="mb-4 lg:text-[16px] md:text-[16px] text-[14px] text-[#6c757d]">Opérations et paramétrages pour carte SIM</p>
        </div>
        <div class="flex flex-col gap-4 lg:flex-row md:flex-col">
        <div class="flex flex-col gap-6 md:grid-cols-2 lg:flex-row lg:flex-wrap">
          <div class="lg:max-w-[190px] w-full">
            <OperationItem
            boldText="Infos carte SIM"
            paragraphText=" Informations perso liées à la SIM "
            @click="toggleModal"
            class="cursor-pointer"

          /></div>
          <div class="lg:max-w-[190px] w-full">
          <OperationItem
            boldText="PUK"
            paragraphText=" Récupérer mon code PUK"
            @showModal="openModal"
            class="cursor-pointer"

          /></div>
          <div class="lg:max-w-[190px] w-full">
          <OperationItem
            boldText="Activer internet"
            paragraphText=" Recevoir les paramètres internet"
            @showModal="openModal"
            class="cursor-pointer"


          /></div>
          <div class="lg:max-w-[190px] w-full">
          <OperationItem
            boldText="Désactiver internet"
            paragraphText=" Désactiver internet sur ma SIM "
            @showModal="openModal"
            class="cursor-pointer"


          /></div>
          <div class="lg:max-w-[190px] w-full">
          <OperationItem
            boldText="Bloquer ma SIM"
            paragraphText="  En cas de vol ou de perte "
            @showModal="openModal"
            class="cursor-pointer"


          /></div>
          <div class="lg:max-w-[190px] w-full">
          <OperationItem
            boldText="Débloquer ma SIM"
            paragraphText="  Remettre mon numéro en ligne  "
            @showModal="openModal"
            class="cursor-pointer"


          /></div>
          <div class="lg:max-w-[190px] w-full">
          <OperationItem
            boldText="Code Me2U"
            paragraphText="  Changer mon code de transfert  "
            @click="toggleModalChange"
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
               <Modalchange :isOpen="isModalOpenchange" @close="toggleModalChange" />
  
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
      </div>
  
  
    </div>
  </template>
  
 <style>
 
 </style>