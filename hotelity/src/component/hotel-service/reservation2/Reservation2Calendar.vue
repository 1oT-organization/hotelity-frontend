<template>
  <div id='calendar'></div>
</template>

<script setup>

import {ref, onMounted, watch, inject} from 'vue';
import {Calendar} from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const emit = defineEmits();
const props = defineProps({
  reservations: Object
});

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

  console.log("props: ");
  console.log(props)

  console.log("변환된 날짜");
  console.log(formattedDate)

  emit('date-clicked', formattedDate);
};

// let response = inject('response'); // Inject the response from Reservation2List.vue
//
// watch(response, (newResponse) => {
//   if (newResponse) {
//     const events = newResponse.data.data.content ? Object.entries(newResponse.data.data.content).map(([date, reservations]) => ({
//       title: `예약 ${reservations.length} 건`,
//       start: date
//     })) : [];
//
//     const eventSource = calendar.getEventSourceById('reservations');
//     if (eventSource) {
//       eventSource.remove();
//     }
//     calendar.addEventSource({events, id: 'reservations'});
//   }
// });

// let calendar = null;
//
// const updateEvents = () => {
//   console.log("updateEvents 실행됨")
//   const events = props.reservations ? Object.entries(props.reservations).map(([date, reservations]) => ({
//     title: `예약 ${reservations.length} 건`,
//     start: date
//   })) : [];
//
//   const eventSource = calendar.getEventSourceById('reservations');
//   if (eventSource) {
//     eventSource.remove();
//   }
//   calendar.addEventSource({events, id: 'reservations'});
// };
//
// const renderCalendar = () => {
//   const calendarEl = document.getElementById('calendar');
//   calendar = new Calendar(calendarEl, {
//     plugins: [dayGridPlugin, interactionPlugin],
//     initialView: 'dayGridMonth',
//     selectable: true,
//     events: [],
//     dateClick: dateClick,
//     aspectRatio: 3.5,
//     datesSet: function (info) {
//
//       let firstWeekStartDate = new Date(info.startStr);
//       firstWeekStartDate.setDate(firstWeekStartDate.getDate() + 7);
//       let year = firstWeekStartDate.getFullYear();
//       let month = String(firstWeekStartDate.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so we add 1
//       let day = String(firstWeekStartDate.getDate()).padStart(2, '0');
//       selectedMonth.value = `${year}-${month}-${day}T00:00:00`;
//       emit('month-changed', selectedMonth.value);
//     }
//   });
//   calendar.render();
//   updateEvents();
// };
//
// watch(props.reservations, () => {
//   if (!calendar) {
//     renderCalendar();
//   } else {
//     updateEvents();
//   }
// });
//
// onMounted(renderCalendar);

onMounted(() => {
  console.log("Calendar onMounted 실행됨");
  console.log(props.reservations);
  const calendarEl = document.getElementById('calendar');
  var calendar = new Calendar(calendarEl, {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    selectable: true,
    // events: props.reservations ? Object.entries(props.reservations).map(([date, reservations]) => ({
    //   title: `예약 ${reservations.length} 건`,
    //   start: date
    // })) : [],
    events: [
      {
        title: "예약 1건",
        start: "2024-06-01"
      },
      {
        title: "예약 7건",
        start: "2024-06-03"
      },
      {
        title: "예약 13건",
        start: "2024-06-04"
      },
      {
        title: "예약 3건",
        start: "2024-06-05"
      },
      {
        title: "예약 1건",
        start: "2024-06-06"
      }
      ],
      dateClick
:
  dateClick,
      aspectRatio
:
  3.5,
      datesSet
:

  function (info) {

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
})
  ;

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