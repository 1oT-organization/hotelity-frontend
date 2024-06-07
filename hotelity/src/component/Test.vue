<template>
  <div class="dashboard">
   
    <div class="lists-container">
      <div class="list">
    <h3>공지</h3>
    <ul>
      <li v-for="notice in notices" :key="notice.data">{{ notice.noticeTitle }}</li>
    </ul>
    <a href="#">+더보기</a>
  </div>
  <div class="list">
    <h3>VOC 내역</h3>
    <ul>
      <li v-for="voc in vocs" :key="voc.data">{{ voc.vocTitle }}</li>
    </ul>
    <a href="#">+더보기</a>
  </div>
  <div class="list">
    <h3>예약 내역</h3>
    <ul>
      <li v-for="reservation in reservations" :key="reservation.data">{{ reservation.roomLevelName }} {{ reservation.roomName }}</li>
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

const fetchNotices = async () => {
  try {
    const response = await axios.get('http://localhost:8888/sales/notices/latest');
    return response.data.data.content;
  } catch (error) {
    console.error('Error fetching notices:', error);
  }
};

const fetchVocs = async () => {
  try {
    const response = await axios.get('http://localhost:8888/sales/vocs/latest');
    return response.data.data.content;
  } catch (error) {
    console.error('Error fetching vocs:', error);
  }
};

const fetchReservations = async () => {
  try {
    const response = await axios.get('http://localhost:8888/hotel-service/reservations/latest');
    return response.data.data.content;
  } catch (error) {
    console.error('Error fetching reservations:', error);
  }
};


export default {
  setup() {
    const barChartCanvas = ref(null);
    const pieChartCanvas = ref(null);
    const barChartInstance = ref(null);
    const pieChartInstance = ref(null);
    const notices = ref([]);
    const vocs = ref([]);
    const reservations = ref([]);

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


    onMounted(async () => {
      notices.value = await fetchNotices();
      console.log('notice value data', notices.value.data);
      vocs.value = await fetchVocs();
      console.log('voc value', vocs.value);
      reservations.value = await fetchReservations();
      console.log('reservations value', reservations.value);
    });


    return { notices, vocs, reservations };
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
