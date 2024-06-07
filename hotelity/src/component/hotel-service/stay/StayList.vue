<template>
  <!-- Table Start -->
  <div class="container-fluid pt-4 px-4">
    <div class="bg-secondary rounded-top p-4">
      <h3 class="mb-4">투숙 리스트</h3>
      <div class="search-container d-flex align-items-center">
        <div class="btn-group">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  @click="toggleDropdownMenu"
                  aria-expanded="false" style="background-color: saddlebrown; margin-left: 8px">
            <i class="bi bi-search"></i>
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><a class="dropdown-item" href="#" @click="setSearchCriteria('stayCodePk')">투숙코드</a></li>
            <li><a class="dropdown-item" href="#" @click="setSearchCriteria('customerName')">고객명</a></li>
            <li><a class="dropdown-item" href="#" @click="setSearchCriteria('roomCodeFk')">객실코드</a></li>
            <li><a class="dropdown-item" href="#" @click="setSearchCriteria('roomName')">객실명</a></li>
            <li><a class="dropdown-item" href="#" @click="setSearchCriteria('roomLevelName')">객실등급</a></li>
          </ul>
        </div>
        <input type="text" class="form-control ms-2" placeholder="Search" style="width: 200px;" v-model="searchValue">
        <button class="btn btn-primary ms-2" @click="onSearchButtonClick">검색</button>
      </div>
      <div class="position-relative-container mt-3">
        <ExcelButton/>

        <div style="display: flex; justify-content:right">
          <!-- calendar icon -->
          <button class="btn btn-secondary" style="background-color: saddlebrown;" @click="toggleCalendarContainer"><i
              class="bi bi-calendar"></i></button>

          <StayCheckoutBtn :checkedRows="checkedRows" :stays="stays.content"/>
          <!--        StayFilter start -->


          <!-- StayFilter start -->
          <button id="filter-icon" class="btn btn-secondary" style="background-color: saddlebrown;"
                  @click="toggleFilterContainer"><i class="bi bi-funnel"></i></button>
        </div>

        <!-- filter container -->
        <div class="filter-container" v-show="isFilterContainerVisible">
          <div class="btn-group me-2">
            <select class="form-select" v-model="defaultParams.branchCodeFk">
              <option value="null">지점 코드</option>
              <option value="SE">SE</option>
              <option value="HQ">HQ</option>
            </select>
          </div>
          <button class="btn btn-primary" @click="onSearchButtonClick">적용</button>
        </div>

        <!-- calendar container -->
        <div class="calendar-container" v-show="isCalendarContainerVisible">
          <div class="btn-group me-2">
            <DatePicker :modelValue="selectedStayCheckoutDate" @update:modelValue="updateDate($event)"
                        format="yyyy-MM-dd"
                        style="width: 130px; text-align: center; padding: 6px 12px 6px 12px; border-radius: 0.4rem"
                        placeholder="체크아웃 일자"></DatePicker>
          </div>
          <!--          <div class="btn-group me-2">-->
          <!--            <DatePicker :modelValue="selectedStayCheckoutDate" @update:modelValue="selectedStayCheckoutDate = $event" format="yyyy-MM-dd"-->
          <!--                        style="width: 120px; text-align: center; padding: 6px 12px 6px 12px; border-radius: 0.4rem" placeholder="체크아웃 일자"></DatePicker>-->
          <!--          </div>-->
          <!--          <button class="btn btn-primary" @click="onSearchButtonClick">적용</button>-->
        </div>

      </div>
      <br>
      <div class="row">
        <div class="col-12">
          <table class="table table-striped">
            <thead>
            <tr>
              <th scope="col">체크아웃</th>
              <th scope="col" @click="sort('stayCodePk')">투숙 코드
                <i class="bi bi-caret-up-fill" :class="{ active: orderBy === 'stayCodePk' && sortBy === 1 }"></i>
                <i class="bi bi-caret-down-fill" :class="{ active: orderBy === 'stayCodePk' && sortBy === 0 }"></i>
              </th>
              <th scope="col" @click="sort('customerName')">고객 명
                <i class="bi bi-caret-up-fill" :class="{ active: orderBy === 'customerName' && sortBy === 1 }"></i>
                <i class="bi bi-caret-down-fill" :class="{ active: orderBy === 'customerName' && sortBy === 0 }"></i>
              </th>
              <th scope="col" @click="sort('roomCodeFk')">객실 코드
                <i class="bi bi-caret-up-fill" :class="{ active: orderBy === 'roomCodeFk' && sortBy === 1 }"></i>
                <i class="bi bi-caret-down-fill" :class="{ active: orderBy === 'roomCodeFk' && sortBy === 0 }"></i>
              </th>
              <th scope="col" @click="sort('roomNumber')">객실 호수
                <i class="bi bi-caret-up-fill" :class="{ active: orderBy === 'roomNumber' && sortBy === 1 }"></i>
                <i class="bi bi-caret-down-fill" :class="{ active: orderBy === 'roomNumber' && sortBy === 0 }"></i>
              </th>
              <th scope="col" @click="sort('roomName')">객실명
                <i class="bi bi-caret-up-fill" :class="{ active: orderBy === 'roomName' && sortBy === 1 }"></i>
                <i class="bi bi-caret-down-fill" :class="{ active: orderBy === 'roomName' && sortBy === 0 }"></i>
              </th>
              <th scope="col" @click="sort('roomLevelName')">객실 등급
                <i class="bi bi-caret-up-fill" :class="{ active: orderBy === 'roomLevelName' && sortBy === 1 }"></i>
                <i class="bi bi-caret-down-fill" :class="{ active: orderBy === 'roomLevelName' && sortBy === 0 }"></i>
              </th>
              <th scope="col" @click="sort('stayPeopleCount')">투숙 인원
                <i class="bi bi-caret-up-fill" :class="{ active: orderBy === 'stayPeopleCount' && sortBy === 1 }"></i>
                <i class="bi bi-caret-down-fill" :class="{ active: orderBy === 'stayPeopleCount' && sortBy === 0 }"></i>
              </th>
              <th scope="col" @click="sort('stayCheckinTime')">체크인 일자
                <i class="bi bi-caret-up-fill" :class="{ active: orderBy === 'stayCheckinTime' && sortBy === 1 }"></i>
                <i class="bi bi-caret-down-fill" :class="{ active: orderBy === 'stayCheckinTime' && sortBy === 0 }"></i>
              </th>
              <th scope="col" @click="sort('stayCheckoutTime')">체크아웃 예정일
                <i class="bi bi-caret-up-fill" :class="{ active: orderBy === 'reservationCheckoutDate' && sortBy === 1 }"></i>
                <i class="bi bi-caret-down-fill"
                   :class="{ active: orderBy === 'reservationCheckoutDate' && sortBy === 0 }"></i>
              </th>
              <th scope="col" @click="sort('stayCheckoutTime')">체크아웃 일자
                <i class="bi bi-caret-up-fill" :class="{ active: orderBy === 'stayCheckoutTime' && sortBy === 1 }"></i>
                <i class="bi bi-caret-down-fill"
                   :class="{ active: orderBy === 'stayCheckoutTime' && sortBy === 0 }"></i>
              </th>
              <th scope="col" @click="sort('stayPeriod')">숙박 일수
                <i class="bi bi-caret-up-fill" :class="{ active: orderBy === 'stayPeriod' && sortBy === 1 }"></i>
                <i class="bi bi-caret-down-fill" :class="{ active: orderBy === 'stayPeriod' && sortBy === 0 }"></i>
              </th>
              <th scope="col" @click="sort('branchCodeFk')">지점 코드
                <i class="bi bi-caret-up-fill" :class="{ active: orderBy === 'branchCodeFk' && sortBy === 1 }"></i>
                <i class="bi bi-caret-down-fill" :class="{ active: orderBy === 'branchCodeFk' && sortBy === 0 }"></i>
              </th>

            </tr>
            </thead>
            <tbody>
            <tr v-if="isFetchDailyStay" v-for="(stay, index) in stays" :key="stay.stayCodePk">
              <td><input type="checkbox" v-model="checkedRows[index]" :disabled="!!stay.stayCheckoutTime"></td>
              <td>{{ stay.stayCodePk }}</td>
              <td>{{ stay.customerName }}</td>
              <td>{{ stay.roomCodeFk }}</td>
              <td>{{ stay.roomNumber }}</td>
              <td>{{ stay.roomName }}</td>
              <td>{{ stay.roomLevelName }}</td>
              <td>{{ stay.stayPeopleCount }}</td>
              <td>{{ formatDate(stay.stayCheckinTime) }}</td>
              <td>{{ formatDate(stay.reservationCheckoutDate) }}</td>
              <td>{{ formatDate(stay.stayCheckoutTime) }}</td>
              <td>{{ stay.stayPeriod }}</td>
              <td>{{ stay.branchCodeFk }}</td>
            </tr>

            <tr v-else v-for="(stay, index) in stays.content" :key="stay.stayCodePk">
              <td><input type="checkbox" v-model="checkedRows[index]" :disabled="!!stay.stayCheckoutTime"></td>
              <td>{{ stay.stayCodePk }}</td>
              <td>{{ stay.customerName }}</td>
              <td>{{ stay.roomCodeFk }}</td>
              <td>{{ stay.roomNumber }}</td>
              <td>{{ stay.roomName }}</td>
              <td>{{ stay.roomLevelName }}</td>
              <td>{{ stay.stayPeopleCount }}</td>
              <td>{{ formatDate(stay.stayCheckinTime) }}</td>
              <td>{{ formatDate(stay.reservationCheckoutDate) }}</td>
              <td>{{ formatDate(stay.stayCheckoutTime) }}</td>
              <td>{{ stay.stayPeriod }}</td>
              <td>{{ stay.branchCodeFk }}</td>
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
import * as api from '@/api/apiService.js';
import ExcelButton from "@/component/common/ExcelButton.vue";
import DatePicker from "vue3-datepicker";
import StaySearch from "@/component/hotel-service/stay/StaySearch.vue";
import StayCheckoutBtn from "@/component/hotel-service/stay/StayCheckoutBtn.vue";

