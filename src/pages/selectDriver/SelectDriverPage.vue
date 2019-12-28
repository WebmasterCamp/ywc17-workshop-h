<template>
  <div class="bg">
    <div class="container pt-3">
      <div class="row driver pb-3 pt-3">
        <div class="name col-12 mt-3">
          <div class="row">
            <img class="col-3 picture ml-auto" src="https://via.placeholder.com/150" />
            <h2 class="col-8 text-left d-name">
              Driver
              <br />อนันท์ ศรีแก้ว
            </h2>
          </div>
          <div class="row mt-4">
            <div class="label col-5">
              <h4>ระยะทาง</h4>
              <h4>ค่าใช้จ่าย</h4>
              <h4>สถานที่</h4>
            </div>
            <div class="detail col-7">
              <h4>6 กม</h4>
              <h4>150 บาท</h4>
              <h4>อาคาร หอ A</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="detail2 mt-5">
        <h4>สถานะผู้ขับรถ</h4>
        <img class="img-fluid col-5 maps" src="../../assets/driver-status.png"/>
      </div>
      <div class="btn-group mt-5">
        <button class="pl-3 pr-3 pt-2 pb-1" @click="handlePark">รับ</button>
        <button class="pl-3 pr-3 ml-3 pt-2 pb-1">ยกเลิก</button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  methods: {
    handlePark() {
      this.$router.push({ name: "WaitingPage" });
    }
  }
});
</script>

<style lang="scss" scoped>
* {
  border-collapse: separate;
}

h2 {
  @media only screen and (max-width: 766px) {
    font-size: 1.3rem;
  }
}
h4 {
  @media only screen and (max-width: 766px) {
    font-size: 1rem;
  }
}
.bg {
  background-color: #00298e;
  height: 100%;
}

.driver {
  color: #00298e;
  background-color: white;
  display: flex;
  justify-content: center;
}

.name > .row {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.picture {
  max-width: 20%;
  border-radius: 50%;
}

.detail2 {
  > h4 {
    color: white;
  }
}

.d-name {
  color: black;
  font-weight: bold;
}
.label,
.detail {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.btn-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  > button {
    border-radius: 10px;
    background-color: white;
    width: 2100px;
    outline: none;
    border: none;
  }
}
.maps {
  padding: 0;
}
</style>