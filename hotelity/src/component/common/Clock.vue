<template>
  <div class="container">
    <div class="clock">
      <h1 id="time" style="display: flex; justify-content: center; font-family: fantasy; color:#798a69;"></h1>
    </div>
  </div>
</template>

<script setup>
import {onMounted} from "vue";

onMounted(() => {
  fetchData().then(() => {
    // isLoading.value = false;
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
</script>

<style lang="scss" scoped>

</style>