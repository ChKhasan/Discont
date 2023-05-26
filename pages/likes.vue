<template lang="html">
  <div class="comparison-page">
    <div class="container_xl">
      <div class="page-breadcrumb">
        <nuxt-link to="/">Diskont main page</nuxt-link>
        <nuxt-link to="/">
          Menga yoqqan tovarlar
          <span v-html="arrow"></span>
        </nuxt-link>
      </div>
      <div class="d-flex comparison-page-title">
        <div class="d-flex align-items-end">
          <MainTitle title="Menga yoqqan tovarlar" />
          <span class="d-flex align-items-end">8 288 товаров</span>
        </div>
        <a-select
          v-model="value"
          class="categories-filter-select"
          placeholder="Select good person"
          style="width: 252px"
        >
          <a-select-option
            v-for="item in status"
            :key="item?.value"
            :label="item.label"
            :value="item.value"
            >{{ item.label }}
          </a-select-option>
        </a-select>
      </div>
      <div class="likes-page-body" v-if="true">
        <ProductCard
          v-for="product in likeProducts"
          :key="product.id"
          :product="product"
        />
      </div>
      <div class="empty-box-app" v-else>
        <img src="../assets/images/packaging love.png" alt="" />
        <h2>Hali sotib olishga tayyor emasmisiz?</h2>
        <p>
          Mahsulot sahifasida ♡ tugmasini bosing va <br />
          o'zingizga yoqqan narsani shu yerga qo'shing.
        </p>
      </div>
      <div class="categories-products-show-more">Показать еще 44</div>
      <div class="products-pagination">
        <a-pagination size="small" :default-current="6" :total="500" />
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
import ProductCard from "../components/cards/ProductCard.vue";
export default {
  data() {
    return {
      arrow: require("../assets/svg/dropdown-icon.svg?raw"),
      status: [
        {
          value: "all",
          label: "Barchasi",
        },
        {
          value: "qwerty1",
          label: "Others",
        },
        {
          value: "qwerty2",
          label: "Others",
        },
        {
          value: "qwerty3",
          label: "Others",
        },
      ],
      value: "all",
    };
  },
  async asyncData({ store }) {
    const [products] = await Promise.all([
      store.dispatch("fetchProducts/getProducts", {
        limit: 12,
      }),
    ]);
    const likeProducts = products?.products?.data;

    return {
      likeProducts,
    };
  },
  components: { MainTitle, CategoriesAppCard, ProductCard },
};
</script>
<style lang="css">
@import "../assets/css/pages/comparison.css";
.likes-page-body {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 24px;
  margin-bottom: 60px;
}
</style>
