<template>
    <nav class="fixed justify-between flex flex-col top-0 left-0  p-4 text-white bg-[#fc0] pt-[60px] pb-[30px] px-[30px] overflow-hidden h-[100%]">
      <svg width="73" height="49" viewBox="0 0 73 49" fill="none" xmlns="http://www.w3.org/2000/svg" style="position: absolute; top: -12px; left: -12px;"><path d="M24.7571 -23.1649C-1.71282 -40.7095 -29.0276 -46.0964 -36.2517 -35.1972C-43.4759 -24.298 -27.8742 -1.23933 -1.40425 16.3053C25.0657 33.8499 52.3802 39.2373 59.6046 28.3376C66.8287 17.4385 51.2271 -5.62026 24.7571 -23.1649Z" fill="#FAA61A"></path></svg>

      <svg width="61" height="103" viewBox="0 0 61 103" fill="none" xmlns="http://www.w3.org/2000/svg" style="position: absolute; top: 3%; right: -32px;"><path d="M74.389 71.4472C101.013 54.1379 116.819 31.2184 109.692 20.2556C102.564 9.29225 75.203 14.4373 48.5785 31.7466C21.9541 49.0559 6.14861 71.9754 13.2758 82.9382C20.4031 93.901 47.7645 88.7565 74.389 71.4472Z" fill="#073142"></path></svg>

      <svg width="18" height="86" viewBox="0 0 18 86" fill="none" xmlns="http://www.w3.org/2000/svg" style="position: absolute; top: 40%; left: 0px;"><path d="M17.0383 49.7099C17.4305 29.4499 -12.0348 0.709905 -45.346 0.479905C-78.6571 0.249905 -103.186 28.6199 -103.578 48.8799C-103.97 69.1399 -77.2986 85.7499 -43.9875 85.9799C-10.6764 86.2099 16.6365 69.9699 17.0383 49.7099Z" fill="#B81E50"></path></svg>

      <svg width="61" height="103" viewBox="0 0 61 103" fill="none" xmlns="http://www.w3.org/2000/svg" style="position: absolute; top: 50%; right: -20px;"><path d="M74.389 71.4472C101.013 54.1379 116.819 31.2184 109.692 20.2556C102.564 9.29225 75.203 14.4373 48.5785 31.7466C21.9541 49.0559 6.14861 71.9754 13.2758 82.9382C20.4031 93.901 47.7645 88.7565 74.389 71.4472Z" fill="white"></path></svg>

      <svg width="51" height="81" viewBox="0 0 51 81" fill="none" xmlns="http://www.w3.org/2000/svg" style="position: absolute; top: 70%; right: -20px;"><path d="M60.4625 77.5746C62.6724 73.9881 60.6474 68.5026 55.9288 65.3235C51.2102 62.1445 45.5938 62.4697 43.3782 66.0607C41.1683 69.6472 43.1932 75.1328 47.9119 78.3118C52.6305 81.4909 58.2469 81.1656 60.4625 77.5746ZM46.3811 51.3503C43.6227 46.2379 44.2612 40.3982 47.8214 38.3013C51.3773 36.1984 56.4961 38.647 59.2558 43.749C62.0142 48.8614 61.3757 54.701 57.8155 56.798C54.2553 58.895 49.1394 56.4627 46.3811 51.3503ZM27.213 15.3299C29.4229 11.7434 27.398 6.2578 22.6793 3.07875C17.9607 -0.100297 12.3443 0.224962 10.1287 3.81594C7.9132 7.40692 9.94376 12.888 14.6624 16.0671C19.381 19.2461 24.9987 18.9105 27.213 15.3299ZM41.0548 61.2986C43.2647 57.7121 41.2398 52.2265 36.5212 49.0474C31.8025 45.8684 26.1861 46.1937 23.9706 49.7846C21.7606 53.3711 23.7856 58.8567 28.5042 62.0358C33.2229 65.2148 38.8449 64.885 41.0548 61.2986ZM18.714 47.1482C20.9239 43.5618 18.899 38.0762 14.1804 34.8971C9.46173 31.7181 3.8453 32.0433 1.62977 35.6343C-0.585771 39.2253 1.44479 44.7064 6.16342 47.8854C10.882 51.0645 16.4985 50.7392 18.714 47.1482ZM57.5071 24.9637C59.7171 21.3772 57.6921 15.8916 52.9735 12.7126C48.2549 9.53353 42.6384 9.85879 40.4229 13.4498C38.2074 17.0407 40.2379 22.5218 44.9566 25.7009C49.6752 28.8799 55.2972 28.5502 57.5071 24.9637ZM34.0771 42.5282C38.0682 41.6511 40.3766 36.2903 39.222 30.5454C38.0675 24.8005 33.8945 20.8584 29.9035 21.7355C25.9125 22.6127 23.604 27.9734 24.7586 33.7183C25.9032 39.4618 30.0805 43.4098 34.0771 42.5282ZM76.5401 42.1267C78.7501 38.5402 76.7251 33.0546 72.0065 29.8756C67.2879 26.6965 61.6714 27.0218 59.4559 30.6128C57.246 34.1992 59.2709 39.6848 63.9895 42.8639C68.7082 46.0429 74.3302 45.7132 76.5401 42.1267ZM80.5245 55.4885C77.9915 52.1424 72.3714 52.3775 67.9648 56.0187C63.5582 59.6599 62.0493 65.3211 64.5766 68.6717C67.104 72.0222 72.7297 71.7826 77.1363 68.1414C81.5429 64.5002 83.0518 58.839 80.5245 55.4885Z" fill="#07542B"></path></svg>
      
      <svg width="58" height="114" viewBox="0 0 58 114" fill="none" xmlns="http://www.w3.org/2000/svg" style="position: absolute; top: 75%; left: -30px;"><path d="M-16.4972 39.7087C-39.6894 61.4019 -51.2491 86.7295 -42.3168 96.2791C-33.3845 105.829 -7.34204 95.9846 15.8502 74.2914C39.0424 52.5982 50.6025 27.271 41.6698 17.721C32.7375 8.17147 6.69501 18.0156 -16.4972 39.7087Z" fill="#754C23"></path></svg>
      <div class="flex flex-col">
        <div class="">
        <img src="/public/Images/logo.4cb17051.svg" alt="" class="w-[100px]">
      </div>
      <div class="flex flex-col justify-center my-[30px] mx-0 py-[15px] px-0 border-[2px] border-[#d3ad13] border-r-0 border-l-0">
        <span class="text-sm font-bold text-[#212543]">RUTH MARLENE BOKO</span>
        <span class="text-sm font-light text-[#212543]">53843978</span>
      </div>
      <ul class="flex flex-col gap-2">

        <li class="flex items-center">          
          <i data-v-453dbfae="" class="text-black kgk-mtn-home" style="font-size: 22px;"></i>
                    <router-link to="/" class="w-full px-4 py-2 text-base text-black" active-class="font-bold">
            Accueil
          </router-link>
        </li>
        
        <li class="flex items-center">
          <i data-v-453dbfae="" class="text-black kgk-mtn-BW_Icons_MTNBusiness_4" style="font-size: 22px;"></i>
          <router-link to="/business" class="w-full text-base text-[#212543] px-4 py-2 " active-class="font-bold">
            MTN Business
          </router-link>
        </li>
       
        <li class="flex items-center">
          <i data-v-453dbfae="" class="text-black kgk-mtn-sim-card" style="font-size: 22px;"></i>
          <router-link to="/carte" class="w-full text-base px-4 py-2  text-[#212543] " active-class="font-bold">
            Carte SIM
          </router-link>
        </li>

        <li class="flex items-center">
          <i data-v-453dbfae="" class="text-black kgk-mtn-BW_Icons_MTNPlay_Social_4" style="font-size: 22px;"></i>
                    <router-link to="/forfait" class="w-full text-base text-nowrap text-[#212543] px-4 py-2 " active-class="font-bold">
            Forfaits & services
          </router-link>
        </li>
        <li class="flex items-center">
          <i data-v-453dbfae="" class="text-black kgk-mtn-receipt" style="font-size: 22px;"></i>
                    <router-link to="/consommation" class="w-full text-base  text-[#212543] px-4 py-2 " active-class="font-bold">
            Consommation
          </router-link>
        </li>
          <li class="flex items-center">
            <i data-v-453dbfae="" class="text-black kgk-mtn-BW_Icons_MyMTN_4" style="font-size: 22px;"></i>
            <router-link
              to="/profil"
              target="_blank"
              class="w-full text-base text-[#212543] px-4 py-2"
              active-class="font-bold">
              Profil
            </router-link>

          </li>

      </ul>
      </div>
      <div class="flex py-[15px] px-0 border-2 gap-1 border-t-[#d3ad13] border-b-0 border-x-0 fixed bottom-0  items-center">
        <i data-v-453dbfae="" class="mdi mdi-logout text-[#b81e50]" style="font-size: 22px;"></i>
                <span class="text-[#b81e50] font-bold">Déconnexion</span>
      </div>
    </nav>
  </template>
  
  <script setup>
  </script>
  