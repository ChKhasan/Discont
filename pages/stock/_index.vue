<template lang="html">
  <div class="page-container">
    <div class="container_xl">
      <div class="page-breadcrumb">
        <nuxt-link :to="localePath('/')">Diskont main page</nuxt-link>
        <nuxt-link :to="localePath('/')"> {{ promotion?.name }} </nuxt-link>
      </div>
      <div class="d-flex page-container-title">
        <MainTitle :title="promotion?.name" />
      </div>
      <div class="stock-page__container">
        <div class="stock-page__image">
          <img :src="promotion?.md_banner" alt="" />
        </div>
        <div class="stock-page__static">
          <p>
            Akisya davomiyligi:
            <span
              >{{ moment(promotion?.start_date).format("DD.MM") }} dan
              {{ moment(promotion?.end_date).format("DD.MM") }} gacha</span
            >
          </p>
          <p>Akisya bo’ladigan filiallar: <span>Barcha filiallar</span></p>
        </div>
        <div class="stock-page__info" v-html="promotion?.desc"></div>
      </div>
      <div class="d-flex justify-content-between align-items-end">
        <ProductListTitle title="Kategoriyadagi top tavarlar" />
      </div>
      <!-- <div class="product-grid stock-page__products">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </div> -->
    </div>
  </div>
</template>
<script>
import ProductCard from "../../components/cards/ProductCard.vue";
import ProductListTitle from "../../components/ProductList-title.vue";
import moment from "moment";
export default {
  async asyncData({ store, params, i18n }) {
    const [promotionsData] = await Promise.all([
      store.dispatch("fetchPromotions/getPromotionsBySlug", {
        slug: params.index,
        params: {
          headers: {
            Language: i18n.locale,
          },
        },
      }),
    ]);
    const promotion = promotionsData?.promotion;
    return {
      promotion,
    };
  },
  methods: {
    moment,
  },
  components: { ProductListTitle, ProductCard },
};
</script>
<style lang="css">
@import "../../assets/css/pages/comparison.css";
@import "../../assets/css/pages/main-page.css";

.stock-page__container {
  width: 85%;
  margin-bottom: 48px;
}
.stock-page__image {
  width: 100%;
  border-radius: 24px;
  overflow: hidden;
  max-height: 592px;
}
.stock-page__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.stock-page__static {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 48px;
}
.stock-page__static p {
  color: var(--grey-64, #5d5d5f);
  font-family: var(--SB_400);
  font-size: 18px;
  font-style: normal;
  line-height: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.stock-page__static p span {
  color: #000;
  font-family: var(--SB_500);
  font-size: 24px;
  font-style: normal;
  line-height: 24px;
}
.stock-page__info {
  margin-top: 48px;
}
.stock-page__info p {
  color: var(--grey-64, #5d5d5f);
  font-family: var(--SB_400);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}
.stock-page__products {
  margin-bottom: 300px;
}
</style>
