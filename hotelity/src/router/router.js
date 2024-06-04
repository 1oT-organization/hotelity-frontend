import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../store';

import Home from '@/component/home/Home.vue';
import Login from '@/component/login/Login.vue';

import Customer from "@/component/customer/Customer.vue";
import CustomerInit from '@/component/customer/CustomerInit.vue';
import CustomerList from '@/component/customer/CustomerList.vue';

import EmployeeList from '@/component/employee/EmployeeList.vue';
import EmployeeInfo from '@/component/employee/EmployeeInfo.vue';

import BranchList from '@/component/hotel-management/BranchList.vue';
import BranchInfo from '@/component/hotel-management/BranchInfo.vue';
import RoomList from "@/component/hotel-management/RoomList.vue";
import FacilityList from "@/component/hotel-management/FacilityList.vue";

import ReservationPage from '@/component/hotel-service/reservation/ReservationPage.vue';
import StayList from "@/component/hotel-service/stay/StayList.vue";
import StayPage from "@/component/hotel-service/stay/StayPage.vue";
import PaymentList from "@/component/hotel-service/payment/PaymentList.vue";

import Voc from "@/component/sales/Voc.vue";
import Notice from "@/component/sales/Notice.vue";
import Membership from "@/component/sales/Membership.vue";
import Coupon from "@/component/sales/Coupon.vue";

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },

    /* 대시보드 */
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            requiresAuth: true,
            category: 'home',
        },
    },

    /* 고객 */
    {
        path: '/customer',
        name: 'Customer',
        component: Customer,
        meta: {
            requiresAuth: true,
            category: 'customer',
        },
    },
    {
        path: '/customerInit',
        name: 'CustomerInit',
        component: CustomerInit,
        meta: {
            requiresAuth: true,
            category: 'customer',
        },
    },
    {
        path: '/customerList',
        name: 'CustomerList',
        component: CustomerList,
        meta: {
            requiresAuth: true,
            category: 'customer',
        },
    },

    /* 직원 */
    {
        path: '/employeeList',
        name: 'EmployeeList',
        component: EmployeeList,
        meta: {
            requiresAuth: true,
            category: 'employee',
        },
    },
    {
        path: '/employeeInfo',
        name: 'EmployeeInfo',
        component: EmployeeInfo,
        meta: {
            requiresAuth: true,
            category: 'employee',
        },
    },

    /* 호텔관리 */
    {
        path: '/branchList',
        name: 'BranchList',
        component: BranchList,
        meta: {
            requiresAuth: true,
            category: 'hotelManagement',
        },
    },
    {
        path: '/branchInfo',
        name: 'BranchInfo',
        component: BranchInfo,
        meta: {
            requiresAuth: true,
            category: 'hotelManagement',
        },
    },
    {
        path: '/roomList',
        name: 'RoomList',
        component: RoomList,
        meta: {
            requiresAuth: true,
            category: 'hotelManagement',
        },
    },
    {
        path: '/facilityList',
        name: 'FacilityList',
        component: FacilityList,
        meta: {
            requiresAuth: true,
            category: 'hotelManagement',
        },
    },

    /* 호텔서비스 */
    {
        path: '/reservationPage',
        name: 'ReservationPage',

        component: ReservationPage,
        meta: {
            requiresAuth: true,
            category: 'hotelService',
        },
    },
    {
        path: '/stayList',
        name: 'StayList',
        component: StayList,
        meta: {
            requiresAuth: true,
            category: 'hotelService',
        },
    },
    {
        path: '/paymentList',
        name: 'PaymentList',
        component: PaymentList,
        meta: {
            requiresAuth: true,
            category: 'hotelService',
        },
    },

    /* 영업관리 */
    {
        path: '/vocList',
        name: 'VocList',
        component: Voc,
        meta: {
            requiresAuth: true,
            category: 'sales',
        },
    },
    {
        path: '/noticeList',
        name: 'NoticeList',
        component: Notice,
        meta: {
            requiresAuth: true,
            category: 'sales',
        },
    },
    {
        path: '/membership',
        name: 'Membership',
        component: Membership,
        meta: {
            requiresAuth: true,
            category: 'sales',
        },
    },
    {
        path: '/coupon',
        name: 'Coupon',
        component: Coupon,
        meta: {
            requiresAuth: true,
            category: 'sales',
        },
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();

    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!authStore.isAuthenticated) {
            next({
                path: '/login',
                query: { redirect: to.fullPath },
            });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;
