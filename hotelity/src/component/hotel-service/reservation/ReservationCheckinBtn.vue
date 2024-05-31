<template>
  <button class="btn btn-secondary checkin-btn" style="background-color: saddlebrown;" @click="checkIn"> 체크인</button>
  <div v-if="showPopup" class="popup">{{ popupMessage }}</div>
</template>

<script setup>
import {ref} from 'vue';
import axios from 'axios';

const props = defineProps({
  checkedRows: Array,
  reservations: Object
});

const showPopup = ref(false);
const popupMessage = ref('');

const checkIn = async () => {
  const checkedReservationCodes = props.checkedRows.filter(code => code !== null);
  for (const reservationCode of checkedReservationCodes) {
    const reservation = props.reservations.content.find(reservation => reservation.reservationCodePk === reservationCode);
    if (reservation.stayStatus !== 1) {
      try {
        await axios.post('http://localhost:8888/hotel-service/stays/checkin',
            {
              reservationCodeFk: reservationCode,
              employeeCodeFk: 4,
              stayPeopleCount: 2
            });
        showPopup.value = true;
        popupMessage.value = '체크인 되었습니다';
        setTimeout(() => {
          showPopup.value = false;
        }, 1000);
        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style>
.checkin-btn {
  margin-right: 8px;
  margin-left: 8px;
}

.popup {
  position: fixed;
  top: 35%;
  left: 45%;
  width: 350px;
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 1.5em;
  border-radius: 10px;
}
</style>