<template>
  <div class="container">
    
    <div class="row">
      <div class="col-12 mb-5">
        <contact-card></contact-card>
      </div>
      <img src="../../assets/contact-box.png" />
    </div>
    <div class="d-flex justify-content-center">
    <button @click="toHome" class="blue-btn btn rounded-pill bg-blue text-white mt-3">เสร็จสิ้น</button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import ContactCard from "./components/ContactCard";
export default Vue.extend({
  components: { ContactCard },
  methods: {
    toHome() {
      this.$router.push({ name: "FinishPage" });
    }
  }
});
</script>
<style lang="scss" scoped>
@import '../../styles/variables';
* {
  font-family: "Kanit", sans-serif;
}
.contact-box {
  width: 70%;
  margin: auto;
}

img {
  margin: 0 auto;
}
</style>