<script setup>
import { ref, watch, defineProps, defineEmits } from "vue";
import Jours from "./Jours.vue";
import Semaine from "./Semaine.vue";
import Mois from "./Mois.vue";
import Big from "./Big.vue";
import Illimite from "./Illimite.vue";

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  modalTitle: {
    type: String,
    required: true,
    validator: (value) =>
      ["Wabaa", "Internet", "Yellow Game", "Maxi", "GoPack"].includes(value),
  },
});

const emit = defineEmits(["close"]);

let isOpen = ref(props.isOpen);
let isVisible = ref(props.isOpen);

// Fonction pour fermer le modal avec un délai
const closeModal = () => {
  // Déclenche l'animation de fermeture et après 500ms, cache le modal
  isOpen.value = false;
  setTimeout(() => {
    isVisible.value = false;
  }, 500); // Assure-toi que le modal est masqué après la durée de l'animation
};

// Utilisation du watch pour observer le changement de `isOpen`
watch(
  () => props.isOpen,
  (newValue) => {
    if (newValue) {
      isVisible.value = true; // Affiche le modal
      setTimeout(() => {
        isOpen.value = true; // Lancement de l'animation de glissement
      }, 50); // Un petit délai pour permettre au DOM de se mettre à jour
    } else {
      // Déclenche la fermeture avec animation
      isOpen.value = false;
    }
  }
);

const activeSection = ref("Jours");
const activeComponent = ref(Jours);

const sectionsByTitle = {
  Wabaa: ["Jours", "Semaines", "Mois"],
  Internet: ["Jours", "Semaines", "Mois", "Illimite"],
  "Yellow Game": ["Jours"],
  Maxi: ["Jours", "Semaines", "Mois", "Big"],
  GoPack: ["Jours", "Semaines", "Mois"],
};

const availableSections = ref([]);

const setActiveSection = (section) => {
  activeSection.value = section;
  switch (section) {
    case "Semaines":
      activeComponent.value = Semaine;
      break;
    case "Mois":
      activeComponent.value = Mois;
      break;
    case "Illimite":
      activeComponent.value = Illimite;
      break;
    case "Big":
      activeComponent.value = Big;
      break;
    default:
      activeComponent.value = Jours;
  }
};

const updateSections = () => {
  availableSections.value = sectionsByTitle[props.modalTitle] || [];
  activeSection.value = availableSections.value[0] || "Jours";
  setActiveSection(activeSection.value);
};

watch(() => props.modalTitle, updateSections);

updateSections();
</script>

<template>
  <div>
    <div v-if="isVisible" class="fixed inset-0 z-50 bg-black bg-opacity-50">
      <transition
        name="slide-modal"
        @after-leave="isVisible = false" 
      >
        <div
          v-if="isOpen"
          class="fixed lg:top-0 lg:right-0 top-[20%] right-0 z-50 lg:h-full overflow-y-auto bg-white shadow-lg w-full md:w-[40%] lg:bottom-0 h-[80%]"
        >
          <header class="flex items-center justify-between p-4 border-b bg-[#ffcc01] py-[15px] px-[20px] relative">
            <strong class="text-lg font-bold">{{ modalTitle }}</strong>
          </header>
          <div class="p-[15px]">
            <div class="flex justify-between bg-[#f4f4f4] p-[15px] items-center rounded-[50px] h-[52px]">
              <div
                v-for="section in availableSections"
                :key="section"
                :class="{
                  'text-[#6c757d] bg-white rounded-[50px] h-[38px] min-w-[140px] justify-center items-center w-full':
                    activeSection === section,
                  'text-gray-700': activeSection !== section
                }"
                class="text-sm flex items-center px-[5px] py-[7px] rounded-[50px] cursor-pointer h-[38px] w-[174px] justify-center"
                @click="setActiveSection(section)"
              >
                {{ section }}
              </div>
            </div>
          </div>
          <div class="space-y-2">
            <component :is="activeComponent" :modalTitle="modalTitle" />
          </div>
        </div>
      </transition>
      <button
        @click="closeModal" @click.stop
        class="text-[#bfbfbf] justify-center items-center flex bg-white rounded-full h-[30px] w-[30px] absolute lg:left-[55%] lg:top-3 top-[14%] right-2"
      >
        <svg viewBox="0 0 16 16" class="w-5 h-5">
          <path
            fill="currentColor"
            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>


<style scoped>
.slide-modal-enter-active,
.slide-modal-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}
.slide-modal-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-modal-enter-to {
  transform: translateX(0);
  opacity: 1;
}
.slide-modal-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.slide-modal-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>

