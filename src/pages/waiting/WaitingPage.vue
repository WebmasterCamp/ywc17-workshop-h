<template>
    <div class="container">
        <div class="map overflow-hidden">
            <MockupMap />
        </div>
    </div>
</template>
<script>
import MockupMap from '../../components/waiting/MockupMap'
export default {
    components: {
        MockupMap
    },
    mounted() {
        setTimeout(function() {
            console.log('yayyy')
        }, 10000)
    }
}
</script>
<style lang="scss" scoped>
    .map {
        max-height: 100vh;
    }
</style>