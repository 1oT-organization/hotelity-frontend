<template>

  <div class="sidebar pe-4 pb-3">
    <nav class="navbar bg-secondary navbar-dark">
      <a href="index.html" class="navbar-brand mx-4 mb-3">
        <h3 class="text-primary" style="display: flex; justify-content: center;"><img
            src="../../../assets/img/hotelity_logo.png" width="60%"></h3>
      </a>

      <Clock/>
<!--      <div class="container">-->
<!--        <div class="clock">-->
<!--          <h1 id="time" style="display: flex; justify-content: center; font-family: fantasy; color:#798a69;"></h1>-->
<!--        </div>-->
<!--      </div>-->

      <div class="navbar-nav w-100">
        <router-link to="/reservationPage" class="nav-item nav-link active">
          <i class="emoji bi bi-people-fill"></i>예약 일정
        </router-link>
        <router-link to="/stayPage" class="nav-item nav-link">
          <i class="emoji bi bi-person-fill-add"></i>투숙
        </router-link>
        <router-link to="/paymentPage" class="nav-item nav-link">
          <i class="emoji bi bi-person-fill-add"></i>결제
        </router-link>
      </div>
    </nav>

  </div>

</template>

<script setup>
import Clock from "@/component/common/Clock.vue";
import ReservationNavbar from "@/component/hotel-service/reservation/ReservationNavbar.vue";
// import {onMounted} from "vue";
//
// onMounted(() => {
//   fetchData().then(() => {
//     // isLoading.value = false;
//   });
//
//   function fetchData() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve();
//       }, 1000);
//     });
//   }
//
//   // Clock
//   const h1 = document.getElementById("time");
//
//   function getTime() {
//     const date = new Date();
//     const hour = String(date.getHours()).padStart(2, '0');
//     const minute = String(date.getMinutes()).padStart(2, '0');
//     const second = String(date.getSeconds()).padStart(2, '0');
//     const time = `${hour}:${minute}:${second}`;
//     h1.textContent = time;
//   }
//
// // 최초에 한 번 시간 설정
//   getTime();
//
// // 1초마다 getTime 함수를 호출하도록 타이머 설정
//   setInterval(getTime, 1000);
//
// });

</script>

<style>
@import "@/css/style.css";
@import "@/css/bootstrap.min.css";

.emoji {
  margin-right: 10px;
}
</style>