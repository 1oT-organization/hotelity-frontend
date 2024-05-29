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
<!--        <ReservationFilter @change-checkin-date="handleCheckinDateChange"/>-->

<!--        ReservationFilter start -->
        <button id="filter-icon" class="btn btn-secondary" style="background-color: saddlebrown;"><i class="bi bi-funnel"></i>
        </button>
        <div class="filter-container" style="width: auto">
          <div class="btn-group me-2">
            <select class="form-select">
              <option selected>지점 코드</option>
              <option value="1">SE</option>
              <option value="2">HQ</option>
            </select>
          </div>
          <div class="btn-group me-2">
            <DatePicker :modelValue="selectedReservationDate" @update:modelValue="selectedReservationDate = $event" format="yyyy-MM-dd"
                        style="width: 120px; text-align: center" placeholder="예약 일자"></DatePicker>
          </div>
          <div class="btn-group me-2">
            <DatePicker :modelValue="selectedReservationCheckinDate" @update:modelValue="selectedReservationCheckinDate = $event" format="yyyy-MM-dd"
                        style="width: 120px; text-align: center" placeholder="체크인 일자"></DatePicker>
          </div>
          <div class="btn-group me-2">
            <DatePicker :modelValue="selectedReservationCheckoutDate" @update:modelValue="selectedReservationCheckoutDate = $event" format="yyyy-MM-dd"
                        style="width: 120px; text-align: center" placeholder="체크아웃 일자"></DatePicker>
          </div>

          <button class="btn btn-primary">적용</button>
        </div>
        <div>
          Selected Check-in Date: {{ selectedReservationCheckinDate }}
        </div>
<!--        ReservationFilter end-->

      </div>
      <br>
      <div class="row">
        <div class="col-12">
          <table class="table table-striped">
            <thead>
            <tr>
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
              <th scope="col">예약 취소 여부</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="reservation in reservations.content" :key="reservation.reservationCodePk">
              <td>{{ reservation.reservationCodePk }}</td>
              <td>{{ reservation.customerCodePk }}</td>
              <td>{{ reservation.customerName }}</td>
              <td>{{ reservation.customerEnglishName }}</td>
              <td>{{ reservation.roomCodeFk }}</td>
              <td>{{ reservation.roomName }}</td>
              <td>{{ reservation.roomLevelName }}</td>
<!--              <td>{{ reservation.roomCapacity }}</td>-->
              <td>{{ reservation.branchCodeFk }}</td>
              <td>{{ reservation.reservationDate }}</td>
              <td>{{ reservation.reservationCheckinDate }}</td>
              <td>{{ reservation.reservationCheckoutDate }}</td>
              <td>{{ reservation.reservationPersonnel }}</td>
              <td>{{ reservation.reservationCancelStatus }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import {ref, defineComponent, onMounted} from 'vue';
import axios from 'axios';

import ReservationSearch from "@/component/hotel-service/reservation/ReservationSearch.vue";
import ExcelButton from "@/component/common/ExcelButton.vue";
import ReservationFilter from "@/component/hotel-service/reservation/ReservationFilter.vue";
import DatePicker from "vue3-datepicker";

const isLoading = ref(true);
const reservations = ref([]);
const selectedReservationDate = ref(null);
const selectedReservationCheckinDate = ref(null);
const selectedReservationCheckoutDate = ref(null);

async function fetchData(params) {
  try {
    const response = await axios.get(`http://localhost:8888/hotel-service/reservations/2023-05-05T00:00:00`, {params});
    console.log(response.data);
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
}

async function loadReservations() {
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
    orderBy: null,
    sortBy: null
  });
  isLoading.value = false;
}

onMounted(() => {
  $('#filter-icon').on('click', function () {
    $('#filter').toggle();
  });
});

</script>

<style>

</style>