<script setup>

import { useRouter } from 'vue-router';

import { ref, onMounted } from 'vue';

const isLoading = ref(true);

onMounted(() => {
  // Initialize datepicker
  $("#payment-date").datepicker({
    dateFormat: "yy-mm-dd"
  });

  // Toggle filter container
  $('#filter-icon').on('click', function() {
    showFilter.value = !showFilter.value;
    $('.filter-container').toggle();
  });
});

onMounted(() => {

  $('#filter-icon').on('click', function() {
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

    <!-- Table Start -->
    <div class="container-fluid pt-4 px-4">
      <div class="bg-secondary rounded-top p-4">
        <h3 class="mb-4">결제 내역</h3>
        <div class="search-container d-flex align-items-center">
          <div class="btn-group">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                    data-bs-toggle="dropdown" aria-expanded="false" style="background-color: saddlebrown;">
              <i class="bi bi-search"></i>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><a class="dropdown-item" href="#">고객명</a></li>
            </ul>
          </div>
          <input type="text" class="form-control ms-2" placeholder="Search" style="width: 200px;">
          <button class="btn btn-primary ms-2">검색</button>
        </div>
        <div class="position-relative-container mt-3">
          <div class="excel button" style="display: flex; justify-content: left;">
            <button id="download-icon" class="btn btn-success me-2">Excel <i class="bi bi-download"></i></button>
            <button id="upload-icon" class="btn btn-success me-2">Excel <i class="bi bi-upload"></i></button>
          </div>
          <button id="filter-icon" class="btn btn-secondary" style="background-color: saddlebrown;"><i
              class="bi bi-funnel"></i></button>
          <div class="filter-container" style="width: 600px;">
            <div class="btn-group me-2">
              <select class="form-select">
                <option selected>결제 수단</option>
                <option value="1">신용카드</option>
                <option value="2">현금</option>
                <option value="3">계좌이체</option>
                <option value="4">모바일 결제</option>
              </select>
            </div>
            <div class="btn-group me-2">
              <select class="form-select">
                <option selected>결제 종류</option>
                <option value="1">예약 결제</option>
                <option value="2">현장 결제</option>
                <option value="3">온라인 결제</option>
              </select>
            </div>
            <div class="btn-group me-2">
              <input type="text" class="form-control" id="payment-date" placeholder="결제 일자 선택">
            </div>
            <button class="btn btn-primary">적용</button>
          </div>
        </div>
        <br>
        <div class="row">
          <div class="col-12">
            <table class="table table-striped">
              <thead>
              <tr>
                <th scope="col">결제내역 코드</th>
                <th scope="col">고객</th>
                <th scope="col">결제 금액</th>
                <th scope="col">결제 일자</th>
                <th scope="col">결제 수단</th>
                <th scope="col">결제 종류</th>
                <th scope="col">결제 취소여부</th>
              </tr>
              </thead>
              <tbody>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- Table End -->

  </div>

  <!-- Back to Top -->
  <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
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
</style>
