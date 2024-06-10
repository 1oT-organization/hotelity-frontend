<template>
  <div class="container-fluid pt-4 px-4">
    <Reservation2Calendar :reservations="obj" @month-changed="updateSelectedMonth" @date-clicked="handleDateClicked"/>
  </div>

  <!-- Table Start -->
  <div class="container-fluid pt-4 px-4">
    <div class="bg-secondary rounded-top p-4"  style="background: #f7f7f7;">
      <h3 class="mb-4">예약 리스트</h3>
      <div class="search-container d-flex align-items-center">
        <Reservation2Search/>
      </div>
      <div class="position-relative-container mt-3">
        <ExcelButton/>

        <div style="display: flex; justify-content:right">
          <!-- calendar icon -->
          <button class="btn btn-secondary" style="background-color: saddlebrown;" @click="toggleCalendarContainer"><i
              class="bi bi-calendar"></i></button>

          <Reservation2CheckinBtn :checkedRows="checkedRows" :reservations="reservations"/>

          <!--        ReservationFilter start -->
          <button id="filter-icon" class="btn btn-secondary" style="background-color: saddlebrown;"
                  @click="toggleFilterContainer"><i
              class="bi bi-funnel"></i></button>
        </div>
        <div class="filter-container" style="width: auto" v-show="isFilterContainerVisible">
          <div class="btn-group me-2">
            <select class="form-select">
              <option selected>지점 코드</option>
              <option value="1">SE</option>
              <option value="2">HQ</option>
            </select>
          </div>
          <button class="btn btn-primary">적용</button>
        </div>

        <div class="calendar-container" v-show="isCalendarContainerVisible">
          <div class="btn-group me-2">
            <DatePicker :modelValue="selectedReservationDate" @update:modelValue="selectedReservationDate = $event"
                        format="yyyy-MM-dd"
                        style="width: 120px; text-align: center; padding: 6px 12px 6px 12px; border-radius: 0.4rem"
                        placeholder="예약 일자"></DatePicker>
          </div>
          <div class="btn-group me-2">
            <DatePicker :modelValue="selectedReservationCheckinDate"
                        @update:modelValue="selectedReservationCheckinDate = $event" format="yyyy-MM-dd"
                        style="width: 120px; text-align: center; padding: 6px 12px 6px 12px; border-radius: 0.4rem"
                        placeholder="체크인 일자"></DatePicker>
          </div>
          <div class="btn-group me-2">
            <DatePicker :modelValue="selectedReservationCheckoutDate"
                        @update:modelValue="selectedReservationCheckoutDate = $event" format="yyyy-MM-dd"
                        style="width: 120px; text-align: center; padding: 6px 12px 6px 12px; border-radius: 0.4rem"
                        placeholder="체크아웃 일자"></DatePicker>
          </div>
        </div>

        <!--        ReservationFilter end-->

      </div>
      <br>

      <!-- table start -->
      <div class="row">
        <div class="col-12">
          <table class="table table-striped">
            <thead>
            <tr>
              <th scope="col">체크인</th>
              <th scope="col">예약 코드</th>
              <th scope="col">고객 코드</th>
              <th scope="col">이름</th>
              <th scope="col">객실 코드</th>
              <th scope="col">객실명</th>
              <th scope="col">객실 등급</th>
              <!--<th scope="col">객실 수용 인원</th>-->
              <th scope="col">지점 코드</th>
              <th scope="col">예약 일자</th>
              <th scope="col">예약 체크인 일자</th>
              <th scope="col">예약 체크아웃 일자</th>
              <th scope="col">예약 인원</th>
              <th scope="col">예약 취소</th>
              <th scope="col">투숙 등록</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(reservation, index) in reservations" :key="reservation.reservationCodePk"
                @click="openModal">
              <td>
                <input type="checkbox" :checked="reservation.stayStatus === 1" :disabled="reservation.stayStatus === 1"
                       @change="checkedRows[index] = $event.target.checked ? reservation : null">
              </td>
              <td>{{ reservation.reservationCodePk }}</td>
              <td>{{ reservation.customerCodeFk }}</td>
              <td>{{ reservation.customerName }}</td>
              <td>{{ reservation.roomCodeFk }}</td>
              <td>{{ reservation.roomName }}</td>
              <td>{{ reservation.roomLevelName }}</td>
              <td>{{ reservation.branchCodeFk }}</td>
              <td>{{ formatDate(reservation.reservationDate) }}</td>
              <td>{{ formatDate(reservation.reservationCheckinDate) }}</td>
              <td>{{ formatDate(reservation.reservationCheckoutDate) }}</td>
              <td>{{ reservation.reservationPersonnel }}</td>
              <td>
                <span v-if="reservation.reservationCancelStatus === 0">N</span>
                <span v-else-if="reservation.reservationCancelStatus === 1">Y</span>
              </td>
              <td>
                <span v-if="reservation.stayStatus === 0">N</span>
                <span v-else-if="reservation.stayStatus === 1">Y</span>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- table end -->

      <!-- Modal start -->
      <div v-if="isModalOpen" class="modal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">예약 확인</h5>
              <button type="button" class="btn-close" @click="toggleModal"></button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="submitForm">
                <div class="row">
                  <div class="col-md-4 mb-3">
                    <label for="reservationCodePk" class="form-label">예약 코드</label>
                    <input type="text" class="form-control" id="reservationCodePk"
                           v-model="reservationCheck.reservationCodePk">
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="customerName" class="form-label">예약자 성함</label>
                    <input type="text" class="form-control" id="customerName" v-model="reservationCheck.customerName">
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="reservationPersonnel" class="form-label">예약 인원</label>
                    <input type="text" class="form-control" id="reservationPersonnel"
                           v-model="reservationCheck.ReservationPersonnel">
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="reservationCheckinDate" class="form-label">체크인 일자</label>
                    <input type="text" class="form-control" id="reservationCheckinDate"
                           v-model="reservationCheck.ReservationCheckinDate">
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="reservationCheckoutDate" class="form-label">체크아웃 일자</label>
                    <input type="text" class="form-control" id="reservationCheckoutDate"
                           v-model="reservationCheck.reservationCheckoutDate">
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="branchName" class="form-label">지점 명</label>
                    <input type="text" class="form-control" id="branchName" v-model="reservationCheck.branchName">
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="roomCodeFk" class="form-label">객실 코드</label>
                    <input type="text" class="form-control" id="roomCodeFk" v-model="reservationCheck.roomCodeFk">
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="roomNumber" class="form-label">예약 객실 번호</label>
                    <input type="text" class="form-control" id="roomNumber" v-model="reservationCheck.roomNumber">
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="roomName" class="form-label">예약 객실명</label>
                    <input type="text" class="form-control" id="roomName" v-model="fullRoomName" disabled>
                  </div>
                </div>
                <button type="submit" class="btn btn-primary">체크인</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- Modal end -->
    </div>
  </div>
