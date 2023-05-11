<template>
  <div>
    <div class="bg-grey product-container">
      <div class="container_xl px-5 bg-grey">
        <div class="">
          <MainTitle title="Best seller products" />
          <div class="product-grid">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
    <div class="bg-grey product-container">
      <div class="container_xl px-5 bg-grey">
        <div class="">
          <MainTitle title="Best seller products" />
          <div class="product-grid">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
    <div class="container_xl">
      <DiscountCarousel />
    </div>
  </div>
</template>

<script>
import BannerCarousel from "../components/Banner-carousel.vue";
import ProductCard from "../components/cards/ProductCard.vue";
import DiscountCarousel from "../components/discount-carousel.vue";
import MainTitle from "../components/Main-title.vue";
export default {
  name: "IndexPage",

  components: { BannerCarousel, ProductCard, MainTitle, DiscountCarousel },
};
</script>
<style>
@import "../assets/css/pages/main-page.css";
</style>
