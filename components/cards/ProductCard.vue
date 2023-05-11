<template lang="html">
  <div class="product-card">
    <div class="product-card-header">
      <img src="../../assets/images/image 11.png" alt="" />
    </div>
    <div class="product-card-body">
      <h3 class="product-card-title">Samsung W M</h3>
      <p><span v-html="star"></span>5.9 (13 ta izohlar)</p>
      <span class="product-card-price"
        ><h4>5 650 000 so’m</h4>
        x 12 oy</span
      >
      <span class="product-card-coin"><span v-html="coin"></span>+5 ta dis coin</span>
    </div>
    <div class="product-card-footer">
      <div>sotib olish</div>
      <span v-html="comp"></span>
      <span v-html="buy"></span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      star: require("../../assets/svg/product-star.svg?raw"),
      coin: require("../../assets/svg/product-coin.svg?raw"),
      comp: require("../../assets/svg/product-comp.svg?raw"),
      buy: require("../../assets/svg/product-buy.svg?raw"),
    };
  },
};
</script>
<style lang="css">
@import "../../assets/css/components/ProductCard.css";
</style>
