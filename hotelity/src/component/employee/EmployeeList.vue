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
      <div class="bg-secondary rounded-top p-4" style="background: #f7f7f7;">
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
              <li><a class="dropdown-item" href="#" @click="setSearchCriteria('employeeOfficePhoneNumber')">내선번호</a></li>
              <li><a class="dropdown-item" href="#" @click="setSearchCriteria('employeeEmail')">이메일</a></li>
            </ul>
          </div>
          <input type="text" class="form-control ms-2" placeholder="Search" style="width: 200px;" v-model="searchValue">
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
                <th scope="col" @click="sort('employeeCodePk')" :class="{ 'active-asc': orderBy === 'employeeCode' && sortBy === 0, 'active-desc': orderBy === 'employeeCode' && sortBy === 1 }" style="width: 80px;">직원 코드</th>
                <th scope="col" @click="sort('employeeName')" :class="{ 'active-asc': orderBy === 'employeeName' && sortBy === 0, 'active-desc': orderBy === 'employeeName' && sortBy === 1 }">이름</th>
                <th scope="col" @click="sort('branchCodeFk')" :class="{ 'active-asc': orderBy === 'branchCode' && sortBy === 0, 'active-desc': orderBy === 'branchCode' && sortBy === 1 }">지점</th>
                <th scope="col" @click="sort('rankCodeFk')" :class="{ 'active-asc': orderBy === 'rankCode' && sortBy === 0, 'active-desc': orderBy === 'rankCode' && sortBy === 1 }">직급</th>
                <th scope="col" @click="sort('departmentCodeFk')" :class="{ 'active-asc': orderBy === 'departmentCode' && sortBy === 0, 'active-desc': orderBy === 'departmentCode' && sortBy === 1 }">부서</th>
                <th scope="col" @click="sort('positionCodeFk')" :class="{ 'active-asc': orderBy === 'positionCode' && sortBy === 0, 'active-desc': orderBy === 'positionCode' && sortBy === 1 }">직책</th>
                <th scope="col" @click="sort('employeeOfficePhoneNumber')" :class="{ 'active-asc': orderBy === 'employeeOfficePhoneNumber' && sortBy === 0, 'active-desc': orderBy === 'employeeOfficePhoneNumber' && sortBy === 1 }">내선번호</th>
                <th scope="col" @click="sort('employeeEmail')" :class="{ 'active-asc': orderBy === 'employeeEmail' && sortBy === 0, 'active-desc': orderBy === 'employeeEmail' && sortBy === 1 }" style="width: 230px;">Email</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="employee in employees.content" :key="employee.employeeCodePk" @click="navigateToEmployee(employee.employeeCodePk)">
                <td>{{ employee.employeeCodePk }}</td>
                <td>{{ employee.employeeName }}</td>
                <td>{{ employee.nameOfBranch }}</td>
                <td>{{ employee.nameOfRank }}</td>
                <td>{{ employee.nameOfDepartment }}</td>
                <td>{{ employee.nameOfPosition }}</td>
                <td>{{ employee.employeeOfficePhoneNumber }}</td>
                <td>{{ employee.employeeEmail }}</td>
              </tr>
              </tbody>
            </table>
          </div>

          <!-- 페이징 컨트롤 -->
          <div class="pagination modal-2">
  <button @click="prevPageGroup" :disabled="pageGroup === 1"><i class="bi bi-caret-left-fill"></i></button>
  <button v-for="page in Math.min(pageSize, totalPages - (pageGroup - 1) * pageSize)" :key="page"
          @click="changePage((pageGroup - 1) * pageSize + page)"
          :class="{ 'selected': (pageGroup - 1) * pageSize + page === selectedPage }">
    {{ (pageGroup - 1) * pageSize + page }}
  </button>
  <button @click="nextPageGroup" :disabled="pageGroup * pageSize >= totalPages"><i class="bi bi-caret-right-fill"></i></button>
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
import { ref, watch, onMounted } from 'vue';
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
const orderBy = ref('employeeCodePk');  // default sorting by employeeCodePk

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

    // Get the current date and time
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Format the date and time
    const formattedDate = `${year}-${month}-${day}`;
    const formattedTime = `${hours}-${minutes}-${seconds}`;
    const fileName = `employees_${formattedDate}_${formattedTime}.xlsx`;

    // Create a link to download the file
    const url = window.URL.createObjectURL(new Blob([response]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', fileName);
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

<style scoped>
/*
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagination button {
  margin: 0 5px;
  padding: 5px 10px;
}
*/
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

.active-asc {
  color: green;
  font-weight: bold;
}

.active-desc {
  color: red;
  font-weight: bold;
}

table.table {
  table-layout: fixed;
  width: 100%;
}

table.table th, table.table td {
  border: 1px solid #dee2e6;
  word-wrap: break-word;
  text-align: center; /* Add this line to center text */
}
</style>