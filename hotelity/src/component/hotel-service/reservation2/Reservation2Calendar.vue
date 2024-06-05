<template>
  <div id='calendar'></div>
</template>

<script setup>

import {ref, onMounted} from 'vue';
import {Calendar} from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const props = defineProps();
const emit = defineEmits();

var selectedMonth = ref(null);
var selectedDay = ref(null);

const dateClick = async function (info) {
  if (selectedDay.value) {
    selectedDay.value.style.borderColor = '';
    selectedDay.value.style.borderWidth = '';
  }
  // 선택 시 css
  info.dayEl.style.borderColor = 'skyblue';
  info.dayEl.style.borderWidth = '5px';
  selectedDay.value = info.dayEl;

  // 선택 시 메소드 호출
  const formattedDate = formatDate(new Date(info.dateStr));

  console.log("변환된 날짜");
  console.log(formattedDate)

  emit ('date-clicked', formattedDate);
};

onMounted(() => {
  const calendarEl = document.getElementById('calendar');
  var calendar = new Calendar(calendarEl, {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    selectable: true,
    events: [
      {
        title: 'test',
        start: '2024-06-03'
      }
    ],
    dateClick: dateClick,
    aspectRatio: 3.5,
    datesSet: function (info) {
      // 현재 보여지고 있는 월을 가져와서 selectedMonth에 담는다.
      let firstWeekStartDate = new Date(info.startStr);

      firstWeekStartDate.setDate(firstWeekStartDate.getDate() + 7);
      let year = firstWeekStartDate.getFullYear();
      let month = String(firstWeekStartDate.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so we add 1
      let day = String(firstWeekStartDate.getDate()).padStart(2, '0');

      selectedMonth.value = `${year}-${month}-${day}T00:00:00`;

      // alert(selectedMonth.value);
      emit('month-changed', selectedMonth.value);
    }
  });

  calendar.render();
});

function formatDate(date) {
  if (date == null) {
    date = new Date();
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

</script>