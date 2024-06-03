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

import ReservationPage from '@/component/hotel-service/reservation/ReservationPage.vue';
import StayPage from "@/component/hotel-service/stay/StayPage.vue";

import Coupon from "@/component/sales/Coupon.vue";
import Membership from "@/component/sales/Membership.vue";

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
        },
    },

    /* 고객 */
    {
        path: '/customer',
        name: 'Customer',
        component: Customer,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/customerInit',
        name: 'CustomerInit',
        component: CustomerInit,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/customerList',
        name: 'CustomerList',
        component: CustomerList,
        meta: {
            requiresAuth: true,
        },
    },

    /* 직원 */
    {
        path: '/employeeList',
        name: 'EmployeeList',
        component: EmployeeList,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/employeeInfo',
        name: 'EmployeeInfo',
        component: EmployeeInfo,
        meta: {
            requiresAuth: true,
        },
    },

    /* 호텔관리 */
    {
        path: '/branchList',
        name: 'BranchList',
        component: BranchList,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/branchInfo',
        name: 'BranchInfo',
        component: BranchInfo,
        meta: {
            requiresAuth: true,
        },
    },

    /* 호텔서비스 */
    {
        path: '/reservationPage',
        name: 'ReservationPage',
        component: ReservationPage,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/stayPage',
        name: 'StayPage',
        component: StayPage,
        meta: {
            requiresAuth: true,
        },
    },

    /* 영업관리 */
    {
        path: '/coupon',
        name: 'Coupon',
        component: Coupon,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/membership',
        name: 'Membership',
        component: Membership,
        meta: {
            requiresAuth: true,
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
