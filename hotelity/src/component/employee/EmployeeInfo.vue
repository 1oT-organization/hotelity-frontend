<script setup>
import { useRouter, useRoute } from 'vue-router';
import axios from 'axios';
import { reactive, ref, onMounted } from 'vue';
import $ from 'jquery';

const route = useRoute();

const editEmployee = () => {
  console.log("직원 정보 수정 로직 예정")
};

const deleteEmployee = () => {
  if (window.confirm('삭제하시겠습니까?')) {
    console.log("직원 정보 삭제 로직 예정")
  }
};
const uploadImage = async (event) => {
  const file = event.target.files[0];
  if (!file) {
    return;
  }

  const formData = new FormData();
  formData.append('image', file);

  console.log('이거뭐임??ㅇㄴㅁ라ㅣㅓㅗ아ㅣㅎㅁ졷', route.params.id)
  try {
    const response = await axios.post(`http://localhost:8888/employees/${route.params.id}/image`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    if (response.status === 200) {
      console.log('Image uploaded successfully:', response.data);
    } else {
      console.error('Error uploading image:', response.data);
    }
  } catch (error) {
    console.error('Error uploading image:', error);
  }
};

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


const isLoading = ref(true);

async function fetchEmployeeData(employeeCodePk) {
  if (!employeeCodePk) {
    console.error("employeeCodePk is missing");
    return;
  }

  try {
    const response = await axios.get(`http://localhost:8888/employees/${employeeCodePk}`);
    console.log('뭐가 오냐?', response);
    console.log('API response:', response);
    console.log('employee 확인: ',  employee);
    const data = response.data.data;
    employee.employeeCodePk = data.employeeCodePk;
    employee.branchCodeFk = data.branchCodeFk;
    employee.employeeName = data.employeeName;
    employee.positionCodeFk = data.positionCodeFk;
    employee.rankCodeFk = data.rankCodeFk;
    employee.departmentCodeFk = data.departmentCodeFk;
    employee.employeeOfficePhoneNumber = data.employeeOfficePhoneNumber;
    employee.employeePhoneNumber = data.employeePhoneNumber;
    employee.employeeEmail = data.employeeEmail;
    employee.employeeAddress = data.employeeAddress;
    employee.permissionCodeFk = data.permissionCodeFk;
    employee.employeeProfileImageLink = data.employeeProfileImageLink;
    employee.stay = data.stay;
    employee.nameOfBranch = data.nameOfBranch;
    employee.nameOfPosition = data.nameOfPosition;
    employee.nameOfDepartment = data.nameOfDepartment;
    employee.nameOfRank = data.nameOfRank;
    Object.assign(employee, response);

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
    <div v-if="isLoading" id="spinner" class="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
      <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <!-- Spinner End -->


        <!-- Sidebar Start -->
        <div class="sidebar pe-4 pb-3">
            <nav class="navbar bg-secondary navbar-dark">
                <a href="index.html" class="navbar-brand mx-4 mb-3">
                    <h3 class="text-primary" style="display: flex; justify-content: center;"><img src="@/assets/img/hotelity_logo.png" width="60%"></h3>
                </a>
                
                <div class="container">
                    <div class="clock">
                        <h1 id="time" style="display: flex; justify-content: center; font-family: fantasy; color:#798a69;"></h1>
                    </div>
                </div>

                <div class="navbar-nav w-100">
                    <router-link to="/employeeList" class="nav-item nav-link active"><i class="emoji bi bi-person-vcard-fill"></i>직원 관리</router-link>
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
                    <a href="" class="nav-item nav-link active">직원</a>
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
                            <i class="bi bi-caret-down-fill dropdown-icon"  style="background: none"></i>
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
            <div class="container-fluid pt-4 px-4">
    <div class="bg-secondary rounded-top p-4">
            <div class="employee-info">
    <h2>직원 정보</h2>

    <div class="employee-actions">
      <button @click="editEmployee">직원 정보 수정</button>
      <button @click="deleteEmployee">직원 정보 삭제</button>
    </div>

    <div class="employee-details" >
      <div class="photo">
  <img :src="employee.employeeProfileImageLink" alt="Employee Photo" />
</div>

      <div class="image-upload">
      <input type="file" @change="uploadImage">
      <button>이미지 업로드</button>
    </div>

      <div class="details">
        <div class="form-group">
        <div class="third">
          <div class="row">
          <label>사원번호:</label>
          <span>{{ employee.employeeCodePk }}</span>
        </div>
      </div>
      <div class="third">
        <div class="row">
          <label>이름:</label>
          <span>{{ employee.employeeName }}</span>
        </div>
      </div>
      <div class="third">
        <div class="row">
          <label>직급:</label>
          <span>{{ employee.nameOfRank }}</span>
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="third">  
      <div class="row">
          <label>근무지점:</label>
          <span>{{ employee.nameOfBranch }}</span>
        </div>
      </div>
      <div class="third">
        <div class="row">
          <label>부서:</label>
          <span>{{ employee.nameOfDepartment }}</span>
        </div>
        </div>
        <div class="third">  
      <div class="row">
          <label>직책:</label>
          <span>{{ employee.nameOfPosition }}</span>
        </div>
      </div>
      </div>

      <div class="form-group">
      <div class="half">
        <div class="row">
          <label>전화번호:</label>
          <span>{{ employee.employeePhoneNumber }}</span>
        </div>
      </div>
      <div class="half">
        <div class="row">
          <label>내선번호:</label>
          <span>{{ employee.employeeOfficePhoneNumber }}</span>
        </div>
      </div>
      </div>
    
        <div class="row">
          <label>이메일:</label>
          <span>{{ employee.employeeEmail }}</span>
        </div>
        <div class="row">
          <label>주소:</label>
          <span>{{ employee.employeeAddress }}</span>
        </div>
      </div>
    </div>
    
  </div>
            
</div>
</div>

        </div>
        <!-- Content End -->


        <!-- Back to Top -->
        <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
    </div>
</body>
</template>

<style scoped>

@import "@/css/style.css";
@import "@/css/bootstrap.min.css";

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
