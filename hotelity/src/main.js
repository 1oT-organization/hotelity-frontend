import { createApp } from 'vue';
import { Chart } from 'chart.js';

import App from './App.vue';
import router from './router/index.js';
import authRouterTest from './router/router.js';
import pinia from './store';

const app = createApp(App);

app.use(pinia);
app.use(authRouterTest);
// app.use(router)

app.mount('#app');
app.use(Chart);
