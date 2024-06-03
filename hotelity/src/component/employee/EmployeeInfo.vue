<script setup>
import { useRouter, useRoute } from 'vue-router';
import axios from 'axios';
import { reactive, ref, onMounted } from 'vue';
import $ from 'jquery';

const route = useRoute();

const employee = reactive({
  employeeCodePk: '',
  branchCodeFk: '',
  employeeName: '',
  positionCodeFk: '',
  rankCodeFk: '',
  departmentCodeFk: '',
  employeeOfficePhoneNumber: '',
  employeePhoneNumeber: '',
  employeeEmail: '',
  employeeAddress: '',
  permissionCodeFk: '',
  employeeProfileImageLink: '',
  stay: []
});

const fields = [
  { label: '이름', model: 'employeeName', type: 'text' },
  { label: '직원번호', model: 'employeeCodePk', type: 'text' },
  { label: '지점', model: 'branchCodePk', type: 'text' },
  { label: '직책', model: 'positionCodeFk', type: 'text' },
  { label: '직급', model: 'rankCodeFk', type: 'text' },
  { label: '부서', model: 'departmentCodeFk', type: 'text' },
  { label: '내선번호', model: 'employeeOfficePhoneNumber', type: 'text' },
  { label: '전화번호', model: 'employeePhoneNumeber', type: 'text' },
  { label: '이메일', model: 'employeeEmail', type: 'text' },
  { label: '주소', model: 'employeeAddress', type: 'text' },
  { label: '?', model: 'permissionCodeFk', type: 'text' },

];

const isLoading = ref(true);

async function fetchEmployeeData(employeeCodePk) {
  if (!employeeCodePk) {
    console.error("employeeCodePk is missing");
    return;
  }

  try {
    const response = await axios.get(`http://localhost:8888/employees/${employeeCodePk}`);
    console.log('API response:', response.data);
    Object.assign(employee, response.data);
  } catch (error) {
    console.error("Error fetching employee data:", error);
  }
}

onMounted(() => {
  console.log('Route params:', route.params);

  fetchEmployeeData(route.params.id).then(() => {
    isLoading.value = false;
  });

  $('#filter-icon').on('click', function() {
    $('.filter-container').toggle();
  });

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

$(document).ready(function() {
  $('#filter-icon').on('click', function() {
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

    <div class="container-fluid pt-4 px-4">
      <div class="bg-secondary rounded-top p-4">
        <div class="employee-info">
          <h2>직원 정보</h2>
          <div class="employee-details">
            <div class="photo">
              <img src="" alt="Employee Photo"/>
            </div>
            <div class="details">
              <div class="form-group">
                <div class="third">
                  <div class="row">
                    <label>사원번호:</label>
                    <!--          <span>{{ employee.data.employeeCodePk }}</span>-->
                  </div>
                </div>
                <div class="third">
                  <div class="row">
                    <label>이름:</label>
                    <!--          <span>{{ employee.data.employeeName }}</span>-->
                  </div>
                </div>
                <div class="third">
                  <div class="row">
                    <label>직급:</label>
                    <!--          <span>{{ employee.data.nameOfRank }}</span>-->
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="third">
                  <div class="row">
                    <label>근무지점:</label>
                    <!--          <span>{{ employee.data.nameOfBranch }}</span>-->
                  </div>
                </div>
                <div class="third">
                  <div class="row">
                    <label>부서:</label>
                    <!--          <span>{{ employee.data.nameOfDepartment }}</span>-->
                  </div>
                </div>
                <div class="third">
                  <div class="row">
                    <label>직책:</label>
                    <!--          <span>{{ employee.data.nameOfPosition }}</span>-->
                  </div>
                </div>
              </div>

              <div class="form-group">
                <div class="half">
                  <div class="row">
                    <label>전화번호:</label>
                    <!--          <span>{{ employee.data.employeePhoneNumber }}</span>-->
                  </div>
                </div>
                <div class="half">
                  <div class="row">
                    <label>내선번호:</label>
                    <!--          <span>{{ employee.data.employeeOfficePhoneNumber }}</span>-->
                  </div>
                </div>
              </div>

              <div class="row">
                <label>이메일:</label>
                <!--          <span>{{ employee.data.employeeEmail }}</span>-->
              </div>
              <div class="row">
                <label>주소:</label>
                <!--          <span>{{ employee.data.employeeAddress }}</span>-->
              </div>
            </div>
          </div>
          <h2>담당 투숙 객실</h2>
          <table>
            <thead>
            <tr>
              <th>투숙코드</th>
              <th>예약코드</th>
              <th>체크인시간</th>
              <th>체크아웃시간</th>
              <th>투숙일수</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="room in employee.rooms" :key="room.stayCode">
              <td>{{ room.stayCode }}</td>
              <td>{{ room.bookingCode }}</td>
              <td>{{ room.checkIn }}</td>
              <td>{{ room.checkOut }}</td>
              <td>{{ room.days }}</td>
            </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>

  </div>
  <!-- Content End -->

  <!-- Back to Top -->
  <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
  </body>
</template>

<style scoped>
.form-group .half {
  display: inline-block;
  width: calc(50% - 10px);
}

.form-group .half:first-child {
  margin-right: 10px;
}

.form-group .third {
  display: inline-block;
  width: calc(33% - 10px);
}

.form-group .third:first-child {
  margin-right: 10px;
}

.employee-info {
  width: 100%;
  margin: 0 auto;
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.employee-details {
  display: flex;
  gap: 15%;
}

/*
.details {
  display: flex;
}
*/

.row {
  display: flex;
  margin-bottom: 30px;
}

.row label {
  width: 100px;
  font-weight: bold;
  flex-shrink: 0;
}

.photo {
  margin-top: 5%;
  flex-shrink: 0;
}

.photo img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

table th, table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

table th {
  background-color: #f2f2f2;
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
