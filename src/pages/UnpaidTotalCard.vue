<script setup>
  import { Icon } from '@iconify/vue';  

  const props = defineProps({
    iconClass: {
    type: String,
    required: true // Classe CSS de l'icône
  },
  title: {
    type: String,
    default: 'Default Title'
  },
  contentText: {
    type: String,
    default: 'Default Content Text'
  },
  paracontent: {
    type: String,
    default: 'Additional content paragraph'
  },
  loading: {
    type: Boolean,
    default: false, 
  },
});
  


import { ref, onMounted, onUnmounted } from "vue";

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
  
<template>
  <div class="flex flex-col w-full gap-2">
   <div class="flex justify-between ">
    <div class="flex flex-col">
      <h3 class="text-[16px] font-bold text-[#212529] flex items-start justify-start"         :class="{ ' text-transparent animate-pulse mt-2 ': loading }"
      >{{ title }}</h3>

      <p class="text-xs text-[#212529] text-wrap  lg:w-[325px]  lg:flex md:flex"         :class="{ 'bg-gray-200 text-transparent animate-pulse w-[100%] h-[21px]': loading }"
      >
        {{ paracontent }}
      </p>
    </div>

   </div>
    <!-- Contenu principal avec l'icône -->
    <div
      class="flex flex-col items-center justify-center w-full gap-3 py-4 text-center "
    >
    <i v-if="!loading" :class="iconClass" class="items-center text-center text-[50px] text-black" ></i>
    <div
          v-else
          class="w-full bg-gray-200 h-[21px] animate-pulse"
        ></div>
    <h3 class="text-[15px] font-medium text-wrap  text-center"
    :class="{ 'bg-gray-200 text-transparent animate-pulse  w-[100%] h-[21px]': loading }"
    >{{ contentText }}</h3>
    </div>
  </div>
</template>
  
  
  <style scoped>
.animate-pulse {
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}  </style>
  