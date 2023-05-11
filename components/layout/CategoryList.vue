<template lang="html">
  <div class="header-category">
    <div class="container_xl">
      <div class="d-flex header-category_container justify-content-between">
        <div class="d-flex">
          <button><span v-html="navCategory"></span>Katalog</button>
          <ul class="d-flex align-items-center">
            <li><nuxt-link to="/">Aksiyalar</nuxt-link></li>
            <li><nuxt-link to="/">Top tovarlar</nuxt-link></li>
            <li><nuxt-link to="/">Brendlar</nuxt-link></li>
            <li><nuxt-link to="/">yetkazib berish</nuxt-link></li>
            <li><nuxt-link to="/">xabar qoldirish</nuxt-link></li>
          </ul>
        </div>
        <div class="d-flex align-items-center">
          <div class="coin_btn">
            <span><img src="../../assets/images/coin.png" alt="" /></span>
            65 di coin
          </div>
          <nuxt-link to="/">Qanday ishlaydi?</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navCategory: require("../../assets/svg/category_menu.svg?raw"),
      navCoin: require("../../assets/svg/coin.svg?raw"),
    };
  },
};
</script>
<style lang=""></style>
