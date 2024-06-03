<template>
  <!-- Table Start -->
  <div class="container-fluid pt-4 px-4">
    <div class="bg-secondary rounded-top p-4">
      <h3 class="mb-4">예약 리스트</h3>
      <div class="search-container d-flex align-items-center">
        <ReservationSearch/>
      </div>
      <div class="position-relative-container mt-3">
        <ExcelButton/>

        <div style="display: flex;justify-content:right">
          <ReservationCheckinBtn :checkedRows="checkedRows" :reservations="reservations"/>

          <!--        ReservationFilter start -->
          <button id="filter-icon" class="btn btn-secondary" style="background-color: saddlebrown;"><i
              class="bi bi-funnel"></i></button>
        </div>
        <div class="filter-container" style="width: auto">
          <div class="btn-group me-2">
            <select class="form-select">
              <option selected>지점 코드</option>
              <option value="1">SE</option>
              <option value="2">HQ</option>
            </select>
          </div>
          <div class="btn-group me-2">
            <DatePicker :modelValue="selectedReservationDate" @update:modelValue="selectedReservationDate = $event"
                        format="yyyy-MM-dd"
                        style="width: 120px; text-align: center; padding: 6px 12px 6px 12px; border-radius: 0.4rem" placeholder="예약 일자"></DatePicker>
          </div>
          <div class="btn-group me-2">
            <DatePicker :modelValue="selectedReservationCheckinDate"
                        @update:modelValue="selectedReservationCheckinDate = $event" format="yyyy-MM-dd"
                        style="width: 120px; text-align: center; padding: 6px 12px 6px 12px; border-radius: 0.4rem" placeholder="체크인 일자"></DatePicker>
          </div>
          <div class="btn-group me-2">
            <DatePicker :modelValue="selectedReservationCheckoutDate"
                        @update:modelValue="selectedReservationCheckoutDate = $event" format="yyyy-MM-dd"
                        style="width: 120px; text-align: center; padding: 6px 12px 6px 12px; border-radius: 0.4rem" placeholder="체크아웃 일자"></DatePicker>
          </div>

          <button class="btn btn-primary">적용</button>
        </div>

        <!--        ReservationFilter end-->

      </div>
      <br>
      <div class="row">
        <div class="col-12">
          <table class="table table-striped">
            <thead>
            <tr>
              <th scope="col">체크인</th>
              <th scope="col">예약 코드</th>
              <th scope="col">고객 코드</th>
              <th scope="col">한글 이름</th>
              <th scope="col">영문 이름</th>
              <th scope="col">객실 코드</th>
              <th scope="col">객실명</th>
              <th scope="col">객실 등급</th>
              <!--              <th scope="col">객실 수용 인원</th>-->
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
            <tr v-for="(reservation, index) in reservations.content" :key="reservation.reservationCodePk">
              <td>
                <input type="checkbox" :checked="reservation.stayStatus === 1" :disabled="reservation.stayStatus === 1"
                       @change="checkedRows[index] = $event.target.checked ? reservation.reservationCodePk : null">
              </td>
              <td>{{ reservation.reservationCodePk }}</td>
              <td>{{ reservation.customerCodeFk }}</td>
              <td>{{ reservation.customerName }}</td>
              <td>{{ reservation.customerEnglishName }}</td>
              <td>{{ reservation.roomCodeFk }}</td>
              <td>{{ reservation.roomName }}</td>
              <td>{{ reservation.roomLevelName }}</td>
              <!--              <td>{{ reservation.roomCapacity }}</td>-->
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
    </div>
  </div>
</template>

<script setup>

import {ref, defineComponent, onMounted, watch} from 'vue';
import axios from 'axios';

import ReservationSearch from "@/component/hotel-service/reservation/ReservationSearch.vue";
import ExcelButton from "@/component/common/ExcelButton.vue";
import ReservationFilter from "@/component/hotel-service/reservation/ReservationFilter.vue";
import DatePicker from "vue3-datepicker";
import ReservationCheckinBtn from "@/component/hotel-service/reservation/ReservationCheckinBtn.vue";
import StayCheckoutBtn from "@/component/hotel-service/stay/StayCheckoutBtn.vue";

const isLoading = ref(true);
const reservations = ref([]);
const selectedReservationDate = ref(null);
const selectedReservationCheckinDate = ref(null);
const selectedReservationCheckoutDate = ref(null);

// 체크박스
const checkedRows = ref([]);

watch(reservations, () => {
  checkedRows.value = reservations.value.content ?
      reservations.value.content.map(reservation =>
          reservation.stayStatus === 1 ?
              reservation.reservationCodePk : null) : [];
}, { immediate: true });


async function fetchData(params) {
  try {
    const formattedDate = formatDateTime(selectedReservationCheckinDate.value);
    const response = await axios.get(`http://localhost:8888/hotel-service/reservations/${formattedDate}`, {params});
    console.log(response.data);
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
}

watch(selectedReservationCheckinDate, loadReservations, {immediate: true});

async function loadReservations() {
  console.log('selectedReservationCheckinDate: ', selectedReservationCheckinDate.value);
  reservations.value = await fetchData({
    reservationCodePk: null,
    customerCodeFk: null,
    customerName: null,
    customerEnglishName: null,
    roomCodeFk: null,
    roomName: null,
    roomLevelName: null,
    roomCapacity: null,
    branchCodeFk: null,
    reservationDate: null,
    reservationCheckinDate: null,
    reservationCheckoutDate: null,
    reservationCancelStatus: null,
    reservationPersonnel: null,
    stayStatus: null,
    orderBy: null,
    sortBy: null
  });
  isLoading.value = false;
}

onMounted(async () => {
  await loadReservations();
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

</script>

<style>

</style>