const isLoading = ref(true);
const stays = ref([]);

const currentPage = ref(1);
const totalPages = ref(0);
const pageGroup = ref(1);
const pageSize = 10; // 한 그룹당 페이지 수
const selectedPage = ref(1); // 클릭한 페이지 번호를 추적하는 ref
const searchValue = ref('');
const isFilterContainerVisible = ref(false);
const isCalendarContainerVisible = ref(false);
const isDropdownOpen = ref(false);
const selectedCriteria = ref('');
const sortBy = ref(0);  // 0: descending, 1: ascending
const orderBy = ref('stayCheckinTime');

const selectedStayCheckinDate = ref(null);
const selectedStayCheckoutDate = ref(null);

// fetch마다 다르게 리스트를 출력하기 위함
const isFetchDailyStay = ref(false);

const defaultParams = {
  stayCodePk: null,
  customerCodeFk: null,
  customerName: null,
  roomCodeFk: null,
  roomNumber: null,
  roomName: null,
  roomLevelName: null,
  roomCapacity: null,
  stayPeopleCount: null,
  stayCheckinTime: null,
  stayCheckoutTime: null,
  reservationCheckoutDate: null,
  stayPeriod: null,
  employeeCodeFk: null,
  PICEmployeeName: null,
  branchCodeFk: null,
  reservationCodeFk: null,
  orderBy: null,
  sortBy: null,
  pageNum: null
};

