<script setup>
import {ref, watch, onMounted} from 'vue';
import router from '@/router/router.js';
import * as api from '@/api/apiService.js';
import {downloadFacilityExcel} from "@/api/apiService.js";

const isLoading = ref(true);
const ancillaries = ref([]);
const currentPage = ref(1);
const totalPages = ref(0);
const pageGroup = ref(1);
const pageSize = 10;
const selectedPage = ref(1);
const searchValue = ref('');
const isFilterContainerVisible = ref(false);
const isDropdownOpen = ref(false);
const selectedCriteria = ref('');
const sortBy = ref(0);  // 0: ascending, 1: descending
const orderBy = ref('ancillaryCodePk');  // default sorting by customerCodePk

const defaultParams = {
  ancillaryCodePk: null,
  ancillaryName: null,
  branchCodeFk: null,
  ancillaryLocation: null,
  ancillaryOpenTime: null,
  ancillaryCloseTime: null,
  ancillaryPhoneNumber: null,
  ancillaryCategoryCodeFk: null,
  branchName: null,
  ancillaryCategoryName: null

};

watch(searchValue, (newValue) => {
  if (selectedCriteria.value) {
    defaultParams[selectedCriteria.value] = newValue;
  }
});

async function fetchData(params) {
  try {
    // const response = await axios.get('http://localhost:8888/hotel-management/facilities', {params});
    const response = await api.getFacilities(params);
    console.log(response);
    totalPages.value = response.data.totalPagesCount;
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function downloadExcel() {
  try {
    // const response = await axios.get('http://localhost:8888/hotel-management/facilities/excel/download', {
    //   params: defaultParams,
    //   responseType: 'blob'
    // });
    const response = await api.downloadFacilityExcel(defaultParams);

    const url = window.URL.createObjectURL(new Blob([response]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'ancillary.xlsx');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error(error);
  }
}

async function loadList() {
  try {
    await downloadExcel();
  } catch (error) {
    console.error(error);
  }
}

async function loadancillary(page, orderByValue = 'ancillaryCodePk', sortByValue = 0) {
  try {
    const data = await fetchData({
      ...defaultParams,
      orderBy: orderByValue,
      sortBy: sortByValue,
      pageNum: page - 1
    });
    ancillaries.value = data;
    isLoading.value = false;
  } catch (error) {
    console.error('Error loading ancillaries:', error);
  }
}

function changePage(page) {
  selectedPage.value = page;
  currentPage.value = page;
  isLoading.value = true;
  loadancillary(page, orderBy.value, sortBy.value);
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

function setSearchCriteria(criteria) {
  // 이전 검색 기준 값 초기화
  if (selectedCriteria.value) {
    defaultParams[selectedCriteria.value] = null;
  }

  selectedCriteria.value = criteria;
  searchValue.value = ''; // 검색값 초기화
  isDropdownOpen.value = false;  // 선택 후 드롭다운 닫기
}

function toggleFilterContainer() {
  isFilterContainerVisible.value = !isFilterContainerVisible.value;
}

function toggleDropdownMenu() {
  isDropdownOpen.value = !isDropdownOpen.value;
}

function sort(column) {
  if (orderBy.value === column) {
    sortBy.value = sortBy.value === 0 ? 1 : 0;
  } else {
    orderBy.value = column;
    sortBy.value = 0;
  }
  loadancillary(currentPage.value, orderBy.value, sortBy.value);
}

onMounted(() => {
  loadancillary(currentPage.value, orderBy.value, sortBy.value);

  // Bootstrap 드롭다운 초기화
  new bootstrap.Dropdown(document.getElementById('dropdownMenuButton'));
});
</script>

<template>
  <div class="container-fluid position-relative d-flex p-0">
    <!-- Spinner Start -->
    <div v-if="isLoading" id="spinner"
         class="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
      <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <!-- Spinner End -->

    <!-- Content Start -->
    <!-- Table Start -->
    <div class="container-fluid pt-4 px-4">
      <div class="bg-secondary rounded-top p-4" style="background: #f7f7f7;">
        <h3 class="mb-4">부대시설 리스트</h3>
        <div class="search-container d-flex align-items-center">
          <div class="btn-group">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                    @click="toggleDropdownMenu"
                    :class="{ 'btn-primary': isDropdownOpen }"
                    style="background-color: saddlebrown;">
              <i class="bi bi-search"></i>
            </button>
            <ul class="dropdown-menu" :class="{ show: isDropdownOpen }" aria-labelledby="dropdownMenuButton">
              <li><a class="dropdown-item" href="#" @click="setSearchCriteria('ancillaryCodePk')">편의시설 코드</a></li>
              <li><a class="dropdown-item" href="#" @click="setSearchCriteria('ancillaryName')">시설명</a></li>
            </ul>
          </div>
          <input type="text" class="form-control ms-2" placeholder="Search" style="width: 200px;"
                 v-model="searchValue">
          <button class="btn btn-primary ms-2" @click="loadancillary(1, orderBy.value, sortBy.value)">검색</button>
        </div>
        <div class="position-relative-container mt-3">
          <div class="excel button" style="display: flex;justify-content:left">
            <button id="download-icon" class="btn btn-success me-2" @click="loadList">Excel <i
                class="bi bi-download"></i></button>
          </div>
          <button id="filter-icon" class="btn btn-secondary" style="background-color: saddlebrown;"
                  @click="toggleFilterContainer">
            <i class="bi bi-funnel"></i>
          </button>
          <div class="filter-container" v-show="isFilterContainerVisible">
            <div class="btn-group me-2">
              <select class="form-select" v-model="defaultParams.branchCodeFk">
                <option :value="null">지점</option>
                <option value="HQ">HQ</option>
                <option value="SE">SE</option>
              </select>
            </div>
            <div class="btn-group me-2">
              <select class="form-select" v-model="defaultParams.ancillaryCategoryName">
                <option v-bind:value="null">타입</option>
                <option value="편의점">편의점</option>
                <option value="휘트니스">휘트니스</option>
                <option value="스파">스파</option>
                <option value="워터파크">워터파크</option>
                <option value="베이커리">베이커리</option>
                <option value="호텔식당">호텔식당</option>
                <option value="호텔바">호텔바</option>
                <option value="일반식당">일반식당</option>
                <option value="주차장">주차장</option>
              </select>
            </div>
            <button class="btn btn-primary" @click="loadancillary(1, orderBy.value, sortBy.value)">적용</button>
          </div>
        </div>
        <br>
        <div class="row">
          <div class="col-12">
            <table class="table table-striped">
              <thead>
              <tr>
                <th scope="col" @click="sort('ancillaryCodePk')">편의시설 코드
                  <i class="bi bi-caret-up-fill"
                     :class="{ active: orderBy === 'ancillaryCodePk' && sortBy === 0 }"></i>
                  <i class="bi bi-caret-down-fill"
                     :class="{ active: orderBy === 'ancillaryCodePk' && sortBy === 1 }"></i>
                </th>
                <th scope="col" @click="sort('ancillaryCategoryName')">타입
                  <i class="bi bi-caret-up-fill"
                     :class="{ active: orderBy === 'ancillaryCategoryName' && sortBy === 0 }"></i>
                  <i class="bi bi-caret-down-fill"
                     :class="{ active: orderBy === 'ancillaryCategoryName' && sortBy === 1 }"></i>
                </th>
                <th scope="col" @click="sort('branchName')">지점
                  <i class="bi bi-caret-up-fill"
                     :class="{ active: orderBy === 'branchName' && sortBy === 0 }"></i>
                  <i class="bi bi-caret-down-fill"
                     :class="{ active: orderBy === 'branchName' && sortBy === 1 }"></i>
                </th>
                <th scope="col" @click="sort('ancillaryName')">시설명
                  <i class="bi bi-caret-up-fill"
                     :class="{ active: orderBy === 'ancillaryName' && sortBy === 0 }"></i>
                  <i class="bi bi-caret-down-fill"
                     :class="{ active: orderBy === 'ancillaryName' && sortBy === 1 }"></i>
                </th>
                <th scope="col">위치</th>
                <th scope="col">전화번호</th>
                <th scope="col">운영 시작 시간</th>
                <th scope="col">운영 종료 시간</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="ancillary in ancillaries.content" :key="ancillary.ancillaryCodePk">
                <td>{{ ancillary.ancillaryCodePk }}</td>
                <td>{{ ancillary.ancillaryCategoryName }}</td>
                <td>{{ ancillary.branchName }}</td>
                <td>{{ ancillary.ancillaryName }}</td>
                <td>{{ ancillary.ancillaryLocation }}</td>
                <td>{{ ancillary.ancillaryPhoneNumber }}</td>
                <td>{{ ancillary.ancillaryOpenTime }}</td>
                <td>{{ ancillary.ancillaryCloseTime }}</td>
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
    <!-- Table End -->
  </div>
  <!-- Content End -->

  <!-- Back to Top -->
  <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
</template>

<style scoped>
.pagination {
  list-style: none;
  display: flex;
  padding: 0;
  margin-top: 10px;
  text-align: center;
  justify-content: center;
}
.pagination button {
  display: inline;
  text-align: center;
  float: left;
  font-size: 14px;
  text-decoration: none;
  padding: 5px 12px;
  color: #999;
  margin-left: -6px;
  border: 1px solid #ddd;
  line-height: 1.5;
  background: #fff;
}
.pagination button.selected {
  cursor: default;
  border-color: #909090;
  background: #b4b4b4;
  color: #fff;
}
.pagination button:active {
  outline: none;
}

.modal-2 button:first-child {
  -moz-border-radius: 50px 0 0 50px;
  -webkit-border-radius: 50px;
  border-radius: 50px 0 0 50px;
}
.modal-2 button:last-child {
  -moz-border-radius: 0 50px 50px 0;
  -webkit-border-radius: 0;
  border-radius: 0 50px 50px 0;
}
.modal-2 button:hover {
  color: #000000;
  background-color: #eee;
}

.dropdown-icon {
  transition: transform 0.5s;
}

tr {
  cursor: pointer;
}

.filter-container {
  position: absolute;
  top: 50px;
  right: 10px;
  width: 500px;
  padding: 10px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 10px;
}

.filter-container::before {
  content: "";
  position: absolute;
  top: -10px;
  right: 20px;
  border-width: 0 10px 10px 10px;
  border-style: solid;
  border-color: transparent transparent white transparent;
}

.position-relative-container {
  position: relative;
  display: flex;
  justify-content: space-between;
}

.emoji {
  margin-right: 10px;
}

.selected {
  background-color: rgba(255, 170, 0, 0.38);
  color: black;
}

.dropdown-menu.show {
  display: block;
}

.bi-caret-up-fill, .bi-caret-down-fill {
  visibility: visible;
}
</style>
