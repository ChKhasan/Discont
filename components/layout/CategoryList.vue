<template lang="html">
  <div class="header-category">
    <div class="container_xl">
      <div class="d-flex header-category_container justify-content-between">
        <div class="d-flex">
          <button><span v-html="navCategory"></span>Katalog</button>
          <ul class="d-flex align-items-center">
            <li>
              <nuxt-link to="/categories"
                ><span v-html="navCatIcon"></span> Aksiyalar</nuxt-link
              >
            </li>
            <li>
              <nuxt-link to="/categories"
                ><span v-html="navCatIcon2"></span>Top tovarlar</nuxt-link
              >
            </li>
            <li>
              <nuxt-link to="/categories"
                ><span v-html="navCatIcon"></span>Brendlar</nuxt-link
              >
            </li>
            <li>
              <nuxt-link to="/categories"
                ><span v-html="navCatIcon2"></span>yetkazib berish</nuxt-link
              >
            </li>
            <li>
              <nuxt-link to="/categories"
                ><span v-html="navCatIcon"></span>xabar qoldirish</nuxt-link
              >
            </li>
          </ul>
        </div>
        <div class="d-flex align-items-center">
          <div class="coin_btn">
            <span><img src="../../assets/images/coin.png" alt="" /></span>
            65 di coin
          </div>
          <nuxt-link class="nav-info" to="/">?</nuxt-link>
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
      navCatIcon: require("../../assets/svg/Category-item.svg?raw"),
      navCatIcon2: require("../../assets/svg/Cat-icon2.svg?raw"),
      categories: [],
    };
  },
  async fetch() {
    const [categories] = await Promise.all([
      this.$axios.$get(`/categories`, {
        params: {
          type: "bestsellers",
          limit: 6,
        },
      }),
    ]);

    this.categories = categories?.categories?.data;
  },
};
</script>
<style lang=""></style>
