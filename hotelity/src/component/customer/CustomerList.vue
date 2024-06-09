<script setup>
import {ref, watch, onMounted} from 'vue';
import router from '@/router/router.js';
import * as api from '@/api/apiService.js';

function navigateToCustomer(id) {
  router.push(`/customer/${id}`);
}

const isLoading = ref(true);
const customers = ref([]);
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
const orderBy = ref('customerCodePk');  // default sorting by customerCodePk

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
const fileToUpload = ref(null);

function openFileInput() {
  const fileInput = document.getElementById('fileInput');
  fileInput.click();
}

function handleFileUpload(event) {
  fileToUpload.value = event.target.files[0];
}

async function submitFile() {
  if (!fileToUpload.value) {
    alert('파일을 선택해주세요.');
    return;
  }

  // FormData 객체 생성
  const formData = new FormData();

  // 선택한 파일 추가
  formData.append('file', fileToUpload.value);

  try {
    // 파일 전송
    const response = await api.uploadExcel(formData);
    orderBy.value = null;
    sortBy.value = null;
    currentPage.value = 1;

    loadCustomers(currentPage.value, orderBy.value, sortBy.value);
    // 응답 처리
    console.log(response);
  } catch (error) {
    console.log(fileToUpload.value)
    console.error(error);
  }
}

watch(searchValue, (newValue) => {
  if (selectedCriteria.value) {
    defaultParams[selectedCriteria.value] = newValue;
  }
});

