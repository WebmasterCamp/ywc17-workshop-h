<template>
  <div class="container">
    <div class="row">
      <div class="col-12 w-70 text-center">
        <img src="https://via.placeholder.com/150" />
        <h4 class="mt-4">กำลังหาคนขับ...</h4>
      </div>
    </div>
  </div>
</template>
<script >
import Vue from "vue";
export default Vue.extend({
  mounted() {
    setTimeout(() => {
      this.$router.push({ name: "SelectDriverPage" });
    }, 5000);
  }
});
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
}

img {
  border-radius: 50%;
}

.row {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>