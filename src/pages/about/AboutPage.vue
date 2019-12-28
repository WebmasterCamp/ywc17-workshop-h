<template>
  <div>
    <Header />
    <div class="container mt-3">
    <div class="img-container mb-3">
                <img class="w-100" src="../../assets/logo.png" />
              </div>
    <p>
        Why ParCloud
        <br>
ทุกวันนี้ นอกจากการที่เราจะต้องฝ่าฟันรถติดบนท้องถนน เรายังต้องทุกข์ทนกับการหาที่จอดรถตามสถานที่ต่างๆที่เราไป ไม่ว่าจะเป็นห้างสรรพสินค้าหรือร้านอาหาร บางครั้งเราใช้เวลามากกว่าครึ่งชั่วโมงในการวนหาที่จอดรถ ซึ่งทุกคนคงเคยประสบพบเจอกับปัญหานี้กันมาบ้าง เราจึงเริ่มคิดถึงความเป็นไปได้ที่เราจะหลีกเลี่ยงการจอดรถเอง ทั้งหมดนี้คือจุดเริ่มต้นของParCloud
    </p>
    <p>
        บางคนอาจจะสงสัยว่า ParCloud คืออะไร ParCloud มาจากคำว่า Parking+Cloud ซึ่งคำว่า cloud ในที่นี้ มีแรงบันดาลใจมาจาก Cloud Storage Server ที่เน้นถึงพื้นที่ในการเก็บข้อมูล และยังเป็นระบบที่พร้อมใช้งานได้ตลอดเวลา นอกจากนี้ยังมีระบบป้องกันข้อมูลเสียหายต่างๆ
    </p>
    <p>
        What impacts we have created to social
        <br>
เนื่องจากบุคคลที่สาม(ผู้รับรถไปจอด) จะได้รับรายได้จากการมาเป็นผู้ให้บริการรับรถหรือนำรถกลับมาให้เจ้าของรถ ซึ่งเราสามารถช่วยสร้างโอกาส สร้างอาชีพ และสร้างความมั่นคงด้านการเงินให้กับผู้คนนับพันในประเทศของเรา
    </p>
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
  max-width: 200px;
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