</template>

<script setup>

import {ref, onMounted, watch, provide, computed} from 'vue';
import * as api from '@/api/apiService.js';

import ExcelButton from "@/component/common/ExcelButton.vue";
import DatePicker from "vue3-datepicker";
import Reservation2Calendar from "@/component/hotel-service/reservation/ReservationCalendar.vue";
import Reservation2CheckinBtn from "@/component/hotel-service/reservation/ReservationCheckinBtn.vue";
// import ReservationInfo from "@/component/hotel-service/reservation/ReservationInfo.vue"

const isLoading = ref(true);
const reservations = ref([]);
const selectedReservationDate = ref(null);
const selectedReservationCheckinDate = ref(null);
const selectedReservationCheckoutDate = ref(null);
const isFilterContainerVisible = ref(false);
const isCalendarContainerVisible = ref(false);
const selectedMonth = ref(null);
const isModalOpen = ref(false);
const fullRoomName = computed(() => `${reservationCheck.roomName} ${reservationCheck.roomLevelName}`);

// 모달창
function openModal() {
  isModalOpen.value = true;
}

// 모달에 들어갈 데이터
const reservationCheck = ref({
  reservationCodePk: '',
  customerName: '',
  ReservationPersonnel: '',
  ReservationCheckinDate: '',
  reservationCheckoutDate: '',
  branchName: '',
  roomCodeFk: '',
  roomNumber: '',
  roomName: '',
  roomLevelName: ''
});

const submitForm = (event) => {
  event.preventDefault();
};


