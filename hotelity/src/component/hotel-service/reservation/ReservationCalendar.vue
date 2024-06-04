<template>
  <div id='calendar'></div>
</template>

<script>

  import { defineComponent } from 'vue';
  import { Calendar } from '@fullcalendar/core';
  import dayGridPlugin from '@fullcalendar/daygrid';
  import interactionPlugin from '@fullcalendar/interaction';

  let selectedDay = null;

  export default defineComponent({
    setup(_, { emit }) { // Add the emit function here
      const dateClick = async function(info) {
        if(selectedDay) {
          selectedDay.style.borderColor = '';
          selectedDay.style.borderWidth = '';
        }
        // 선택 시 css
        info.dayEl.style.borderColor = 'skyblue';
        info.dayEl.style.borderWidth = '5px';
        selectedDay = info.dayEl;

        // 선택 시 메소드 호출
        const formattedDate = formatDateTime(new Date(info.dateStr));

        console.log("변환된 날짜");
        console.log(formattedDate)

        emit ('date-Clicked', formattedDate);
      };

      return {
        dateClick,
      };
    },
    mounted() {
      const calendarEl = document.getElementById('calendar'); // FullCalendar를 삽입할 요소를 가져옵니다.
      let calendar = new Calendar(calendarEl, {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth',
        selectable: true,
        events: [
          // 이벤트 데이터를 여기에 추가하세요.
        ],
        dateClick: this.dateClick,
        aspectRatio: 3.5
      });
      calendar.render(); // FullCalendar를 렌더링합니다.
    },
  });

// Datepicker 값 -> yyyy-MM-ddTHH:mm:ss(LocalDateTime)로 변환
  function formatDateTime(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
  }
</script>