<template>
  <ReservationNavbar/>

  <div class="sidebar pe-4 pb-3">
    <nav class="navbar bg-secondary navbar-dark">
      <a href="index.html" class="navbar-brand mx-4 mb-3">
        <h3 class="text-primary" style="display: flex; justify-content: center;"><img
            src="@/assets/img/hotelity_logo.png" width="60%"></h3>
      </a>

      <div class="container">
        <div class="clock">
          <h1 id="time" style="display: flex; justify-content: center; font-family: fantasy; color:#798a69;"></h1>
        </div>
      </div>

      <div class="navbar-nav w-100">
        <router-link to="/reservationPage" class="nav-item nav-link active">
          <i class="emoji bi bi-people-fill"></i>예약 일정
        </router-link>
        <router-link to="/" class="nav-item nav-link">
          <i class="emoji bi bi-person-fill-add"></i>투숙
        </router-link>
        <router-link to="/" class="nav-item nav-link">
          <i class="emoji bi bi-person-fill-add"></i>결제
        </router-link>
      </div>
    </nav>

  </div>

</template>

<script setup>
import ReservationNavbar from "@/component/hotel-service/reservation/ReservationNavbar.vue";

</script>

<style>
@import "@/css/style.css";
@import "@/css/bootstrap.min.css";

.dropdown-icon {
  transition: transform 0.5s;
}

.filter-container {
  display: none;
  position: absolute;
  top: 50px;
  right: 10px;
  width: 500px;
  padding: 10px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 10px;
}

.filter-container::before {
  content: "";
  position: absolute;
  top: -10px;
  right: 20px;
  border-width: 0 10px 10px 10px;
  border-style: solid;
  border-color: transparent transparent white transparent;
}

.position-relative-container {
  position: relative;
  display: flex;
  justify-content: space-between;
}

.emoji {
  margin-right: 10px;
}
</style>