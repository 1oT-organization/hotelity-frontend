<template>
  <div class="content">
    <!-- Navbar Start -->
    <nav class="navbar navbar-expand bg-secondary navbar-dark sticky-top px-4 py-0">
      <a href="index.html" class="navbar-brand d-flex d-lg-none me-4">
        <h2 class="text-primary mb-0"><i class="fa fa-user-edit"></i></h2>
      </a>
      <a href="#" class="sidebar-toggler flex-shrink-0">
        <i class="fa fa-bars"></i>
      </a>

      <div class="navbar-nav align-items-center ms-auto" style="display: flex; gap: 12px;">

        <!-- Existing dropdowns and items -->

        <!-- New Menu Items -->
        <a href="" class="nav-item nav-link">고객</a>
        <a href="" class="nav-item nav-link">직원</a>
        <a href="" class="nav-item nav-link">호텔 서비스</a>
        <a href="" class="nav-item nav-link">호텔 관리</a>
        <a href="" class="nav-item nav-link">마케팅</a>
        <a href="" class="nav-item nav-link">영업관리</a>

      </div>

      <div class="navbar-nav align-items-center ms-auto">
        <div class="nav-item dropdown">
          <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
            <img class="rounded-circle me-lg-2" src="" alt="" style="width: 40px; height: 40px;">
            <span class="d-none d-lg-inline-flex">John Doe</span>
            <i class="bi bi-caret-down-fill dropdown-icon" style="background: none"></i>
          </a>
          <div class="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
            <a href="#" class="dropdown-item">My Profile</a>
            <a href="#" class="dropdown-item">Settings</a>
            <a href="#" class="dropdown-item">Log Out</a>
          </div>
        </div>
      </div>


    </nav>
    <Reservation2List :reservations="reservations"/>

  </div>

</template>

<script setup>

import Reservation2List from "@/component/hotel-service/reservation2/Reservation2List.vue";

</script>

<style>
@import "@/css/style.css";
@import "@/css/bootstrap.min.css";

.dropdown-icon {
  transition: transform 0.5s;
}
</style>