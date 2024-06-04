<script setup>

import {useRouter} from 'vue-router';

import {ref, onMounted, reactive} from 'vue';
import axios from "axios";

const isLoading = ref(true);
const branches = ref([]);
const isModifyModalOpen = ref(false);

async function fetchData() {
  try {
    const response = await axios.get('http://localhost:8888/hotel-management/branches?pageNum=0');

    console.log(response.data);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function loadBranch() {
  try {
    const data = await fetchData();
    branches.value = data;
    isLoading.value = false;
  } catch (error) {
    console.error('Error loading notices:', error);
  }
}

const selectedBranch = ref({
  branchCodePk: '',
  branchName: '',
  branchAddress: '',
  branchPhoneNumber: '',
});

const openModifyModal = (branch) => {
  console.log('오냐?');
  console.log('이건 뭐냐?', branch)

  console.log('이거도 확인', openModifyModal)
  console.log('제발 도대체 뭐임?', isModifyModalOpen)
  console.log('이거뭐임', isModifyModalOpen.value)

  Object.assign(selectedBranch, branch);

  selectedBranch.value = {...branch};

  isModifyModalOpen.value = !isModifyModalOpen.value;
  console.log('이거뭐임2', isModifyModalOpen.value)
};

const modifyBranch = async (branchCodePk) => {
  try {
    console.log('Selected Branch:', selectedBranch.value);
    const response = await axios.put(`http://localhost:8888/hotel-management/branches/${branchCodePk}`, selectedBranch.value);
    console.log('Response Data:', response.data);
    isModifyModalOpen.value = false;
    loadBranch();
  } catch (error) {
    console.error('Error modifying branch:', error);
  }
};

const deleteBranch = async (branchCodePk) => {
  if (confirm('해당 지점을 정말 삭제하시겠습니까?')) {
    try {
      await axios.delete(`http://localhost:8888/hotel-management/branches/${branchCodePk}`);
      loadBranch();
    } catch (error) {
      console.error('Error deleting branch:', error);
    }
  }
};

onMounted(loadBranch);

onMounted(() => {

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
});

// 모달 가시성 상태
const showModal = ref(false);

// 폼 데이터 상태
const formData = ref({
  branchCode: '',
  branchName: '',
  address: '',
  phoneNumber: ''
});

// 모달 가시성 토글 함수
const toggleModal = () => {
  showModal.value = !showModal.value;
};

// 폼 제출 함수
const submitForm = async () => {
  try {
    const response = await axios.post('http://localhost:8888/hotel-management/branches', formData.value);
    console.log('response.data:', response.data);
    console.log('formData.value:', formData.value);
    toggleModal();  // 폼 제출 후 모달 닫기
    loadBranch();
  } catch (error) {
    console.error('Error registering branch:', error);
  }
};

const router = useRouter();

$(document).ready(function () {
  $('#filter-icon').on('click', function () {
    $('.filter-container').toggle();
  });
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
      <div class="bg-secondary rounded-top p-4">
        <h3 class="mb-4">지점 리스트</h3>
        <div class="button" style="display: flex; justify-content: right;">
          <button @click="toggleModal" class="btn btn-success me-2">지점 등록</button>
        </div>
        <br>
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
              <tr v-for="branch in branches.content" :key="branch.branchCodeFk">
                <td>{{ branch.branchCodePk }}</td>
                <td>{{ branch.branchName }}</td>
                <td>{{ branch.branchAddress }}</td>
                <td>{{ branch.branchPhoneNumber }}</td>
                <td>
                  <button class="btn btn-primary btn-sm me-2" @click="openModifyModal(branch)"><i
                      class="bi bi-pencil-square"></i></button>
                  <button class="btn btn-danger btn-sm" @click="deleteBranch(branch.branchCodePk)"><i
                      class="bi bi-trash"></i></button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- Table End -->

    <!-- 모달 시작 -->
    <div v-if="showModal" class="modal" tabindex="-1" style="display: block; background: rgba(0, 0, 0, 0.5);">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">지점 등록</h5>
            <button type="button" class="btn-close" @click="toggleModal"></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="branchCode" class="form-label">지점 코드</label>
                <input type="text" class="form-control" id="branchCode" v-model="formData.branchCodePk">
              </div>
              <div class="mb-3">
                <label for="branchName" class="form-label">지점명</label>
                <input type="text" class="form-control" id="branchName" v-model="formData.branchName">
              </div>
              <div class="mb-3">
                <label for="address" class="form-label">주소</label>
                <input type="text" class="form-control" id="branchAddress" v-model="formData.branchAddress">
              </div>
              <div class="mb-3">
                <label for="phoneNumber" class="form-label">전화번호</label>
                <input type="text" class="form-control" id="branchPhoneNumber" v-model="formData.branchPhoneNumber">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="toggleModal">닫기</button>
            <button type="button" class="btn btn-primary" @click="submitForm">저장</button>
          </div>
        </div>
      </div>
    </div>
    <!-- 모달 끝 -->

    <!-- Modify Modal Start -->
    <div v-if="isModifyModalOpen" class="modal" tabindex="-1" style="display: block; background: rgba(0, 0, 0, 0.5);">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">지점 수정</h5>
            <button type="button" class="btn-close" @click="isModifyModalOpen = false"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="modifyBranch(selectedBranch.branchCodePk)">
              <div class="mb-3">
                <label for="branchCode" class="form-label">지점코드</label>
                <input type="text" class="form-control" id="branchCode" v-model="selectedBranch.branchCodePk"
                       readonly>
              </div>
              <div class="mb-3">
                <label for="branchName" class="form-label">지점명</label>
                <input type="text" class="form-control" id="branchName" v-model="selectedBranch.branchName">
              </div>
              <div class="mb-3">
                <label for="branchAddress" class="form-label">주소</label>
                <input type="text" class="form-control" id="branchAddress" v-model="selectedBranch.branchAddress">
              </div>
              <div class="mb-3">
                <label for="branchPhoneNumber" class="form-label">전화번호</label>
                <input type="text" class="form-control" id="branchPhoneNumber"
                       v-model="selectedBranch.branchPhoneNumber">
              </div>
              <button type="submit" class="btn btn-primary" @click="modifyBranch">저장</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- Modify Modal End -->

  </div>
  <!-- Content End -->
</template>

<style>
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-dialog {
  max-width: 500px;
  margin: 1.75rem auto;
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
</style>
