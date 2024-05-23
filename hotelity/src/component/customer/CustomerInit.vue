<template>
    <div class="container-fluid position-relative d-flex p-0">
      <!-- Spinner Start -->
      <div
        id="spinner"
        class="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div
          class="spinner-border text-primary"
          style="width: 3rem; height: 3rem;"
          role="status"
        >
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      <!-- Spinner End -->
  
      <!-- Sidebar Start -->
      <div class="sidebar pe-4 pb-3">
        <nav class="navbar bg-secondary navbar-dark">
          <a href="index.html" class="navbar-brand mx-4 mb-3">
            <h3 class="text-primary" margin-left="40px">
              <img src='@/assets/img/hotelity_logo.png' width="80%" />
            </h3>
          </a>
  
          <div class="container">
            <div class="clock">
              <h1 id="time"></h1>
            </div>
          </div>
  
          <div class="navbar-nav w-100">
            <router-link to="/test" class="nav-item nav-link"
              ><i class="fa fa-laptop me-2"></i>고객 리스트</router-link
            >
            <router-link to="/test2" class="nav-item nav-link active"
              ><i class="fa fa-th me-2"></i>고객 등록</router-link
            >
          </div>
        </nav>
      </div>
      <!-- Sidebar End -->
  
      <!-- Content Start -->
      <div class="content">
        <!-- Navbar Start -->
        <nav class="navbar navbar-expand bg-secondary navbar-dark sticky-top px-4 py-0">
          <a href="index.html" class="navbar-brand d-flex d-lg-none me-4">
            <h2 class="text-primary mb-0"><i class="fa fa-user-edit"></i></h2>
          </a>
          <a href="#" class="sidebar-toggler flex-shrink-0">
            <i class="fa fa-bars"></i>
          </a>
  
          <div class="navbar-nav align-items-center ms-auto">
            <!-- Existing dropdowns and items -->
            <!-- New Menu Items -->
  
            <a href="" class="nav-item nav-link">고객</a>
            <a href="" class="nav-item nav-link">직원</a>
            <a href="" class="nav-item nav-link">호텔 서비스</a>
            <a href="" class="nav-item nav-link">호텔 관리</a>
            <a href="" class="nav-item nav-link">마케팅</a>
            <a href="" class="nav-item nav-link">영업관리</a>
          </div>
  
          <div class="navbar-nav align-items-center ms-auto">
            <div class="nav-item dropdown">
              <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                <i class="fa fa-envelope me-lg-2"></i>
                <span class="d-none d-lg-inline-flex">Message</span>
              </a>
              <div class="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                <a href="#" class="dropdown-item">
                  <div class="d-flex align-items-center">
                    <img
                      class="rounded-circle"
                      src=""
                      alt=""
                      style="width: 40px; height: 40px;"
                    />
                    <div class="ms-2">
                      <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                      <small>15 minutes ago</small>
                    </div>
                  </div>
                </a>
                <hr class="dropdown-divider" />
                <a href="#" class="dropdown-item">
                  <div class="d-flex align-items-center">
                    <img
                      class="rounded-circle"
                      src=""
                      alt=""
                      style="width: 40px; height: 40px;"
                    />
                    <div class="ms-2">
                      <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                      <small>15 minutes ago</small>
                    </div>
                  </div>
                </a>
                <hr class="dropdown-divider" />
                <a href="#" class="dropdown-item">
                  <div class="d-flex align-items-center">
                    <img
                      class="rounded-circle"
                      src=""
                      alt=""
                      style="width: 40px; height: 40px;"
                    />
                    <div class="ms-2">
                      <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                      <small>15 minutes ago</small>
                    </div>
                  </div>
                </a>
                <hr class="dropdown-divider" />
                <a href="#" class="dropdown-item text-center">See all message</a>
              </div>
            </div>
            <div class="nav-item dropdown">
              <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                <i class="fa fa-bell me-lg-2"></i>
                <span class="d-none d-lg-inline-flex">Notificatin</span>
              </a>
              <div class="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                <a href="#" class="dropdown-item">
                  <h6 class="fw-normal mb-0">Profile updated</h6>
                  <small>15 minutes ago</small>
                </a>
                <hr class="dropdown-divider" />
                <a href="#" class="dropdown-item">
                  <h6 class="fw-normal mb-0">New user added</h6>
                  <small>15 minutes ago</small>
                </a>
                <hr class="dropdown-divider" />
                <a href="#" class="dropdown-item">
                  <h6 class="fw-normal mb-0">Password changed</h6>
                  <small>15 minutes ago</small>
                </a>
                <hr class="dropdown-divider" />
                <a href="#" class="dropdown-item text-center">See all notifications</a>
              </div>
            </div>
            <div class="nav-item dropdown">
              <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                <img
                  class="rounded-circle me-lg-2"
                  src=""
                  alt=""
                  style="width: 40px; height: 40px;"
                />
                <span class="d-none d-lg-inline-flex">John Doe</span>
              </a>
              <div class="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                <a href="#" class="dropdown-item">My Profile</a>
                <a href="#" class="dropdown-item">Settings</a>
                <a href="#" class="dropdown-item">Log Out</a>
              </div>
            </div>
          </div>
        </nav>
        <!-- Navbar End -->
  
        <!-- Table Start -->
        <div class="container-fluid pt-4 px-4">
          <div class="bg-secondary rounded-top p-4">
            <h3 class="mb-4">고객 등록</h3>
            <div class="form-submit">
              <button type="submit" class="btn-submit">등록</button><br /><br />
            </div>
            <form @submit.prevent="handleSubmit">
              <div class="form-group">
                <div class="half">
                  <label for="korean-name">한글 이름:</label>
                  <input type="text" id="korean-name" v-model="form.koreanName" />
                </div>
  
                <div class="half">
                  <label for="english-name">영문 이름:</label>
                  <input type="text" id="english-name" v-model="form.englishName" />
                </div>
              </div>
              <div class="form-group">
                <div class="half">
                  <label for="phone">전화번호:</label>
                  <input type="text" id="phone" v-model="form.phone" />
                </div>
  
                <div class="half">
                  <label for="customer-type">고객 타입:</label>
                  <select id="customer-type" v-model="form.customerType">
                    <option value="personal">개인</option>
                    <option value="business">비즈니스</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <div class="third">
                  <label for="country">국가:</label>
                  <select id="country" v-model="form.country">
                    <option value="kr">대한민국</option>
                    <option value="us">미국</option>
                    <option value="jp">일본</option>
                    <!-- 필요한 다른 국가들 추가 -->
                  </select>
                </div>
                <div class="third">
                  <label for="gender">성별:</label>
                  <select id="gender" v-model="form.gender">
                    <option value="male">남성</option>
                    <option value="female">여성</option>
                    <option value="other">기타</option>
                  </select>
                </div>
                <div class="third">
                  <div class="form-group checkbox-group">
                    <input
                      type="checkbox"
                      id="privacy-consent"
                      v-model="form.privacyConsent"
                    />
                    <label for="privacy-consent">개인정보제공동의</label>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="email">이메일:</label>
                <input type="email" id="email" v-model="form.email" />
              </div>
              <div class="form-group">
                <label for="address">주소:</label>
                <input type="text" id="address" v-model="form.address" style="width: 500px;" />
              </div>
            </form>
          </div>
        </div>
        <!-- Table End -->
      </div>
      <!-- Content End -->
  
      <!-- Back to Top -->
      <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"
        ><i class="bi bi-arrow-up"></i
      ></a>
    </div>
  </template>
  
  <script>

  import $ from 'jquery';
  import '@/css/style.css';

  export default {
    name: 'App',
    data() {
    return {
      form: {
        koreanName: '',
        englishName: '',
        phone: '',
        customerType: 'personal',
        country: 'kr',
        gender: 'male',
        birthdate: '',
        memo: '',
        visitPurpose: 'leisure',
        howFind: 'online'
      }
    };
  },
  mounted() {
    (function ($) {
      "use strict";

      // Spinner
      var spinner = function () {
        setTimeout(function () {
          if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');
          }
        }, 1);
      };
      spinner();
      
      // Back to top button
      $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
          $('.back-to-top').fadeIn('slow');
        } else {
          $('.back-to-top').fadeOut('slow');
        }
      });
      $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
      });

      // Sidebar Toggler
      $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
      });

      // Progress Bar
      $('.pg-bar').waypoint(function () {
        $('.progress .progress-bar').each(function () {
          $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
      }, {offset: '80%'});

      // Calender
      $('#calender').datetimepicker({
        inline: true,
        format: 'L'
      });

      // Testimonials carousel
      $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav : false
      });

      // Clock
      const h1 = document.getElementById("time");

      function getTime() {
        const date = new Date();
        const hour = String(date.getHours()).padStart(2, '0');
        const minute = String(date.getMinutes()).padStart(2, '0');
        const second = String(date.getSeconds()).padStart(2, '0');
        const time = `${hour}:${minute}:${second}`;
        h1.textContent = time;
      }

      // 최초에 한 번 시간 설정
      getTime();

      // 1초마다 getTime 함수를 호출하도록 타이머 설정
      setInterval(getTime, 1000);

     

    })(jQuery);
  }
};
</script>
  
  <style scoped>

  @import "@/css/style.css";
  @import "@/css/bootstrap.min.css"; 

  .filter-container {
    display: none;
    position: absolute;
    top: 50px;
    right: 10px;
    width: 500px;
    padding: 10px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    gap: 10px;
  }
  
  .filter-container::before {
    content: "";
    position: absolute;
    top: -10px;
    right: 20px;
    border-width: 0 10px 10px 10px;
    border-style: solid;
    border-color: transparent transparent white transparent;
  }
  
  .position-relative-container {
    position: relative;
    display: flex;
    justify-content: space-between;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group input,
  .form-group select {
    width: 300px;
    padding: 8px 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .form-group input[type="checkbox"] {
    width: auto;
  }
  
  .form-group select {
    width: 100px;
  }
  
  .form-group input:focus,
  .form-group select:focus {
    border-color: #4c724d;
    outline: none;
  }
  
  .form-group .half {
    display: inline-block;
    width: calc(50% - 10px);
  }
  
  .form-group .half:first-child {
    margin-right: 10px;
  }
  
  .form-group .third {
    display: inline-block;
    width: calc(33% - 10px);
  }
  
  .form-group .third:first-child {
    margin-right: 10px;
  }
  
  .form-group .checkbox-group label {
    margin: 0 0 0 5px;
  }
  
  .btn-submit {
    width: 60px;
    padding: 6px;
    border: none;
    border-radius: 5px;
    background-color: #7f6739;
    color: white;
    font-size: 16px;
    cursor: pointer;
  }
  
  .btn-submit:hover {
    background-color: #7eb17f;
  }
  
  .form-submit {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
    height: 40px;
  }


  
  </style>
  