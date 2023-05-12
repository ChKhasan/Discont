<template lang="html">
  <div class="banner-carousel">
    <div class="flex items-center justify-center">
      <div class="swiper-banner mySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="banner"></div>
          </div>
          <div class="swiper-slide">
            <div class="banner"></div>
          </div>
          <div class="swiper-slide">
            <div class="banner"></div>
          </div>
          <div class="swiper-slide">
            <div class="banner"></div>
          </div>
          <div class="swiper-slide">
            <div class="banner"></div>
          </div>
          <div class="swiper-slide">
            <div class="banner"></div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination-banner"></div>
      <div class="swiper-button-prev-banner">
        <span
          ><svg
            width="13"
            height="11"
            viewBox="0 0 13 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.83331 5.18294L11.8333 5.18294"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.86652 9.19917L1.83318 5.18317L5.86652 1.1665"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            /></svg
        ></span>
      </div>
      <div class="swiper-button-next-banner">
        <span
          ><svg
            width="13"
            height="11"
            viewBox="0 0 13 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.83331 5.18294L11.8333 5.18294"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.86652 9.19917L1.83318 5.18317L5.86652 1.1665"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            /></svg
        ></span>
      </div>
    </div>
    <div></div>
  </div>
</template>
<script>
import { Swiper, Navigation, Pagination, EffectCards, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
export default {
  name: "IndexPage",
  data() {
    return {};
  },
  mounted() {
    const swiper = new Swiper(".swiper-banner", {
      effect: "flip",
      flipEffect: {
        slideShadows: false,
      },

      modules: [Navigation, Pagination, EffectCards, Autoplay],
      pagination: false,
      autoplay: {
        delay: 40000,
      },
      pagination: {
        el: ".swiper-pagination-banner",
        type: "bullets",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next-banner",
        prevEl: ".swiper-button-prev-banner",
      },
    });
    swiper.on("activeIndexChange", (swiper) => {
      console.log(swiper);
    });
  },
};
</script>
<style>
.banner-carousel {
  position: relative;
  overflow: hidden;
}
.banner-carousel .swiper-button-next-banner,
.banner-carousel .swiper-button-prev-banner {
  position: absolute;
  border-radius: 50%;
  top: 170px;
  z-index: 100;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.48);
  cursor: pointer;
}
.banner-carousel .swiper-button-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.banner-carousel .swiper-button-next-banner {
  right: 12px;
}
.banner-carousel .swiper-button-prev-banner {
  left: 12px;
}
.banner-carousel .swiper-button-next-banner span,
.banner-carousel .swiper-button-prev-banner span {
  display: flex;
  align-items: center;
  justify-content: center;
}
.banner-carousel .swiper-button-next-banner span {
  transform: rotate(180deg);
}
.banner {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  overflow: hidden;
  color: #fff;
}
.banner-carousel .banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.banner-carousel .banner {
  width: 100%;
  height: 354px !important;
  background: red;
}
.swiper-pagination-banner {
  position: static;
  margin-top: 11px;
  display: flex;
  justify-content: center;
}
.swiper-pagination-banner .swiper-pagination-bullet {
  width: 11px;
  height: 11px;
  background: #f0f0f0;
  opacity: 1;
}
.swiper-pagination-banner .swiper-pagination-bullet-active {
  width: 20px;
  height: 11px;
  background: #00b2a9;
  border-radius: 46.2px;
}
</style>
