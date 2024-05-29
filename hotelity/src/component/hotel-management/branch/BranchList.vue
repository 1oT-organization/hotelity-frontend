<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const branches = ref([]);
const isLoading = ref(true);
const currentPage = ref(1);
const totalPages = ref(0);
const pageGroup = ref(1);
const pageSize = 10; // 한 그룹당 페이지 수
const selectedPage = ref(1); // 클릭한 페이지 번호를 추적하는 ref
const searchValue = ref(null);
const isFilterContainerVisible = ref(false);

const defaultParams = {
  branchCodePk: null,
  branchName: null,
  branchAddress: null,
  branchPhoneNumber: null
};

async function fetchData(params) {
  try {
    const response = await axios.get('http://localhost:8888/hotel-management/branches', { params });
    totalPages.value = response.data.data.totalPagesCount; // 총 페이지 수를 업데이트
    console.log(response.data.data)
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
}

async function loadBranches(page) {
  branches.value = await fetchData({
    ...defaultParams,
    pageNum: page - 1 // 백엔드 페이지 번호가 0부터 시작한다면 -1 필요
  });
  isLoading.value = false;
}

function changePage(page) {
  selectedPage.value = page; // 클릭한 페이지 번호를 업데이트
  currentPage.value = page;
  isLoading.value = true;
  loadBranches(page);
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
  loadBranches(currentPage.value);
});
</script>

<template>
  <div class="container-fluid pt-4 px-4">
    <div class="bg-secondary rounded-top p-4">
      <h3 class="mb-4">지점 리스트</h3>
      <div class="search-container d-flex align-items-center">
        <div class="btn-group">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                  data-bs-toggle="dropdown" aria-expanded="false">
            <i class="bi bi-search"></i>
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><a class="dropdown-item" href="#" @click="setSearchCriteria('branchCodePk')">지점 코드</a></li>
            <li><a class="dropdown-item" href="#" @click="setSearchCriteria('branchName')">지점명</a></li>
            <li><a class="dropdown-item" href="#" @click="setSearchCriteria('branchAddress')">주소</a></li>
            <li><a class="dropdown-item" href="#" @click="setSearchCriteria('branchPhoneNumber')">전화번호</a></li>
          </ul>
        </div>
        <input type="text" class="form-control ms-2" placeholder="Search" style="width: 200px;" v-model="searchValue">
        <button class="btn btn-primary ms-2" @click="loadBranches(1)">검색</button>
      </div>
      <div class="row">
        <div class="col-12">
          <table class="table table-striped">
            <thead>
            <tr>
              <th scope="col">지점 코드</th>
              <th scope="col">지점명</th>
              <th scope="col">주소</th>
              <th scope="col">전화번호</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="branch in branches.content" :key="branch.branchCodePk">
              <td>{{ branch.branchCodePk }}</td>
              <td>{{ branch.branchName }}</td>
              <td>{{ branch.branchAddress }}</td>
              <td>{{ branch.branchPhoneNumber }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
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

.selected {
  background-color: rgba(255, 170, 0, 0.38);
  color: black;
}
</style>