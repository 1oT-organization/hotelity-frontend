<template>
  <div class="container" v-if="customer">
    <h2>고객 정보</h2>
    <button class="close-btn" @click="closeNotice">✖</button>
    <div class="customer-info">
      <div class="field-group">
        <button>수정</button>
        <button>삭제</button>
      </div>

      <div class="field-group">
        <label>고객 코드</label>
        <input type="text" v-model="customer.customerCodePk" />
      </div>
      <div class="field-group">
        <label>고객 타입</label>
        <input type="text" v-model="customer.customerType" />
      </div>
      <div class="field-group">
        <label>이름</label>
        <input type="text" v-model="customer.customerName" />
      </div>
      <div class="field-group">
        <label>영문 이름</label>
        <input type="text" v-model="customer.customerEnglishName" />
      </div>
      <div class="field-group">
        <label>국가</label>
        <input type="text" v-model="customer.nationName" />
      </div>
      <div class="field-group">
        <label>이메일</label>
        <input type="email" v-model="customer.customerEmail" />
      </div>
      <div class="field-group">
        <label>성별</label>
        <input type="text" v-model="customer.customerGender" />
      </div>
      <div class="field-group">
        <label>회원 멤버십 등급</label>
        <input type="text" v-model="customer.membershipLevelName" />
      </div>
      <div class="field-group">
        <label>주소</label>
        <input type="text" v-model="customer.customerAddress" />
      </div>
      <div class="field-group">
        <label>가입일자</label>
        <input type="date" v-model="customer.customerRegisteredDate" />
      </div>

    </div>
    <div class="section">
      <h3>결제 내역 <a v-if="customer.payment.length > 0" href="#">+더보기</a></h3>
      <table v-if="customer.payment.length > 0">
        <thead>
        <tr>
          <th>결제 일자</th>
          <th>결제 종류</th>
          <th>결제 수단</th>
          <th>결제 금액</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(customerPayment, index) in customer.payment" :key="index">
          <td>{{customerPayment.paymentDate}}</td>
          <td>{{customerPayment.paymentTypeName}}</td>
          <td>{{customerPayment.paymentMethod}}</td>
          <td>{{customerPayment.paymentAmount}}</td>
        </tr>
        </tbody>
      </table>
      <p v-else>결제 내역이 없습니다.</p>
    </div>
    <div class="section">
      <h3>등록 VOC <a v-if="customer.voc.length > 0" href="#">+더보기</a></h3>
      <table v-if="customer.voc.length > 0">
        <thead>
        <tr>
          <th>제목</th>
          <th>내용</th>
          <th>처리 상태</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(customerVoc, index) in customer.voc" :key="index">
          <td>{{ customerVoc.vocTitle }}</td>
          <td>{{ customerVoc.vocContent }}</td>
          <td>{{ customerVoc.vocProcessStatus === 0 ? "처리 중" : "처리 완료" }}</td>
        </tr>
        </tbody>
      </table>
      <p v-else>등록된 VOC가 없습니다.</p>
    </div>
<!--  고객 쿠폰 정보는 API 수정 필요,,  -->
<!--  쿠폰 정보는 없고 투숙 정보 있음.. 어떤 항목 표현할 지 논의 필요  -->
<!--    <div class="section">-->
<!--      <h3>보유 쿠폰 <a href="#">+더보기</a></h3>-->
<!--      <div class="coupons">-->
<!--        <div class="coupon">사우나 50% 쿠폰</div>-->
<!--        <div class="coupon">사우나 50% 쿠폰</div>-->
<!--        <div class="coupon">사우나 50% 쿠폰</div>-->
<!--        <div class="coupon">사우나 50% 쿠폰</div>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script setup>
import {useRoute, useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import axios from "axios";
import {getCustomer} from "@/api/apiService";

const router = useRouter();
const route = useRoute();
const customer = ref(null);
const customerCodePk = route.params;

console.log('customerCodePk',customerCodePk);

const fetchCustomer = async () => {
  try {
    const response = await getCustomer(customerCodePk.id);
    console.log('response',response)
    customer.value = response;
  } catch (error) {
    console.error('Error fetching customer:', error);
  }
};

const closeNotice = () => {
  router.back();
};

onMounted(() => {
  fetchCustomer();
});

</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
.customer-info {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.field-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}
.field-group label {
  margin-bottom: 5px;
}
.field-group input,
.field-group select,
.field-group button {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.field-group button {
  margin-top: 10px;
}
.section {
  margin-top: 20px;
}
.section h3 {
  display: flex;
  justify-content: space-between;
}
table {
  width: 100%;
  border-collapse: collapse;
}
table th,
table td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: left;
}
.coupons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.coupon {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}
</style>