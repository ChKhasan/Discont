<template lang="html">
  <div class="comparison-page">
    <div class="container_xl">
      <div class="page-breadcrumb">
        <nuxt-link to="/">Diskont main page</nuxt-link>
        <nuxt-link to="/">
          Solishtirish
          <span v-html="arrow"></span>
        </nuxt-link>
      </div>
      <div class="d-flex comparison-page-title">
        <div class="d-flex align-items-end">
          <MainTitle title="Solishtirish" />
          <span class="d-flex align-items-end">8 288 товаров</span>
        </div>
        <a-select
          v-model="value"
          class="categories-filter-select"
          placeholder="Select good person"
          style="width: 252px"
        >
          <a-select-option
            v-for="item in status"
            :key="item?.value"
            :label="item.label"
            :value="item.value"
            >{{ item.label }}
          </a-select-option>
        </a-select>
      </div>
      <div class="comparison-page-body" v-if="compProducts.length > 0">
        <div class="swiper-comparison mySwiper" style="overflow: hidden">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="product in compProducts" :key="product?.id">
              <ComparisonCard :product="product" />
            </div>
            <!-- <div class="swiper-slide">
              <ComparisonCard />
            </div>
            <div class="swiper-slide">
              <ComparisonCard />
            </div>
            <div class="swiper-slide">
              <ComparisonCard />
            </div>
            <div class="swiper-slide">
              <ComparisonCard />
            </div>
            <div class="swiper-slide">
              <ComparisonCard />
            </div>
            <div class="swiper-slide">
              <ComparisonCard />
            </div> -->
          </div>
        </div>
        <div class="swiper-button-prev-comparison">
          <span v-html="arrowCarousel"></span>
        </div>
        <div class="swiper-button-next-comparison">
          <span v-html="arrowCarousel"></span>
        </div>
      </div>
      <div class="empty-box-app" v-else>
        <img src="../assets/images/parcel.png" alt="" />
        <h2>Biror narsani solishtiraylikmi?</h2>
        <p>
          Xususiyatlarni taqqoslash uchun mahsulotlarni qo'shing <br />
          va sizga eng mos keladigan mahsulotni tanlang
        </p>
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
import ComparisonCard from "../components/cards/ComparisonCard.vue";
import MainTitle from "../components/Main-title.vue";
import CategoriesAppCard from "../components/categories/categories-app-banner.vue";

import { Swiper, Navigation, Pagination, EffectCards, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
export default {
  data() {
    return {
      arrow: require("../assets/svg/dropdown-icon.svg?raw"),
      arrowCarousel: require("../assets/svg/Arrow - Left.svg?raw"),
      status: [
        {
          value: "all",
          label: "Barchasi",
        },
        {
          value: "qwerty1",
          label: "Others",
        },
        {
          value: "qwerty2",
          label: "Others",
        },
        {
          value: "qwerty3",
          label: "Others",
        },
      ],
      value: "all",
      compProducts: [],
    };
  },
  mounted() {
    const swiper = new Swiper(".swiper-comparison", {
      slidesPerView: 4,
      spaceBetween: 24,
      effect: "flip",
      flipEffect: {
        slideShadows: false,
      },

      modules: [Navigation, Pagination, EffectCards, Autoplay],
      pagination: false,
      autoplay: {
        delay: 40000,
      },
      // pagination: {
      //   el: ".swiper-pagination-banner",
      //   type: "bullets",
      //   clickable: true,
      // },
      navigation: {
        nextEl: ".swiper-button-next-comparison",
        prevEl: ".swiper-button-prev-comparison",
      },
    });
    swiper.on("activeIndexChange", (swiper) => {});
  },
  computed: {
    comparisonChange() {
      return this.$store.state.comparison.length;
    },
  },
  mounted() {
    let compProductsStore = JSON.parse(localStorage.getItem("comparison"));
    if (compProductsStore.length > 0) {
      console.log(compProductsStore.length);
      this.__GET_PRODUCTS_BY_ID({ products: compProductsStore });
    }
  },
  methods: {
    async __GET_PRODUCTS_BY_ID(dataForm) {
      const data = await this.$store.dispatch(
        "fetchProducts/getComparionsProductsById",
        dataForm
      );
      console.log(data);
      // this.compProducts = data?.products;
      console.log(this.compProducts);
    },
  },
  watch: {
    comparisonChange() {
      let compProducts = JSON.parse(localStorage.getItem("comparison"));
      this.__GET_PRODUCTS_BY_ID({ products: compProducts });
    },
  },
  components: { MainTitle, ComparisonCard, CategoriesAppCard },
};
</script>
<style lang="css">
@import "../assets/css/pages/comparison.css";
</style>
