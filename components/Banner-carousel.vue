<template lang="html">
  <div class="container_xl">
    <div class="banner-carousel">
      <div class="flex items-center justify-center blog relative">
        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide"></div>
            <div class="swiper-slide"></div>
            <div class="swiper-slide"></div>
          </div>
        </div>
        <!-- If pagination is needed -->
        <div class="swiper-pagination"></div>
        <!-- If navigation buttons are needed -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
      <div>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, Navigation, Pagination, EffectCards, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
export default {
  name: "IndexPage",
  mounted() {
    // configure Swiper to use modules. The modules were tested with SwiperJS v6.8.4 with NuxtJS v2.15.7
    // previously it was before export default. Moved here for performance issues. Move back in case of problems.
    // init Swiper:  eslint-disable used for deleting error of unsued const swiper
    /* eslint-disable no-unused-vars */
    const swiper = new Swiper(".swiper", {
      // Optional parameters
      // @see https://swiperjs.com/swiper-api#parameters
      effect: "flip",
      flipEffect: {
        slideShadows: false,
      },
      // grabCursor: true,
      // remove unused modules if needed
      modules: [Navigation, Pagination, EffectCards, Autoplay],
      // Pagination if needed
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      // Autoplay if needed
      autoplay: {
        delay: 40000,
      },

      // Navigation arrows if needed
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    // you can use different options later
    swiper.on("activeIndexChange", (swiper) => {
      console.log(swiper);
    });
  },
};
</script>
<style>
@import "../assets/css/components/BannerCarousel.css";
.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  overflow: hidden;
  color: #fff;
}
.swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.swiper-slide {
  width: 400px;
  height: 400px;
  background: red;
}
</style>
