<template lang="html">
  <div class="comparison-page">
    <div class="container_xl">
      <div class="page-breadcrumb">
        <nuxt-link to="/">Diskont main page</nuxt-link>
        <nuxt-link to="/"> Yetkazib berish </nuxt-link>
      </div>
      <div class="d-flex comparison-page-title">
        <div class="d-flex align-items-end">
          <MainTitle title="Yetkazib berish" />
        </div>
      </div>
      <div class="about-us__container">
        <div class="about-us__list">
          <ul>
            <li>
              <nuxt-link
                :class="{ 'about-us__list__active': $route.name == 'info-about-us' }"
                to="/info/about-us"
                >Biz haqimizda</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                :class="{ 'about-us__list__active': $route.name == 'info-delivery' }"
                to="/info/delivery"
                >Yetkazib berish</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                :class="{ 'about-us__list__active': $route.name == 'info-about-b2b' }"
                to="/info/about-b2b"
                >B2B savdo haqida</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                :class="{ 'about-us__list__active': $route.name == 'info-working' }"
                to="/info/working"
                >Diskontda ishlash</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                :class="{
                  'about-us__list__active': $route.name == 'info-trade-nation',
                }"
                to="/info/trade-nation"
                >Diskontda Nasiya savdo</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                :class="{
                  'about-us__list__active': $route.name == 'info-warranty',
                }"
                to="/info/warranty"
                >Maxsulotlarga kafolat</nuxt-link
              >
            </li>
          </ul>
        </div>
        <div class="about-us__body">
          <div class="about-us__banner">
            <div></div>
          </div>
          <h3>Yetkazib berish</h3>
          <p>
            Diskont do’konlar tarmog’i yetkazib berish hizmatiga ega. Hozirgi kunda
            Toshkent shahri bo’yicha tekinga yetkazib beriladi. Faqatgina katta maishiy
            tehnika yetkazib beriladi. Mahsulotni harid qilgan kundan boshlab 3 ish kuni
            ichida yetkazib beriladi. Mahsulotni olib kelishdan oldin harid qiluvchiga
            habar beriladi va aniq vaqti aytiladi.
          </p>
        </div>
      </div>
    </div>
    <div class="categories-app-banner-container">
      <div class="container_xl">
        <CategoriesAppCard />
      </div>
    </div>
  </div>
</template>
<script>
import MainTitle from "../../components/Main-title.vue";
import CategoriesAppCard from "../../components/categories/categories-app-banner.vue";
export default {
  data() {
    return {};
  },
  mounted() {},

  methods: {},
  components: { MainTitle, CategoriesAppCard },
};
</script>
<style lang="css">
@import "../../assets/css/pages/comparison.css";
@import "../../assets/css/pages/about-us.css";
</style>