// 체크박스
const checkedRows = ref([]);

// reservations 변경 감지
watch(reservations, () => {
  if (reservations.value && reservations.value.content) {
    checkedRows.value = reservations.value.content.map(reservation =>
        reservation.stayStatus === 1 ?
            reservation.reservationCodePk : null);
  }
}, {immediate: true});


// 캘린더 월 변경 감지
function updateSelectedMonth(newMonth) {
  selectedMonth.value = newMonth;
}

// 캘린더 날짜 선택 감지
function handleDateClicked(formattedDate) {
  if (obj[formattedDate]) {
    console.log(obj[formattedDate]);
    reservations.value = obj[formattedDate];
  } else {
    console.log("No reservations for " + formattedDate);
    reservations.value = [];
  }
}

let obj = {};
const change = ref(false);
provide('change', change);

watch(selectedMonth, async (newMonth) => {
      if (newMonth) {
        const response = await api.getMonthlyReservations(selectedMonth.value);
        const data = response.data;

        change.value = true;

        console.log("백엔드 메소드 실행 결과: ")
        console.log(data);

        for (const reservation of data.content) {
          const date = formatDate(reservation.reservationCheckinDate);

          if (!obj[date]) {
            obj[date] = [];
          }

          obj[date].push(reservation);
        }

        console.log(obj);

      }
    }
);

// 필터
function toggleFilterContainer() {
  isFilterContainerVisible.value = !isFilterContainerVisible.value;

  // 필터 컨테이너가 열리면 캘린더 컨테이너는 자동 닫힘
  if (isFilterContainerVisible.value && isCalendarContainerVisible.value) {
    isCalendarContainerVisible.value = false;
  }
}

function toggleCalendarContainer() {
  isCalendarContainerVisible.value = !isCalendarContainerVisible.value;
  if (isCalendarContainerVisible.value && isFilterContainerVisible.value) {
    isFilterContainerVisible.value = false;
  }
}

function toggleDropdownMenu() {
  isDropdownOpen.value = !isDropdownOpen.value;
}

function getToday() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const day = String(today.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}T00:00:00`;
}

onMounted(async () => {
  const today = getToday();
  const response = await api.getDailyReservations(today);
  reservations.value = response.data.content;
  $('#filter-icon').on('click', function () {
    $('#filter').toggle();
  });
});

// LocalDateTime -> yyyy-MM-dd로 변환
function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Datepicker 값 -> yyyy-MM-ddTHH:mm:ss(LocalDateTime)로 변환
function formatDateTime(date) {
  if (date == null) {
    date = new Date();
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
}

// 예약 확인 모달 창 띄우기
// const isReservationInfoModalOpen = (reservation) => {
//
//   Object.assign(selectedBranch, reservation);
//
//   selectedBranch.value = {...reservation};
//
//   isReservationInfoModalOpen.value = !isReservationInfoModalOpen.value;
//   console.log('이거뭐임2', isReservationInfoModalOpen.value)
// };

// function openReservationInfoModal(reservation) {
//   selectedReservation.value = reservation;
//   isReservationInfoModalOpen.value = true;
// }

</script>

<style>
.filter-container {
  position: absolute;
  top: 50px; /* 필터 아이콘의 높이에 따라 조정 */
  right: -8px; /* 필터 아이콘 오른쪽 끝에 위치 */
  width: auto;
}

.calendar-container {
  position: absolute;
  top: 50px;
  right: 142px;
  width: auto;
  background: #fff;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2); /* 그림자 효과 추가 */
}

.calendar-container::before {
  content: "";
  position: absolute;
  top: -10px; /* 화살표 위치 조정 */
  right: 10px; /* 화살표 위치 조정 */
  border-width: 0 10px 10px 10px; /* 화살표 크기 조정 */
  border-style: solid;
  border-color: transparent transparent #ccc transparent; /* 화살표 색상 조정 */
}

.calendar-container::after {
  content: "";
  position: absolute;
  top: -9px; /* 화살표 위치 조정 */
  right: 10px; /* 화살표 위치 조정 */
  border-width: 0 9px 9px 9px; /* 화살표 크기 조정 */
  border-style: solid;
  border-color: transparent transparent #fff transparent; /* 화살표 색상 조정 */
}

</style>