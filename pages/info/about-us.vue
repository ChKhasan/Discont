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
          <h3>B2 savdo qanday amalga oshiriladi?</h3>
          <p>
            simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries, but also
            the leap into electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets containing Lorem
            Ipsum passages, and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when
          </p>
          <h3>B2 savdo qanday amalga oshiriladi?</h3>
          <p>
            simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries, but also
            the leap into electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets containing Lorem
            Ipsum passages, and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when
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
.about-us__container {
  display: grid;
  grid-template-columns: 360px 1fr;
  grid-gap: 54px;
}
.about-us__list ul {
  display: flex;
  flex-direction: column;
}
.about-us__list__active {
  color: var(--yashil, #1f8a70) !important;
}
.about-us__list ul li a {
  padding: 12px;
  padding-left: 55px;
  color: #000;
  font-family: var(--SB_500);
  font-size: 18px;
  font-style: normal;
  line-height: 150%;
  border-radius: 12px;
  display: flex;
}
.about-us__list ul li:nth-child(2n) {
  background: #f7f7f7;
}
.about-us__banner div {
  height: 351px;
  width: 100%;
  background: #d9d9d9;
}
.about-us__body h3 {
  color: #000;
  font-family: var(--SB_600);
  font-size: 24px;
  font-style: normal;
  line-height: 150%;
  margin-top: 32px;
}
.about-us__body p {
  color: #767676;
  font-size: 16px;
  font-style: normal;
  font-family: var(--SB_500);
  line-height: 150%;
  margin-top: 16px;
}
</style>
