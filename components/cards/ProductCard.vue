<template lang="html">
  <div class="product-card">
    <div class="product-card-header">
      <span class="hover-btns">
        <span
          class="like-active"
          v-html="activeHeart"
          v-if="$store.state.like.includes(product?.id)"
          @click="$store.commit('addToStore', { id: product?.id, name: 'like' })"
        >
        </span>
        <span
          class="like-inactive"
          v-else
          v-html="like"
          @click="$store.commit('addToStore', { id: product?.id, name: 'like' })"
        >
        </span>
      </span>
      <span
        class="hover-btns"
        v-html="comp"
        :class="{ 'active-comparison': $store.state.comparison.includes(product?.id) }"
        @click="$store.commit('addToStore', { id: product?.id, name: 'comparison' })"
      ></span>
      <div class="fast_show" @click="visible = true">Быстрый просмотр</div>
      <span class="pc-img-container"
        ><img
          v-if="product?.images[0]?.sm_img"
          :src="product?.images[0]?.sm_img"
          alt=""
        />
        <img v-else src="../../assets/images/empty-img.png" alt="" />
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
        <!-- <span> +5 ta dicoin</span> -->
        </span
      >
    </div>
    <div class="product-discount">
      <p v-if="product?.discount_price">{{ product?.discount_price }}</p>
      <!-- <p>6 120 000</p> -->
    </div>

    <div class="product-card-footer">
      <div
        class="to-basket-count"
        v-if="$store.state.cart.find((item) => item.id == product?.id)"
      >
        <span @click="$store.commit('productCountDown', { id: product?.id })">-</span
        >{{ $store.state.cart.find((item) => item.id == product?.id)?.count }}
        <span @click="$store.commit('productCountUp', { id: product?.id })">+</span>
      </div>
      <div
        class="to-basket-btn"
        v-else
        @click="
          $store.commit('addToCart', {
            obj: { id: product?.id, count: 1 },
            name: 'cart',
          })
        "
      >
        <span>В корзину</span>В корзину
      </div>
    </div>
    <a-modal
      v-model="visible"
      :body-style="{ padding: '24px', borderRadius: '14px', minHeight: '613px' }"
      centered
      :closable="false"
      width="1023px"
      @ok="handleOk"
    >
      <div class="product-show-modal">
        <div class="product-show-modal-header">
          <h3>ОФИСНОЕ КРЕСЛО 6206A-2</h3>
          <span @click="handleOk"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M17.9958 1.98438L2.00391 17.9762"
                stroke="#000"
                stroke-width="3.28586"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.0003 17.9861L1.99512 1.97754"
                stroke="#000"
                stroke-width="3.28586"
                stroke-linecap="round"
                stroke-linejoin="round"
              /></svg
          ></span>
        </div>
        <div class="product-show-modal-body">
          <div class="product-show-modal-carousel">
            <a-carousel arrows dots-class="slick-dots slick-thumb">
              <a slot="customPaging" slot-scope="props">
                <img :src="getImgUrl(product?.images, props.i)" />
              </a>
              <div v-for="item in product?.images">
                <img :src="item?.sm_img" />
              </div>
            </a-carousel>
          </div>
          <div class="product-show-modal-info">
            <div class="product-modal-like-comp">
              <span><span v-html="activeHeart"></span> Sevimlilarga</span>
              <span><span v-html="comp"></span> Taqqoslash</span>
            </div>

            <div class="product-modal-price-block">
              <div class="cardo">
                <div class="cardo__header">
                  <div class="discount">
                    <p class="tag">-12%</p>
                    <p class="dis__price">10 540 000 so’m</p>
                    <p class="dis__txt">Chegirma narxida</p>
                  </div>

                  <p class="price">
                    {{
                      `${product?.price}`
                        .replace(".", ",")
                        .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
                    }}
                    so’m
                  </p>

                  <p class="delivery">Yetkazib berish - 0 so’m (21-may)</p>

                  <p class="coin">
                    <img src="@/assets/images/coin.svg" alt="" /> +5 ta dis coin
                  </p>
                </div>

                <div class="buttons">
                  <button class="cart" @click="byMode = true">Savatchaga solish</button>
                  <button class="click">Birgina click orqali sotib olish</button>
                </div>
              </div>
            </div>
            <div class="product-modal-characteristic">
              <h4>Маҳсулот ҳақида қисқача</h4>
              <div>
                <p>Бренд</p>
                <p>Samsung</p>
              </div>
              <div>
                <p>Диагональ</p>
                <p>6,5"</p>
              </div>
              <div>
                <p>Экран тури</p>
                <p>PLS</p>
              </div>
              <div>
                <p>Экраннинг янгиланиш тезлиги</p>
                <p>60 Гц</p>
              </div>
            </div>
            <nuxt-link class="product-modal-show-more" :to="`/product/${product?.slug}`"
              >Maxsulotni ko’proq ko’rish
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="16"
                viewBox="0 0 19 16"
                fill="none"
              >
                <path
                  d="M1 7C0.447715 7 4.82823e-08 7.44772 0 8C-4.82823e-08 8.55228 0.447715 9 1 9L1 7ZM18.7071 8.70711C19.0976 8.31658 19.0976 7.68342 18.7071 7.29289L12.3431 0.928933C11.9526 0.538409 11.3195 0.538409 10.9289 0.928933C10.5384 1.31946 10.5384 1.95262 10.9289 2.34315L16.5858 8L10.9289 13.6569C10.5384 14.0474 10.5384 14.6805 10.9289 15.0711C11.3195 15.4616 11.9526 15.4616 12.3431 15.0711L18.7071 8.70711ZM1 9L18 9L18 7L1 7L1 9Z"
                  fill="#00B2A9"
                /></svg
            ></nuxt-link>
          </div>
        </div>
      </div>
    </a-modal>
    <!-- <a-modal
      v-model="visibleBuy"
      :body-style="{ padding: '24px', borderRadius: '14px', minHeight: '613px' }"
      centered
      :closable="false"
      width="1023px"
      @ok="handleOkBuy"
    >
      <div class="product-show-modal">
        <div class="product-show-modal-body">
          <div class="product-show-modal-carousel product-show-modal-carousel-height">
            <a-carousel arrows dots-class="slick-dots slick-thumb">
              <a slot="customPaging" slot-scope="props">
                <img :src="getImgUrl(product?.images, props.i)" />
              </a>
              <div v-for="item in product?.images">
                <img :src="item?.sm_img" />
              </div>
            </a-carousel>
          </div>
          <div class="product-show-modal-info">
            <div class="product-show-modal-header2">
              <h3>ОФИСНОЕ КРЕСЛО 6206A-2</h3>
              <span @click="handleOkBuy"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M17.9958 1.98438L2.00391 17.9762"
                    stroke="#000"
                    stroke-width="3.28586"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.0003 17.9861L1.99512 1.97754"
                    stroke="#000"
                    stroke-width="3.28586"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  /></svg
              ></span>
            </div>
            <div class="product-modal-like-comp">
              <span><span v-html="activeHeart"></span> Sevimlilarga</span>
              <span><span v-html="comp"></span> Taqqoslash</span>
            </div>
            <div class="product-modal-attribut-block">
              <h6>Цвета</h6>
              <div class="product-modal-colors">
                <span class="product-modal-color"></span>
                <span class="product-modal-color"></span>
                <span class="product-modal-color"></span>
                <span class="product-modal-color"></span>
              </div>
              <h6>Емкость</h6>
              <div class="product-modal-attributs">
                <div class="product-modal-attribut">64 GB</div>
                <div class="product-modal-attribut">128 GB</div>
                <div class="product-modal-attribut">256 GB</div>
                <div class="product-modal-attribut">1 TBGB</div>
              </div>
              <div class="product-modal-count">
                <div><span>-</span>1 <span>+</span></div>
                <p>Осталось всего 4</p>
              </div>
              <nuxt-link class="product-modal-show-more" :to="`/product/${product?.slug}`"
                >Maxsulotni ko’proq ko’rish
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="16"
                  viewBox="0 0 19 16"
                  fill="none"
                >
                  <path
                    d="M1 7C0.447715 7 4.82823e-08 7.44772 0 8C-4.82823e-08 8.55228 0.447715 9 1 9L1 7ZM18.7071 8.70711C19.0976 8.31658 19.0976 7.68342 18.7071 7.29289L12.3431 0.928933C11.9526 0.538409 11.3195 0.538409 10.9289 0.928933C10.5384 1.31946 10.5384 1.95262 10.9289 2.34315L16.5858 8L10.9289 13.6569C10.5384 14.0474 10.5384 14.6805 10.9289 15.0711C11.3195 15.4616 11.9526 15.4616 12.3431 15.0711L18.7071 8.70711ZM1 9L18 9L18 7L1 7L1 9Z"
                    fill="#00B2A9"
                  /></svg
              ></nuxt-link>
              <div class="product-modal-price">
                <h4>25 880 000 СУМ</h4>
                <p>28 880 000 СУМ</p>
              </div>
            </div>
            <div class="product-modal-buy-mode-btns">
              <div>Birgina click orqali sotib olish</div>
              <span
                :class="{
                  'disabled-btn': $store.state.cart.find((item) => item.id == product.id),
                }"
                @click="
                  $store.commit('addToCart', {
                    obj: { id: product.id, count: 1 },
                    name: 'cart',
                  })
                "
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.4222 17.3203C5.8442 17.3203 6.1872 17.6633 6.1872 18.0853C6.1872 18.5073 5.8442 18.8493 5.4222 18.8493C5.0002 18.8493 4.6582 18.5073 4.6582 18.0853C4.6582 17.6633 5.0002 17.3203 5.4222 17.3203Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.6752 17.3203C17.0972 17.3203 17.4402 17.6633 17.4402 18.0853C17.4402 18.5073 17.0972 18.8493 16.6752 18.8493C16.2532 18.8493 15.9102 18.5073 15.9102 18.0853C15.9102 17.6633 16.2532 17.3203 16.6752 17.3203Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M0.75 0.75L2.83 1.11L3.793 12.583C3.871 13.518 4.652 14.236 5.59 14.236H16.502C17.398 14.236 18.158 13.578 18.287 12.69L19.236 6.132C19.353 5.323 18.726 4.599 17.909 4.599H3.164"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.126 8.29492H14.899"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  /></svg
              ></span>
            </div>
          </div>
        </div>
      </div>
    </a-modal> -->
  </div>
