<template>
    <div v-if="ancillary" class="ancillary-detail">
      <div class="ancillary-image-container">
        <div class="ancillary-images">
          <div class="ancillary-image" v-for="(image, index) in filledAncillaryImageUrls" :key="image.ancillaryImageLink || index">
            <img :src="image.ancillaryImageLink || 'https://via.placeholder.com/150'" alt="Ancillary Image"/>
          </div>
        </div>
      </div>
      <div class="buttonset">
        <button class="upload-button">이미지 업로드</button>
        <div class="setting-button">
          <button class="btn btn-primary btn-sm me-2" @click=""><i class="bi bi-pencil-square"></i></button>
          <button class="btn btn-danger btn-sm" @click="deleteFacility(ancillary.amcillaryCodePk)"><i class="bi bi-trash"></i></button>
        </div>
      </div>
      <div class="ancillary-info">
        <table>
          <tr>
            <th>지점</th>
            <td>{{ ancillary.branchCodeFk }}</td>
          </tr>
          <tr>
            <th>시설명</th>
            <td>{{ ancillary.ancillaryName }}</td>
          </tr>
          <tr>
            <th>시설 카테고리</th>
            <td>{{ ancillary.ancillaryCategoryName }}</td>
          </tr>
          <tr>
            <th>시설 위치</th>
            <td>{{ ancillary.ancillaryLocation }}</td>
          </tr>
          <tr>
            <th>운영 시작 시간</th>
            <td>{{ ancillary.ancillaryOpenTime }}</td>
          </tr>
          <tr>
            <th>운영 종료 시간</th>
            <td>{{ ancillary.ancillaryCloseTime }}</td>
          </tr>
          <tr>
            <th>시설 전화번호</th>
            <td>{{ ancillary.ancillaryPhoneNumber }}</td>
          </tr>
        </table>
      </div>
    </div>
  </template>
  
  <script setup>
  import {ref, onMounted, computed} from 'vue';
  import {useRoute} from 'vue-router';
  import * as api from '@/api/apiService.js';
  // import axios from 'axios';
  
  const route = useRoute();
  const ancillary = ref({
    ancillaryCodePk: '',
    branchCodeFk:'',
    ancillaryName: '',
    ancillaryLocation: '',
    ancillaryOpenTime: '',
    ancillaryCloseTime: '',
    ancillaryPhoneNumber: '',
    ancillaryCategoryCodeFk: '',
    ancillaryCategoryName: ''
  });
  
  const ancillaryImageUrls = ref([]);
  
  
  const filledAncillaryImageUrls = computed(() => {
    const length = ancillaryImageUrls.value.length;
    const emptyImage = {ancillaryImageLink: 'https://via.placeholder.com/150'};
    console.log('이거 ㅜ머임', ancillaryImageUrls.value.map)
    const filledImages = ancillaryImageUrls.value.map(image => {
      console.log('이건뭘까요', image.ancillaryImageLink)
      return image.ancillaryImageLink ? image : emptyImage;
    });
    return length < 5
        ? [...filledImages, ...new Array(5 - length).fill(emptyImage)]
        : filledImages;
  });
  
  const deleteFacility = async (ancillaryCodePk) => {
    if (confirm('해당 지점을 정말 삭제하시겠습니까?')) {
      try {
        await api.deleteFacility(ancillaryCodePk);
      } catch (error) {
        console.error('Error deleting branch:', error);
      }
    }
  };
  
  onMounted(async () => {
    const ancillaryCodePk = route.params.id;
  
    try {
      const response = await api.getAncillary(ancillaryCodePk);
      ancillary.value = response.data.content;
      console.log('ancillary.value', ancillary.value);
      ancillaryImageUrls.value = ancillary.value.ancillaryImageDTOList;
      console.log('ancillaryImageUrls', ancillaryImageUrls.value);
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
  
  
  .ancillary-detail {
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 500px;
  }
  
  .ancillary-image-container {
    display: flex;
    align-items: center;
    overflow-x: auto;
    width: 100%;
  }
  
  .ancillary-images {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    justify-content: flex-start; /* Add this line */
  }
  
  .ancillary-image {
    flex: 0 0 auto; /* Make sure the images do not shrink or grow */
    width: 150px;
    height: 150px;
    margin: 5px; /* Add some margin for spacing */
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .ancillary-image img {
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
  
  .ancillary-info {
    margin-top: 20px;
  }
  
  .ancillary-info table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .ancillary-info th,
  .ancillary-info td {
    border: 1px solid #ddd;
    padding: 8px;
  }
  
  .ancillary-info th {
    background-color: #f2f2f2;
    text-align: left;
  }
  
  .ancillary-info tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  .ancillary-info tr:hover {
    background-color: #ddd;
  }
  
  .ancillary-info th {
    padding-top: 8px;
    padding-bottom: 8px;
    background-color: #baab94;
    color: white;
  }
  </style>
    