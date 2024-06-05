<template>
    <div class="campaign-form">
      <h2>캠페인 발송</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
  <label for="template">템플릿:</label>
  <select id="template" v-model="form.template">
    <option disabled value="">템플릿 선택</option>
    <option v-for="template in templates.content" :key="template.templateCodePk" :value="template.templateCodePk">
      {{ template.templateName }}
    </option>
  </select>
</div>
        <div class="form-group">
          <label for="subject">제 목:</label>
          <input type="text" id="subject" v-model="form.subject" />
        </div>
  
        <div class="form-group">
          <label for="customer-level">고객 등급:</label>
          <select id="customer-level" v-model="form.customerLevel">
            <option>등급 선택</option>
            <!-- Add more options here -->
          </select>
        </div>
  
        <div class="form-group">
          <label for="send-method">발송 방식:</label>
          <select id="send-method" v-model="form.sendMethod">
            <option>E-mail</option>
            <option>SMS</option>
          </select>
        </div>
  
        <div class="form-group">
          <label for="send-date">발송 일자:</label>
          <input type="date" id="send-date" v-model="form.sendDate" />
        </div>
  
        <div class="form-group">
          <label for="send-employee">발신 직원:</label>
          <input type="text" id="send-employee" v-model="form.sendEmployee" />
        </div>
  
        <div class="form-group">
          <label for="recipient">발 신:</label>
          <input type="text" id="recipient" v-model="form.recipient" />
        </div>
  
        
  
        <div class="form-group">
          <textarea v-model="form.message" placeholder="메시지 내용을 입력하세요" style="height: 400px;"></textarea>
        </div>
  
        <button type="submit">발송</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue';
  import axios from 'axios';
  
  const form = ref({
  subject: '',
  customerLevel: '',
  sendMethod: '',
  sendDate: '',
  sendEmployee: '',
  recipient: '',
  template: '',
  message: '',
});
  
  const templates = ref([]);
  
  onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8888/marketing/templates');
    templates.value = response.data.data;
    console.log(templates.value)
  } catch (error) {
    console.error('Error fetching templates:', error);
  }
});

watch(() => form.value.template, (newTemplateId) => {
  const selectedTemplate = templates.value.content.find((template) => template.templateCodePk === newTemplateId);
  if (selectedTemplate) {
    form.value.subject = selectedTemplate.templateName;
    form.value.message = selectedTemplate.templateContent;
  }
});
  </script>
  
  <style scoped>
  .campaign-form {
    margin: 0 auto;
    padding: 20px;
    border-radius: 8px;
    /* background-color: #f9f9f9; */
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input,
  select,
  textarea {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
  
  button {
    background-color: #6200ea;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 4px;
  }
  
  button:hover {
    background-color: #3700b3;
  }
  </style>
  