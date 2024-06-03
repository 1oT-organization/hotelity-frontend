<template>
  <div class="dashboard">
    <div class="chart-container">
      <h2>Charts</h2>
      <div style="display: flex; justify-content: center;">
        <canvas ref="barChartCanvas" class="chart"></canvas>
        <canvas ref="pieChartCanvas" class="chart"></canvas>
      </div>
    </div>
    <div class="lists-container">
      <div class="list">
        <h3>공지</h3>
        <ul>
          <li>공지사항 1</li>
          <li>공지사항 2</li>
          <li>공지사항 3</li>
        </ul>
        <a href="#">+더보기</a>
      </div>
      <div class="list">
        <h3>VOC 내역</h3>
        <ul>
          <li>voc 내역 1</li>
          <li>voc 내역 2</li>
          <li>voc 내역 3</li>
        </ul>
        <a href="#">+더보기</a>
      </div>
      <div class="list">
        <h3>예약 내역</h3>
        <ul>
          <li>예약 내역 1</li>
          <li>예약 내역 2</li>
          <li>예약 내역 3</li>
        </ul>
        <a href="#">+더보기</a>
      </div>
      <div class="list">
        <h3>여기는 Footer형식 들어갈 예정</h3>
        <ul>
          <li>관리실 휴대전화 번호</li>
          <li>주소</li>
          <li>가이드 다운로드 등</li>
        </ul>
        <a href="#">+더보기</a>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { Chart, BarController, PieController, CategoryScale, BarElement, ArcElement, Tooltip, Legend } from 'chart.js';
import axios from 'axios';

Chart.register(BarController, PieController, CategoryScale, BarElement, ArcElement, Tooltip, Legend);

export default {
  setup() {
    const barChartCanvas = ref(null);
    const pieChartCanvas = ref(null);
    const barChartInstance = ref(null);
    const pieChartInstance = ref(null);

    const barChartData = {
      labels: ['Label 1', 'Label 2', 'Label 3'],
      datasets: [{
        label: 'Dataset 1',
        backgroundColor: '#36A2EB',
        data: [10, 20, 30]
      }, {
        label: 'Dataset 2',
        backgroundColor: '#FF6384',
        data: [20, 30, 40]
      }]
    };

    const pieChartData = {
      labels: ['Label 1', 'Label 2', 'Label 3'],
      datasets: [{
        label: 'Dataset 1',
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
        data: [30, 40, 30]
      }]
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
    };

    const fetchData = async () => {
      try {
        const currentDate = new Date().toISOString().split('T')[0];
        const reservationResponse = await axios.get(`http://localhost:8888/hotel-service/reservations/${currentDate}/day`);
        const stayResponse = await axios.get(`http://localhost:8888/hotel-service/stays/daily/${currentDate}`);
        console.log('reservationResponse:', reservationResponse);
        console.log('stayResponse:', stayResponse);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    onMounted(() => {
      fetchData();

      if (barChartInstance.value) {
        barChartInstance.value.destroy();
      }
      if (pieChartInstance.value) {
        pieChartInstance.value.destroy();
      }

      barChartInstance.value = new Chart(barChartCanvas.value.getContext('2d'), {
        type: 'bar',
        data: barChartData,
        options
      });

      pieChartInstance.value = new Chart(pieChartCanvas.value.getContext('2d'), {
        type: 'pie',
        data: pieChartData,
        options
      });
    });

    return { barChartCanvas, pieChartCanvas };
  }
};
</script>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.chart-container {
  width: 80%;
  margin: 0 auto;
}
.chart {
  width: 300px;
  height: 300px;
}
.lists-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80%;
  margin-top: 20px;
}
.list {
  width: 45%;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.list h3 {
  margin-top: 0;
}
.list ul {
  list-style-type: none;
  padding: 0;
}
.list ul li {
  padding: 5px 0;
  border-bottom: 1px solid #eee;
}
.list ul li:last-child {
  border-bottom: none;
}
.list a {
  display: block;
  text-align: right;
  margin-top: 10px;
  text-decoration: none;
  color: #007BFF;
}
</style>
