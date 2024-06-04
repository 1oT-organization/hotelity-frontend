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
<!--        <div class="nav-item dropdown">-->
<!--          <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">-->
<!--            <i class="emoji bi bi-envelope-fill"></i>-->
<!--            <span class="d-none d-lg-inline-flex">Message</span>-->
<!--            <i class="bi bi-caret-down-fill dropdown-icon" style="background: none"></i>-->
<!--          </a>-->
<!--          <div class="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">-->
<!--            <a href="#" class="dropdown-item">-->
<!--              <div class="d-flex align-items-center">-->
<!--                <img class="rounded-circle" src="" alt="" style="width: 40px; height: 40px;">-->
<!--                <div class="ms-2">-->
<!--                  <h6 class="fw-normal mb-0">Jhon send you a message</h6>-->
<!--                  <small>15 minutes ago</small>-->
<!--                </div>-->
<!--              </div>-->
<!--            </a>-->
<!--            <hr class="dropdown-divider">-->
<!--            <a href="#" class="dropdown-item">-->
<!--              <div class="d-flex align-items-center">-->
<!--                <img class="rounded-circle" src="" alt="" style="width: 40px; height: 40px;">-->
<!--                <div class="ms-2">-->
<!--                  <h6 class="fw-normal mb-0">Jhon send you a message</h6>-->
<!--                  <small>15 minutes ago</small>-->
<!--                </div>-->
<!--              </div>-->
<!--            </a>-->
<!--            <hr class="dropdown-divider">-->
<!--            <a href="#" class="dropdown-item">-->
<!--              <div class="d-flex align-items-center">-->
<!--                <img class="rounded-circle" src="" alt="" style="width: 40px; height: 40px;">-->
<!--                <div class="ms-2">-->
<!--                  <h6 class="fw-normal mb-0">Jhon send you a message</h6>-->
<!--                  <small>15 minutes ago</small>-->
<!--                </div>-->
<!--              </div>-->
<!--            </a>-->
<!--            <hr class="dropdown-divider">-->
<!--            <a href="#" class="dropdown-item text-center">See all message</a>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="nav-item dropdown">-->
<!--          <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">-->
<!--            <i class="emoji bi bi-bell-fill"></i>-->
<!--            <span class="d-none d-lg-inline-flex">Notificatin</span>-->
<!--            <i class="bi bi-caret-down-fill dropdown-icon" style="background: none"></i>-->
<!--          </a>-->
<!--          <div class="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">-->
<!--            <a href="#" class="dropdown-item">-->
<!--              <h6 class="fw-normal mb-0">Profile updated</h6>-->
<!--              <small>15 minutes ago</small>-->
<!--            </a>-->
<!--            <hr class="dropdown-divider">-->
<!--            <a href="#" class="dropdown-item">-->
<!--              <h6 class="fw-normal mb-0">New user added</h6>-->
<!--              <small>15 minutes ago</small>-->
<!--            </a>-->
<!--            <hr class="dropdown-divider">-->
<!--            <a href="#" class="dropdown-item">-->
<!--              <h6 class="fw-normal mb-0">Password changed</h6>-->
<!--              <small>15 minutes ago</small>-->
<!--            </a>-->
<!--            <hr class="dropdown-divider">-->
<!--            <a href="#" class="dropdown-item text-center">See all notifications</a>-->
<!--          </div>-->
<!--        </div>-->
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
    <ReservationList :reservations="reservations"/>

  </div>

</template>

<script setup>

import ReservationCalendar from "@/component/hotel-service/reservation/ReservationCalendar.vue";
import ReservationList from "@/component/hotel-service/reservation/ReservationList.vue";


</script>

<style>
@import "@/css/style.css";
@import "@/css/bootstrap.min.css";

.dropdown-icon {
  transition: transform 0.5s;
}
</style>