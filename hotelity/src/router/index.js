import { createRouter, createWebHistory } from 'vue-router';
import CustomerInit from '@/component/customer/CustomerInit.vue';
import CustomerList from '@/component/customer/CustomerList.vue';
import EmployeeList from '@/component/employee/EmployeeList.vue';
import Test from '@/component/Test.vue';
import TestBarChart from '@/component/TestBarChart.vue';
import TestPieChart from '@/component/TestPieChart.vue';
import EmployeeInfo from '@/component/employee/EmployeeInfo.vue';
import Login from '@/component/login/Login.vue';
import BranchList from '@/component/hotel-management/BranchList.vue';
import BranchInfo from '@/component/hotel-management/BranchInfo.vue';
import PaymentList from '@/component/hotel-service/payment/PaymentList.vue';
import ReservationPage from '@/component/hotel-service/reservation/ReservationPage.vue';
import Customer from "@/component/customer/Customer.vue";
import Coupon from "@/component/sales/Coupon.vue";
import Membership from "@/component/sales/Membership.vue";
import StayPage from "@/component/hotel-service/stay/StayPage.vue";
import EmployeeStay from "@/component/employee/EmployeeStay.vue";

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
      path: '/barchartTest',
      component: TestBarChart
    },
    {
      path: '/piechartTest',
      component: TestPieChart
    },
    {
      path: '/employeeInfo/:id',
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
      path: '/reservationPage',
      component: ReservationPage
    },
    {
        path: '/customer/:id',
        component: Customer
    },
    {
      path: '/stayPage',
      component: StayPage
    },
    {
        path: '/coupon',
        component: Coupon
    },
    {
        path: '/membership',
        component: Membership
    },
    {
      path: '/payment',
      component: PaymentList
    },
    {
      path: '/employeeStay/:id',
      component: EmployeeStay
    }
]
});

export default router;