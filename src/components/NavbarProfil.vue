<!-- Navbar.vue -->
<template>
    <nav class="fixed justify-between flex flex-col top-0 left-0 text-white bg-[#fc0] pt-[60px] overflow-hidden h-[100%]">
      <div class="flex flex-col">
        <div class="flex px-6">
          <img src="/public/Images/logo.4cb17051.svg" alt="" class="w-[60px]" />
        </div>
        <div class="flex flex-col my-[30px] mx-0 gap-4 px-6">
          <div class="flex items-center gap-2 py-[15px] px-6 border border-black border-x-0 border-opacity-25">
            <img src="/public/Images/avatar.23d37197.png" alt="" class="w-[30px] h-[30px]" />
            <div class="flex flex-col justify-center">
              <span class="text-[15px] text-[#212543]">Ruth Marlene BOKO</span>
              <a href="" class="text-xs font-light text-[#665200]">Déconnexion</a>
            </div>
          </div>
        </div>
        <ul class="flex flex-col gap-2">
          <li
            class="flex items-center w-full px-6 py-4"
            :class="{ 'bg-[#cca300]': $route.path === '/profil/info' }"
          >
            <router-link to="/profil/info" class="w-full text-base text-black">
              Informations personnelles
            </router-link>
          </li>
  
          <li
            class="flex items-center w-full px-6 py-4"
            :class="{ 'bg-[#cca300]': $route.path === '/profil/activite' }"
          >
            <router-link to="/profil/activite" class="w-full text-base text-black">
              Activités récentes
            </router-link>
          </li>
  
          <li
            class="flex items-center w-full px-6 py-4"
            :class="{ 'bg-[#cca300]': $route.path === '/profil/application' }"
          >
            <router-link to="/profil/application" class="w-full text-base text-black">
              Mes applications
            </router-link>
          </li>
        </ul>
      </div>
      <div class="flex py-[15px] px-0 border-2 gap-1 border-t-[#d3ad13] border-b-0 border-x-0 fixed bottom-0 justify-between w-[340px]">
        <a href="https://my.mtn.bj/" class="text-[#212529] text-[13px] px-6">Aide</a>
        <a href="https://my.mtn.bj/" class="text-[#212529] text-[13px] px-6">Conditions d'utilisations</a>
      </div>
    </nav>
  </template>
  
  <script setup>
  // Pas besoin de script pour gérer active-class ici
  </script>
  