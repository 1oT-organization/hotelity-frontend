<script setup>

import {useRouter} from 'vue-router';

import {ref, onMounted} from 'vue';
import axios from "axios";


const isLoading = ref(true);
const customers = ref([]);
const currentPage = ref(1);
const totalPages = ref(0);
const pageGroup = ref(1);
const pageSize = 10; // 한 그룹당 페이지 수
const selectedPage = ref(1); // 클릭한 페이지 번호를 추적하는 ref
const searchValue = ref(null);
const isFilterContainerVisible = ref(false);

const defaultParams = {
  customerCodePk: null,
  customerName: null,
  customerEmail: null,
  customerPhoneNumber: null,
  customerEnglishName: null,
  customerAddress: null,
  customerInfoAgreement: null,
  customerStatus: null,
  customerRegisteredDate: null,
  nationCodeFk: null,
  customerGender: null,
  nationName: null,
  customerType: null,
  membershipLevelName: null
};

async function fetchData(params) {
  try {
    const response = await axios.get('http://localhost:8888/customers/page', { params });
    console.log(response.data);
    totalPages.value = response.data.data.totalPagesCount; // 총 페이지 수를 업데이트
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
}

async function downloadExcel(){
  try{
    const response = await axios.get('http://localhost:8888/customers/excel/download', {
      params: defaultParams,
      responseType: 'blob' // 응답을 blob 형식으로 받음
    });

    // Blob 데이터를 다운로드 가능한 URL로 변환
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'customers.xlsx'); // 파일 이름 설정
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch(error){
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

async function loadCustomers(page) {
  console.log(defaultParams)
  customers.value = await fetchData({
    ...defaultParams,
    orderBy: null,
    sortBy: null,
    pageNum: page - 1 // 백엔드 페이지 번호가 0부터 시작한다면 -1 필요
  });
  isLoading.value = false;
}

function changePage(page) {
  selectedPage.value = page; // 클릭한 페이지 번호를 업데이트
  currentPage.value = page;
  isLoading.value = true;
  loadCustomers(page);
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
  defaultParams[criteria] = searchValue.value;
}

function toggleFilterContainer() {
  isFilterContainerVisible.value = !isFilterContainerVisible.value;
}

onMounted(() => {
  loadCustomers(currentPage.value);
});

onMounted(() => {
  loadCustomers(currentPage.value);
});


onMounted(() => {
  // 페이지가 로드될 때 filter-container를 숨김
  $('.filter-container').hide();

  $('#filter-icon').on('click', function () {
    $('.filter-container').toggle();
  });
});
onMounted(() => {
  fetchData().then(() => {
    isLoading.value = false;
  });

  function fetchData() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }

  // Clock
  const h1 = document.getElementById("time");

  function getTime() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, '0');
    const minute = String(date.getMinutes()).padStart(2, '0');
    const second = String(date.getSeconds()).padStart(2, '0');
    const time = `${hour}:${minute}:${second}`;
    h1.textContent = time;
  }

// 최초에 한 번 시간 설정
  getTime();

// 1초마다 getTime 함수를 호출하도록 타이머 설정
  setInterval(getTime, 1000);

});

const router = useRouter();

