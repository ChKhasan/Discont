<template lang="html">
  <div class="comparison-page">
    <div class="container_xl">
      <div class="page-breadcrumb">
        <nuxt-link to="/">Diskont main page</nuxt-link>
        <nuxt-link to="/"> Maxsulotlarga kafolat </nuxt-link>
      </div>
      <div class="d-flex comparison-page-title">
        <div class="d-flex align-items-end">
          <MainTitle title="Maxsulotlarga kafolat" />
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
          <h3>Kafolat xizmati uchun qayerga murojaat qilishim mumkin?</h3>
          <p>
            Bizning do`konimizdagi tovarlar, tovarlarda zavod nuqsonlari yo`qligi haqidagi
            majburiyatni tasdiqlovchi kafolat bilan ta`minlangan. Kafolat ishlab
            chiqaruvchining xizmat ko`rsatish siyosatiga ko`ra 10 kundan 3 yilgacha
            bo`lgan muddatga taqdim etiladi.
          </p>
          <p>
            Kafolat xizmati, ishlab chiqaruvchilar tomonidan ruxsat etilgan servis
            markazlari tomonidan amalga oshiriladi. Siz mahsulotni kafolatli ta`mirlashga
            yuborishingiz mumkin. Mavjud variantlar kafolat kartangizda ko`rsatilgan.
          </p>
          <p>
            Xizmat ko`rsatish markazlarining manzillari va telefon raqamlarini kafolat
            kartasida yoki xizmat ko`rsatish markazlari ro`yxatida topishingiz mumkin.
          </p>
          <p>
            Agar sizning shahardagi tovarlar uchun xizmat ko'rsatish markazi bo'lmasa, siz
            kompaniyamizning mijozlarga xizmat ko'rsatish bo'limiga murojaat qilishingiz
            mumkin.
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
