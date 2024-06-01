<template>
  <div>
    <h2>Pie Chart</h2>
    <div style="position: relative; width: 50%; margin: auto;">
      <canvas ref="chartCanvas"></canvas>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { Chart, PieController, CategoryScale, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(PieController, CategoryScale, ArcElement, Tooltip, Legend);

export default {
  setup() {
    const chartCanvas = ref(null);
    const chartInstance = ref(null);
    const datacollection = ref({
      labels: ['당일 예약', '당일 투숙'],
      datasets: [
        {
          label: '현황',
          backgroundColor: ['#36A2EB', '#FF6384'],
          data: [60, 40]
        }
      ]
    });

    const options = ref({
      responsive: true,
      maintainAspectRatio: true,
    });

    onMounted(() => {
      if (chartInstance.value) {
        chartInstance.value.destroy();
      }

      chartInstance.value = new Chart(chartCanvas.value.getContext('2d'), {
        type: 'pie',
        data: datacollection.value,
        options: options.value
      });
    });

    return { chartCanvas, datacollection, options };
  }
};
</script>

<style scoped>
h2 {
  text-align: center;
}
</style>
