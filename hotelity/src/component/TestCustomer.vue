<template>
    <div class="container">
      <h2>고객 정보</h2>
      <div class="customer-info">
        <div class="field-group">
          <button>수정</button>
          <button>삭제</button>
        </div>
        
        <div class="field-group">
          <label>고객 코드</label>
          <input type="text" value="ooooooo" />
        </div>
        <div class="field-group">
          <label>고객 타입</label>
          <input type="text" value="개인" />
        </div>
        <div class="field-group">
          <label>영문 이름</label>
          <input type="text" value="LEE JUN HYUNG" />
        </div>
        <div class="field-group">
          <label>국가</label>
          <input type="text" value="대한민국" />
        </div>
        <div class="field-group">
          <label>이메일</label>
          <input type="email" value="asdasd@asdasd.com" />
        </div>
        <div class="field-group">
          <label>성별</label>
          <input type="text" value="남" />
        </div>
        <div class="field-group">
          <label>회원 멤버십 등급</label>
          <input type="text" value="플래티넘" />
        </div>
        <div class="field-group">
          <label>주소</label>
          <input type="text" value="안양시" />
        </div>
        <div class="field-group">
          <label>가입일자</label>
          <input type="date" value="2024-04-30" />
        </div>
       
      </div>
      <div class="section">
        <h3>결제 내역 <a href="#">+더보기</a></h3>
        <table>
          <thead>
            <tr>
              <th>결제 일자</th>
              <th>결제 종류</th>
              <th>결제 수단</th>
              <th>결제 금액</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2022.01.28</td>
              <td>객실 이용</td>
              <td>카드</td>
              <td>500,000</td>
            </tr>
            <tr>
              <td>2022.07.30</td>
              <td>추가 결제</td>
              <td>카드</td>
              <td>210,000</td>
            </tr>
            <tr>
              <td>2022.07.29</td>
              <td>객실 이용</td>
              <td>카드</td>
              <td>380,000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="section">
        <h3>등록 VOC <a href="#">+더보기</a></h3>
        <table>
          <thead>
            <tr>
              <th>제목</th>
              <th>내용</th>
              <th>처리 상태</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>제목 1</td>
              <td>내용 1</td>
              <td>처리 중</td>
            </tr>
            <tr>
              <td>제목 2</td>
              <td>내용 2</td>
              <td>처리 중</td>
            </tr>
            <tr>
              <td>제목 3</td>
              <td>내용 3</td>
              <td>완료</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="section">
        <h3>보유 쿠폰 <a href="#">+더보기</a></h3>
        <div class="coupons">
          <div class="coupon">사우나 50% 쿠폰</div>
          <div class="coupon">사우나 50% 쿠폰</div>
          <div class="coupon">사우나 50% 쿠폰</div>
          <div class="coupon">사우나 50% 쿠폰</div>
        </div>
      </div>
    </div>
  </template>

<script setup>

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