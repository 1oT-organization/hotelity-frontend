<script setup>
  import { RouterView } from 'vue-router';
  import Navbar from '@/component/common/navbar/Navbar.vue';
  import Sidebar from '@/component/common/sidebar/Sidebar.vue';
  import {onMounted, ref, watch} from "vue";
  import { useRoute } from 'vue-router';
  import router from "@/router/router.js";

  const route = useRoute();
  const currentRoute = ref(route.fullPath);

  watch(route, (newRoute, oldRoute) => {
    console.log('Route changed from:', oldRoute.fullPath);
    console.log('Route changed to:', newRoute.fullPath);
    currentRoute.value = newRoute.fullPath;

    setSidebarMenu(route.meta['category']);
    setNavItemsActive(route.meta['category']);
  });

  const sideBarRef = ref(null);

  const toggleOpenClass = () => {
    document.querySelector(".sidebar").classList.toggle('open');
    document.querySelector(".content").classList.toggle('open');
  };

  const setSidebarMenu = (menuName) => {
    sideBarRef.value.setSidebarMenu(menuName);
  };

  const removeNavActiveClass = () => {
    document.querySelectorAll(".navbar-nav .nav-item").forEach(item => {
      item.classList.remove('active');
    });

    sideBarRef.value.setSidebarMenu('home');
  };

  const setNavItemsActive = (menuName) => {
    document.querySelectorAll(".nav-container > .navbar > .navbar-nav > .nav-item:not(.dropdown)").forEach(item => {
      item.classList.remove('active');
    });

    const navBarItem = document.querySelector('[id="' + menuName + '"]');

    if (navBarItem) {
      navBarItem.classList.add('active');
    }
  };

  const setSideBarItemActive = () => {
    document.querySelectorAll(".sidebar .navbar-nav .nav-item").forEach(item => {
      item.classList.remove('active');
    });

    const sideBarNavItem = document.querySelector('[id="' + currentRoute.value + '"]');

    if (sideBarNavItem) {
      sideBarNavItem.classList.add('active');
    }
  }

</script>

<template>
  <Sidebar v-if="!$route.meta.hideSidebar" ref="sideBarRef" @removeNavActive="removeNavActiveClass" @setSideMenuActive="setSideBarItemActive"/>
  <div class="content">
    <Navbar v-if="!$route.meta.hideNavbar" @toggleOpen="toggleOpenClass" @setMenu="setSidebarMenu" />
    <RouterView/>
  </div>
</template>

<style scoped>

</style>
