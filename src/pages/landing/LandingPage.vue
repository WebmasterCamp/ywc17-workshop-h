<template>
    <div class="container">
        <div class="d-flex flex-column align-items-center">
            <router-link :to="{name: 'LoginPage'}" class="btn btn-link border border-light rounded-circle"><i class="fas fa-chevron-right"></i></router-link>
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