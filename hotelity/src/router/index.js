import { createRouter, createWebHistory } from 'vue-router';
import CustomerInit from '@/component/customer/CustomerInit.vue';

const routes = [
  {
    path: '/',
    component: CustomerInit
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;