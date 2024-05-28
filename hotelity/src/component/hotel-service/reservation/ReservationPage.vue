<template>
    <div>
        <ReservationSidevar />
        <ReservationNavbar />
<!--      <TestCalendar />-->

        <ReservationCalendar />
    </div>

</template>

<script setup>
import ReservationNavbar from "@/component/hotel-service/reservation/ReservationNavbar.vue";
import ReservationSidevar from "@/component/hotel-service/reservation/ReservationSidevar.vue";
// import ReservationCalendar from "@/component/hotel-service/reservation/ReservationCalendar.vue";
import TestCalendar from "@/component/TestCalendar.vue";

</script>

<style></style>