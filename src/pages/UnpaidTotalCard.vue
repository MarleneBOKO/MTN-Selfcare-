<script setup>
  import { Icon } from '@iconify/vue';  

  const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  iconWidth: {
    type: Number,
    default: 36
  },
  iconHeight: {
    type: Number,
    default: 36
  },
  iconFill: {
    type: String,
    default: 'black'
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
  }
  
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
      <h3 class="text-[16px] font-bold text-[#212529]">{{ title }}</h3>

      <p class="text-xs text-[#212529] text-wrap  lg:w-[325px]  lg:flex md:flex">
        {{ paracontent }}
      </p>
    </div>

   </div>
    <!-- Contenu principal avec l'icône -->
    <div
      class="flex flex-col items-center justify-center w-full gap-3 py-4 text-center "
    >
      <Icon :icon="icon" :width="iconWidth" :height="iconHeight" :color="iconFill"  class="items-center "/>
      <h3 class="text-[15px] font-medium text-wrap  text-center">{{ contentText }}</h3>
    </div>
  </div>
</template>
  
  
  <style scoped>
  /* Ajoutez des styles personnalisés si nécessaire */
  </style>
  