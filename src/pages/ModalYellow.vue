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
    <div 
      v-if="isVisible" 
      class="fixed inset-0 z-50 flex items-center justify-center"
    >
      <!-- Fond semi-transparent qui couvre toute la page -->
      <div 
        class="absolute inset-0 bg-black bg-opacity-50"
        @click="handleClose"
      ></div>
  
      <!-- Modal centré, avec un max-width sur grands écrans -->
      <div class="relative z-40 flex items-center justify-center w-full max-w-md lg:max-w-lg">
        <div class="overflow-hidden bg-white shadow-xl lg:rounded-lg">
          <header class="flex items-center justify-between p-4 border-b h-[62px] bg-[#ffcc01] lg:rounded-t-lg">
            <h5 class="text-xl font-bold">{{ modalTitle }}</h5>
          </header>
          <div class="flex flex-col items-center justify-center p-6 text-center">
            <i class="text-[42px] text-[#d1a000] kgk-mtn-phonelink_lock modal-header-icon yellow-muted mb-4"></i>
            <h3 class="mb-2 text-2xl font-bold">{{ modalTitle }}</h3>
            <p class="text-[#6c757d] text-sm mb-4">
              {{ description }}<br>{{ boldtext }}
            </p>
            <div>
              <button 
                type="button" 
                class="px-[15px] text-[14px] font-medium h-[33px] text-black transition duration-200 rounded-full bg-[#ffcc01] hover:text-white hover:bg-[#ffaa00]"
              >
                {{ buttonText }}
              </button>
            </div>
          </div>
          
          <!-- Bouton de fermeture -->
          <button 
            @click="handleClose" 
            aria-label="Close" 
            class="absolute cursor-pointer top-[-20%] right-2 sm:top-14 lg:top-2 lg:right-[-40px] md:top-2 md:right-[-40px] w-[30px] h-[30px] text-black bg-white rounded-full hover:bg-opacity-80 flex items-center justify-center"
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  modalTitle: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  boldtext: {
    type: String,
    default: ''
  },
  buttonText: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['close']);

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
  }, 500); // Correspond à la durée de la transition
};
</script>

<style scoped>
/* Styles additionnels pour une transition plus douce */
.smooth-slide-enter-active,
.smooth-slide-leave-active {
  transition: all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
}

/* Fond couvrant toute la page */
.absolute.inset-0 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}

@media (min-width: 768px) {
  .relative {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

@media (max-width: 767px) {
  .relative {
    position: fixed;
    bottom: 0;
  }
}
</style>
