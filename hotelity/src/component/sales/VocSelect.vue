<template>
    <div class="voc-container">
      <h2>가져올만한 거 일단 뿌려놓고, 스타일 조정해야함 / 답변을 다는 기능과 스타일도 많이 조정해야함</h2>
      <div class="voc-details">
        <h3>VOC 타이틀: {{ voc.vocTitle }}</h3>
        <p>VOC 내용: {{ voc.vocContent }}</p>
        <p>고객명: {{ voc.customerName }}</p>
        <p>직원명: {{ voc.picemployeeName }}</p>
        <p>VOC 카테고리: {{ voc.vocCategory }}</p>
        <p>VOC 작성일자: {{ voc.vocCreatedDate }}</p>
        <p>VOC 처리상태: <span v-if="voc.vocProcessStatus === 1" class="processed">처리완료</span><span v-else class="unprocessed">미처리</span></p>
      </div>
      <form @submit.prevent="submitAnswer" class="answer-form">
        <textarea v-model="answer" placeholder="Write your answer here..." class="answer-textarea"></textarea>
        <button type="submit" class="submit-btn">Submit</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import axios from 'axios';
  
  const router = useRouter();
  const route = useRoute();
  const vocCodePk = route.params;
  
  const fetchVoc = async () => {
    try {
      const response = await axios.get(`http://localhost:8888/sales/vocs/${vocCodePk.id}/voc`);
      console.log('리스폰스데이따', response.data)
      return response.data;
    } catch (error) {
      console.error('Error fetching VOC:', error);
    }
  };
  
  const voc = ref({});
  const answer = ref('');
  
  onMounted(async () => {
    voc.value = await fetchVoc();
  });
  
  // const submitAnswer = async () => {
  //   try {
  //     await axios.post(`/vocs/${voc.value.vocCodePk}/answer`, { answer: answer.value });
  //     alert('Answer submitted successfully!');
  //   } catch (error) {
  //     console.error('Error submitting answer:', error);
  //   }
  // };
  </script>
  
  <style>
  .voc-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .voc-details {
    margin-bottom: 20px;
  }
  
  .voc-details h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .voc-details p {
    margin-bottom: 5px;
  }
  
  .processed {
    color: green;
  }
  
  .unprocessed {
    color: red;
  }
  
  .answer-form {
    display: flex;
    flex-direction: column;
  }
  
  .answer-textarea {
    height: 150px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    resize: vertical;
  }
  
  .submit-btn {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .submit-btn:hover {
    background-color: #0056b3;
  }
  </style>