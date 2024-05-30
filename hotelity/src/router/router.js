import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../store';
import Home from '@/component/employee/EmployeeInfo.vue';   // 임시 홈
import Login from '@/component/login/Login.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
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
