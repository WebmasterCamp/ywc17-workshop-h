<template>
    <div class="main-bg">
        <div class="container">
            <div v-if="!type" class="d-flex flex-column align-items-center justify-content-sm-center mh-100">
                <h2 class="head my-3">คุณคือใคร?</h2>
                <div class="d-flex flex-column flex-md-row justify-content-between justify-content-md-center align-items-md-center w-100 py-3">
                    <button
                        @click="() => changeType('owner')"
                        class="blue-btn mr-md-5 py-0 py-md-4 align-self-end align-self-md-center type-btn btn btn-link bg-blue text-white">
                        <p class="end-txt ml-auto ml-md-0 mb-1 mt-auto mt-md-0">เจ้าของรถ</p>
                    </button>
                    <button
                        :disabled="true"
                        @click="() => changeType('driver')"
                        class="blue-btn mt-4 mt-sm-0 ml-md-5 py-0 py-md-4 align-self-start align-self-md-center type-btn btn btn-link bg-blue text-white">
                        <p class="start-txt mb-1 mr-auto mr-md-0 mt-auto mt-md-0">คนขับ</p>
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
    .blue-btn {
        width: 180px;
        font-family: 'Chonburi';
        @media screen and (max-width: 576px) {
            height: 150px;
            width: 250px;
            font-size: 18px;
        }
    }
    .head {
        font-family: 'Chonburi';
        font-size: 48px;
        color: $blue;
    }
    .end-txt {
       @media screen and (max-width: 576px) {
           width: 100%;
            text-align: right;
        } 
    }
    .start-txt {
        @media screen and (max-width: 576px) {
           width: 100%;
            text-align: left;
        } 
    }
</style>