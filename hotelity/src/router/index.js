import { createRouter, createWebHistory } from 'vue-router';
import CustomerInit from '@/component/customer/CustomerInit.vue';
import CustomerList from '@/component/customer/CustomerList.vue';

const router = createRouter({
  history: createWebHistory(),
  routes : [
    {
      path: '/',
      component: CustomerInit
    },
    {
      path: '/customerList',
      component: CustomerList
    },
]
});

export default router;