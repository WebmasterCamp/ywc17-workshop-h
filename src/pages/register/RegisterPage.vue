<template>
  <div class="container">
    <div class="row">
      <div class="form col-12">
        <label for="name">ชื่อ</label>
        <input name="name" id="name" />
        <label class="mt-3" for="license-plate">ทะเบียน</label>
        <input name="license-plate" id="license-plate" />
        <label class="mt-3">ยี่ห้อ</label>
        <select name="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>
        <label class="mt-3" for="color">สีรถ</label>
        <input name="color" />
        <button class="mt-5">ข้อตกลงและการใช้งาน</button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({});
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

.row {
  margin: auto;
  width: 40%;

  @media only screen and (max-width: 766px) {
    width: 80%;
  }
}
</style>
