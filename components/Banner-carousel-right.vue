<template lang="html">
  <div class="banner-carousel-right">
    <div class="flex items-center justify-center">
        <div
          class="swiper-banner-right mySwiper2"
          style="overflow: hidden; height: 354px"
        >
          <div class="swiper-wrapper">
            <slot></slot>
          </div>
        </div>
      <div class="swiper-pagination-banner-right"></div>
    </div>
    <div></div>
  </div>
</template>
<script>
import { Swiper, Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
export default {
  mounted() {
    const swiper = new Swiper(".swiper-banner-right", {
      effect: "flip",
      flipEffect: {
        slideShadows: false,
      },

      modules: [Navigation, Pagination, Autoplay],
      pagination: false,
      autoplay: {
        delay: 1000,
      },
      pagination: {
        el: ".swiper-pagination-banner-right",
        type: "bullets",
        clickable: true,
      },
      navigation: false,
    });
  },
};
</script>
<style>
.banner-carousel-right {
  position: relative;
  overflow: hidden;
}
.banner-carousel-right .swiper-button-next-banner,
.banner-carousel-right .swiper-button-prev-banner {
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
.banner-carousel-right .swiper-button-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.banner-carousel-right .swiper-button-next-banner {
  right: 12px;
}
.banner-carousel-right .swiper-button-prev-banner {
  left: 12px;
}
.banner-carousel-right .swiper-button-next-banner span,
.banner-carousel-right .swiper-button-prev-banner span {
  display: flex;
  align-items: center;
  justify-content: center;
}
.banner-carousel-right .swiper-button-next-banner span {
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
.banner-carousel-right .banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.banner-carousel-right .banner {
  width: 100%;
  height: 354px !important;
  background: red;
}
.swiper-pagination-banner-right {
  position: static;
  margin-top: 11px;
  display: flex;
  justify-content: center;
}
.swiper-pagination-banner-right .swiper-pagination-bullet {
  width: 11px;
  height: 11px;
  background: #f0f0f0;
  opacity: 1;
}
.swiper-pagination-banner-right .swiper-pagination-bullet-active {
  width: 20px;
  height: 11px;
  background: #00b2a9;
  border-radius: 46.2px;
}
</style>
