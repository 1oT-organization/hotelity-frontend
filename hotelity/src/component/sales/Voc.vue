<script setup>
import {ref, watch, onMounted} from 'vue';
import router from '@/router/router.js';
import * as api from '@/api/apiService.js';
import {downloadVocExcel} from "@/api/apiService.js";

function navigateToVocSelect(id) {
  router.push(`/vocSelect/${id}`);
}

const isLoading = ref(true);
const vocs = ref([]);
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
const orderBy = ref('vocCodePk');  // default sorting by customerCodePk

const defaultParams = {
  vocCodePk: null,
  vocTitle: null,
  vocCategory: null,
  customerCodeFk: null,
  customerName: null,
  vocCreatedDate: null,
  vocLastUpdatedDate: null,
  branchCodeFk: null,
  employeeCodeFk: null,
  employeeName: null,
  vocProcessStatus: null,
};

watch(searchValue, (newValue) => {
  if (selectedCriteria.value) {
    defaultParams[selectedCriteria.value] = newValue;
  }
});

async function fetchData(params) {
  try {
    // const response = await axios.get('http://localhost:8888/sales/vocs/page', {params});
    const response = await api.getVocs(params);
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
    // const response = await axios.get('http://localhost:8888/sales/vocs/page/excel/download', {
    //   params: defaultParams,
    //   responseType: 'blob'
    // });
    const response = await api.downloadVocExcel(defaultParams);

    const url = window.URL.createObjectURL(new Blob([response]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'voc.xlsx');
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

async function loadCoupon(page, orderByValue = 'vocCodePk', sortByValue = 0) {
  try {
    const data = await fetchData({
      ...defaultParams,
      orderBy: orderByValue,
      sortBy: sortByValue,
      pageNum: page - 1
    });
    vocs.value = data;
    isLoading.value = false;
  } catch (error) {
    console.error('Error loading vocs:', error);
  }
}

function changePage(page) {
  selectedPage.value = page;
  currentPage.value = page;
  isLoading.value = true;
  loadCoupon(page, orderBy.value, sortBy.value);
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
  loadCoupon(currentPage.value, orderBy.value, sortBy.value);
}

onMounted(() => {
  loadCoupon(currentPage.value, orderBy.value, sortBy.value);

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
      <div class="bg-secondary rounded-top p-4"  style="background: #f7f7f7;">
        <h3 class="mb-4">VOC 리스트</h3>
        <div class="search-container d-flex align-items-center">
          <div class="btn-group">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                    @click="toggleDropdownMenu"
                    :class="{ 'btn-primary': isDropdownOpen }"
                    style="background-color: saddlebrown;">
              <i class="bi bi-search"></i>
            </button>
            <ul class="dropdown-menu" :class="{ show: isDropdownOpen }" aria-labelledby="dropdownMenuButton">
              <li><a class="dropdown-item" href="#" @click="setSearchCriteria('vocCodePk')">VOC 코드</a></li>
              <li><a class="dropdown-item" href="#" @click="setSearchCriteria('vocTitle')">VOC 제목</a></li>
            </ul>
          </div>
          <input type="text" class="form-control ms-2" placeholder="Search" style="width: 200px;"
                 v-model="searchValue">
          <button class="btn btn-primary ms-2" @click="loadCoupon(1, orderBy.value, sortBy.value)">검색</button>
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
              <select class="form-select" v-model="defaultParams.vocCategory">
                <option v-bind:value="null">카테고리</option>
                <option value="객실 문의">객실 문의</option>
                <option value="시설 문의">시설 문의</option>
                <option value="비즈니스 문의">비즈니스 문의</option>
                <option value="기타 문의">기타 문의</option>
              </select>
            </div>
            <div class="btn-group me-2">
              <select class="form-select" v-model="defaultParams.vocProcessStatus">
                <option v-bind:value="null">처리상태</option>
                <option value="0">미처리</option>
                <option value="1">처리</option>
              </select>
            </div>
            <button class="btn btn-primary" @click="loadCoupon(1, orderBy.value, sortBy.value)">적용</button>
          </div>
        </div>
        <br>
        <div class="row">
          <div class="col-12">
            <table class="table table-striped">
              <thead>
              <tr>
                <th scope="col" @click="sort('vocCodePk')">VOC 코드
                  <i class="bi bi-caret-up-fill"
                     :class="{ active: orderBy === 'vocCodePk' && sortBy === 0 }"></i>
                  <i class="bi bi-caret-down-fill"
                     :class="{ active: orderBy === 'vocCodePk' && sortBy === 1 }"></i>
                </th>
                <th scope="col">VOC 일자</th>
                <th scope="col">지점 이름</th>
                <th scope="col">담당 직원</th>
                <th scope="col">고객 코드</th>
                <th scope="col">VOC 카테고리</th>
                <th scope="col">VOC 제목</th>
                <th scope="col">VOC 처리상태</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="voc in vocs.content" :key="voc.vocCodePk"
                  @click=navigateToVocSelect(voc.vocCodePk)>
                <td>{{ voc.vocCodePk }}</td>
                <td>{{
                    new Date(voc.vocCreatedDate).toLocaleDateString('ko-KR', {
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit'
                    }) + ' ' + new Date(voc.vocCreatedDate).toLocaleTimeString('ko-KR', {
                      hour: '2-digit',
                      minute: '2-digit',
                      second: '2-digit',
                      hour12: false
                    })
                  }}
                </td>
                <td>{{ voc.branchCodeFk }}</td>
                <td>{{ voc.employeeName }}</td>
                <td>{{ voc.customerCodeFk }}</td>
                <td>{{ voc.vocCategory }}</td>
                <td>{{ voc.vocTitle }}</td>
                <td>
                  <span v-if="voc.vocProcessStatus === 0">미처리</span>
                  <span v-else-if="voc.vocProcessStatus === 1">처리</span>
                </td>

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
