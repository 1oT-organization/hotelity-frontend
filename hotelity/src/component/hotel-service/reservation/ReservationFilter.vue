<template>
  <button id="filter-icon" class="btn btn-secondary" style="background-color: saddlebrown;"><i class="bi bi-funnel"></i>
  </button>
  <div class="filter-container">
    <div class="btn-group me-2">
      <select class="form-select">
        <option selected>객실 등급</option>
        <option value="1">개인</option>
        <option value="2">법인</option>
      </select>
    </div>
    <div class="btn-group me-2">
      <select class="form-select">
        <option selected>멤버십 등급 선택</option>
        <option value="1">일반</option>
        <option value="2">골드</option>
        <option value="3">플래티넘</option>
        <option value="4">프리미엄</option>
        <option value="5">VIP</option>
      </select>
    </div>
    <button class="btn btn-primary">적용</button>
  </div>
</template>