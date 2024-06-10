<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="guide-download-container">
        <a href="#" class="guide-download">GUIDE DOWNLOAD</a>
        <a href="https://github.com/1oT-organization/hotelity-backend" class="github-link" target="_blank">
          <i class="fab fa-github"></i>
        </a>
      </div>
      <div class="footer-info">
        <p class="system-support">
          - 시스템지원:1oT
          - Number:010-9874-3010
          - Email:1ot@gmail.com
          - Address:서울특별시동작구보라매로87
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  background: #d3dcd6;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  margin: 1rem;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.guide-download-container {
  margin-bottom: 15px;
}

.guide-download {
  display: inline-block;
  padding: 10px 20px;
  background-color: #333;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  margin-right: 10px;
}

.guide-download:hover {
  background-color: #555;
}

.github-link {
  display: inline-block;
  padding: 10px;
  background-color: #333;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

.github-link i {
  font-size: 20px;
}

.github-link:hover {
  background-color: #555;
}

.footer-info p {
  margin: 5px 0;
}

.footer-info .system-support {
  font-weight: bold;
}
</style>
