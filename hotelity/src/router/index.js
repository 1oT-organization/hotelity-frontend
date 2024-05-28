import { createRouter, createWebHistory } from 'vue-router';
import CustomerInit from '@/component/customer/CustomerInit.vue';
import CustomerList from '@/component/customer/CustomerList.vue';
import EmployeeList from '@/component/employee/EmployeeList.vue';
import Test from '@/component/Test.vue';
import TestChart from '@/component/TestChart.vue';
import ReservationPage from '@/component/hotel-service/reservation/ReservationPage.vue';
import TestCalendar from "@/component/TestCalendar.vue";
import ReservationCalendar from "@/component/hotel-service/reservation/ReservationCalendar.vue";

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
    {
      path: '/employeeList',
      component: EmployeeList
    },
    {
      path: '/test',
      component: Test
    },
    {
      path: '/chartTest',
      component: TestChart
    },
    {
      path: '/reservationPage',
      component: ReservationPage
    },
    {
      path: '/reservationCalendar',
      component: ReservationCalendar
    }
]
});

export default router;