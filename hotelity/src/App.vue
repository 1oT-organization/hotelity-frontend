<script setup>
  import { RouterView } from 'vue-router';
  import Navbar from '@/component/common/navbar/Navbar.vue';
  import Sidebar from '@/component/common/sidebar/Sidebar.vue';
  import {onMounted, ref} from "vue";

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
</script>

<template>
  <Sidebar ref="sideBarRef" @removeNavActive="removeNavActiveClass"/>
  <div class="content">
    <Navbar @toggleOpen="toggleOpenClass" @setMenu="setSidebarMenu" />
    <RouterView/>
  </div>
</template>

<style scoped>

</style>
