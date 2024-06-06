<template>
  <div v-if="showModal" class="modal" tabindex="-1" style="display: block; background: rgba(0, 0, 0, 0.5);">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">지점 등록</h5>
          <button type="button" class="btn-close" @click="toggleModal"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="branchCode" class="form-label">지점 코드</label>
              <input type="text" class="form-control" id="branchCode" v-model="formData.branchCodePk">
            </div>
            <div class="mb-3">
              <label for="branchName" class="form-label">지점명</label>
              <input type="text" class="form-control" id="branchName" v-model="formData.branchName">
            </div>
            <div class="mb-3">
              <label for="address" class="form-label">주소</label>
              <input type="text" class="form-control" id="branchAddress" v-model="formData.branchAddress">
            </div>
            <div class="mb-3">
              <label for="phoneNumber" class="form-label">전화번호</label>
              <input type="text" class="form-control" id="branchPhoneNumber" v-model="formData.branchPhoneNumber">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="toggleModal">닫기</button>
          <button type="button" class="btn btn-primary" @click="submitForm">저장</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
