<!--<template>-->
<!--  <div v-if="showModal" class="modal" tabindex="-1" style="display: block; background: rgba(0, 0, 0, 0.5);">-->
<!--    <div class="modal-dialog">-->
<!--      <div class="modal-content">-->
<!--        <div class="modal-header">-->
<!--          <h5 class="modal-title">지점 등록</h5>-->
<!--          <button type="button" class="btn-close" @click="toggleModal"></button>-->
<!--        </div>-->
<!--        <div class="modal-body">-->
<!--          <form>-->
<!--            <div class="mb-3">-->
<!--              <label for="reservationCodePk" class="form-label">예약 코드</label>-->
<!--              <input type="text" class="form-control" id="reservationCodePk" v-model="reservation.reservationCodePk">-->
<!--            </div>-->
<!--            <div class="mb-3">-->
<!--              <label for="customerName" class="form-label">예약자 성함</label>-->
<!--              <input type="text" class="form-control" id="customerName" v-model="reservation.customerName">-->
<!--            </div>-->
<!--            <div class="mb-3">-->
<!--              <label for="reservationPersonnel" class="form-label">예약 인원</label>-->
<!--              <input type="text" class="form-control" id="reservationPersonnel" v-model="reservation.ReservationPersonnel">-->
<!--            </div>-->
<!--            <div class="mb-3">-->
<!--              <label for="reservationCheckinDate" class="form-label">체크인 일자</label>-->
<!--              <input type="text" class="form-control" id="reservationCheckinDate" v-model="reservation.ReservationCheckinDate">-->
<!--            </div>-->
<!--            <div class="mb-3">-->
<!--              <label for="reservationCheckoutDate" class="form-label">체크아웃 일자</label>-->
<!--              <input type="text" class="form-control" id="reservationCheckoutDate" v-model="reservation.reservationCheckoutDate">-->
<!--            </div>-->
<!--            <div class="mb-3">-->
<!--              <label for="branchName" class="form-label">지점 명</label>-->
<!--              <input type="text" class="form-control" id="branchName" v-model="reservation.branchName">-->
<!--            </div>-->
<!--            <button type="submit" class="btn btn-primary">체크인</button>-->
<!--            <button type="button" class="btn btn-danger" @click="deleteBranch">삭제</button>-->
<!--          </form>-->
<!--        </div>-->
<!--        <div class="modal-footer">-->
<!--          <button type="button" class="btn btn-secondary" @click="toggleModal">닫기</button>-->
<!--          <button type="button" class="btn btn-primary" @click="submitForm">저장</button>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup>-->
<!--import { ref, onMounted, defineProps } from 'vue';-->
<!--import { useRoute, useRouter } from 'vue-router';-->

<!--const route = useRoute();-->
<!--const router = useRouter();-->

<!--const props = defineProps({-->
<!--  reservation: Object-->
<!--});-->

<!--const reservation = ref({-->
<!--  reservationCodePk: '',-->
<!--  customerName: '',-->
<!--  ReservationCancelStatus: '',-->
<!--  ReservationCheckinDate: '',-->
<!--  ReservationCheckoutDate: '',-->
<!--  ReservationPersonnel: '',-->
<!--  RoomNumber: '',-->
<!--  RoomName: '',-->
<!--  RoomLevelName: ''-->
<!--});-->

<!--const fetchBranchInfo = (id) => {-->
<!--  // 실제 API 호출 대신 예제 데이터 사용-->
<!--  const branchData = [-->
<!--    { id: 1, code: 'HQ', name: '본사', address: '서울특별시 동작구 보라매로 87', phone: '02-486-0246' },-->
<!--    { id: 2, code: 'SE', name: '서울 종로점', address: '서울특별시 종로구 오키로 79 마우스빌딩', phone: '02-777-7777' }-->
<!--  ];-->

<!--  const foundBranch = branchData.find(b => b.id === Number(id));-->
<!--  if (foundBranch) {-->
<!--    branch.value = foundBranch;-->
<!--  }-->
<!--};-->

<!--const updateBranch = () => {-->
<!--  console.log('Branch updated:', branch.value);-->
<!--  // 실제 API 호출로 업데이트 수행-->
<!--};-->

<!--const deleteBranch = () => {-->
<!--  console.log('Branch deleted:', branch.value.id);-->
<!--  // 실제 API 호출로 삭제 수행-->
<!--  router.push({ name: 'BranchList' });-->
<!--};-->

<!--onMounted(() => {-->
<!--  fetchBranchInfo(route.params.id);-->
<!--});-->
<!--</script>-->

<!--<style>-->
<!--.container {-->
<!--  margin-top: 20px;-->
<!--}-->
<!--</style>-->
