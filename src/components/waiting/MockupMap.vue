<template>
    <div class="position-relative">
        <div class="circle-driver position-absolute" />
        <div class="circle-car position-absolute" />
        <img src="../../assets/mockup_map.jpg" class="w-100" />
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .circle-driver {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color: blue;
        animation: scrollBanner 10s;
        top: 48%;
        left: 45%;
        @media screen and (max-width: 576px) {
            width: 15px;
            height: 15px;
        }
        z-index: 100;
    }
    .circle-car {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color: red;
        top: 48%;
        left: 45%;
        @media screen and (max-width: 576px) {
            width: 15px;
            height: 15px;
        }
        z-index: 10;
    }
    @keyframes scrollBanner {
        from {
            top: 55%;
            left: 80%;
        }
        to {
            top: 48%;
            left: 45%;
        }
    }
</style>