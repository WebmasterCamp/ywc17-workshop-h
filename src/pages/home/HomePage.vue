<template>
  <div>
    <Header />
    <div class="container mt-3">
      <div class="d-flex align-items-center justify-content-center">
        <div class="img-container w-25 flex-grow-1 rounded overflow-hidden">
          <img class="w-100" src="https://via.placeholder.com/150" />
        </div>
        <div class="ml-3">
          <h4>สมชาย</h4>
          <div class="d-flex align-items-center">
            <div>
              <p class="mb-0">สถานะ</p>
              <p class="mb-0">กำลังใช้งาน</p>
            </div>
            <div class="car w-25 flex-grow-1 ml-2">
              <img class="w-100" src="../../assets/real-car.png" />
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex flex-column flex-md-row justify-content-between justify-content-md-center align-items-md-center w-100 py-3">
                    <button
                        :disabled="isParked"
                        @click="handlePark"
                        class="mr-md-5 py-4 align-self-end align-self-md-center type-btn btn btn-link bg-blue text-white d-flex flex-column align-items-center">
                        <p class="mb-0">หาคนจอดรถให้</p>
                    </button>
                    <button
                        :disabled="!isParked"
                        @click="handlePark"
                        class="mt-4 mt-sm-0 ml-md-5 py-4 align-self-start align-self-md-center type-btn btn btn-link bg-grey text-white d-flex flex-column align-items-center">
                        <p class="mb-0">หาคนขับรถให้</p>
                    </button>
                </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Header from '../../components/Header'
export default Vue.extend({
  data() {
    return { isParked: false };
  },
  components: {
    Header
  },  
  computed: {
    parkStatus: () => {
      return this.isParked ? "ฝากแล้ว" : "ยังไม่ฝาก";
    }
  },
  methods: {
    handlePark() {
      this.$router.push({ name: "WaitPage" });
    }
  }
});
</script>

<style lang="scss" scoped>
@import '../../styles/variables';
* {
  font-family: "Kanit", sans-serif;
}

.img-container {
  max-width: 150px;
  @media screen and (max-width: 576px) {
            max-width: 75px;
        }
}
h2 {
  @media only screen and (max-width: 766px) {
    font-size: 1.5rem;
  }
}

h4 {
  @media only screen and (max-width: 766px) {
    font-size: 1rem;
  }
}

.car {
  @media screen and (max-width: 576px) {
            max-width: 75px;
        }
}
.container {
        @media screen and (max-width: 576px) {
            padding: 0px !important;
        }
    }
    .bg-grey {
    background-color: #AAB0BA !important;
  }
  .type-btn {
        width: 180px;
    }
.user-card {
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media only screen and (max-width: 766px) {
    flex-direction: column;
  }

  > .profile {
    display: block;
    max-width: 15%;
    border-radius: 50%;
  }

  > .detail {
    display: flex;
    flex-direction: column;

    > .information {
      display: flex;
      flex-direction: row;
      padding: 0;

      > .car {
        max-width: 20%;
      }

      > .status {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        > h4 {
          font-weight: bold;
        }
      }
    }
  }
  .menu {
    display: flex;
    flex-direction: row;
  }
}
</style>