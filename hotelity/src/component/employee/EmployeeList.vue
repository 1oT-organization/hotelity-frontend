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

    <!-- Table Start -->
    <div class="container-fluid pt-4 px-4">
      <div class="bg-secondary rounded-top p-4">
        <h3 class="mb-4">직원 리스트</h3>
        <div class="search-container d-flex align-items-center">
          <div class="btn-group">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                    @click="toggleDropdownMenu"
                    :class="{ 'btn-primary': isDropdownOpen }"
                    style="background-color: saddlebrown;">
              <i class="bi bi-search"></i>
            </button>
            <ul class="dropdown-menu" :class="{ show: isDropdownOpen }" aria-labelledby="dropdownMenuButton">
              <li><a class="dropdown-item" href="#" @click="setSearchCriteria('employeeCode')">직원코드</a></li>
              <li><a class="dropdown-item" href="#" @click="setSearchCriteria('employeeName')">이름</a></li>
              <li><a class="dropdown-item" href="#" @click="setSearchCriteria('employeePhoneNumber')">전화번호</a></li>
              <li><a class="dropdown-item" href="#" @click="setSearchCriteria('employeeOfficePhoneNumber')">내선번호</a>
              </li>
              <li><a class="dropdown-item" href="#" @click="setSearchCriteria('employeeEmail')">이메일</a></li>
            </ul>
          </div>
          <input type="text" class="form-control ms-2" placeholder="Search" style="width: 200px;"
                 v-model="searchValue">
          <button class="btn btn-primary ms-2" @click="loadCustomers(1, orderBy.value, sortBy.value)">검색</button>
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
              <select class="form-select" v-model="defaultParams.branchCode">
                <option :value="null">지점 선택</option>
                <option value="HQ">HQ</option>
                <option value="SE">SE</option>
              </select>
            </div>
            <div class="btn-group me-2">
              <select class="form-select" v-model="defaultParams.rankCode">
                <option :value="null">직급 선택</option>
                <option value="1">부장</option>
                <option value="2">차장</option>
                <option value="3">과장</option>
                <option value="4">대리</option>
                <option value="5">사원</option>
                <option value="6">인턴</option>
              </select>
            </div>
            <div class="btn-group me-2">
              <select class="form-select" v-model="defaultParams.positionCode">
                <option :value="null">직책 선택</option>
                <option value="1">CEO</option>
                <option value="2">본부장</option>
                <option value="3">실장</option>
                <option value="5">파트장</option>
              </select>
            </div>
            <div class="btn-group me-2">
              <select class="form-select" v-model="defaultParams.departmentCode">
                <option :value="null">부서 선택</option>
                <option value="1">운영팀</option>
                <option value="2">기술팀</option>
                <option value="3">마케팅팀</option>
                <option value="4">시설팀</option>
                <option value="5">영업팀</option>
                <option value="6">호텔관리팀</option>
              </select>
            </div>
            <button class="btn btn-primary" @click="loadCustomers(1, orderBy.value, sortBy.value)">적용</button>
          </div>
        </div>
        <br>
        <div class="row">
          <div class="col-12">
            <table class="table table-striped">
              <thead>
              <tr>
                <th scope="col" @click="sort('employeeCode')">직원 코드
                  <i class="bi bi-caret-up-fill"
                     :class="{ active: orderBy === 'employeeCode' && sortBy === 0 }"></i>
                  <i class="bi bi-caret-down-fill"
                     :class="{ active: orderBy === 'employeeCode' && sortBy === 1 }"></i>
                </th>
                <th scope="col" @click="sort('employeeName')">이름
                  <i class="bi bi-caret-up-fill" :class="{ active: orderBy === 'employeeName' && sortBy === 0 }"></i>
                  <i class="bi bi-caret-down-fill"
                     :class="{ active: orderBy === 'employeeName' && sortBy === 1 }"></i>
                </th>
                <th scope="col" @click="sort('branchCode')">지점
                  <i class="bi bi-caret-up-fill"
                     :class="{ active: orderBy === 'branchCode' && sortBy === 0 }"></i>
                  <i class="bi bi-caret-down-fill"
                     :class="{ active: orderBy === 'branchCode' && sortBy === 1 }"></i>
                </th>
                <th scope="col" @click="sort('rankCode')">직급
                  <i class="bi bi-caret-up-fill"
                     :class="{ active: orderBy === 'rankCode' && sortBy === 0 }"></i>
                  <i class="bi bi-caret-down-fill"
                     :class="{ active: orderBy === 'rankCode' && sortBy === 1 }"></i>
                </th>
                <th scope="col" @click="sort('departmentCode')">부서
                  <i class="bi bi-caret-up-fill"
                     :class="{ active: orderBy === 'departmentCode' && sortBy === 0 }"></i>
                  <i class="bi bi-caret-down-fill"
                     :class="{ active: orderBy === 'departmentCode' && sortBy === 1 }"></i>
                </th>
                <th scope="col" @click="sort('positionCode')">직책
                  <i class="bi bi-caret-up-fill"
                     :class="{ active: orderBy === 'positionCode' && sortBy === 0 }"></i>
                  <i class="bi bi-caret-down-fill"
                     :class="{ active: orderBy === 'positionCode' && sortBy === 1 }"></i>
                </th>
                <th scope="col" @click="sort('employeeOfficePhoneNumber')">내선번호
                  <i class="bi bi-caret-up-fill"
                     :class="{ active: orderBy === 'employeeOfficePhoneNumber' && sortBy === 0 }"></i>
                  <i class="bi bi-caret-down-fill"
                     :class="{ active: orderBy === 'employeeOfficePhoneNumber' && sortBy === 1 }"></i>
                </th>
                <th scope="col" @click="sort('employeePhoneNumber')">전화번호
                  <i class="bi bi-caret-up-fill"
                     :class="{ active: orderBy === 'employeePhoneNumber' && sortBy === 0 }"></i>
                  <i class="bi bi-caret-down-fill"
                     :class="{ active: orderBy === 'employeePhoneNumber' && sortBy === 1 }"></i>
                </th>
                <th scope="col" @click="sort('employeeEmail')">Email
                  <i class="bi bi-caret-up-fill" :class="{ active: orderBy === 'employeeEmail' && sortBy === 0 }"></i>
                  <i class="bi bi-caret-down-fill"
                     :class="{ active: orderBy === 'employeeEmail' && sortBy === 1 }"></i>
                </th>
                <th scope="col" @click="sort('employeeAddress')">주소
                  <i class="bi bi-caret-up-fill" :class="{ active: orderBy === 'employeeAddress' && sortBy === 0 }"></i>
                  <i class="bi bi-caret-down-fill"
                     :class="{ active: orderBy === 'employeeAddress' && sortBy === 1 }"></i>
                </th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="employee in employees.content" :key="employees.employeeCodePk"
                  @click=navigateToEmployee(employee.employeeCodePk)>
                <td>{{ employee.employeeCodePk }}</td>
                <td>{{ employee.employeeName }}</td>
                <td>{{ employee.nameOfBranch }}</td>
                <td>{{ employee.nameOfRank }}</td>
                <td>{{ employee.nameOfDepartment }}</td>
                <td>{{ employee.nameOfPosition }}</td>
                <td>{{ employee.employeeOfficePhoneNumber }}</td>
                <td>{{ employee.employeePhoneNumber }}</td>
                <td>{{ employee.employeeEmail }}</td>
                <td>{{ employee.employeeAddress }}</td>
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

