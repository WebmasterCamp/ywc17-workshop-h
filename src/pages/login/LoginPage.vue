<template>
    <div class="main-bg">
        <div class="container">
            <div v-if="!type" class="d-flex flex-column align-items-center justify-content-sm-center mh-100">
                <h2 class="head my-3">คุณคือใคร?</h2>
                <div class="d-flex flex-column flex-md-row justify-content-between justify-content-md-center align-items-md-center w-100 py-3">
                    <button
                        @click="() => changeType('owner')"
                        class="mr-md-5 py-4 align-self-end align-self-md-center type-btn btn btn-link bg-blue text-white d-flex flex-column align-items-center">
                        <div class="icon">
                            O
                        </div>
                        <p class="mb-0">เจ้าของรถ</p>
                    </button>
                    <button
                        @click="() => changeType('driver')"
                        class="mt-4 mt-sm-0 ml-md-5 py-4 align-self-start align-self-md-center type-btn btn btn-link bg-blue text-white d-flex flex-column align-items-center">
                        <div>
                            D
                        </div>
                        <p class="mb-0">คนขับ</p>
                    </button>
                </div>
            </div>
            <div class="d-flex flex-column align-items-center justify-content-center mh-100" v-else>
                <div v-if="type === 'owner'" class="d-flex flex-column align-items-center">
                    <PhoneInput v-model="phone" v-if="!phone" :submitPhone="submitPhone" />
                    <OTPInput v-model="phone" v-else :submitOTP="submitOTP" />
                </div>
                <div v-else-if="type === 'driver'" class="d-flex flex-column align-items-center">
                    <PhoneInput />
                </div>
            </div>
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
            this.$router.push({name: 'RegisterPage'})
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../styles/variables';
    .main-bg {
        background-color: $blue;
    }
    .mh-100 {
        height: 100vh;
    }
    .container {
        background-color: white;
        @media screen and (max-width: 576px) {
            padding: 0px !important;
        }
    }
    .head {
        font-family: 'Chonburi';
        font-size: 48px;
        color: $blue;
    }
    .type-btn {
        width: 180px;
    }
</style>