<template lang="html">
  <div class="comparison-page">
    <div class="container_xl">
      <div class="page-breadcrumb">
        <nuxt-link to="/">Diskont main page</nuxt-link>
        <nuxt-link to="/"> Biz haqimizda </nuxt-link>
      </div>
      <div class="d-flex comparison-page-title">
        <div class="d-flex align-items-end">
          <MainTitle title="Biz haqimizda" />
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
          <h3>Biz haqimizda.</h3>
          <p>
            “DIskont” MCHJ 2019 Yilda yirik savdo tarmog’i bo’lib tashkil topgan.
            O’zbekistonda ko’p hildagi maishiy tehnika va elektronika sotishga
            yonaltirilgan. Siz hech qanday qiyinchiliksiz nasiya va naqt pulga tehnika
            sotib olishingiz mumin. Hozirgi vaqtga kelib O’zbekiston bo’yicha 18ta do’kon
            halq hizmatida bo’lib juda ko’p mijozlariga ega. Bizni asosiy maqsadimiz mijoz
            mamnunlgi va halol savdo. Diskont do’konlar tarmog’ida katta asortiment bo’lib
            aynan siz uchun kerakli maishiy tehnika va electron qurilmalarni taqdim etadi.
            Shu bilan birgalikda ishlab chiqaruvchi tomonidan sertifikatlar va zavod
            kafolatiga ega. Albatta Discont tomonidan kelgan mijozlarga qulaylik sifatida
            har bir uskuna haqida to’liq malumot berilib o’tiladi. Malakali hodimlar
            sizning hizmatingizda. Bundan tashqari onson to’lov uchun click payme va uzum
            platformalari bilan birga ish yuritadi.
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
