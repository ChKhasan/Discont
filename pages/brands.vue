<template lang="html">
  <div class="categories-page-inner">
    <div class="container_xl">
      <div class="page-breadcrumb">
        <nuxt-link to="/">Diskont main page</nuxt-link>
        <nuxt-link to="/">
          Smartfonlar
          <span v-html="arrow"></span>
        </nuxt-link>
      </div>
      <div class="d-flex categories-page-title">
        <MainTitle title="Barcha brendlar" />
        <span>8 288 товаров</span>
      </div>
      <div class="brands-grid">
        <div class="d-flex justify-content-center flex-column">
          <BrandCard />
          <p class="brand-title">Samsung</p>
        </div>
        <div class="d-flex justify-content-center flex-column">
          <BrandCard />
          <p class="brand-title">Samsung</p>
        </div>
        <div class="d-flex justify-content-center flex-column">
          <BrandCard />
          <p class="brand-title">Samsung</p>
        </div>
        <div class="d-flex justify-content-center flex-column">
          <BrandCard />
          <p class="brand-title">Samsung</p>
        </div>
        <div class="d-flex justify-content-center flex-column">
          <BrandCard />
          <p class="brand-title">Samsung</p>
        </div>
        <div class="d-flex justify-content-center flex-column">
          <BrandCard />
          <p class="brand-title">Samsung</p>
        </div>
        <div class="d-flex justify-content-center flex-column">
          <BrandCard />
          <p class="brand-title">Samsung</p>
        </div>
        <div class="d-flex justify-content-center flex-column">
          <BrandCard />
          <p class="brand-title">Samsung</p>
        </div>
        <div class="d-flex justify-content-center flex-column">
          <BrandCard />
          <p class="brand-title">Samsung</p>
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
import MainTitle from "../components/Main-title.vue";
import CategoriesCard from "../components/cards/CategoriesCard.vue";
import ProductCard from "../components/cards/ProductCard.vue";
import CategoriesAppCard from "../components/categories/categories-app-banner.vue";
import CategoriesInnerBannerCarousel from "../components/categories/categoriesInner-banner-carousel.vue";
import CategoriesInnerBanner from "../components/categories/categoriesInner-banner.vue";
import CategoriesTabCarousel from "../components/categories/categoriesInner-tab-carousel.vue";
import BrandCard from "../components/cards/BrandCard.vue";
export default {
  data() {
    return {
      arrow: require("../assets/svg/dropdown-icon.svg?raw"),
      filterX: require("../assets/svg/selected-filter-x.svg?raw"),
      value: "all",
      disabled: false,
      status: [
        {
          value: "all",
          label: "Barchasi",
        },
        {
          value: "qwerty1",
          label: "Goodman",
        },
        {
          value: "qwerty2",
          label: "Goodman",
        },
        {
          value: "qwerty3",
          label: "Goodman",
        },
      ],
    };
  },
  methods: {
    onChange(value) {
      console.log("change: ", value);
    },
    onAfterChange(value) {
      console.log("afterChange: ", value);
    },
  },
  components: {
    MainTitle,
    CategoriesCard,
    ProductCard,
    CategoriesAppCard,
    CategoriesInnerBannerCarousel,
    CategoriesInnerBanner,
    CategoriesTabCarousel,
    BrandCard,
  },
};
</script>
<style lang="css">
@import "../assets/css/pages/categories.css";
.brands-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 24px;
}
.brand-title {
  font-family: var(--SB_500);
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 130%;
  text-align: center;
  color: #000000;
  margin-top: 18px;
}
</style>
