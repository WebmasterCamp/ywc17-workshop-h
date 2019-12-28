<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">ParkCloud</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">
              Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Dropdown</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="row">
        <div class="user-card col-12">
          <img src="../../assets/person.png" class="profile col-md-3 col-sm-12 img-fluid" />
          <div class="detail ml-md-5 col-md-6 col-sm-12">
            <h2>นาย นายนายนาย</h2>
            <br />
            <div class="information">
              <img class="car img-fluid" src="../../assets/car.png" />
              <div class="status ml-3">
                <h4>สถานะรถ</h4>
                <p>{{parkStatus}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row menu mt-5">
        <button :disabled="!isParked" class="col-6 btn btn-success">park car</button>
        <button :disabled="isParked" class="col-6 btn btn-danger">get car</button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return { isParked: false };
  },
  computed: {
    parkStatus: () => {
      return this.isParked ? "ฝากแล้ว" : "ยังไม่ฝาก";
    }
  }
});
</script>

<style lang="scss" scoped>
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