<template>
    <div class="bg-white p-[20px] border-l-[10px] gap-4 border-l-[#ffcc01] rounded-[10px] mb-[15px] flex justify-between w-full">
      <div class="flex flex-col">
        <div class="flex flex-col h-[50px]">
          <span class="text-[#6c757d] text-xs">{{ title }}</span>
          <div>
            <span class="text-[28px] font-bold text-[#212529]">{{ amount }}</span>
            <span class="text-sm font-bold ml-[5px]">FCFA</span>
          </div>
        </div>
        <p class="text-[#6c757d] text-base">{{ shortDetails }}</p>
        <p class="text-xs font-normal text-[#212529] w-full ">{{ longDetails }}</p>
      </div>
      <div class="flex flex-col justify-between">
        <label class="inline-flex items-center cursor-pointer">
          <input type="checkbox" v-model="emailAlert" @change="handleEmailAlertChange" class="sr-only peer" />
          <div
            :class="[
              'relative w-7 h-4 border peer-focus:outline-none peer-focus:ring-4 rounded-full peer',
              emailAlert ? 'bg-green-500' : 'bg-white'
            ]"
          >
            <div
              :class="[
                'after:content-[\'\'] after:absolute after:top-[1px] after:start-[2px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all',
                { 'after:translate-x-full after:bg-[#20688f]': movedEmail }
              ]"
            ></div>
          </div>
        </label>
        <button
          title="Reconduire"
          class="text-[#20688f] border w-[30px] h-[30px] rounded-full border-[#20688f]"
        >
          <i class="mdi mdi-reload"></i>
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Définir les props pour passer des textes dynamiquement
  defineProps({
    title: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    shortDetails: {
      type: String,
      required: true,
    },
    longDetails: {
      type: String,
      required: true,
    },
  });
  
  // Initialiser le label comme activé par défaut
  const emailAlert = ref(true);
  const movedEmail = ref(false);
  
  function handleEmailAlertChange() {
    if (emailAlert.value) {
      const confirmation = window.confirm("Voulez-vous effectivement activer ce forfait ?");
      if (confirmation) {
        console.log("Abonnement email confirmé !");
        movedEmail.value = true;
      } else {
        emailAlert.value = false;
        console.log("Abonnement email annulé.");
      }
    } else {
      const confirmation = window.confirm("Voulez-vous effectivement désactiver ce forfait ?");
      if (confirmation) {
        movedEmail.value = false;
        console.log("Abonnement email désactivé.");
      } else {
        emailAlert.value = true;
        console.log("Abonnement email maintenu actif.");
      }
    }
  }
  </script>
  