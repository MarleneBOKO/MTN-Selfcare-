<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isSmallScreen = ref(false);

const checkScreenSize = () => {
  isSmallScreen.value = window.innerWidth < 768; 
};

onMounted(() => {
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize);
});

import { useRouter } from 'vue-router';

const router = useRouter();

const navigateToSearch = () => {
  router.push({ name: 'Search' });
};
</script>

<template>
    <header class="z-10 font-MTNBrighterSans "  >
        <!-- Contenu de main-header visible uniquement sur les petits écrans -->
        <div v-if="isSmallScreen"  id="main_header" class="relative w-full py-0 bg-yellow-400 h-[180px]">
            <div id="mobile_menu" class="flex items-center justify-between px-[15px] ">
                <svg @click="$emit('toggle-navbar')" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <img src="/public/Images/logo.4cb17051.svg" alt="" class="h-[60px]">
                <svg     @click="navigateToSearch" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                     <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>
            <div class="w-full h-[1px] bg-[#d3ad13]"></div>
            <div id="main_header_welcome" class="text-sm px-[15px] pt-[30px] pb-[15px]">
                <div class="truncate"> 
                    Y'ello <span class="ml-1 text-lg font-bold">RUTH MARLENE</span>
                </div>
                <p class="text-sm font-normal">Bienvenue sur votre espace personnel.</p>
            </div>

            <div class="relative top-2 flex items-center rounded-lg gap-2 py-[13px] px-2 mx-[15px] z-50 bg-white" style="box-shadow: 0 4px 6px rgba(54, 64, 73, .2);">
             
                <div class="flex items-center justify-center phone w-[40px] h-[40px] bg-[rgb(253,224,199)] rounded-full">
                    <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><g fill="black"><path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/><path d="M8 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2"/></g></svg>
                </div>
                <div class="flex flex-col">
                    <span class="text-[rgb(211,103,9)] text-[16px] font-bold">-109.99 FCFA</span>
                    <span class="text-[12px] text-[#212529] font-light">Solde principal</span>
                </div>
            </div>
            <div class=" mtn-separator absolute top-[99%] mr-9  left-[-50px] ">
                <div class="mtn-curve">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="25px" viewBox="0 0 500 25" preserveAspectRatio="none" class="mtn-curve__convex mtn-curve__curve-mobile">
                            <path d="M0,0c166.7,33.3,333.3,33.3,500,0H0z" fill="#ffcc01" class="mtn-svg-fill--yellow"></path>
                        </svg>
                    </div>
                </div>
             </div>

        </div>
       
        <div v-else class="flex justify-between  bg-white border-b border-gray-200  h-[70px] py-0 px-[30px]">
            <div class="flex items-center justify-center gap-2 py-[13px] mr-[60px]">
             
             <div class="flex items-center justify-center phone w-[50px] h-[50px] bg-[rgb(253,224,199)] rounded-full">
                 <i @click="$emit('toggle-navbar')" class="kgk-mtn-BW_Icons_MTNBusiness_Mobility_4" style="font-size: 35px;"></i>
             </div>
             <div class="flex flex-col">
                 <span class="text-[rgb(211,103,9)] text-[20px] font-bold">-109.99 FCFA</span>
                 <span class="text-[14px] text-[#212529] font-light">Solde principal</span>
             </div>
         </div>
         <div class="flex items-center justify-center gap-2 py-[13px]">
             <!-- Barre de recherche -->
             <div class="flex items-center max-w-[300px] h-9 border border-[#6c757d] rounded-[20px] pl-2 pr-3 md:hidden lg:flex">
                 <input type="text" placeholder="Recherche" class="flex-1 h-full rounded-[20px] focus:outline-none text-inherit" />
                 <i data-v-14b156e3="" class="kgk-mtn-search icon-search"></i>
             </div>
 
             <!-- Icône seule pour les écrans md -->
             <div class="hidden md:flex lg:hidden items-center justify-center w-9 h-9 border border-[#6c757d] rounded-full">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                     <path
                     fill="black"
                     d="m19.485 20.154l-6.262-6.262q-.75.639-1.725.989t-1.96.35q-2.402 0-4.066-1.663T3.808 9.503T5.47 5.436t4.064-1.667t4.068 1.664T15.268 9.5q0 1.042-.369 2.017t-.97 1.668l6.262 6.261zM9.539 14.23q1.99 0 3.36-1.37t1.37-3.361t-1.37-3.36t-3.36-1.37t-3.361 1.37t-1.37 3.36t1.37 3.36t3.36 1.37" />
                 </svg>
             </div>
 
             <!-- Profil utilisateur -->
             <div class="flex gap-2">
                 <div class="w-[40px] h-[40px] rounded-full bg-[#faa61a] border-[2px] border-[#93693b]">
                     <img src="/public/Images/avatar.1589131e.svg" alt="" class="w-full h-full rounded-full" />
                 </div>
                 <div class="flex flex-col">
                     <span class="text-[#212543] font-bold font-MTNBrighterSans text-[14px]">BOKO</span>
                     <span class="text-[#212543] font-normal font-MTNBrighterSans text-[14px]">53843978</span>
                 </div>
              </div>
         </div>
 
        </div>
       
    </header>
  </template>
  


  
  <style scoped>
    input::placeholder{
        font-size: inherit;
    }
  </style>
  

 