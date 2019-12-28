<template>
    <div class="bg-blue main-bg">
        <div class="container">
        <div class="mh-100 d-flex flex-column justify-content-center">
            <div>
                <img class="mb-3" src="../../assets/parcloud.png" />
                <h2 class="text-white">ตัวกลาง</h2>
                <div class="text-white">
                    ที่จะเชื่อมต่อผู้ที่พบเจอปัญหา <br> เกี่ยวกับการจอดรถเข้ากับ <br> ผู้ที่ยินดีให้บริการ <br> รับรถไปจอดให้
                </div>
            </div>
            <router-link :to="{name: 'LoginPage'}" class="align-self-end btn bg-white text-blue btn-link border border-light rounded-circle"> > </router-link>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        changePage: { type: Function },
    },
}
</script>
<style lang="scss" scoped>
@import '../../styles/variables';
* {
  font-family: "Mitr", sans-serif;
}
h2 {
    font-size: 40px;
}
img {
    max-width: 80%;
}
.mh-100 {
    height: 100vh;
}    
.main-bg {
    height: 100vh;
}
.text-blue {
    color: $blue;
}
</style>