// 체크박스
const checkedRows = ref([]);

watch(stays, () => {
  checkedRows.value = stays.value.content ?
      stays.value.content.map(() => false) : [];
}, {immediate: true});

watch(stays, () => {
  checkedRows.value = stays.value.content ?
      stays.value.content.map(stay => !!stay.stayCheckoutTime) : [];
}, {immediate: true});

async function fetchData(params) {

  // 필터의 dropdown에서 '지점 코드'를 선택했을 때 requestParam에서 branchCodeFk 제거
  if (params.branchCodeFk === 'null') {
    delete params.branchCodeFk;
  }

  try {
    const response = await api.getStays(params);
    console.log(response);
    totalPages.value = response.data.totalPagesCount; // 총 페이지 수를 업데이트
    isFetchDailyStay.value = false; // Add this line
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// datePicker의 체크아웃 일자 선택 실행
async function fetchDailyStay(dateString) {
  try {
    const response = await api.getDailyStays(dateString);
    stays.value = response.data.content.flat(); // Add this line
    isFetchDailyStay.value = true; // Add this line
    return stays.value;
  } catch (error) {
    console.error(error);
  }
}

async function updateDate(date) {
  selectedStayCheckinDate.value = date;
  const response = await fetchDailyStay(formatDate(date));
  if (response) {
    stays.value = response; // Update the stays array with the response
    console.log(stays.value); // Add this line
  }
}

// watch(selectedStayCheckinDate, loadStays, { immediate: true });

async function loadStays(page = 1, orderByValue = 'stayCheckinTime', sortByValue = 0) {
  // console.log('selectedReservationCheckinDate: ', selectedReservationCheckinDate.value);
  stays.value = await fetchData({
    ...defaultParams,
    orderBy: orderByValue,
    sortBy: sortByValue,
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

// 정렬
function sort(column) {
  if (orderBy.value === column) {
    sortBy.value = sortBy.value === 0 ? 1 : 0;
  } else {
    orderBy.value = column;
    sortBy.value = 0;
  }
  loadStays(currentPage.value, orderBy.value, sortBy.value);
}

// 검색
function setSearchCriteria(criteria) {
  // 이전 검색 기준 값 초기화
  if (selectedCriteria.value) {
    defaultParams[selectedCriteria.value] = null;
  }

  selectedCriteria.value = criteria;
  searchValue.value = ''; // 검색값 초기화
  isDropdownOpen.value = false;  // 선택 후 드롭다운 닫기
}

// 검색 버튼의 클릭 이벤트 핸들러
async function onSearchButtonClick() {
  const params = {
    ...defaultParams,
    pageNum: currentPage.value - 1  // 페이지 번호 설정
  };

  // 선택한 검색 기준과 검색 값을 params에 추가
  if (selectedCriteria.value && searchValue.value) {
    params[selectedCriteria.value] = searchValue.value;
  }

  stays.value = await fetchData(params);
}

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

onMounted(async () => {
  await loadStays(currentPage.value, orderBy.value, sortBy.value);

  // Bootstrap 드롭다운 초기화
  new bootstrap.Dropdown(document.getElementById('dropdownMenuButton'));

  $('#filter-icon').on('click', function () {
    $('#filter').toggle();
  });
});

// 날짜 변환
// LocalDateTime -> yyyy-MM-dd로 변환
function formatDate(dateString) {
  if (dateString === null) {
    return null;
  }

  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// DatePicker 값 -> yyyy-MM-ddTHH:mm:ss로 변환
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