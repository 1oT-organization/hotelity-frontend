<template>
    <div>
      <h2>담당 투숙 객실</h2>
      <div v-if="isLoading">로딩 중...</div>
      <table v-if="!isLoading && employee.rooms" class="table table-striped">
        <thead>
          <tr>
            <th>투숙코드</th>
            <th>예약코드</th>
            <th>지점</th>
            <th>체크인시간</th>
            <th>체크아웃시간</th>
            <th>투숙고객</th>
            <th>투숙인원</th>
            <th>객실 코드</th>
            <th>객실명(객실등급 + 객실명)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(stay, index) in employee.rooms" :key="index">
            <td>{{ stay.stayCodePk }}</td>
            <td>{{ stay.reservationCodeFk }}</td>
            <td>{{ stay.branchCodeFk }}</td>
            <td>{{ stay.stayCheckinTime }}</td>
            <td>{{ stay.stayCheckoutTime }}</td>
            <td>{{ stay.customerName }}</td>
            <td>{{ stay.stayPeopleCount }}</td>
            <td>{{ stay.roomCode }}</td>
            <td>{{stay.roomLevelName }} {{ stay.roomName }} </td>
          </tr>
        </tbody>
      </table>
      <div v-if="!isLoading && (!employee.rooms || employee.rooms.length === 0)">데이터 없음</div>
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
  </template>
  
  <script setup>
  import { ref, reactive, watch, onMounted } from 'vue';
  import axios from 'axios';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  
  const isLoading = ref(true);
  const employee = reactive({
    rooms: null // 데이터가 객체여야 하므로 null로 초기화
  });
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
  const orderBy = ref('stayCodePk');
  
  const defaultParams = {
    stayCodePk: '',
    stayCheckinTime: '',
    stayCheckoutTime: '',
    stayPeopleCount: '',
    employeeCodeFk: '',
    reservationCodeFk: ''
  };
  
  watch(searchValue, (newValue) => {
    if (selectedCriteria.value) {
      defaultParams[selectedCriteria.value] = newValue;
    }
  });
  
  async function fetchEmployeeData(employeeCodePk) {
    try {
      const response = await axios.get(`http://localhost:8888/employees/${employeeCodePk}`);
      Object.assign(employee, response.data.data);
      await loadStayByEmployee(1);
      isLoading.value = false; // 데이터 로드 후 로딩 상태 변경
    } catch (error) {
      console.error("Error fetching employee data:", error);
    }
  }
  
  async function fetchData(params) {
    try {
      const response = await axios.get('http://localhost:8888/hotel-service/stays/page', { params });
      console.log('이거 뭐임?', response.data.data); 
      
      totalPages.value = response.data.totalPagesCount;
  
      console.log('이거 뭔지 알아보자1', employee.data, '이거 아님1');
      console.log('이거 뭔지 알아보자2', employee.room, '이거 아님2');
      console.log('이거 뭔지 알아보자3', response.data);
      console.log('이거 뭔지 알아보자4', response.data.content, '이거 아님3');
      console.log('이거 뭔지 알아보자5', response.data.data);
      console.log('이거 뭔지 알아보자6', response.data.data.content);
      console.log('이거 뭔지 알아보자7', response.data.data.content.branchCodeFk, '이거 아님4');
      return response.data.data.content;  
    } catch (error) {
      console.error('fetchData error:', error);  
      throw error;
    }
  }
  
  async function loadStayByEmployee(page, orderByValue = 'stayCodePk', sortByValue = 0) {
    try {
      const data = await fetchData({
        ...defaultParams,
        orderBy: orderByValue,
        sortBy: sortByValue,
        pageNum: page - 1,
        employeeCodeFk: route.params.id
      });
      employee.rooms = data; // content에 해당하는 값을 사용하도록 수정
      isLoading.value = false;
    } catch (error) {
      console.error('Error loading stay by employee:', error);
    }
  }

  function changePage(page) {
  selectedPage.value = page;
  currentPage.value = page;
  isLoading.value = true;
  loadStayByEmployee(page, orderBy.value, sortBy.value);
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
  
  onMounted(() => {
    console.log("Route params:", route.params);  // 로그 추가
    fetchEmployeeData(route.params.id);
  });
  </script>
  
  <style>
  /* Add your styles here */
  </style>
  