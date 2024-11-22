import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import '../public/mdi/css/materialdesignicons.css';

const app = createApp(App)

app.use(router)
app.mount('#app')
