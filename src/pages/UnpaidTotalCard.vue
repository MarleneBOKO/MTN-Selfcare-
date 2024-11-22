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



</script>
  
<template>
  <div class="flex flex-col w-full gap-2">
    <h3 class="text-[16px] font-bold text-[#212529]">{{ title }}</h3>

    <p class="text-xs text-[#212529] text-wrap  lg:w-[325px]  lg:flex md:flex">
      {{ paracontent }}
    </p>

    <!-- Contenu principal avec l'icône -->
    <div
      class="flex flex-col items-center justify-center w-full gap-3 py-4 text-center "
    >
      <Icon :icon="icon" :width="iconWidth" :height="iconHeight" :color="iconFill"  class=""/>
      <h3 class="text-[15px] font-medium text-wrap  text-center">{{ contentText }}</h3>
    </div>
  </div>
</template>
  
  
  <style scoped>
  /* Ajoutez des styles personnalisés si nécessaire */
  </style>
  