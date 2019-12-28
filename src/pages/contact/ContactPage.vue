<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mb-5">
        <contact-card></contact-card>
      </div>
      <img src="../../assets/contact-box.png" />
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

img {
  margin: 0 auto;
}
</style>