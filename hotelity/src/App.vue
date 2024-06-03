<script setup>
  import { RouterView } from 'vue-router';
  import Navbar from '@/component/common/navbar/Navbar.vue';
  import Sidebar from '@/component/common/sidebar/Sidebar.vue';
  import {onMounted} from "vue";

  const toggleOpenClass = () => {
    document.querySelector(".sidebar").classList.toggle('open');
    document.querySelector(".content").classList.toggle('open');
  };

  const setSidebarMenu = (menu) => {
    console.log(menu);
  };
</script>

<template>
  <Sidebar/>
  <div class="content">
    <Navbar @toggleOpen="toggleOpenClass" @setMenu="setSidebarMenu" />
    <RouterView/>
  </div>
</template>

<style scoped>

</style>
