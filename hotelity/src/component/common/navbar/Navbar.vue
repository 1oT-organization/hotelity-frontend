<template>
  <!-- Navbar Start -->
  <div class="nav-container">
    <nav class="navbar navbar-expand bg-secondary navbar-dark sticky-top px-4 py-0">
      <div href="index.html" class="navbar-brand d-flex d-lg-none me-4">
        <h2 class="text-primary mb-0"><i class="fa fa-user-edit"></i></h2>
      </div>
      <div class="sidebar-toggler flex-shrink-0" @click="toggleOpenClass">
        <i class="fa fa-bars"></i>
      </div>

      <div class="navbar-nav align-items-center ms-auto" style="display: flex; gap: 12px;">

        <!-- New Menu Items -->
        <div id="customer" class="nav-item nav-link c-pointer" @click="navigateTo(destination.customer, $event)">고객</div>
        <div id="employee" class="nav-item nav-link c-pointer" @click="navigateTo(destination.employee, $event)">직원</div>
        <div id="hotelService" class="nav-item nav-link c-pointer" @click="navigateTo(destination.hotelService, $event)">호텔 서비스</div>
        <div id="hotelManagement" class="nav-item nav-link c-pointer" @click="navigateTo(destination.hotelManagement, $event)">호텔 관리</div>
        <div id="marketing" class="nav-item nav-link">마케팅</div>
        <div id="sales" class="nav-item nav-link c-pointer" @click="navigateTo(destination.sales, $event)">영업관리</div>

      </div>

      <div class="navbar-nav align-items-center ms-auto">
        <div class="nav-item dropdown">
          <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
            <i class="emoji bi bi-envelope-fill"></i>
            <span class="d-none d-lg-inline-flex">Message</span>
            <i class="bi bi-caret-down-fill dropdown-icon" style="background: none"></i>
          </a>
          <div class="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
            <a href="#" class="dropdown-item">
              <div class="d-flex align-items-center">
                <img class="rounded-circle" src="" alt="" style="width: 40px; height: 40px;">
                <div class="ms-2">
                  <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                  <small>15 minutes ago</small>
                </div>
              </div>
            </a>
            <hr class="dropdown-divider">
            <a href="#" class="dropdown-item">
              <div class="d-flex align-items-center">
                <img class="rounded-circle" src="" alt="" style="width: 40px; height: 40px;">
                <div class="ms-2">
                  <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                  <small>15 minutes ago</small>
                </div>
              </div>
            </a>
            <hr class="dropdown-divider">
            <a href="#" class="dropdown-item">
              <div class="d-flex align-items-center">
                <img class="rounded-circle" src="" alt="" style="width: 40px; height: 40px;">
                <div class="ms-2">
                  <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                  <small>15 minutes ago</small>
                </div>
              </div>
            </a>
            <hr class="dropdown-divider">
            <a href="#" class="dropdown-item text-center">See all message</a>
          </div>
        </div>
        <div class="nav-item dropdown">
          <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
            <i class="emoji bi bi-bell-fill"></i>
            <span class="d-none d-lg-inline-flex">Notificatin</span>
            <i class="bi bi-caret-down-fill dropdown-icon" style="background: none"></i>
          </a>
          <div class="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
            <a href="#" class="dropdown-item">
              <h6 class="fw-normal mb-0">Profile updated</h6>
              <small>15 minutes ago</small>
            </a>
            <hr class="dropdown-divider">
            <a href="#" class="dropdown-item">
              <h6 class="fw-normal mb-0">New user added</h6>
              <small>15 minutes ago</small>
            </a>
            <hr class="dropdown-divider">
            <a href="#" class="dropdown-item">
              <h6 class="fw-normal mb-0">Password changed</h6>
              <small>15 minutes ago</small>
            </a>
            <hr class="dropdown-divider">
            <a href="#" class="dropdown-item text-center">See all notifications</a>
          </div>
        </div>
        <div class="nav-item dropdown">
          <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
            <img class="rounded-circle me-lg-2" src="" alt="" style="width: 40px; height: 40px;">
            <span class="d-none d-lg-inline-flex">John Doe</span>
            <i class="bi bi-caret-down-fill dropdown-icon" style="background: none"></i>
          </a>
          <div class="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
            <a href="#" class="dropdown-item">My Profile</a>
            <a href="#" class="dropdown-item">Settings</a>
            <a href="#" class="dropdown-item">Log Out</a>
          </div>
        </div>
      </div>
    </nav>
  </div>
  <!-- Navbar End -->
</template>
  
<script setup>
  import { onMounted } from "vue";
  import { defineEmits } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const emit = defineEmits(['toggleOpen', 'setMenu']);

  const toggleOpenClass = () => {
    emit('toggleOpen');
  };

  const setSidebarMenu = (menu) => {
    emit('setMenu', menu);
  };

  const destination = {
    customer: {
      name: 'customer',
      path: '/customerList'
    },
    employee: {
      name: 'employee',
      path: '/employeeList'
    },
    hotelService: {
      name: 'hotelService',
      path: '/reservationPage'
    },
    hotelManagement: {
      name: 'hotelManagement',
      path: '/branchList'
    },
    sales: {
      name: 'sales',
      path: '/vocList'
    },
    // marketing: '/marketing',
  };

  const navigateTo = (destination, event) => {
    if (event.target.classList.contains('active')) {
      return;
    }

    router.push(destination.path);
  };

  onMounted(() => {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', function (event) {
        event.stopPropagation();

        const icon = toggle.querySelector('.dropdown-icon');
        if (icon) {
          const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
          icon.style.transform = !isExpanded ? 'rotate(-180deg)' : 'rotate(0deg)';
        }
      });
    });

    document.addEventListener('click', function () {
      dropdownToggles.forEach(toggle => {
        const icon = toggle.querySelector('.dropdown-icon');
        if (icon) {
          icon.style.transform = 'rotate(0deg)';
        }
      });
    });
  });
</script>
  
<style>
  .nav-container .navbar .navbar-nav .nav-link {
    margin-left: 25px;
    padding: 12px 0;
    color: var(--light);
    outline: none;
  }

  .nav-container .navbar .navbar-nav .nav-link:hover,
  .nav-container .navbar .navbar-nav .nav-link.active {
    color: var(--primary);
  }

  .nav-container .navbar .sidebar-toggler,
  .nav-container .navbar .navbar-nav .nav-link i {
    width: 40px;
    height: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: var(--dark);
    border-radius: 40px;
  }

  .nav-container .navbar .dropdown-item {
    color: var(--light);
  }

  .nav-container .navbar .dropdown-item:hover,
  .nav-container .navbar .dropdown-item.active {
    background: var(--dark);
  }

  .nav-container .navbar .dropdown-toggle::after {
    margin-left: 6px;
    vertical-align: middle;
    border: none;
    /* content: "\f107"; */
    font-family: "LINESeedKR-Bd";
    font-weight: 900;
    transition: .5s;
  }

  .nav-container .navbar .dropdown-toggle[aria-expanded=true]::after {
    transform: rotate(-180deg);
  }

  @media (max-width: 575.98px) {
    .nav-container .navbar .navbar-nav .nav-link {
      margin-left: 15px;
    }
  }

</style>