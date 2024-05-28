<template>
  <div id='calendar'></div>
</template>

<script>

  import { defineComponent } from 'vue';
  import { Calendar } from '@fullcalendar/core';
  import dayGridPlugin from '@fullcalendar/daygrid';

  export default defineComponent({
  components: {
  FullCalendar: Calendar, // FullCalendar를 Calendar로 임포트합니다.
},
  mounted() {
  const calendarEl = document.getElementById('calendar'); // FullCalendar를 삽입할 요소를 가져옵니다.
  const calendar = new Calendar(calendarEl, {
  plugins: [dayGridPlugin],
  initialView: 'dayGridMonth',
  events: [
  // 이벤트 데이터를 여기에 추가하세요.
  ],
    aspectRatio: 3.5
});
  calendar.render(); // FullCalendar를 렌더링합니다.
},
});


  // var calendar = new FullCalendar.Calendar(calendarEl, {

  // });
  // calendar.setOption('contentHeight', 650);
</script>