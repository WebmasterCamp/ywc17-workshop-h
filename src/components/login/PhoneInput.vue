<template>
    <form @submit="(e) => {
            e.preventDefault();

            if (!/^[0-9]{9}$/.test(phone)) {
                error = true
                return
            }

            const newPhone = '+66' + phone
            submitPhone(newPhone)
        }">
        <div class="form-row align-items-center">
            <div class="col-auto">
                <label class="sr-only" for="phone">เบอร์โทรศัพท์</label>
                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">+66</div>
                    </div>
                    <input type="text" v-model="phone" class="form-control" id="phone" placeholder="เบอร์โทรศัพท์">
                </div>
            </div>
        </div>
        <p v-if="error" class="text-danger">เบอร์โทรศัพท์ไม่ถูกต้อง</p>
        <button type="submit" class="btn btn-link border border-light rounded-circle"><i class="fas fa-chevron-right"></i></button>
    </form>
</template>
<script>
export default {
    props: {
        submitPhone: { type: Function },
    },
    data: () => ({
        error: false,
        phone: ''
    }),
}
</script>
<style lang="scss" scoped>

</style>