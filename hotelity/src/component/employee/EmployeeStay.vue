<template>
    <div>
        <h2>담당 투숙 객실</h2>
    <table>
      <thead>
        <tr>
          <th>투숙코드</th>
          <th>예약코드</th>
          <th>체크인시간</th>
          <th>체크아웃시간</th>
          <th>투숙일수</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="room in employee.rooms" :key="room.stayCode">
          <td>{{ room.stayCode }}</td>
          <td>{{ room.bookingCode }}</td>
          <td>{{ room.checkIn }}</td>
          <td>{{ room.checkOut }}</td>
          <td>{{ room.days }}</td>
        </tr>
      </tbody>
    </table>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>