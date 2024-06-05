<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

const route = useRoute();
const customer = ref(null);
const customerCodePk = route.params.id;

const fetchCustomer = async () => {
  try {
    const response = await axios.get(`http://localhost:8888/customers/${customerCodePk}/customer`);
    customer.value = response.data;
  } catch (error) {
    console.error('Error fetching customer:', error);
  }
};

onMounted(fetchCustomer);
</script>

<template>
  <div class="customer-container" v-if="customer">
    <div class="customer-header">
      <h2>고객 조회</h2>
    </div>
    <div class="customer-info">
      <div class="info-group">
        <label>고객 코드:</label>
        <span>{{ customer.customerCodePk }}</span>
      </div>
      <div class="info-group">
        <label>이름:</label>
        <span>{{ customer.customerName }}</span>
      </div>
      <div class="info-group">
        <label>이메일:</label>
        <span>{{ customer.customerEmail }}</span>
      </div>
      <div class="info-group">
        <label>전화번호:</label>
        <span>{{ customer.customerPhoneNumber }}</span>
      </div>
      <div class="info-group">
        <label>영문 이름:</label>
        <span>{{ customer.customerEnglishName }}</span>
      </div>
      <div class="info-group">
        <label>주소:</label>
        <span>{{ customer.customerAddress }}</span>
      </div>
      <div class="info-group">
        <label>정보 동의:</label>
        <span>{{ customer.customerInfoAgreement }}</span>
      </div>
      <div class="info-group">
        <label>고객 상태:</label>
        <span>{{ customer.customerStatus }}</span>
      </div>
      <div class="info-group">
        <label>등록 날짜:</label>
        <span>{{ customer.customerRegisteredDate }}</span>
      </div>
      <div class="info-group">
        <label>고객 유형:</label>
        <span>{{ customer.customerType }}</span>
      </div>
      <div class="info-group">
        <label>국가 코드:</label>
        <span>{{ customer.nationCodeFk }}</span>
      </div>
      <div class="info-group">
        <label>성별:</label>
        <span>{{ customer.customerGender }}</span>
      </div>
      <div class="info-group">
        <label>국가 이름:</label>
        <span>{{ customer.nationName }}</span>
      </div>
      <div class="info-group">
        <label>멤버십 레벨:</label>
        <span>{{ customer.membershipLevelName }}</span>
      </div>
    </div>
  </div>
  <div v-else>
    <p>고객 정보를 불러오는 중...</p>
  </div>
</template>

<style scoped>
.customer-container {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
}

.customer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.customer-header h2 {
  margin: 0;
}

.customer-info, .customer-content {
  margin-top: 20px;
}

.info-group, .content-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.info-group label, .content-group label {
  width: 120px;
  font-weight: bold;
}

.info-group span {
  flex: 1;
  text-align: left;
}

.content-group input, .content-group textarea {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

textarea {
  height: 150px;
  resize: none;
}

.customer-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.customer-actions button {
  margin-left: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.customer-actions button:first-of-type {
  background-color: #4caf50;
  color: white;
}

.customer-actions button:last-of-type {
  background-color: #f44336;
  color: white;
}
</style>