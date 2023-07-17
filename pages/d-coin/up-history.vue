<template lang="html">
  <div class="page-container d-coin-page">
    <div class="container_xl">
      <div class="page-breadcrumb">
        <nuxt-link to="/">Diskont main page</nuxt-link>
        <nuxt-link to="/"> Di Coin </nuxt-link>
      </div>
      <div class="d-flex page-container-title">
        <div class="d-flex align-items-end">
          <MainTitle title="Di Coin" />
        </div>
      </div>
      <div class="d-coin__tab">
        <nuxt-link to="/d-coin/about">
          <div
            class="d-coin__tab-item"
            :class="{ 'coin-tab__active': $route.name == 'd-coin-about' }"
          >
            <p>Sizning Di Coinlaringiz soni</p>
            <div>
              <span><img src="../../assets/svg/d-coin-tab.svg" alt="" /></span>
              <h6>65 di coin</h6>
            </div>
          </div>
        </nuxt-link>
        <nuxt-link to="/d-coin/down-history">
          <div
            class="d-coin__tab-item coin-tab_down"
            :class="{ 'coin-tab__active': $route.name == 'd-coin-down-history' }"
          >
            <span v-html="download"></span>
            <h5>Tushgan Di Coinlar tarixi</h5>
          </div>
        </nuxt-link>
        <nuxt-link to="/d-coin/up-history">
          <div
            class="d-coin__tab-item coin-tab_down"
            :class="{ 'coin-tab__active': $route.name == 'd-coin-up-history' }"
          >
            <span v-html="upload"></span>
            <h5>Ishlatilgan Di Coinlar tarixi</h5>
          </div>
        </nuxt-link>
      </div>
      <div class="d-coin__body_table">
        <div class="d-coin__table-header">
          <div><p>Di Coin soni</p></div>
          <div><p>Tushgan Di coin</p></div>
          <div><p>Vaqti va sanasi</p></div>
        </div>
        <div class="d-coin__table-row up-history-row">
          <div>
            <p><span v-html="download"></span>+15 ta Di Coin</p>
          </div>
          <div><p>Buyurtma #85852</p></div>
          <div>
            <p>21.05.2023 <span>16:15</span></p>
          </div>
        </div>
        <div class="d-coin__table-row up-history-row">
          <div>
            <p><span v-html="download"></span>+15 ta Di Coin</p>
          </div>
          <div><p>Buyurtma #85852</p></div>
          <div>
            <p>21.05.2023 <span>16:15</span></p>
          </div>
        </div>
        <div class="d-coin__table-row up-history-row">
          <div>
            <p><span v-html="download"></span>+15 ta Di Coin</p>
          </div>
          <div><p>Buyurtma #85852</p></div>
          <div>
            <p>21.05.2023 <span>16:15</span></p>
          </div>
        </div>
        <div class="d-coin__table-row up-history-row">
          <div>
            <p><span v-html="download"></span>+15 ta Di Coin</p>
          </div>
          <div><p>Buyurtma #85852</p></div>
          <div>
            <p>21.05.2023 <span>16:15</span></p>
          </div>
        </div>
        <div class="d-coin__table-row up-history-row">
          <div>
            <p><span v-html="download"></span>+15 ta Di Coin</p>
          </div>
          <div><p>Buyurtma #85852</p></div>
          <div>
            <p>21.05.2023 <span>16:15</span></p>
          </div>
        </div>
        <div class="d-coin__table-row up-history-row">
          <div>
            <p><span v-html="download"></span>+15 ta Di Coin</p>
          </div>
          <div><p>Buyurtma #85852</p></div>
          <div>
            <p>21.05.2023 <span>16:15</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MainTitle from "../../components/Main-title.vue";
export default {
  data() {
    return {
      dcoin: require("../../assets/svg/d-coin-tab.svg?raw"),
      upload: require("../../assets/svg/upload.svg?raw"),
      download: require("../../assets/svg/download.svg?raw"),
    };
  },
  components: { MainTitle },
};
</script>
<style lang="css">
@import "../../assets/css/pages/comparison.css";
@import "../../assets/css/pages/d-coin.css";

</style>
