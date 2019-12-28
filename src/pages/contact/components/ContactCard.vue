<template>
  <div>
    <div class="box mt-5">
      <img src="https://via.placeholder.com/150" />
      <div class="ml-4">
        <h4>
          <b>อนันท์ ศรีแก้ว</b>
        </h4>
        <div>
          <img src="../../../assets/full-star.png" />
          <img src="../../../assets/full-star.png" />
          <img src="../../../assets/full-star.png" />
          <img src="../../../assets/empty-star.png" />
          <img src="../../../assets/empty-star.png" />
        </div>
        <p class="mt-3">กำลังขับรถไปที่</p>
        <p>
          <b>บ้านลำดวนอพาร์ทเมนท์</b>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
p,
h4 {
  font-family: "Kanit", sans-serif;
}
p {
  margin: 0;
  line-height: 1.2;
}

img {
  border-radius: 20px;
}

.box {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>