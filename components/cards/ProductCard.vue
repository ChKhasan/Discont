<template lang="html">
  <div class="product-card">
    <div class="product-card-header">
      <span class="hover-btns" v-html="like"></span>
      <span class="hover-btns" v-html="comp"></span>
      <span class="pc-img-container"
        ><img
          v-if="product?.images[0]?.sm_img"
          :src="product?.images[0]?.sm_img"
          alt=""
        />
        <img v-else :src="product?.images[0]?.sm_img" alt="" />
      </span>
    </div>
    <div class="product-card-body">
      <h3 class="product-card-title">
        {{
          product?.info?.name?.ru
            ? product?.info?.name?.ru
            : "Кир ювиш машинаси Samsung WW80K42E07SDLD"
        }}
      </h3>
      <p>
        <span v-html="star"></span>{{ product?.info?.stars ? product?.info?.stars : "0" }}
      </p>
      <span class="product-card-price"
        ><h4>{{ product?.price ? product?.price : "5 650 000" }} so’m</h4>
        <span> +5 ta dicoin</span></span
      >
    </div>
    <div class="product-discount">
      <p v-if="product?.discount_price">{{ product?.discount_price }}</p>
    </div>

    <div class="product-card-footer">
      <div><span>В корзину</span>В корзину</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["product"],
  data() {
    return {
      star: require("../../assets/svg/product-star.svg?raw"),
      coin: require("../../assets/svg/product-coin.svg?raw"),
      comp: require("../../assets/svg/product-comp.svg?raw"),
      buy: require("../../assets/svg/product-buy.svg?raw"),
      like: require("../../assets/svg/card-like.svg?raw"),
      view: require("../../assets/svg/view.svg?raw"),
    };
  },
};
</script>
<style lang="css">
@import "../../assets/css/components/ProductCard.css";
.product-card-header {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
.product-card-header:hover .hover-btns {
  right: 12px;
}
.product-card-header:hover .pc-img-container {
  transform: scale(1.1);
}
.hover-btns {
  cursor: pointer;
  position: absolute;
  transition: 0.3s;
  right: -35px;
  background: #ffffff;
  border-radius: 6.00364px;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.06);
}
.hover-btns:first-child {
  top: 12px;
}
.pc-img-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
}
.pc-img-container img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}
.hover-btns:nth-child(2) {
  transition-delay: 0.1s;
  top: 48px;
}
</style>
