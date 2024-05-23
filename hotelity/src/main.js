import './css/style.css';
import router from './router/index.js';
import CustomerInit from './component/customer/CustomerInit.vue';

import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
app.use(router);
app.mount('#app');