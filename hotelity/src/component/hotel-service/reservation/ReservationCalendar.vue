<template>
    <div id="app">
        <CalendarComponent />
    </div>
</template>

<script>

import '@/assets/fullcalendar/index.global.js';

    document.addEventListener('DOMContentLoaded', function () {
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth'
        });
        calendar.render();
    });
</script>

<style>
/* 스타일 추가 */
</style>