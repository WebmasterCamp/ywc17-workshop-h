<template>
<div class="main-bg">
  <div class="container">
    <div class="row align-items-center mh-100">
      <div class="form col-12">
        <label for="name">ชื่อ</label>
        <input name="name" id="name" v-model="form.name" />
        <label class="mt-3" for="license-plate">ทะเบียนรถ</label>
        <input name="license-plate" id="license-plate" v-model="form.license" />
        <label class="mt-3">ยี่ห้อ</label>
        <select name="cars" v-model="form.brand">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>
        <label class="mt-3" for="color">สีรถ</label>
        <input name="color" v-model="form.color" />
        <router-link class="blue-btn link btn rounded-pill bg-blue text-white mt-5" :to="{ name: 'TermsConditionsPage'}"  @click="handleSubmit">ข้อตกลงและการใช้งาน</router-link>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  data () {
    return {
      form: {
        name: "",
        license: "",
        brand: "",
        color: ""
      }
    };
  },
  methods: {
    handleSubmit () {
      console.log(this.form);
    }
  }
});
</script>

<style lang="scss" scoped>
@import '../../styles/variables';
label,
input,
select {
  display: block;
}
label {
  color: $blue;
  font-family: 'Chonburi';
  font-size: 16px;
}
.mh-100 {
        height: 100vh;
    }
input {
  border-color: $blue;
  border-radius: 50rem;
  background-color: transparent;
  outline: none;
  padding: 0 5px;
}
.main-bg {
        background-color: $blue;
    }

.form {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.container {
        background-color: white;
        @media screen and (max-width: 576px) {
            padding: 0px !important;
        }
    }

.link {

}

.blue-btn {
  font-family: 'Chonburi';
}

.row {
  margin: auto;
  width: 40%;

  @media only screen and (max-width: 767px) {
    width: 80%;
  }
}
</style>
