<template>
  <div class="container">
    <div class="row">
      <div class="form col-12">
        <label for="name">ชื่อ</label>
        <input name="name" id="name" v-model="form.name" />
        <label class="mt-3" for="license-plate">ทะเบียน</label>
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
        <router-link class="link btn btn-primary mt-5" :to="{ name: 'TermsConditionsPage'}"  @click="handleSubmit">ข้อตกลงและการใช้งาน</router-link>
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
label,
input,
select {
  display: block;
}

.form {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.link {

}

.row {
  margin: auto;
  width: 40%;

  @media only screen and (max-width: 766px) {
    width: 80%;
  }
}
</style>
