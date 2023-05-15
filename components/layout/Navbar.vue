<template lang="html">
  <div class="header-navbar">
    <div class="container_xl">
      <div class="d-flex header-navbar_container">
        <div class="d-flex align-items-center">
          <nuxt-link to="/"><span v-html="navLogo" class="nav_logo"></span></nuxt-link>
          <div class="search_input_container">
            <input type="text" placeholder="Noutbuk ..." />
            <span class="search-btn">
              <span v-html="navMic"></span>
              Qidiruv
            </span>
          </div>
        </div>
        <div class="header-navbar_navbar d-flex">
          <ul class="d-flex justify-content-between w-100 align-items-center">
            <li><span v-html="navOrder"></span>Buyurtmalar</li>
            <li><span v-html="navLike"></span> Sevimlilar</li>
            <li><span v-html="navBasket"></span>Savatcha</li>
            <li><span v-html="navComp"></span>Solishtirish</li>
            <li class="nav_profile flex-row" @click="$router.push('/profile/personal-info')">
              <span v-html="navUser"></span>
              <p>profil</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navLogo: require("../../assets/svg/Mask group.svg?raw"),
      navMic: require("../../assets/svg/mic.svg?raw"),
      navSearch: require("../../assets/svg/search.svg?raw"),
      navLike: require("../../assets/svg/Heart.svg?raw"),
      navBasket: require("../../assets/svg/Buy.svg?raw"),
      navComp: require("../../assets/Buy.svg?raw"),
      navOrder: require("../../assets/svg/Order_light.svg?raw"),
      navUser: require("../../assets/svg/User_alt_light.svg?raw"),
    };
  },
};
</script>
<style lang=""></style>
