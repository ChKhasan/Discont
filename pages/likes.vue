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
        <div class="likes-delete">
          <span v-html="deleteIcon"></span>
          Barchasini o’chirish
        </div>
      </div>
      <div class="likes-page-body" v-if="likeProducts.length > 0">
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
      <div class="categories-products-show-more" v-if="likeProducts.length > 44">Показать еще 44</div>
      <div class="products-pagination" v-if="likeProducts.length > 44">
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
      deleteIcon: require("../assets/svg/Delete.svg?raw"),
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
      likeProducts: [],
    };
  },
  computed: {
    likesChange() {
      return this.$store.state.like.length;
    },
  },
  mounted() {
    let likesProducts = JSON.parse(localStorage.getItem("like"));
    this.__GET_PRODUCTS_BY_ID({ products: likesProducts });
  },
  methods: {
    async __GET_PRODUCTS_BY_ID(dataForm) {
      const data = await this.$store.dispatch("fetchProducts/getProductsById", dataForm);
      this.likeProducts = data?.products;
    },
  },
  watch: {
    likesChange() {
      let likesProducts = JSON.parse(localStorage.getItem("like"));
      this.__GET_PRODUCTS_BY_ID({ products: likesProducts });
    },
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
.likes-delete {
  background: #f8f8f8;
  border-radius: 9px;
  padding: 0 12px;
  height: 42px;

  display: flex;
  align-items: center;
  font-family: var(--SB_400);
  font-style: normal;
  font-size: 16px;
  line-height: 20px;
  color: #fc4141;
  cursor: pointer;
}
.likes-delete span {
  margin-right: 13px;
}
</style>
