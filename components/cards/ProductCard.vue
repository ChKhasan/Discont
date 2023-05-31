<template lang="html">
  <div class="product-card">
    <div class="product-card-header">
      <span class="hover-btns">
        <span
          class="like-active"
          v-html="activeHeart"
          v-if="$store.state.like.includes(product.id)"
          @click="$store.commit('addToStore', { id: product.id, name: 'like' })"
        >
        </span>
        <span
          class="like-inactive"
          v-else
          v-html="like"
          @click="$store.commit('addToStore', { id: product.id, name: 'like' })"
        >
        </span>
      </span>
      <span
        class="hover-btns"
        v-html="comp"
        :class="{ 'active-comparison': $store.state.comparison.includes(product.id) }"
        @click="$store.commit('addToStore', { id: product.id, name: 'comparison' })"
      ></span>
      <div class="fast_show">Быстрый просмотр</div>
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
      <nuxt-link :to="`/product/${product?.slug}`">
        <h3 class="product-card-title">
          {{
            product?.info?.name?.ru
              ? product?.info?.name?.ru
              : "Кир ювиш машинаси Samsung WW80K42E07SDLD"
          }}
        </h3>
      </nuxt-link>
      <p>
        <span v-html="star"></span>{{ product?.info?.stars ? product?.info?.stars : "0" }}
      </p>
      <span class="product-card-price"
        ><h4>
          {{
            product?.price
              ? product?.price
                  .slice(0, product?.price.indexOf("."))
                  .replace(".", ",")
                  .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
              : "5 650 000"
          }}
          so’m
        </h4>
        <span> +5 ta dicoin</span></span
      >
    </div>
    <div class="product-discount">
      <p v-if="product?.discount_price">{{ product?.discount_price }}</p>
      <p>6 120 000</p>
    </div>

    <div class="product-card-footer">
      <div
        class="to-basket-count"
        v-if="$store.state.cart.find((item) => item.id == product.id)"
      >
        <span @click="$store.commit('productCountDown', { id: product.id })">-</span
        >{{ $store.state.cart.find((item) => item.id == product.id)?.count }}
        <span @click="$store.commit('productCountUp', { id: product.id })">+</span>
      </div>
      <div
        class="to-basket-btn"
        v-else
        @click="
          $store.commit('addToCart', { obj: { ...product, count: 1 }, name: 'cart' })
        "
      >
        <span>В корзину</span>В корзину
      </div>
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
      activeHeart: require("../../assets/svg/active-heart.svg?raw"),
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
/* .product-card-header:hover .hover-btns {
  right: 12px;
} */

.product-card-header:hover .pc-img-container {
  transform: scale(1.1);
}
.hover-btns {
  cursor: pointer;
  position: absolute;
  transition: 0.3s;
  right: 12px;
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
.hover-btns {
  display: flex;
  align-items: center;
}
.hover-btns:first-child {
  top: 12px;
}
.like-inactive:hover svg path {
  fill: #ff2525;
}
/* .like-active {
  display: none;
} */
/* .hover-btns:hover .like-inactive {
  display: none;
} */
/* .hover-btns:hover .like-active {
  display: flex;
} */
.hover-btns:hover svg path {
  transition: 0.3s;
}
.hover-btns:hover > svg path {
  fill: var(--color_green);
  stroke: var(--color_green);
}
.active-comparison > svg path {
  fill: var(--color_green);
  stroke: var(--color_green);
}
/* .hover-btns:hover svg path {
  fill: #fff;
} */
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
.product-card-header:hover .fast_show {
  bottom: 90px;
}
.fast_show {
  position: absolute;
  padding: 12px 16px 12px 16px;
  background: #ffffff;
  border: 1px solid #f1f1f1;
  box-shadow: 0px 4px 27px rgba(2, 1, 5, 0.08);
  border-radius: 19px;
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #09454f;
  z-index: 10;
  bottom: -100%;
  transition: 0.3s linear;
  cursor: pointer;
}
</style>
