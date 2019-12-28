<template>
    <header>
      <div class="container">
          <div class="desktop-header d-none d-sm-flex justify-content-between align-items-center">
              <div class="img-container">
                  <router-link :to="{name: 'HomePage'}">
                <img class="h-100" src="../assets/logo.png" />
                  </router-link>
              </div>
            <ul class="desktop-header justify-content-center list-unstyled m-0">
                <router-link :to="{name: 'AboutPage'}" class="btn btn-link text-black">เกี่ยวกับเรา</router-link>
                <a href="https://www.facebook.com/parcloud/" class="btn btn-link text-black">Facebook Link</a>
            </ul>
          </div>
        <div class="mobile-header py-1 d-flex d-sm-none justify-content-between align-items-center">
        <div class="img-container">
            <router-link :to="{name: 'HomePage'}">
                <img class="h-100" src="../assets/logo.png" />
                </router-link>
              </div>
          <button class="hamburger-div" @click="() => setShowMenu()">
            <div v-bind:class="{ show: isShowMenu }" id="hamburger">
              <span />
              <span />
              <span />
              <span />
            </div>
          </button>
        </div>
      </div>
      <ul v-bind:class="{ show: isShowMenu }" class="mobile-item d-flex flex-column list-unstyled m-0 d-sm-none">
          <router-link :to="{name: 'AboutPage'}" class="btn btn-link text-black">เกี่ยวกับเรา</router-link>
          <a href="https://www.facebook.com/parcloud/" class="btn btn-link">Facebook Link</a>
    </ul>
    </header>
</template>
<script>
export default {
    data: () => ({
        isShowMenu: false
    }),
    methods: {
        setShowMenu() {
            this.isShowMenu = !this.isShowMenu
        }
    }    
}
</script>
<style lang="scss" scoped>
@import '../styles/variables';
.text-black {
    color: black !important;
}    
p {
    color: black;
    margin-bottom: 0;
}
header {
  height: 60px;
  width: 100%;
  z-index: 200;
  top: 0;
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  .desktop-header {
      height: 60px;
  }

  .mobile-header {
    height: 60px;
    z-index: 150;

    .hamburger-div {
      background: none;
      border: none;
      outline: none;
      #hamburger {
        width: 30px;
        height: 21px;
        position: relative;
        transform: rotate(0deg);
        transition: .5s ease-in-out;
        cursor: pointer;

        &.show {
          span {
            &:nth-child(1),
            &:nth-child(4) {
              top: 9px;
              width: 0%;
              left: 50%;
            }
            &:nth-child(2) {
              transform: rotate(45deg);
            }
            &:nth-child(3) {
              transform: rotate(-45deg);
            }
          }
        }

        span {
          display: block;
          position: absolute;
          height: 3px;
          width: 100%;
          background: black;
          border-radius: 24px;
          opacity: 1;
          left: 0;
          transform: rotate(0deg);
          transition: .25s ease-in-out;
          padding-top: 0 !important;

          &:nth-child(1) {
            top: 0;
          }

          &:nth-child(2),
          &:nth-child(3) {
            top: 9px;
          }

          &:nth-child(4) {
            top: 18px;
          }
        }
      }
    }
  }

  .mobile-item {
    overflow: hidden;
    background-color: white;
    position: fixed;
    top: 60px;
    left: 0;
    width: 100vw;
    max-height: 0;
    transition: max-height 0.3s ease-in-out;
    &.show {
      max-height: 200px;
    }
  }

  .img-container {
      height: 35px;
      img {
          max-height: 35px;
      }    
  }   
}
</style>