<template lang="html">
  <div class="header-navbar">
    <div class="container_xl">
      <div class="d-flex header-navbar_container">
        <div class="d-flex align-items-center">
          <span v-html="navLogo" class="nav_logo"></span>
          <div class="search_input_container">
            <input type="text" placeholder="Noutbuk ..." />
            <span>
              <span v-html="navMic"></span>
              <span v-html="navSearch"></span>
            </span>
          </div>
        </div>
        <div class="header-navbar_navbar d-flex">
          <ul class="d-flex justify-content-between w-100 align-items-center">
            <li><span v-html="navOrder"></span>Mening buyurtmam</li>
            <li><span v-html="navLike"></span> Sevimlilar</li>
            <li><span v-html="navBasket"></span>Savatcha</li>
            <li><span v-html="navComp"></span>Taqqoslash</li>
            <li class="nav_profile"><span v-html="navUser"></span><p>profil</p></li>
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
      navLike: require("../../assets/svg/like.svg?raw"),
      navBasket: require("../../assets/svg/basket.svg?raw"),
      navComp: require("../../assets/svg/compres.svg?raw"),
      navOrder: require("../../assets/svg/order.svg?raw"),
      navUser: require("../../assets/svg/user.svg?raw"),
    };
  },
};
</script>
<style lang=""></style>
