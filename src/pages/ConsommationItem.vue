<script setup>
defineProps({
  iconClass: {
    type: String,
    required: true,
  },
  spanText: {
    type: String,
    required: true,
  },
  boldText: {
    type: String,
    required: true,
  },
  paragraphText: {
    type: String,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false, 
  },
});
</script>

<template>
  <div class="flex items-center gap-3 h-[170px] w-auto p-[30px] rounded-lg bg-white flex-col">
    <!-- Icône -->
    <div class="flex flex-col">
      <div
        class="bg-[#fff2bf] w-8 h-8 rounded-full text-[22px] mx-auto my-0 items-center justify-center flex"
      >
        <i v-if="!loading" :class="iconClass" class="text-center"></i>
        <div
          v-else
          class="w-8 h-8 bg-gray-200 rounded-full animate-pulse"
        ></div>
      </div>
      <span
        class="text-sm text-[#6c757d]"
        :class="{ 'bg-gray-200 text-transparent animate-pulse mt-2 w-[131px] h-[21px]': loading }"
      >
        {{ spanText }}
      </span>
    </div>

    <!-- Texte -->
    <div class="flex flex-col items-center justify-center"        
    >
      <b
        class="text-base font-bold text-center text-[#212543]"
        :class="{ 'bg-gray-200 text-transparent animate-pulse w-[120px] h-[24px]': loading }"
      >
        {{ boldText }}
      </b>
      <p
        class="text-xs text-gray-500"
        :class="{ ' text-transparent animate-pulse': loading }"
      >
        {{ paragraphText }}
      </p>
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
}
</style>
