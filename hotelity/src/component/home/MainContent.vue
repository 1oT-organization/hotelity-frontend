<template>
    <div class="dashboard-container">
    <div class="dashboard dashboard1">
      <div class="buttons">
        <a style="margin-right: 10px; font-size: 20px;">예약</a>
        <button @click="fetchReservationDailyData">Day</button>
        <button @click="fetchReservationMonthlyData">Month</button>
        <button @click="fetchReservationYearlyData">Year</button>
      </div>
      <div class="data-display">
        <pre v-if="reservationData" class="data-content">{{ reservationData.data }}</pre>
        <p v-else style="height: 120px;">AI 비서를 통해 예약 통계를 확인하세요</p>
      </div>
    </div>

    <div class="dashboard dashboard2">
      <div class="buttons">
        <a style="margin-right: 10px; font-size: 20px;">결제</a>
        <button @click="fetchPaymentDailyData">Day</button>
        <button @click="fetchPaymentMonthlyData">Month</button>
        <button @click="fetchPaymentYearlyData">Year</button>
      </div>
      <div class="data-display">
        <pre v-if="paymentData">{{ paymentData.data }}</pre>
        <p v-else style="height: 120px;">AI 비서를 통해 결제 통계를 확인하세요</p>
      </div>
    </div>

    <div class="dashboard dashboard3">
      <div class="buttons">
        <a style="margin-right: 10px; font-size: 20px;">공지/VOC</a>
        <button @click="fetchNoticeData">공지</button>
        <button @click="fetchVocData">VOC</button>
      </div>
      <div class="data-display">
        <pre v-if="noticeVocData">{{ noticeVocData.data }}</pre>
        <p v-else style="height: 120px;">AI 비서를 통해 VOC, 공지를 확인하세요</p>
      </div>
    </div>

    <div class="dashboard dashboard4">
  <button class="guide-download">GUIDE DOWNLOAD</button>
  <div class="footer-info">
  <p class="system-support">시스템 지원 : 1oT</p>
  <p>Number : 010-9874-3010</p>
  <p>Email : 1ot@gmail.com</p>
  <p>Address : 서울특별시 동작구 보라매로 87 </p>
</div>
</div>
</div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        reservationData: null,
        paymentData: null,
      };
    },
    methods: {
      async fetchReservationDailyData() {
        try {
          const response = await axios.get('http://localhost:8888/chat/reservations/daily');
          this.reservationData = response.data;
        } catch (error) {
          console.error("Error fetching daily data:", error);
        }
      },
      async fetchReservationMonthlyData() {
        try {
          const response = await axios.get('http://localhost:8888/chat/reservations/monthly');
          this.reservationData = response.data;
        } catch (error) {
          console.error("Error fetching monthly data:", error);
        }
      },
      async fetchReservationYearlyData() {
        try {
          const response = await axios.get('http://localhost:8888/chat/reservations/yearly');
          this.reservationData = response.data;
        } catch (error) {
          console.error("Error fetching yearly data:", error);
        }
      },
    async fetchPaymentDailyData() {
        try {
          const response = await axios.get('http://localhost:8888/chat/payments/daily');
          this.paymentData = response.data;
        } catch (error) {
          console.error("Error fetching daily data:", error);
        }
      },
      async fetchPaymentMonthlyData() {
        try {
          const response = await axios.get('http://localhost:8888/chat/payments/monthly');
          this.paymentData = response.data;
        } catch (error) {
          console.error("Error fetching monthly data:", error);
        }
      },
      async fetchPaymentYearlyData() {
        try {
          const response = await axios.get('http://localhost:8888/chat/payments/yearly');
          this.paymentData = response.data;
        } catch (error) {
          console.error("Error fetching yearly data:", error);
        }
      },
      async fetchNoticeData() {
        try {
          const response = await axios.get('http://localhost:8888/chat/notices/daily');
          this.noticeVocData = response.data;
        } catch (error) {
          console.error("Error fetching yearly data:", error);
        }
      },
      async fetchVocData() {
        try {
          const response = await axios.get('http://localhost:8888/chat/vocs/daily');
          this.noticeVocData = response.data;
        } catch (error) {
          console.error("Error fetching yearly data:", error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
.dashboard-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

  .dashboard {
    padding: 20px;
  }
  
  .buttons {
    margin-bottom: 1px;
  }
  
  button {
    border-radius: 20px;
    margin: 0 2px;
    padding: 5px 12px;
    font-size: 12px;
  }
  
  .data-display {
    margin-top: 10px;
    white-space: pre-wrap;
    text-align: left;
    background: #f4f4f4;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    overflow: auto;
  }

  .data-content {
  width: 100%; /* 가로 길이 고정 */
  text-wrap: balance;
}

.dashboard4 {
    margin-top: 45px;
    display: flex;
    gap: 30px;
}

.guide-download {
    width: 100px;
    height: 100px;
    border-radius: 4px;
    background-color: #ff9c5a;
    transition: background-color 0.3s ease;
}

.guide-download:hover {
    background-color: #6f8566;
}
  </style>
  