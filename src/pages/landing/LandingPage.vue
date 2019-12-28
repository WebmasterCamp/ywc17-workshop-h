<template>
    <div class="container">
        <div>
            <router-link :to="{name: 'login'}" class="btn btn-link border border-light rounded-circle"><i class="fas fa-chevron-right"></i></router-link>
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

</style>