async function fetchData(params) {
  try {
    const response = await api.getCustomers(params);
    totalPages.value = response.data.totalPagesCount;
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function downloadExcel() {
  try {
    const response = await api.downloadExcel(defaultParams);
    console.log(response);

    const url = window.URL.createObjectURL(new Blob([response]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'customers.xlsx');
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

async function loadCustomers(page, orderByValue = 'customerCodePk', sortByValue = 0) {
  try {
    const data = await fetchData({
      ...defaultParams,
      orderBy: orderByValue,
      sortBy: sortByValue,
      pageNum: page - 1
    });
    customers.value = data;
    isLoading.value = false;
  } catch (error) {
    console.error('Error loading customers:', error);
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
        <h3 class="mb-4">고객 리스트</h3>
        <div class="search-container d-flex align-items-center">
          <div class="btn-group">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                    @click="toggleDropdownMenu"
                    :class="{ 'btn-primary': isDropdownOpen }"
                    style="background-color: saddlebrown;">
              <i class="bi bi-search"></i>
            </button>
            <ul class="dropdown-menu" :class="{ show: isDropdownOpen }" aria-labelledby="dropdownMenuButton">
              <li><a class="dropdown-item" href="#" @click="setSearchCriteria('customerCodePk')">고객코드</a></li>
              <li><a class="dropdown-item" href="#" @click="setSearchCriteria('customerName')">이름</a></li>
              <li><a class="dropdown-item" href="#" @click="setSearchCriteria('customerPhoneNumber')">전화번호</a></li>
            </ul>
          </div>
          <input type="text" class="form-control ms-2" placeholder="Search" style="width: 200px;" v-model="searchValue">
          <button class="btn btn-primary ms-2" @click="loadCustomers(1, orderBy.value, sortBy.value)">검색</button>
        </div>
        <div class="position-relative-container mt-3">
          <div class="excel button" style="display: flex;justify-content:left">
            <button id="download-icon" class="btn btn-success me-2" @click="loadList">Excel <i
                class="bi bi-download"></i></button>
            <button id="upload-icon" class="btn btn-success me-2" @click="openFileInput">Excel <i
                class="bi bi-upload"></i></button>
            <input type="file" id="fileInput" style="display: none" @change="handleFileUpload"/>
            <button class="btn btn-primary" @click="submitFile">전송</button>
          </div>
          <button id="filter-icon" class="btn btn-secondary" style="background-color: saddlebrown;"
                  @click="toggleFilterContainer">
            <i class="bi bi-funnel"></i>
          </button>
          <div class="filter-container" v-show="isFilterContainerVisible">
            <div class="btn-group me-2">
              <select class="form-select" v-model="defaultParams.membershipLevelName">
                <option v-bind:value="null">멤버십 등급 선택</option>
                <option value="일반">일반</option>
                <option value="골드">골드</option>
                <option value="플래티넘">플래티넘</option>
                <option value="프리미엄">프리미엄</option>
                <option value="VIP">VIP</option>
              </select>
            </div>
            <div class="btn-group me-2">
              <select class="form-select" v-model="defaultParams.customerType">
                <option v-bind:value="null">고객타입 선택</option>
                <option value="개인">개인</option>
                <option value="법인">법인</option>
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
                <th scope="col" @click="sort('customerCodePk')">고객 코드
                  <i class="bi bi-caret-up-fill" :class="{ active: orderBy === 'customerCodePk' && sortBy === 0 }"></i>
                  <i class="bi bi-caret-down-fill"
                     :class="{ active: orderBy === 'customerCodePk' && sortBy === 1 }"></i>
                </th>
                <th scope="col" @click="sort('customerName')">한글 이름
                  <i class="bi bi-caret-up-fill" :class="{ active: orderBy === 'customerName' && sortBy === 0 }"></i>
                  <i class="bi bi-caret-down-fill" :class="{ active: orderBy === 'customerName' && sortBy === 1 }"></i>
                </th>
                <th scope="col" @click="sort('customerEnglishName')">영문 이름
                  <i class="bi bi-caret-up-fill"
                     :class="{ active: orderBy === 'customerEnglishName' && sortBy === 0 }"></i>
                  <i class="bi bi-caret-down-fill"
                     :class="{ active: orderBy === 'customerEnglishName' && sortBy === 1 }"></i>
                </th>
                <th scope="col" @click="sort('customerGender')">성별
                  <i class="bi bi-caret-up-fill" :class="{ active: orderBy === 'customerGender' && sortBy === 0 }"></i>
                  <i class="bi bi-caret-down-fill"
                     :class="{ active: orderBy === 'customerGender' && sortBy === 1 }"></i>
                </th>
                <th scope="col" @click="sort('customerPhoneNumber')">전화번호
                  <i class="bi bi-caret-up-fill"
                     :class="{ active: orderBy === 'customerPhoneNumber' && sortBy === 0 }"></i>
                  <i class="bi bi-caret-down-fill"
                     :class="{ active: orderBy === 'customerPhoneNumber' && sortBy === 1 }"></i>
                </th>
                <th scope="col" @click="sort('customerEmail')">Email
                  <i class="bi bi-caret-up-fill" :class="{ active: orderBy === 'customerEmail' && sortBy === 0 }"></i>
                  <i class="bi bi-caret-down-fill" :class="{ active: orderBy === 'customerEmail' && sortBy === 1 }"></i>
                </th>
                <th scope="col" @click="sort('customerAddress')">주소
                  <i class="bi bi-caret-up-fill" :class="{ active: orderBy === 'customerAddress' && sortBy === 0 }"></i>
                  <i class="bi bi-caret-down-fill"
                     :class="{ active: orderBy === 'customerAddress' && sortBy === 1 }"></i>
                </th>
                <th scope="col" @click="sort('membershipLevelName')">멤버십 등급
                  <i class="bi bi-caret-up-fill"
                     :class="{ active: orderBy === 'membershipLevelName' && sortBy === 0 }"></i>
                  <i class="bi bi-caret-down-fill"
                     :class="{ active: orderBy === 'membershipLevelName' && sortBy === 1 }"></i>
                </th>
                <th scope="col" @click="sort('nationName')">국가
                  <i class="bi bi-caret-up-fill" :class="{ active: orderBy === 'nationName' && sortBy === 0 }"></i>
                  <i class="bi bi-caret-down-fill" :class="{ active: orderBy === 'nationName' && sortBy === 1 }"></i>
                </th>
                <th scope="col" @click="sort('customerType')">고객 타입
                  <i class="bi bi-caret-up-fill" :class="{ active: orderBy === 'customerType' && sortBy === 0 }"></i>
                  <i class="bi bi-caret-down-fill" :class="{ active: orderBy === 'customerType' && sortBy === 1 }"></i>
                </th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="customer in customers.content" :key="customer.customerCodePk"
                  @click=navigateToCustomer(customer.customerCodePk)>
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
