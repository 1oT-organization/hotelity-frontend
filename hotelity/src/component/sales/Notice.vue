<script setup>
import {ref, watch, onMounted} from 'vue';
import axios from 'axios';
import router from '@/router/index.js';
import Clock from '@/component/common/Clock.vue';

function navigateToCustomer(id) {
  router.push(`/customer/${id}`);
}

const isLoading = ref(true);
const notices = ref([]);
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
const orderBy = ref('noticeCodePk');  // default sorting by customerCodePk

const defaultParams = {
  noticeCodePk: null,
  noticeTitle: null,
  noticeContent: null,
  employeeCodeFk: null,
  employeeName: null,
  branchCodeFk: null,
  noticePostedDate: null,
  noticeLastUpdatedDate: null
};

watch(searchValue, (newValue) => {
  if (selectedCriteria.value) {
    defaultParams[selectedCriteria.value] = newValue;
  }
});

async function fetchData(params) {
  try {
    const response = await axios.get('http://localhost:8888/sales/notices/page', {params});
    console.log(response.data);
    totalPages.value = response.data.data.totalPagesCount;
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function downloadExcel() {
  try {
    const response = await axios.get('http://localhost:8888/sales/notices/page/excel/download', {
      params: defaultParams,
      responseType: 'blob'
    });

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'notice.xlsx');
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

async function loadNotice(page, orderByValue = 'noticeCodePk', sortByValue = 0) {
  try {
    const data = await fetchData({
      ...defaultParams,
      orderBy: orderByValue,
      sortBy: sortByValue,
      pageNum: page - 1
    });
    notices.value = data;
    isLoading.value = false;
  } catch (error) {
    console.error('Error loading notices:', error);
  }
}

function changePage(page) {
  selectedPage.value = page;
  currentPage.value = page;
  isLoading.value = true;
  loadNotice(page, orderBy.value, sortBy.value);
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
  loadNotice(currentPage.value, orderBy.value, sortBy.value);
}

onMounted(() => {
  loadNotice(currentPage.value, orderBy.value, sortBy.value);

  // Bootstrap 드롭다운 초기화
  new bootstrap.Dropdown(document.getElementById('dropdownMenuButton'));
});
</script>

<template>
  <body>
  <div class="container-fluid position-relative d-flex p-0">
    <!-- Spinner Start -->
    <div v-if="isLoading" id="spinner"
         class="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
      <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <!-- Spinner End -->

    <!-- Sidebar Start -->
    <div class="sidebar pe-4 pb-3">
      <nav class="navbar bg-secondary navbar-dark">
        <a href="index.html" class="navbar-brand mx-4 mb-3">
          <h3 class="text-primary" style="display: flex; justify-content: center;"><img
              src="@/assets/img/hotelity_logo.png" width="60%"></h3>
        </a>
        <Clock/>

        <div class="navbar-nav w-100">
          <router-link to="/customerList" class="nav-item nav-link active"><i class="emoji bi bi-people-fill"></i>고객 리스트
          </router-link>
          <router-link to="/" class="nav-item nav-link"><i class="emoji bi bi-person-fill-add"></i>고객 등록</router-link>
        </div>
      </nav>
    </div>
    <!-- Sidebar End -->

    <!-- Content Start -->
    <div class="content">
      <!-- Navbar Start -->
      <nav class="navbar navbar-expand bg-secondary navbar-dark sticky-top px-4 py-0">
        <a href="index.html" class="navbar-brand d-flex d-lg-none me-4">
          <h2 class="text-primary mb-0"><i class="fa fa-user-edit"></i></h2>
        </a>
        <a href="#" class="sidebar-toggler flex-shrink-0">
          <i class="fa fa-bars"></i>
        </a>

        <div class="navbar-nav align-items-center ms-auto" style="display: flex; gap: 12px;">
          <a href="" class="nav-item nav-link">고객</a>
          <a href="" class="nav-item nav-link">직원</a>
          <a href="" class="nav-item nav-link">호텔 서비스</a>
          <a href="" class="nav-item nav-link">호텔 관리</a>
          <a href="" class="nav-item nav-link">마케팅</a>
          <a href="" class="nav-item nav-link">영업관리</a>
        </div>
        <div class="navbar-nav align-items-center ms-auto">
          <div class="nav-item dropdown">
            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
              <img class="rounded-circle me-lg-2" src="" alt="" style="width: 40px; height: 40px;">
              <span class="d-none d-lg-inline-flex">John Doe</span>
              <i class="bi bi-caret-down-fill dropdown-icon" style="background: none"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
              <a href="#" class="dropdown-item">My Profile</a>
              <a href="#" class="dropdown-item">Settings</a>
              <a href="#" class="dropdown-item">Log Out</a>
            </div>
          </div>
        </div>
      </nav>
      <!-- Navbar End -->

      <!-- Table Start -->
      <div class="container-fluid pt-4 px-4">
        <div class="bg-secondary rounded-top p-4">
          <h3 class="mb-4">notice 리스트</h3>
          <div class="search-container d-flex align-items-center">
            <div class="btn-group">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                      @click="toggleDropdownMenu"
                      :class="{ 'btn-primary': isDropdownOpen }"
                      style="background-color: saddlebrown;">
                <i class="bi bi-search"></i>
              </button>
              <ul class="dropdown-menu" :class="{ show: isDropdownOpen }" aria-labelledby="dropdownMenuButton">
                <li><a class="dropdown-item" href="#" @click="setSearchCriteria('noticeCodePk')">공지 코드</a></li>
                <li><a class="dropdown-item" href="#" @click="setSearchCriteria('noticeTitle')">공지 제목</a></li>
              </ul>
            </div>
            <input type="text" class="form-control ms-2" placeholder="Search" style="width: 200px;"
                   v-model="searchValue">
            <button class="btn btn-primary ms-2" @click="loadNotice(1, orderBy.value, sortBy.value)">검색</button>
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
              <button class="btn btn-primary" @click="loadNotice(1, orderBy.value, sortBy.value)">적용</button>
            </div>
          </div>
          <br>
          <div class="row">
            <div class="col-12">
              <table class="table table-striped">
                <thead>
                <tr>
                  <th scope="col" @click="sort('noticeCodePk')">공지 코드
                    <i class="bi bi-caret-up-fill"
                       :class="{ active: orderBy === 'noticeCodePk' && sortBy === 0 }"></i>
                    <i class="bi bi-caret-down-fill"
                       :class="{ active: orderBy === 'noticeCodePk' && sortBy === 1 }"></i>
                  </th>
                  <th scope="col">공지 제목</th>
                  <th scope="col">작성자 직원 코드</th>
                  <th scope="col">작성자 직원명</th>
                  <th scope="col" @click="sort('branchCodeFk')">지점 코드 코드
                    <i class="bi bi-caret-up-fill"
                       :class="{ active: orderBy === 'branchCodeFk' && sortBy === 0 }"></i>
                    <i class="bi bi-caret-down-fill"
                       :class="{ active: orderBy === 'branchCodeFk' && sortBy === 1 }"></i>
                  </th>
                  <th scope="col">작성 일자</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="notice in notices.content" :key="notice.noticeCodePk"
                    @click=navigateToCustomer(notice.noticeCodePk)>
                  <td>{{ notice.noticeCodePk }}</td>
                  <td>{{ notice.noticeTitle }}</td>
                  <td>{{ notice.employeeCodeFk }}</td>
                  <td>{{ notice.picemployeeName }}</td>
                  <td>{{ notice.branchCodeFk }}</td>
                  <td>{{
                      new Date(notice.noticePostedDate).toLocaleDateString('ko-KR', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit'
                      }) + ' ' + new Date(notice.noticePostedDate).toLocaleTimeString('ko-KR', {
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                        hour12: false
                      })
                    }}
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
  </div>
  </body>
</template>

<style>
@import "@/css/style.css";
@import "@/css/bootstrap.min.css";

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