</template>
<script>
import "swiper/swiper-bundle.min.css";
const baseUrl =
  "https://raw.githubusercontent.com/vueComponent/ant-design-vue/master/components/vc-slick/assets/img/react-slick/";
export default {
  props: ["product"],
  data() {
    return {
      visible: false,
      byMode: false,
      visibleBuy: false,
      baseUrl,
      star: require("../../assets/svg/product-star.svg?raw"),
      coin: require("../../assets/svg/product-coin.svg?raw"),
      comp: require("../../assets/svg/product-comp.svg?raw"),
      buy: require("../../assets/svg/product-buy.svg?raw"),
      like: require("../../assets/svg/card-like.svg?raw"),
      view: require("../../assets/svg/view.svg?raw"),
      activeHeart: require("../../assets/svg/active-heart.svg?raw"),
    };
  },
  methods: {
    getImgUrl(props, i) {
      return props[i].sm_img;
    },
    handleOkBuy() {
      this.visibleBuy = false;
    },
    handleOk() {
      this.visible = false;
    },
  },
};
</script>
<style lang="css">
@import "../../assets/css/components/ProductCard.css";
@import "../../assets/css/pages/product.css";
.product-show-modal-carousel {
  max-width: 562px;
}
.product-show-modal-carousel .ant-carousel {
  height: 477px;
}
.product-show-modal-carousel-height .ant-carousel {
  height: 463px !important;
}
.ant-carousel .slick-list,
.ant-carousel .slick-slider {
  height: 100%;
}
.ant-carousel .slick-list,
.ant-carousel .slick-track,
.ant-carousel .slick-track div {
  height: 100%;
}
.ant-carousel .slick-slide {
  border: 1px solid #eaeaea;
  border-radius: 12px;
  overflow: hidden;
}
.ant-carousel .slick-slide img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}
.ant-carousel .slick-dots {
  height: auto;
}
.ant-carousel .slick-slide img {
  border: 5px solid #fff;
  display: block;
  margin: auto;
}
.ant-carousel .slick-thumb {
  bottom: -102px;
  display: flex !important;
}
.ant-carousel .slick-thumb .slick-active {
  border: 1.5px solid #1f8a70;
}
.ant-carousel .slick-thumb li {
  width: 86px;
  height: 86px;
  border: 1.5px solid #eaeaea;
  border-radius: 9.06319px;
  margin-right: 16px;
}
.ant-carousel .slick-thumb li a {
  height: 100%;
  width: 100%;
}
.ant-carousel .slick-thumb li img {
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
  object-fit: contain;
}
.ant-carousel .slick-thumb li.slick-active img {
  filter: grayscale(0%);
}
.product-card-header {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

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
}
.active-comparison > svg path {
  fill: var(--color_green);
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
.product-show-modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}
.product-show-modal-header span {
  cursor: pointer;
}
.product-show-modal-header h3 {
  font-family: var(--SB_600);
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #000000;
}
.product-show-modal-body {
  display: grid;
  grid-template-columns: 5.6fr 3.9fr;
  grid-gap: 24px;
}
.product-modal-like-comp {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 16px;
}
.product-modal-like-comp > span {
  display: flex;
  align-items: center;
  padding: 0 14px;
  border: 0.797059px solid #eaeaea;
  border-radius: 7.97059px;
  font-family: var(--SB_500);
  font-style: normal;
  font-weight: 510;
  font-size: 14px;
  line-height: 17px;
  color: #c7c7c7;
  margin-right: 16px;
  height: 33px;
}
.product-modal-like-comp > span > span {
  margin-right: 8px;
}
.product-modal-like-comp > span > span svg path {
  fill: #c7c7c7;
}
.product-modal-characteristic {
  margin-bottom: 21px;
  margin-top: 16px;
}
.product-modal-characteristic h4 {
  font-family: var(--SB_500);
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  margin-bottom: 21px;
}
.product-show-modal-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.product-modal-characteristic div {
  padding-bottom: 9.6px;
  margin-bottom: 9.6px;
  border-bottom: 0.603385px dashed rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
}
.product-modal-characteristic div:last-child {
  padding-bottom: 0;
  margin-bottom: 0;
  border-bottom: none;
}
.product-modal-characteristic div p {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 300;
  font-size: 14.4812px;
  line-height: 17px;
  color: #000000;
}
.product-modal-show-more {
  font-family: var(--SB_500);
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: #00b2a9;
}
.product-modal-show-more svg {
  margin-left: 9.7px;
}
.product-show-modal-header2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.product-show-modal-header2 {
  margin-bottom: 34px;
}
.product-show-modal-header2 h3 {
  font-family: var(--SB_600);
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  color: #000000;
}
.product-show-modal-header2 span svg {
  height: 13px;
}
.product-modal-attribut-block {
  padding-top: 22px;
  margin-top: 8px;
  border-top: 1px solid #eaeaea;
}
.product-modal-attribut-block h6 {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  margin-bottom: 13px;
}
.product-modal-colors {
  display: flex;
  margin-bottom: 24px;
}
.product-modal-color {
  width: 51.5px;
  height: 51.5px;
  background: #ffffff;
  border: 0.606767px solid #dedede;
  border-radius: 4.85414px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 7px;
  cursor: pointer;
}
.product-modal-color::after {
  content: "";
  position: absolute;
  width: 44px;
  height: 44px;
  background: #fbc100;
  border-radius: 4.85414px;
}
.product-modal-attributs {
  display: flex;
  margin-bottom: 24px;
}
.product-modal-attribut {
  padding: 8.8px 23px;
  font-family: var(--SB_500);
  font-style: normal;
  font-weight: 500;
  font-size: 11.3117px;
  line-height: 13px;
  color: #000000;
  background: #ffffff;
  border-radius: 5.02743px;
  margin-right: 8px;
  cursor: pointer;
}
.product-modal-attribut:first-child {
  border: 0.628429px solid #04babe;
}
.product-modal-count {
  display: flex;
  align-items: center;
  margin-bottom: 25px;
}
.product-modal-count div {
  border: 1px solid #f2f2fa;
  border-radius: 4px;
  max-width: 128px;
  width: 128px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #020105;
  padding: 12px 16px;
}
.product-modal-count div span {
  font-size: 30px;
}
.product-modal-count p {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #5d5d5f;
  margin-left: 16px;
}
.product-modal-price {
  display: flex;
  align-items: flex-end;
  margin-top: 17px;
  margin-bottom: 16px;
}
.product-modal-price h4 {
  font-family: var(--SB_600);
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  color: #020105;
}
.product-modal-price p {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-decoration-line: line-through;
  color: #5d5d5f;
  margin-left: 25px;
}
.product-modal-buy-mode-btns {
  display: grid;
  grid-template-columns: auto 56px;
  grid-gap: 16px;
}
.product-modal-buy-mode-btns div {
  font-family: var(--SB_500);
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #1f8a70;
  border: 1px solid #1f8a70;
  border-radius: 10px;
  padding-top: 16px;
  padding-bottom: 16px;
  cursor: pointer;
}
.product-modal-buy-mode-btns span {
  background: #1f8a70;
  border-radius: 10px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.disabled-btn {
  pointer-events: none;
}
</style>
