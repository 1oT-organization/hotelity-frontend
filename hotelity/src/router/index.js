import { createRouter, createWebHistory } from 'vue-router';
import CustomerInit from '@/component/customer/CustomerInit.vue';
import CustomerList from '@/component/customer/CustomerList.vue';
import EmployeeList from '@/component/employee/EmployeeList.vue';
import Test from '@/component/Test.vue';
import TestChart from '@/component/TestChart.vue';
import EmployeeInfo from '@/component/employee/EmployeeInfo.vue';
import Login from '@/component/login/Login.vue';
import BranchList from '@/component/hotel-management/BranchList.vue';
import BranchInfo from '@/component/hotel-management/BranchInfo.vue';
import PaymentList from '@/component/hotel-service/payment/PaymentList.vue';
import ReservationPage from '@/component/hotel-service/reservation/ReservationPage.vue';
import StayPage from "@/component/hotel-service/stay/StayPage.vue";
import PaymentPage from "@/component/hotel-service/payment/PaymentPage.vue";

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
      path: '/employeeInfo',
      component: EmployeeInfo
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/branchList',
      component: BranchList
    },
    {
      path: '/branchInfo',
      component: BranchInfo
    },
    {
      path: '/paymentList',
      component: PaymentList
    },
    {
      path: '/reservationPage',
      component: ReservationPage
    },
    {
      path: '/stayPage',
      component: StayPage
    },
    {
      path: '/paymentPage',
      component: PaymentPage
    }
]
});

export default router;