<script setup>

import {useRouter} from 'vue-router';

import {ref, onMounted} from 'vue';
import axios from "axios";

const isLoading = ref(true);

const countries = ref([]);

const form = ref({
  customerName: '',
  customerEmail: '',
  customerPhoneNumber: '',
  customerEnglishName: '',
  customerAddress: '',
  customerInfoAgreement: 1,
  customerStatus: 0,
  customerType: '',
  nationCodeFk: 1,
  customerGender: ''
});

async function handleSubmit() {
  try {
    const response = await axios.post('http://localhost:8888/customers', form.value);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

onMounted(async () => {
  countries.value = await nationList();
})

async function nationList() {
  try {
    const response = await axios.get('http://localhost:8888/nations');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

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

function navigateToCustomerList() {
  router.push('/customerList');
}

function navigateToCustomerInit() {
  router.push('/');
}

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
          <router-link to="/customerList" class="nav-item nav-link"><i class="emoji bi bi-people-fill"></i>고객 리스트
          </router-link>
          <router-link to="/" class="nav-item nav-link active"><i class="emoji bi bi-person-fill-add"></i>고객 등록
          </router-link>
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
          <h3 class="mb-4">고객 등록</h3>
          <div class="form-submit">
            <form @submit.prevent="handleSubmit">

              <!-- 등록 버튼 누를 시 고객 데이터 저장 -->
              <button type="submit" class="btn-submit">등록</button>
              <br/><br/>
            </form>
          </div>
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <div class="half">
                <label for="korean-name">한글 이름:</label>
                <input type="text" id="korean-name" v-model="form.customerName"/>
              </div>

              <div class="half">
                <label for="english-name">영문 이름:</label>
                <input type="text" id="english-name" v-model="form.customerEnglishName"/>
              </div>
            </div>
            <div class="form-group">
              <div class="half">
                <label for="phone">전화번호:</label>
                <input type="text" id="phone" v-model="form.customerPhoneNumber"/>
              </div>

              <div class="half">
                <label for="customer-type">고객 타입:</label>
                <select id="customer-type" v-model="form.customerType">
                  <option value="개인">개인</option>
                  <option value="법인">법인</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <div class="third">
                <label for="country">국가:</label>
                <select id="country" v-model="form.nationCodeFk" v-if="countries.length">
                  <option v-for="country in countries" :value="country.nationCodePk">
                    {{ country.nationName }}
                  </option>
                </select>
              </div>
              <div class="third">
                <label for="gender">성별:</label>
                <select id="gender" v-model="form.customerGender">
                  <option value="남성">남성</option>
                  <option value="여성">여성</option>
                </select>
              </div>
              <div class="third">
                <div class="form-group checkbox-group">
                  <input
                      type="checkbox"
                      id="privacy-consent"
                      v-model="form.customerInfoAgreement"
                      false-value=0
                      true-value=1

                  />
                  <label for="privacy-consent">개인정보제공동의</label>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="email">이메일:</label>
              <input type="email" id="email" v-model="form.customerEmail"/>
            </div>
            <div class="form-group">
              <label for="address">주소:</label>
              <input type="text" id="address" v-model="form.customerAddress" style="width: 500px;"/>
            </div>
          </form>
        </div>
      </div>
      <!-- Table End -->
    </div>
    <!-- Content End -->

    <!-- Back to Top -->
    <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"
    ><i class="bi bi-arrow-up"></i
    ></a>
  </div>
  </body>
</template>

<style>

@import "@/css/style.css";
@import "@/css/bootstrap.min.css";

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

.form-group {
  margin-bottom: 15px;
}

.form-group input,
.form-group select {
  width: 300px;
  padding: 8px 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group input[type="checkbox"] {
  width: auto;
}

.form-group select {
  width: 100px;
}

.form-group input:focus,
.form-group select:focus {
  border-color: #4c724d;
  outline: none;
}

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

.form-group .checkbox-group label {
  margin: 0 0 0 5px;
}

.btn-submit {
  width: 60px;
  padding: 6px;
  border: none;
  border-radius: 5px;
  background-color: #7f6739;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

.btn-submit:hover {
  background-color: #7eb17f;
}

.form-submit {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  height: 40px;
}

</style>
