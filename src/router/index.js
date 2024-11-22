// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue' 
import Business from '../pages/Business.vue';
import Forfait from '../pages/Forfait.vue';
import Carte from '../pages/Carte.vue';
import Consommation from '../pages/Consommation.vue';
import Profil from '../pages/Profil.vue';
import ProfilInfo from '../pages/ProfilInfo.vue';
import ProfilActivite from '../pages/ProfilActivite.vue';
import ProfilApp from '../pages/ProfilApp.vue';
import Search from '../pages/Search.vue';
const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/business', component: Business, name: 'Business' },
  { path: '/forfait', component: Forfait, name: 'Forfait' },
  { path: '/carte', component: Carte, name: 'Carte' },
  { path: '/consommation', component: Consommation, name: 'Consommation' },
  { path: '/search', component: Search, name: 'Search' },

  
  {
    path: '/profil',
    component: Profil,
    name: 'Profil',
    redirect: '/profil/info', 
    meta: {
      layout: 'profil-layout', 
    },
    children: [
      {
        path: 'activite',
        name: 'ProfilActivite',
        component: ProfilActivite,
        meta: { 
          layout: 'profil-layout', 
          pageTitle: 'Activités récentes' 
        },
      },
      {
        path: 'application',
        name: 'ProfilApp',
        component: ProfilApp,
        meta: { 
          layout: 'profil-layout', 
          pageTitle: 'Mes applications' 
        },
      },
      {
        path: 'info',
        name: 'ProfilInfo',
        component: ProfilInfo,
        meta: { 
          pageTitle: 'Informations personnelles',
          layout: 'profil-layout',
        },
      },
    ],
  }
];



const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
