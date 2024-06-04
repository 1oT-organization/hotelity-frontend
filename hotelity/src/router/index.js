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
import ReservationPage from '@/component/hotel-service/reservation/ReservationPage.vue';
import Customer from "@/component/customer/Customer.vue";
import Coupon from "@/component/sales/Coupon.vue";
import Membership from "@/component/sales/Membership.vue";
import EmployeeStay from "@/component/employee/EmployeeStay.vue";
import PaymentList from "@/component/hotel-service/payment/PaymentList.vue";
import Voc from "@/component/sales/Voc.vue";
import Notice from "@/component/sales/Notice.vue";
import CouponIssue from "@/component/sales/CouponIssue.vue";
import RoomList from "@/component/hotel-management/RoomList.vue";
import Ancillary from "@/component/hotel-management/Ancillary.vue";
import Campaign from "@/component/marketing/Campaign.vue";
import TestCustomer from '@/component/TestCustomer.vue';
import NoticeInfo from '@/component/sales/NoticeInfo.vue';
import RoomDetails from '@/component/hotel-management/RoomDetails.vue';
import Stay from "@/component/hotel-service/stay/Stay.vue";

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
    },
    {
      path: '/voc',
      component: Voc
    },
    {
      path: '/notice',
      component: Notice
    },
    {
      path: '/couponIssue',
      component: CouponIssue
    },
    {
      path:'/room',
      component: RoomList
    },
    {
      path: '/ancillary',
      component: Ancillary
    },
    {
      path: '/campaign',
      component: Campaign
    },
    {
      path: '/testCustomer',
      component: TestCustomer
    },
    {
      path: '/noticeInfo/:id',
      component: NoticeInfo
    },
    {
      path: '/roomDetails/:id',
      component: RoomDetails
    },
    {
      path: '/stay',
      component: Stay
    }
]
});

export default router;