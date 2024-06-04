<template>
  <div class="container-fluid pt-4 px-4">
    <ReservationCalendar/>
  </div>
  <ReservationList/>
</template>

<script setup>
import ReservationCalendar from "@/component/hotel-service/reservation/ReservationCalendar.vue";
import ReservationList from "@/component/hotel-service/reservation/ReservationList.vue";
</script>
