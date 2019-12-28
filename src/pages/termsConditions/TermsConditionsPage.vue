<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h1>ข้อตกลงและการใช้งาน</h1>
        <div class="terms text-left">
          hello
          <br />hello
          <br />hello
          <br />hello
          <br />hello
          <br />hello
          <br />hello
          <br />hello
          <br />hello
          <br />hello
          <br />hello
          <br />hello
          <br />hello
          <br />hello
          <br />hello
          <br />hello
          <br />hello
          <br />hello
          <br />hello
          <br />hello
          <br />hello
          <br />hello
          <br />
          <input type="checkbox" name="accept" v-model="accepted" />ฉันยอมรับและเข้าใจสิ่งนี้
          <br />
        </div>
        <button :disabled="!accepted" @click="handleRegister" class="btn btn-primary mt-3">ลงทะเบียน</button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      accepted: false
    };
  },
  methods: {
    handleRegister() {
      this.$router.push({ name: "HomePage" });
    }
  }
});
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.row {
  margin: auto;
  width: 40%;

  @media only screen and (max-width: 766px) {
    width: 80%;
  }
}

.terms {
  overflow-y: scroll;
  height: 50vh;
}
</style>