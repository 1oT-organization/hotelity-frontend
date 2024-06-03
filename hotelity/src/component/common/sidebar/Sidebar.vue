<template>
  <!-- Sidebar Start -->
  <div class="sidebar pe-4 pb-3" :class="{'open': isOpen}">
    <nav class="navbar bg-secondary navbar-dark">
      <div class="navbar-brand mx-4 mb-3">
        <h3 class="text-primary" style="display: flex; justify-content: center;">
          <img src="@/assets/img/hotelity_logo.png" width="60%">
        </h3>
      </div>

      <div class="container">
        <div class="clock">
          <h1 id="time" style="display: flex; justify-content: center; font-family: fantasy; color:#798a69;"></h1>
        </div>
      </div>

      <div class="navbar-nav w-100">
        <!--        <router-link to="/customerList" class="nav-item nav-link">-->
        <!--          <i class="emoji bi bi-people-fill"></i>고객 리스트-->
        <!--        </router-link>-->
        <!--&lt;!&ndash;        <router-link to="/" class="nav-item nav-link active">&ndash;&gt;-->
        <!--        <router-link to="/" class="nav-item nav-link">-->
        <!--          <i class="emoji bi bi-person-fill-add"></i>고객 등록-->
        <!--        </router-link>-->
      </div>
    </nav>
  </div>
  <!-- Sidebar End -->
</template>

<script setup>
import {onMounted} from "vue";

onMounted(() => {
  fetchData().then(() => {
    // isLoading.value = false;
  });

  function fetchData() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }

  // Clock
  const h1 = document.getElementById("time");

  function getTime() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, '0');
    const minute = String(date.getMinutes()).padStart(2, '0');
    const second = String(date.getSeconds()).padStart(2, '0');
    const time = `${hour}:${minute}:${second}`;
    h1.textContent = time;
  }

  // 최초에 한 번 시간 설정
  getTime();

  // 1초마다 getTime 함수를 호출하도록 타이머 설정
  setInterval(getTime, 1000);
});
</script>

<style>

</style>b