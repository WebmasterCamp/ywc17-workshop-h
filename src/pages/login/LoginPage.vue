<template>
    <div v-if="!type">
        <h2>กรุณาเลือกผู้ใช้งาน</h2>
        <div class="d-flex justify-content-center">
            <div class="d-flex flex-column px-5">
                <button @click="() => changeType('owner')" class="btn btn-link rounded-circle border border-light">
                    O
                </button>
                <p>เจ้าของรถ</p>
            </div>
            <div class="d-flex flex-column px-5">
                <button @click="() => changeType('driver')" class="btn btn-link rounded-circle border border-light">
                    D
                </button>
                <p>คนขับ</p>
            </div>
        </div>
    </div>
    <div v-else>
        <div v-if="type === 'owner'" class="d-flex flex-column align-items-center">
            <p>เจ้าของรถ</p>
            <PhoneInput v-model="phone" v-if="!phone" :submitPhone="submitPhone" />
            <OTPInput v-model="phone" v-else :submitOTP="submitOTP" />
        </div>
        <div v-else-if="type === 'driver'" class="d-flex flex-column align-items-center">
            <p>คนขับ</p>
            <PhoneInput />
        </div>
    </div>
</template>
<script>
import PhoneInput from '../../components/login/PhoneInput'
import OTPInput from '../../components/login/OTPInput'
export default {
    name: 'login',
    components: {
        PhoneInput,
        OTPInput
    },
    data: () => ({
        type: null,
        phone: null,
    }),
    methods: {
        changeType(type) {
            this.type = type
        },
        submitPhone(phone) {
            this.phone = phone    
        },
        submitOTP(otp) {
            console.log(otp)
        }
    }
}
</script>
<style lang="scss" scoped>

</style>