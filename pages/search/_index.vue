<template lang="html">
  <div class="categories-page-inner">
    <div class="container_xl">
      <div>
        <div class="page-breadcrumb">
          <nuxt-link :to="localePath('/')">Diskont main page</nuxt-link>
          <nuxt-link :to="localePath('/')"> Search result </nuxt-link>
        </div>
        <div class="d-flex justify-content-between align-items-end showcases_top">
          <div class="d-flex categories-page-title">
            <MainTitle
              :title="`Результаты поиска по запросу “${$route.params.index}”`"
              class="mb-0"
            />
            <span class="align-items-end">{{ searchProducts?.length }} товаров</span>
          </div>
          <a-select
            v-model="value"
            class="categories-filter-select mb-0"
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
      </div>
      <div class="">
        <div class="categories-products showcases_products">
          <div></div>
          <div class="search-card-grid" v-if="searchProducts?.length > 0">
            <ProductCard
              v-for="product in searchProducts.map((item) => {
                return { ...item.products[0] };
              })"
              :key="product.id"
              :product="product"
            />
          </div>
          <div class="comments-empty search-empty" v-else>
            <img src="../../assets/images/search-empty.png" alt="" />
            <h4>Hech nima topilmadi</h4>
            <p>Mahsulotni aniq nomini yozing yoki kategoriyalar orqali qidiring</p>
          </div>
          <!-- <div class="categories-products-show-more" v-if="searchProducts?.length > 30">
            Показать еще 44
          </div> -->
          <div class="products-pagination" v-if="searchProducts?.length > 30">
            <a-pagination size="small" :default-current="6" :total="500" />
          </div>
        </div>
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
import MainTitle from "../../components/Main-title.vue";
import ProductCard from "../../components/cards/ProductCard.vue";
export default {
  data() {
    return {
      value: "all",
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
          value: "qwerty33",
          label: "Others",
        },
      ],
    };
  },
  async asyncData({ params, query, store, i18n }) {
    const [searchProductsData] = await Promise.all([
      store.dispatch("fetchSearch/getSearch", {
        params: { search: params.index },
        headers: { Language: i18n.locale },
      }),
    ]);
    const searchProducts = searchProductsData?.products;
    
    return {
      searchProducts,
    };
  },

  components: {
    MainTitle,
    ProductCard,
  },
};
</script>
<style lang="css">
@import "../../assets/css/pages/categories.css";
.search-card-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 24px;
  margin-top: 32px;
}
.search-empty h4 {
  margin-bottom: 16px !important;
  color: #000;
  text-align: center;
  font-family: var(--SB_500);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
}
.search-empty p {
  width: 350px;
  text-align: center;
  color: #838383;
  text-align: center;
  font-family: var(--SB_400);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}
</style>
