<template>
    <div v-if="room" class="room-detail">
    <div class="room-image-container">
      <div class="room-images">
        <div class="room-image" v-for="(image, index) in filledRoomImageUrls" :key="image.roomImageLink || index">
  <img :src="image.roomImageLink || 'https://via.placeholder.com/150'" alt="Room Image" />
</div>
      </div>
    </div>
    <div class="buttonset">
<button class="upload-button">이미지 업로드</button>
<div class="setting-button">
<button class="btn btn-primary btn-sm me-2" @click=""><i class="bi bi-pencil-square"></i></button>
                    <button class="btn btn-danger btn-sm" @click="deleteRoom(room.roomCodePk)"><i class="bi bi-trash"></i></button>
                </div>
            </div>
                    <div class="room-info">
  <table>
    <tr>
      <th>지점</th>
      <td>{{ room.branchCodeFk }}</td>
    </tr>
    <tr>
      <th>객실 코드</th>
      <td>{{ room.roomCodePk }}</td>
    </tr>
    <tr>
      <th>객실</th>
      <td>{{ room.roomLevelName }} {{ room.roomName }}</td>
    </tr>
    <tr>
      <th>객실 호수</th>
      <td>{{ room.roomNumber }}</td>
    </tr>
    <tr>
      <th>가격</th>
      <td>{{ room.roomPrice ? '₩' + room.roomPrice.toLocaleString('ko-KR') : '₩0' }}</td>
    </tr>
    <tr>
      <th>사용 가능 인원</th>
      <td>{{ room.roomCapacity }}</td>
    </tr>
    <tr>
      <th>방 갯수</th>
      <td>{{ room.roomSubRoomsCount }}</td>
    </tr>
    <tr>
      <th>화장실 갯수</th>
      <td>{{ room.roomBathroomCount }}</td>
    </tr>
    <tr>
      <th>할인율</th>
      <td>{{ room.roomDiscountRate * 100 + '%' }}</td>
    </tr>
    <tr>
      <th>객실 상세설명</th>
      <td>{{ room.roomSpecificInfo }}</td>
    </tr>
  </table>
</div>
    </div>
  </template>
  
  <script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const room = ref({
  roomCodePk: '',
  branchCodeFk: '',
  roomNumber: '',
  roomName: '',
  roomPrice: 0,
  roomSpecificInfo: '',
  roomSubRoomsCount: 0,
  roomCapacity: 0,
  roomBathroomCount: 0,
  roomDiscountRate: 0,
  roomLevelName: ''
});

const roomImageUrls = ref([]);


const filledRoomImageUrls = computed(() => {
  const length = roomImageUrls.value.length;
  const emptyImage = { roomImageLink: 'https://via.placeholder.com/150' };
  console.log('이거 ㅜ머임', roomImageUrls.value.map)
  const filledImages = roomImageUrls.value.map(image => {
    console.log('이건뭘까요', image.roomImageLink)
    return image.roomImageLink ? image : emptyImage;
  });
  return length < 10
    ? [...filledImages, ...new Array(10 - length).fill(emptyImage)]
    : filledImages;
});

const deleteRoom = async (roomCodePk) => {
  if (confirm('해당 객실을 정말 삭제하시겠습니까?')) {
    try {
      await axios.delete(`http://localhost:8888/hotel-management/rooms/${roomCodePk}`);
    } catch (error) {
      console.error('Error deleting branch:', error);
    }
  }
};

onMounted(async () => {
  const roomCodePk = route.params.id;

  console.log('roomImageUrls', roomImageUrls.value);

console.log('filledRoomImageUrls2', filledRoomImageUrls.value);

  console.log('roomCodePk', roomCodePk);
  console.log('route.params', route.params);
  try {
    const response = await axios.get(`http://localhost:8888/hotel-management/rooms/${roomCodePk}`);
    room.value = response.data.data.content;
    console.log('room.value', room.value);
    roomImageUrls.value = room.value.roomImageDTOList;
    console.log('roomImageUrls', roomImageUrls.value);
  } catch (error) {
    console.error(error);
  }
});
</script>
  
  
<style scoped>

.buttonset {
    display: flex;
    margin-top: 15px;
    justify-content: space-between;
}

.setting-button {
  display: flex;
  width: 30px;
  height: 30px;
  justify-content: flex-end;
}


.room-detail {
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 500px;
}

.room-image-container {
  display: flex;
  align-items: center;
  overflow-x: auto;
  width: 100%; 
}

.room-images {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  justify-content: flex-start; /* Add this line */
}

.room-image {
  flex: 0 0 auto; /* Make sure the images do not shrink or grow */
  width: 150px;
  height: 150px;
  margin: 5px; /* Add some margin for spacing */
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.room-image img {
  max-width: 100%;
  max-height: 100%;
}

.upload-button {
  padding: 5px 10px;
  background-color: #63707e;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 30%;
  height: 30px;
}

.upload-button:hover {
  background-color: #0056b3;
}

.room-info {
  margin-top: 20px;
}

.room-info table {
  width: 100%;
  border-collapse: collapse;
}

.room-info th,
.room-info td {
  border: 1px solid #ddd;
  padding: 8px;
}

.room-info th {
  background-color: #f2f2f2;
  text-align: left;
}

.room-info tr:nth-child(even) {
  background-color: #f9f9f9;
}

.room-info tr:hover {
  background-color: #ddd;
}

.room-info th {
  padding-top: 8px;
  padding-bottom: 8px;
  background-color: #baab94;
  color: white;
}
</style>
  