<script setup>
import { Icon } from '@iconify/vue';  
defineProps({
  icon: {
    type: String,
    required: true
  },
  iconWidth: {
    type: Number,
    default: 20
  },
  iconHeight: {
    type: Number,
    default: 20
  },
  iconFill: {
    type: String,
    default: 'black'
  },
  spanText: {
    type: String,
    required: true
  },
  boldText: {
    type: String,
    required: true
  },
  paragraphText: {
    type: String,
    required: true
  }
})
</script>


<template>
    <div class="flex items-center gap-3 h-[170px]  w-auto p-[30px] rounded-lg bg-white  flex-col">
        <div class="flex flex-col">
      <div class="bg-[#fff2bf] w-8 h-8 rounded-full text-[22px] mx-auto my-0 items-center justify-center flex">
        <Icon :icon="icon" :width="iconWidth" :height="iconHeight" :color="iconFill" />
      </div>
      <span class="text-sm text-[#6c757d]">{{ spanText }}</span>
    </div>
      <div class="flex flex-col items-center justify-center">
        <b class="text-base font-bold text-center text-[#212543]">{{ boldText }}</b>
        <p class="text-xs text-gray-500">{{ paragraphText }}</p>
      </div>
    </div>
  </template>
  
 
  <style scoped>
  /* Styles spécifiques au composant */
  </style>
  