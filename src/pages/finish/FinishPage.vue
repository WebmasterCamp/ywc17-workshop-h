<template>
    <div>
    <div class="container mt-3">
        <div class="d-flex flex-column align-items-center">
            <h4>รถของคุณได้ทำการเข้าจอดเรียบร้อย</h4>
            <div class="cost-container border rounded p-4 border-blue">
                <div class="d-flex justify-content-between">
                    <p class="mb-0">ยอดเงินปัจจุบัน</p>
                    <p class="mb-0">100 บาท</p>
                </div>
                <div class="d-flex justify-content-between">
                    <p class="mb-0">ค่าใช้จ่าย</p>
                    <p class="mb-0">70 บาท</p>
                </div>
                <div class="d-flex justify-content-between">
                    <p class="mb-0">ยอดเงินคงเหลือ</p>
                    <p class="mb-0">30 บาท</p>
                </div>
            </div>
            <button @click="toHome" class="blue-btn btn rounded-pill bg-blue text-white mt-3">กลับสู่หน้าหลัก</button>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    methods: {
    toHome() {
      this.$router.push({ name: "HomePage" });
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../styles/variables';
* {
  font-family: "Kanit", sans-serif;
}
.border-blue {
    border-color: $blue !important;
}
.cost-container {
    min-width: 300px;
}
</style>