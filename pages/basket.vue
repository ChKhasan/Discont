<template lang="html">
  <div class="comparison-page">
    <div class="container_xl">
      <div class="page-breadcrumb">
        <nuxt-link to="/">Diskont main page</nuxt-link>
        <nuxt-link to="/">
          Savatcha
          <span v-html="arrow"></span>
        </nuxt-link>
      </div>
      <div class="d-flex comparison-page-title">
        <div class="d-flex align-items-end">
          <MainTitle title="Savatcha" />
          <span class="d-flex align-items-end">4 товаров</span>
        </div>
      </div>
      <div class="basket-page-body" v-if="products.length > 0">
        <div>
          <div class="basket-cards-grid">
            <div
              class="basket-card"
              v-for="skeletonItem in [1, 2]"
              :key="skeletonItem"
              v-if="skeletonLoad"
            >
              <div class="basket-img-container">
                <b-skeleton width="100%" height="100%"></b-skeleton>
              </div>
              <div class="basket-card-body">
                <div class="basket-card-text-block">
                  <h4>
                    <b-skeleton width="100%"></b-skeleton>
                  </h4>
                  <p><b-skeleton width="80%"></b-skeleton></p>
                  <p><b-skeleton width="70%"></b-skeleton></p>
                </div>
                <div class="basket-card-count"></div>
                <div class="basket-price-block"></div>
              </div>
            </div>
            <div
              class="basket-card"
              v-for="product in products"
              :key="product?.id"
              v-if="!skeletonLoad"
            >
              <div
                class="basket-img-container"
                @click="$router.push(`/product/${product.slug}`)"
              >
                <img :src="product.images[0].sm_img" alt="" />
              </div>
              <div class="basket-card-body">
                <div class="basket-card-text-block">
                  <h4 @click="$router.push(`/product/${product.slug}`)">
                    {{ product?.info?.name?.ru }}
                  </h4>
                  <p>Category: {{ product?.info?.category?.name?.ru }}</p>
                  <p>Brend: {{ product?.info?.brand?.name }}</p>
                </div>
                <div class="basket-card-count">
                  <div class="basket-count-btn">
                    <span @click="$store.commit('productCountDown', { id: product.id })"
                      ><svg
                        width="12"
                        height="2"
                        viewBox="0 0 12 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 2C0.734784 2 0.48043 1.89464 0.292893 1.70711C0.105357 1.51957 0 1.26522 0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0L11 0C11.2652 0 11.5196 0.105357 11.7071 0.292893C11.8946 0.48043 12 0.734784 12 1C12 1.26522 11.8946 1.51957 11.7071 1.70711C11.5196 1.89464 11.2652 2 11 2H1Z"
                          fill="#1F8A70"
                        /></svg
                    ></span>
                    {{ $store.state.cart.find((item) => item.id == product.id)?.count }}
                    <span @click="$store.commit('productCountUp', { id: product.id })"
                      ><svg
                        width="11"
                        height="11"
                        viewBox="0 0 11 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.5 0C5.68234 0 5.8572 0.0724328 5.98614 0.201364C6.11507 0.330295 6.1875 0.505164 6.1875 0.6875V4.8125H10.3125C10.4948 4.8125 10.6697 4.88493 10.7986 5.01386C10.9276 5.1428 11 5.31766 11 5.5C11 5.68234 10.9276 5.8572 10.7986 5.98614C10.6697 6.11507 10.4948 6.1875 10.3125 6.1875H6.1875V10.3125C6.1875 10.4948 6.11507 10.6697 5.98614 10.7986C5.8572 10.9276 5.68234 11 5.5 11C5.31766 11 5.1428 10.9276 5.01386 10.7986C4.88493 10.6697 4.8125 10.4948 4.8125 10.3125V6.1875H0.6875C0.505164 6.1875 0.330295 6.11507 0.201364 5.98614C0.0724328 5.8572 0 5.68234 0 5.5C0 5.31766 0.0724328 5.1428 0.201364 5.01386C0.330295 4.88493 0.505164 4.8125 0.6875 4.8125H4.8125V0.6875C4.8125 0.505164 4.88493 0.330295 5.01386 0.201364C5.1428 0.0724328 5.31766 0 5.5 0Z"
                          fill="#1F8A70"
                        />
                      </svg>
                    </span>
                  </div>
                  <p>
                    {{ product?.price.replace(/\B(?=(\d{3})+(?!\d))/g, " ") }}
                    so’mdan/donasi
                  </p>
                </div>
                <div class="basket-price-block">
                  <span>
                    <span
                      v-html="activeHeart"
                      v-if="$store.state.like.includes(product.id)"
                      @click="
                        $store.commit('addToStore', { id: product.id, name: 'like' })
                      "
                    ></span>
                    <span
                      class="basket-like"
                      v-html="like"
                      v-else
                      @click="
                        $store.commit('addToStore', { id: product?.id, name: 'like' })
                      "
                    ></span>
                    <p @click="deleteProduct(product.id)">
                      <span v-html="deleteIcon"></span>O’chirish
                    </p>
                  </span>
                  <div class="basket-card-price">
                    <span>+5 ta dicoin</span>
                    <h4>
                      {{ productTotalPrice(product) }}
                      so’m
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="basket-checkout-container">
          <div class="basket-checkout-block">
            <div class="basket-checkout-price">
              <h3>Jami:</h3>
              <h3>
                {{
                  products.reduce((summ, item) => {
                    return (
                      summ +
                      item.price *
                        $store.state.cart.find((elem) => elem.id == item.id)?.count
                    );
                  }, 0)
                }}
                сум
              </h3>
            </div>
            <div class="basket-promo-input">
              <input placeholder="Введите промокод" type="text" />
              <span>Применить</span>
            </div>
            <div class="basket-checkout-body">
              <span
                ><p>Стоимость:</p>
                <p>16 120 000 сум</p></span
              >
              <span
                ><p>Промокод:</p>
                <p>0 сум</p></span
              >
              <span
                ><p>Di Coinlar:</p>
                <p>0 сум</p></span
              >
              <span
                ><p>Стоимость доставки:</p>
                <p>25 000 сум</p></span
              >
            </div>
            <div class="basket-checkout-btn" @click="checkoutCheck()">Оформить заказ</div>
            <div class="basket-checkout-bottom">
              <p>
                Нажимая 'Оформить заказ', я соглашаюсь с
                <span>публичным договором оферты</span>
              </p>
            </div>
          </div>
          <div class="basket-coin-block">
            <img src="../assets/images/basket-2coin.png" alt="" />
            <h3>+15 ta Dicoin</h3>
            <p>Dicoinlar to’plang va keyingi xaridingizdan tejang!</p>
          </div>
        </div>
      </div>
      <div class="empty-box-app" v-else>
        <img src="../assets/images/packaging cancel.png" alt="" />
        <h2>Savatingiz bo'sh holatda</h2>
        <p>Buyurtma qilingan narsalar shu yerda paydo bo'ladi.</p>
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
import CategoriesAppCard from "../components/categories/categories-app-banner.vue";
export default {
  data() {
    return {
      skeletonList: [1, 2, 3],
      skeletonLoad: false,
      arrow: require("../assets/svg/dropdown-icon.svg?raw"),
      like: require("../assets/svg/card-like.svg?raw"),
      deleteIcon: require("../assets/svg/basket-delete.svg?raw"),
      activeHeart: require("../assets/svg/active-heart.svg?raw"),
      // twoCoin: require("../assets/svg/basket-2coin.svg?raw"),
      products: [],
    };
  },
  mounted() {
    this.$store.commit("reloadStore");
    let storeProducts = JSON.parse(localStorage.getItem("cart"));
    if (storeProducts.length > 0) {
      this.skeletonLoad = true;
      this.__GET_PRODUCTS_BY_ID({ products: storeProducts.map((item) => item.id) });
    }
  },
  computed: {
    totalPrice() {
      const totalSum = this.$store.state.cart.reduce((summ, item) => {
        return summ + item.price * item.count;
      }, 0);
      return `${totalSum}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
  },
  methods: {
    async __GET_PRODUCTS_BY_ID(dataForm) {
      const data = await this.$store.dispatch("fetchProducts/getProductsById", dataForm);
      this.skeletonLoad = false;
      this.products = data?.products;
    },
    async deleteProduct(id) {
      this.skeletonLoad = true;
      await this.$store.commit("deleteToCart", id);
      let storeProducts = JSON.parse(localStorage.getItem("cart"));
      if (storeProducts.length > 0) {
        this.__GET_PRODUCTS_BY_ID({ products: storeProducts.map((item) => item.id) });
      } else {
        this.products = [];
        this.skeletonLoad = false;
      }
    },
    checkoutCheck() {
      const auth = localStorage.getItem("dis_auth_token");
      if (auth) {
        this.$router.push("/checkout");
      } else {
        this.$store.commit("authVisibleChange", true);
      }
    },
    productTotalPrice(product) {
      let price =
        product?.price *
        this.$store.state.cart.find((item) => item.id == product.id)?.count;
      let strPrice = `${price}`;
      return `${price}`
        .slice(0, product?.price.indexOf("."))
        .replace(".", ",")
        .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
  },
  components: { MainTitle, CategoriesAppCard },
};
</script>
<style lang="css">
@import "../assets/css/pages/comparison.css";
.basket-page-body {
  display: grid;
  grid-template-columns: 12.1fr 3.8fr;
  grid-gap: 24px;
}
.basket-cards-grid {
  background: #ffffff;
  box-shadow: 0px 2px 24px rgba(0, 0, 0, 0.06);
  border-radius: 20px;
  padding: 32px;
}
.basket-card {
  display: grid;
  grid-template-columns: 118px auto;
  grid-gap: 21px;
  padding-bottom: 18px;
  margin-bottom: 18px;
  border-bottom: 2px solid #f2f5f7;
}
.basket-card:last-child {
  padding-bottom: 0;
  margin-bottom: 0;
  border-bottom: none;
}
.basket-img-container {
  padding-top: 13px;
  padding-bottom: 13px;
  background: #f6f7f9;
  border-radius: 12px;
  height: 118px;
  cursor: pointer;
}
.basket-img-container img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.basket-card-text-block {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.basket-card-text-block h4 {
  font-family: var(--SB_400);
  font-style: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.28px;
  color: #1c1f22;
  margin-bottom: 10px;
  cursor: pointer;
}
.basket-card-text-block p {
  font-family: var(--SB_400);
  font-style: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.24px;
  color: #8c959c;
  display: flex;
}
.basket-card-text-block p:last-child {
  margin-top: 4px;
}
.basket-card-body {
  display: grid;
  grid-template-columns: 3fr 2fr 2fr;
}
.basket-card-count {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: center;
}
.basket-card-count p {
  font-family: var(--SB_400);
  font-style: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.24px;
  margin-top: 8px;
  color: #494f54;
}
.basket-count-btn {
  height: 36px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  width: 120px;
  background: #f2f5f7;
  border-radius: 24px;
  justify-content: space-between;
  font-family: var(--SB_600);
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.28px;
  color: #1c1f22;
}
.basket-count-btn > span {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.basket-price-block > span {
  display: flex;
}
.basket-price-block > span p {
  font-family: var(--SB_500);
  font-style: normal;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  letter-spacing: -0.24px;
  color: #ff3f3f;
  margin-left: 38px;
  cursor: pointer;
}
.basket-price-block {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}
.basket-price-block .basket-like {
  cursor: pointer;
}
.basket-price-block .basket-like svg path {
  fill: #000;
}
.basket-price-block h4 {
  font-family: var(--SB_600);
  font-style: normal;
  font-size: 22px;
  line-height: 20px;
  text-align: right;
  letter-spacing: -0.28px;
  color: #000000;
  margin-top: 42px;
  display: flex;
}
.basket-card-price {
  display: flex;
  align-items: flex-end;
}
.basket-card-price span {
  font-family: var(--SB_500);
  font-style: normal;
  font-size: 12.2059px;
  line-height: 15px;
  letter-spacing: -0.02em;
  color: #000000;
  height: 18px;
  padding: 0 7.4px;
  display: flex;
  align-items: center;
  background: #fbc100;
  border-radius: 4.88235px;
  margin-right: 16px;
}
.basket-checkout-block {
  padding: 18px;
  border: 1px solid #f1f1f1;
  border-radius: 20px;
}
.basket-checkout-price {
  display: flex;
  justify-content: space-between;
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid #e8e8e8;
}
.basket-checkout-price h3 {
  font-family: var(--SB_600);
  font-style: normal;
  font-size: 22.4015px;
  color: #111111;
}
.basket-promo-input input {
  border: none;
  padding: 15px 11px;
  font-family: var(--SB_500);
  font-style: normal;
  font-size: 14.9343px;
  line-height: 19px;
  color: #000;
}
.basket-promo-input input::placeholder {
  color: #c7c7c7;
}
.basket-promo-input input:focus {
  outline: none;
}
.basket-promo-input {
  background: #ffffff;
  border: 1.86679px solid #f1f1f1;
  border-radius: 11.2007px;
  display: grid;
  grid-template-columns: auto 116px;
}

.basket-promo-input span {
  background: #f1f1f1;
  font-family: var(--SB_500);
  font-style: normal;
  font-size: 14.9343px;
  line-height: 22px;
  color: #1f8a70;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.basket-checkout-body span p {
  font-family: var(--SB_600);
  font-style: normal;
  font-size: 14px;
  line-height: 22px;
  color: #111111;
}
.basket-checkout-body {
  display: grid;
  grid-gap: 11px;
  margin-top: 20px;
  padding-bottom: 19px;
  margin-bottom: 19px;
  border-bottom: 1px solid #e8e8e8;
}
.basket-checkout-body span {
  display: flex;
  justify-content: space-between;
}
.basket-checkout-btn {
  background: #1f8a70;
  border-radius: 11.2007px;
  height: 52px;
  font-family: var(--SB_500);
  font-style: normal;
  font-size: 14.9343px;
  line-height: 22px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  cursor: pointer;
}
.basket-checkout-bottom {
  margin-top: 15px;
}
.basket-checkout-bottom p {
  font-family: var(--SB_500);
  font-style: normal;
  font-size: 13.0675px;
  line-height: 19px;
  color: #999999;
}
.basket-checkout-bottom p span {
  color: #2b71f8;
}
.basket-coin-block {
  padding: 18px;
  background: #e9fcfb;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 23px;
}
.basket-coin-block h3 {
  font-family: var(--SB_600);
  font-style: normal;
  font-size: 22px;
  line-height: 20px;
  letter-spacing: -0.28px;
  color: #1f8a70;
  margin-bottom: 24px;
}
.basket-coin-block p {
  font-family: var(--SB_400);
  font-style: normal;
  font-size: 14px;
  line-height: 18px;
  color: #1f8a70;
  text-align: center;
}
.basket-coin-block img {
  position: absolute;
  left: 5px;
  top: -20px;
}
</style>
