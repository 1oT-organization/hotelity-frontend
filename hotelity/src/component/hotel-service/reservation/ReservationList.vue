<template>
  <!-- Table Start -->
  <div class="container-fluid pt-4 px-4">
    <div class="bg-secondary rounded-top p-4">
      <h3 class="mb-4">예약 리스트</h3>
        <ReservationSearch/>
      <div class="position-relative-container mt-3">
        <ExcelButton/>
        <ReservationFilter/>
      </div>
      <br>
      <div class="row">
        <div class="col-12">
          <table class="table table-striped">
            <thead>
            <tr>
              <th scope="col">고객 코드</th>
              <th scope="col">한글 이름</th>
              <th scope="col">영문 이름</th>
              <th scope="col">성별</th>
              <th scope="col">전화번호</th>
              <th scope="col">Email</th>
              <th scope="col">주소</th>
              <th scope="col">멤버십 등급</th>
              <th scope="col">국가</th>
              <th scope="col">고객 타입</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th scope="row">1</th>
              <td>이준형</td>
              <td>Lee Junhyeong</td>
              <td>M</td>
              <td>010-1234-1234</td>
              <td>jhlee@gmail.com</td>
              <td>느그서장 남천동살제</td>
              <td>VIP</td>
              <td>KR</td>
              <td>개인</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>소우주</td>
              <td>So U Ju</td>
              <td>M</td>
              <td>010-3211-1233</td>
              <td>universe@gmail.com</td>
              <td>소주소주소주</td>
              <td>플래티넘</td>
              <td>KR</td>
              <td>개인</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>배성민</td>
              <td>Bae Seongmin</td>
              <td>M</td>
              <td>010-1111-1111</td>
              <td>baebae@gmail.com</td>
              <td>주소주소주소</td>
              <td>골드</td>
              <td>KR</td>
              <td>개인</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref, onMounted } from 'vue';
import axios from 'axios';

import ReservationSearch from "@/component/hotel-service/reservation/ReservationSearch.vue";
import ExcelButton from "@/component/common/ExcelButton.vue";
import ReservationFilter from "@/component/hotel-service/reservation/ReservationFilter.vue";

const form = ref({
  reservationCodePk: '',
  customerCodeFk: '',
  customerName: '',
  customerEnglishName: '',
  roomCodeFk: '',
  roomName: '',
  roomLevelName: '',
  roomCapacity: '',
  branchCodeFk: '',
  reservationDate: '',
  reservationCheckinDate: '',
  reserationCheckoutDate: '',
  reservationCancelStatus: '',
  reservationPersonnel: ''
});

async function handleSubmit() {
  try {
    const response = await axios.post('http://localhost:8888/hotel-service', form.value);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
</script>

<style>

</style>