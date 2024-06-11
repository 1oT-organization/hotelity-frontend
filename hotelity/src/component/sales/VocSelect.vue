<template>
    <div class="voc-container">
      <div class="voc-details">
        <div class="voc-title">
          <h3>{{ voc.vocTitle }}</h3>
        </div>
        <div class="voc-test">
        <div class="voc-customer">
        <p>{{ voc.customerName }} 님</p>
        </div>
        <div class="voc-category">
        <p>VOC 카테고리: {{ voc.vocCategory }}</p>
        <p>VOC 작성일자: {{ new Date(voc.vocCreatedDate).toLocaleString() }}</p>
      </div>
    </div>
        <div class="voc-content">
          <p>{{ voc.vocContent }}</p>
        </div>
        <div class="voc-process-status">
        <p>VOC 처리상태: <span v-if="voc.vocProcessStatus === 1" class="processed">처리완료</span><span v-else class="unprocessed">미처리</span></p>
        </div>
      </div>
      <form @submit.prevent="submitAnswer" class="answer-form">
        <textarea v-model="answer" placeholder="답변을 입력해주세요." class="answer-textarea"></textarea>
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
  /*
  .voc-container {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    font-family: 'Arial, sans-serif';
  }
  */
  .voc-details h3 {
  font-size: 20px;
  font-weight: 600;
  color: #333;
  text-transform: uppercase;  /* Uppercase text for the title */
  letter-spacing: 1px;  /* Letter spacing for better readability */
}

.voc-details p {
  color: #555;
}

.voc-details p:first-of-type {
  font-weight: 500;  /* Slightly bolder for emphasis */
  color: #000;  /* Darker color for better contrast */
  line-height: 1.5;  /* Improved line height for readability */
}
  
.voc-title {
  border-radius: 10px;
  padding: 10px;
  margin: 10px 0;
  box-shadow: 0 0 10px rgba(0,0,0,0.1); /* Optional: Adds a subtle shadow */
}

.voc-title h3 {
  margin-top: 0.5rem;
}

.voc-content {
  padding: 10px;
  margin: 10px 0;
  box-shadow: 0 0 10px rgba(0,0,0,0.1); /* Optional: Adds a subtle shadow */
  height: 300px;
}

.voc-content p{
  font-size: 15px;
}

.voc-process-status {
  display: flex;
  justify-content: flex-end;
  font-size: 20px;
}

.voc-customer {
  padding: 10px;
  margin: 10px 0;
  box-shadow: 0 0 10px rgba(0,0,0,0.1); 
  width: 150px;
  height: 60px;
  border-radius: 50px;
  background-color: #95ad9d62;
}

.voc-customer p {
  display: flex;
  justify-content: center;
  margin-top: 8px;
  font-size: 18px
}

.voc-test {
  display: flex;
  justify-content: space-between;
}

.voc-category {
  display: grid;
  justify-content: end;
  margin-top: 10px;
}

  .processed {
    color: #28a745;
    font-weight: bold;
  }
  
  .unprocessed {
    color: #dc3545;
    font-weight: bold;
  }
  
  .answer-form {
    display: flex;
    flex-direction: column;
  }
  
  .answer-textarea {
    height: 150px;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 4px;
    resize: vertical;
    font-size: 16px;
    margin-bottom: 20px;
  }
  
  .submit-btn {
    align-self: flex-end;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .submit-btn:hover {
    background-color: #0056b3;
  }
  @media (max-width: 768px) {
  .voc-container {
    padding: 15px;
  }

  .voc-details {
    padding: 15px;
  }

  .voc-details h3 {
    font-size: 20px;
  }

  .voc-details p {
    font-size: 14px;
  }

  .answer-textarea {
    font-size: 14px;
  }

  .submit-btn {
    padding: 8px 16px;
  }
}

@media (max-width: 480px) {
  .voc-container {
    padding: 10px;
  }

  .voc-details {
    padding: 10px;
  }

  .voc-details h3 {
    font-size: 18px;
  }

  .voc-details p {
    font-size: 12px;
  }

  .answer-textarea {
    font-size: 12px;
    padding: 10px;
  }

  .submit-btn {
    padding: 6px 12px;
  }
}
</style>