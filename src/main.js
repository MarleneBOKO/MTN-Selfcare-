import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import '../public/mdi/css/materialdesignicons.css';

const app = createApp(App)

router.beforeEach((to, from, next) => {
    // Vérifier si la route a une propriété meta avec pageTitle
    if (to.meta.pageTitle) {
      document.title = to.meta.pageTitle;  // Modifier le titre de la page
    } else {
      document.title = 'Vite + Vue';  // Titre par défaut
    }
    next();  // Permet de continuer la navigation
  });

app.use(router)
app.mount('#app')
