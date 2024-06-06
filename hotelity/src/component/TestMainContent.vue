<template>
    <div class="dashboard">
      <h1>Hotel Data Dashboard</h1>
      <div class="buttons">
        <button @click="fetchDailyData">Get Daily Data</button>
        <button @click="fetchMonthlyData">Get Monthly Data</button>
        <button @click="fetchYearlyData">Get Yearly Data</button>
      </div>
      <div class="data-display" v-if="data">
        <pre>{{ data }}</pre>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        data: null,
      };
    },
    methods: {
      async fetchDailyData() {
        try {
          const response = await axios.get('/api/daily');
          this.data = response.data;
        } catch (error) {
          console.error("Error fetching daily data:", error);
        }
      },
      async fetchMonthlyData() {
        try {
          const response = await axios.get('/api/monthly');
          this.data = response.data;
        } catch (error) {
          console.error("Error fetching monthly data:", error);
        }
      },
      async fetchYearlyData() {
        try {
          const response = await axios.get('/api/yearly');
          this.data = response.data;
        } catch (error) {
          console.error("Error fetching yearly data:", error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .dashboard {
    text-align: center;
    padding: 20px;
  }
  
  .buttons {
    margin-bottom: 20px;
  }
  
  button {
    margin: 0 10px;
    padding: 10px 20px;
    font-size: 16px;
  }
  
  .data-display {
    margin-top: 20px;
    white-space: pre-wrap;
    text-align: left;
    background: #f4f4f4;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }
  </style>
