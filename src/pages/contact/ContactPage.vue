<template>
  <div>
    <contact-card></contact-card>
    <div class="ml-auto contact-box w-70">
      <h4>ติดต่อผู้ขับรถ</h4>
      <p class="mb-3">ผู้ขับรถ</p>
      <div>
        <img />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import ContactCard from "./components/ContactCard";
export default Vue.extend({
  components: { ContactCard }
});
</script>
<style lang="scss" scoped>
.contact-box {
  width: 70%;
  margin: auto;
}
</style>