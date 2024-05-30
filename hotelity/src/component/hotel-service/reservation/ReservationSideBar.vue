<template>

  <div class="sidebar pe-4 pb-3">
    <nav class="navbar bg-secondary navbar-dark">
      <a href="index.html" class="navbar-brand mx-4 mb-3">
        <h3 class="text-primary" style="display: flex; justify-content: center;"><img
            src="../../../assets/img/hotelity_logo.png" width="60%"></h3>
      </a>

      <Clock/>

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

</script>

<style>
@import "@/css/style.css";
@import "@/css/bootstrap.min.css";

.emoji {
  margin-right: 10px;
}
</style>