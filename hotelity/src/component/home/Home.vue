<script setup>
import BarChart from './BarChart.vue';
import PieChart from './PieChart.vue';
import MainContent from './MainContent.vue';

</script>

<template>
  <div class="container-fluid pt-4 px-4">
    <div class="row g-4">
      <BarChart/>
      <PieChart/>
    </div>

    <MainContent/>
  </div>
</template>

<style scoped>

</style>