<script setup>
import {ref, watch, onMounted} from 'vue';
import router from '@/router/router.js';
import * as api from '@/api/apiService.js';

function navigateToEmployee(id) {
  router.push(`/employeeInfo/${id}`);
}

const isLoading = ref(true);
const employees = ref([]);
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
const orderBy = ref('employeeCodePk');  // default sorting by customerCodePk

const defaultParams = {
  employeeCode: null,
  employeeName: null,
  employeeAddress: null,
  employeePhoneNumber: null,
  employeeOfficePhoneNumber: null,
  employeeEmail: null,
  employeeResignStatus: null,
  permissionCode: null,
  positionCode: null,
  rankCode: null,
  departmentCode: null,
  branchCode: null,
};

watch(searchValue, (newValue) => {
  if (selectedCriteria.value) {
    defaultParams[selectedCriteria.value] = newValue;
  }
});

async function fetchData(params) {
  try {
    const response = await api.getEmployees(params);
    totalPages.value = response.data.totalPagesCount;
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function downloadExcel() {
  try {
    const response = await api.downloadEmployeeExcel(defaultParams);

    const url = window.URL.createObjectURL(new Blob([response]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'employees.xlsx');
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

async function loadCustomers(page, orderByValue = 'employeeCodePk', sortByValue = 0) {
  try {
    const data = await fetchData({
      ...defaultParams,
      orderBy: orderByValue,
      sortBy: sortByValue,
      pageNum: page - 1
    });
    employees.value = data;
    isLoading.value = false;
  } catch (error) {
    console.error('Error loading employees:', error);
  }
}

function changePage(page) {
  selectedPage.value = page;
  currentPage.value = page;
  isLoading.value = true;
  loadCustomers(page, orderBy.value, sortBy.value);
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
  loadCustomers(currentPage.value, orderBy.value, sortBy.value);
}

onMounted(() => {
  loadCustomers(currentPage.value, orderBy.value, sortBy.value);

  // Bootstrap 드롭다운 초기화
  new bootstrap.Dropdown(document.getElementById('dropdownMenuButton'));
});
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
