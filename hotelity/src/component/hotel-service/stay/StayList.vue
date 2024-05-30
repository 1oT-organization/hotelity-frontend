<template>
  <!-- Table Start -->
  <div class="container-fluid pt-4 px-4">
    <div class="bg-secondary rounded-top p-4">
      <h3 class="mb-4">투숙 리스트</h3>
      <div class="search-container d-flex align-items-center">
        <StaySearch/>
      </div>
      <div class="position-relative-container mt-3">
        <ExcelButton/>

        <!--        StayFilter start -->
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
            <DatePicker :modelValue="selectedStayCheckinDate" @update:modelValue="selectedStayCheckinDate = $event" format="yyyy-MM-dd"
                        style="width: 120px; text-align: center" placeholder="체크인 일자"></DatePicker>
          </div>
          <div class="btn-group me-2">
            <DatePicker :modelValue="selectedStayCheckoutDate" @update:modelValue="selectedStayCheckoutDate = $event" format="yyyy-MM-dd"
                        style="width: 120px; text-align: center" placeholder="체크아웃 일자"></DatePicker>
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
              <th scope="col">체크아웃</th>
              <th scope="col">투숙 코드</th>
              <th scope="col">고객 코드</th>
              <th scope="col">한글 이름</th>
              <th scope="col">영문 이름</th>
              <th scope="col">객실 코드</th>
              <th scope="col">객실명</th>
              <th scope="col">객실 등급</th>
              <th scope="col">투숙 인원</th>
              <th scope="col">체크인 일자</th>
              <th scope="col">체크아웃 일자</th>
              <th scope="col">담당 직원 코드</th>
              <th scope="col">지점 코드</th>
              <th scope="col">예약 코드</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(stay, index) in stays.content" :key="stay.stayCodePk">
              <td><input type="checkbox" v-model="checkedRows[index]"></td>
              <td>{{ stay.stayCodePk }}</td>
              <td>{{ stay.customerCodeFk }}</td>
              <td>{{ stay.customerName }}</td>
              <td>{{ stay.roomCode }}</td>
              <td>{{ stay.roomName }}</td>
              <td>{{ stay.roomLevelName }}</td>
              <td>{{ stay.roomCapacity }}</td>
              <td>{{ stay.stayPeopleCount }}</td>
              <td>{{ stay.stayCheckinTime }}</td>
              <td>{{ stay.stayCheckoutTime }}</td>
              <td>{{ stay.employeeCodeFk }}</td>
              <td>{{ stay.PICEmployeeName }}</td>
              <td>{{ stay.branchCodeFk }}</td>
              <td>{{ stay.reservationCodeFk }}</td>

            </tr>
            </tbody>
          </table>
        </div>

        <!-- 페이징 컨트롤 -->
        <div class="pagination">
          <button @click="prevPageGroup" :disabled="pageGroup === 1">Prev</button>
          <button v-for="page in pageSize" :key="page"
                  @click="changePage((pageGroup - 1) * pageSize + page)"
                  :disabled="(pageGroup - 1) * pageSize + page > totalPages"
                  :class="{ 'selected': (pageGroup - 1) * pageSize + page === selectedPage }">
            {{ (pageGroup - 1) * pageSize + page }}
          </button>
          <button @click="nextPageGroup" :disabled="pageGroup * pageSize >= totalPages">Next</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>

import {ref, defineComponent, onMounted, watch} from 'vue';
import axios from 'axios';

import ExcelButton from "@/component/common/ExcelButton.vue";
import DatePicker from "vue3-datepicker";
import StaySearch from "@/component/hotel-service/stay/StaySearch.vue";

const isLoading = ref(true);
const stays = ref([]);

const currentPage = ref(1);
const totalPages = ref(0);
const pageGroup = ref(1);
const pageSize = 10; // 한 그룹당 페이지 수
const selectedPage = ref(1); // 클릭한 페이지 번호를 추적하는 ref

// 체크박스
const checkedRows = ref([]);

watch(stays, () => {
  checkedRows.value = stays.value.content ? stays.value.content.map(() => false) : [];
}, { immediate: true });

const selectedReservationDate = ref(null);
const selectedReservationCheckinDate = ref(null);
const selectedReservationCheckoutDate = ref(null);

async function fetchData(params) {
  try {
    const response = await axios.get(`http://localhost:8888/hotel-service/stays/page`, { params });
    console.log(response.data);
    totalPages.value = response.data.data.totalPagesCount; // 총 페이지 수를 업데이트
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
}

// watch(selectedReservationCheckinDate, loadStays, { immediate: true });

async function loadStays(page = 1) {
  // console.log('selectedReservationCheckinDate: ', selectedReservationCheckinDate.value);
  stays.value = await fetchData({
    stayCodePk: null,
    customerCodeFk: null,
    customerName: null,
    roomCode: null,
    roomName: null,
    roomLevelName: null,
    roomCapacity: null,
    stayPeopleCount: null,
    stayCheckinTime: null,
    stayCheckoutTime: null,
    employeeCodeFk: null,
    PICEmployeeName: null,
    branchCodeFk: null,
    reservationCodeFk: null,
    orderBy: null,
    sortBy: null,
    pageNum: page - 1
  });
  isLoading.value = false;
}

function changePage(page) {
  selectedPage.value = page; // 클릭한 페이지 번호를 업데이트
  currentPage.value = page;
  isLoading.value = true;
  loadStays(page);
}

function nextPageGroup() {
  if (pageGroup.value * pageSize < totalPages.value) {
    pageGroup.value += 1;
  }
}

function prevPageGroup() {
  if (pageGroup.value > 1) {
    pageGroup.value -= 1;
  }
}

onMounted( async () => {
  await loadStays();
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

// Datepicker 값 -> yyyy-MM-ddTHH:mm:ss로 변환
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

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagination button {
  margin: 0 5px;
  padding: 5px 10px;
}

</style>