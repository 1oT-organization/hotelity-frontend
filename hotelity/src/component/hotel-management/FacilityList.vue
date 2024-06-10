<script setup>

import {useRouter} from 'vue-router';

import {ref, onMounted} from 'vue';

const isLoading = ref(true);

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

    <!-- Table Start -->
    <div class="container-fluid pt-4 px-4"  style="background: #f7f7f7;">
      <div class="bg-secondary rounded-top p-4">
        <h3 class="mb-4">지점 리스트</h3>


        <div class="button" style="display: flex;justify-content:right">
          <button id="download-icon" class="btn btn-success me-2">지점 등록</button>

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
              <tr>
                <th scope="row">HQ</th>
                <td>본사</td>
                <td>서울특별시 동작구 보라매로 87</td>
                <td>02-486-0246</td>
              </tr>
              <tr>
                <th scope="row">SE</th>
                <td>서울 종로점</td>
                <td>서울특별시 종로구 오키로 79 마우스빌딩</td>
                <td>02-777-7777</td>
              </tr>

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
</template>

<style scoped>
/*
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagination button {
  margin: 0 5px;
  padding: 5px 10px;
}
*/
.pagination {
  list-style: none;
  display: flex;
  padding: 0;
  margin-top: 10px;
  text-align: center;
  justify-content: center;
}
.pagination button {
  display: inline;
  text-align: center;
  float: left;
  font-size: 14px;
  text-decoration: none;
  padding: 5px 12px;
  color: #999;
  margin-left: -6px;
  border: 1px solid #ddd;
  line-height: 1.5;
  background: #fff;
}
.pagination button.selected {
  cursor: default;
  border-color: #909090;
  background: #b4b4b4;
  color: #fff;
}
.pagination button:active {
  outline: none;
}

.modal-2 button:first-child {
  -moz-border-radius: 50px 0 0 50px;
  -webkit-border-radius: 50px;
  border-radius: 50px 0 0 50px;
}
.modal-2 button:last-child {
  -moz-border-radius: 0 50px 50px 0;
  -webkit-border-radius: 0;
  border-radius: 0 50px 50px 0;
}
.modal-2 button:hover {
  color: #000000;
  background-color: #eee;
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
  right: -12px;
  width: auto;
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

.active-asc {
  color: green;
  font-weight: bold;
}

.active-desc {
  color: red;
  font-weight: bold;
}

table.table {
  table-layout: fixed;
  width: 100%;
}

table.table th, table.table td {
  border: 1px solid #dee2e6;
  word-wrap: break-word;
  text-align: center; /* Add this line to center text */
}
</style>