$(document).ready(function () {
  $('#filter-icon').on('click', function () {
    $('.filter-container').toggle();
  });
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

        <div class="container">
          <div class="clock">
            <h1 id="time" style="display: flex; justify-content: center; font-family: fantasy; color:#798a69;"></h1>
          </div>
        </div>

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

          <!-- Existing dropdowns and items -->

          <!-- New Menu Items -->

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
              <i class="emoji bi bi-envelope-fill"></i>
              <span class="d-none d-lg-inline-flex">Message</span>
              <i class="bi bi-caret-down-fill dropdown-icon" style="background: none"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
              <a href="#" class="dropdown-item">
                <div class="d-flex align-items-center">
                  <img class="rounded-circle" src="" alt="" style="width: 40px; height: 40px;">
                  <div class="ms-2">
                    <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                    <small>15 minutes ago</small>
                  </div>
                </div>
              </a>
              <hr class="dropdown-divider">
              <a href="#" class="dropdown-item">
                <div class="d-flex align-items-center">
                  <img class="rounded-circle" src="" alt="" style="width: 40px; height: 40px;">
                  <div class="ms-2">
                    <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                    <small>15 minutes ago</small>
                  </div>
                </div>
              </a>
              <hr class="dropdown-divider">
              <a href="#" class="dropdown-item">
                <div class="d-flex align-items-center">
                  <img class="rounded-circle" src="" alt="" style="width: 40px; height: 40px;">
                  <div class="ms-2">
                    <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                    <small>15 minutes ago</small>
                  </div>
                </div>
              </a>
              <hr class="dropdown-divider">
              <a href="#" class="dropdown-item text-center">See all message</a>
            </div>
          </div>
          <div class="nav-item dropdown">
            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
              <i class="emoji bi bi-bell-fill"></i>
              <span class="d-none d-lg-inline-flex">Notificatin</span>
              <i class="bi bi-caret-down-fill dropdown-icon" style="background: none"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
              <a href="#" class="dropdown-item">
                <h6 class="fw-normal mb-0">Profile updated</h6>
                <small>15 minutes ago</small>
              </a>
              <hr class="dropdown-divider">
              <a href="#" class="dropdown-item">
                <h6 class="fw-normal mb-0">New user added</h6>
                <small>15 minutes ago</small>
              </a>
              <hr class="dropdown-divider">
              <a href="#" class="dropdown-item">
                <h6 class="fw-normal mb-0">Password changed</h6>
                <small>15 minutes ago</small>
              </a>
              <hr class="dropdown-divider">
              <a href="#" class="dropdown-item text-center">See all notifications</a>
            </div>
          </div>
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
          <h3 class="mb-4">고객 리스트</h3>
          <div class="search-container d-flex align-items-center">
            <div class="btn-group">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                      data-bs-toggle="dropdown" aria-expanded="false" style="background-color: saddlebrown;">
                <i class="bi bi-search"></i>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a class="dropdown-item" href="#" @click="setSearchCriteria('customerCodePk')">고객코드</a></li>
                <li><a class="dropdown-item" href="#" @click="setSearchCriteria('customerName')">이름</a></li>
                <li><a class="dropdown-item" href="#" @click="setSearchCriteria('customerPhoneNumber')">전화번호</a></li>
              </ul>
            </div>
            <input type="text" class="form-control ms-2" placeholder="Search" style="width: 200px;" v-model="searchValue">
            <button class="btn btn-primary ms-2" @click="loadCustomers(1)">검색</button>
          </div>
          <div class="position-relative-container mt-3">
            <div class="excel button" style="display: flex;justify-content:left">
              <button id="download-icon" class="btn btn-success me-2" @click="loadList">Excel <i class="bi bi-download"></i></button>
              <button id="upload-icon" class="btn btn-success me-2">Excel <i class="bi bi-upload"></i></button>
            </div>
            <button id="filter-icon" class="btn btn-secondary" style="background-color: saddlebrown;"><i
                class="bi bi-funnel"></i></button>
            <div class="filter-container" v-show="isFilterContainerVisible">
              <div class="btn-group me-2">
                <select class="form-select" v-model="defaultParams.customerType">
                  <option :value="null">고객타입 선택</option>
                  <option value="개인">개인</option>
                  <option value="법인">법인</option>
                </select>
              </div>
              <div class="btn-group me-2">
                <select class="form-select" v-model="defaultParams.membershipLevelName">
                  <option :value="null">멤버십 등급 선택</option>
                  <option value="일반">일반</option>
                  <option value="골드">골드</option>
                  <option value="플래티넘">플래티넘</option>
                  <option value="프리미엄">프리미엄</option>
                  <option value="VIP">VIP</option>
                </select>
              </div>
              <button class="btn btn-primary" @click=loadCustomers(1)>적용</button>
            </div>
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
                <tr v-for="customer in customers.content" :key="customer.customerCodePk">
                  <td>{{ customer.customerCodePk }}</td>
                  <td>{{ customer.customerName }}</td>
                  <td>{{ customer.customerEnglishName }}</td>
                  <td>{{ customer.customerGender }}</td>
                  <td>{{ customer.customerPhoneNumber }}</td>
                  <td>{{ customer.customerEmail }}</td>
                  <td>{{ customer.customerAddress }}</td>
                  <td>{{ customer.membershipLevelName }}</td>
                  <td>{{ customer.nationName }}</td>
                  <td>{{ customer.customerType }}</td>
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

.filter-container {
  display: none;
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
</style>
