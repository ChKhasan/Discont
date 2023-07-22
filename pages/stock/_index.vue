<template lang="html">
  <div class="page-container">
    <div class="container_xl">
      <div class="page-breadcrumb">
        <nuxt-link :to="localePath('/')">Diskont main page</nuxt-link>
        <nuxt-link :to="localePath('/')"> Каталог Xiaomi </nuxt-link>
      </div>
      <div class="d-flex page-container-title">
        <MainTitle title="Каталог Apple" />
      </div>
      <div class="stock-page__container">
        <div class="stock-page__image">
          <img src="../../assets/images/image 318.png" alt="" />
        </div>
        <div class="stock-page__static">
          <p>Akisya davomiyligi: <span>21.05 dan 21.09 gacha</span></p>
          <p>Akisya bo’ladigan filiallar: <span>Barcha filiallar</span></p>
        </div>
        <div class="stock-page__info">
          <p>
            simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries, but also
            the leap into electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets containing Lorem
            Ipsum passages, and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with
            desktop publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specimen
            book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with
            desktop publishing software like Aldus PageMaker includzing versions of Lorem
            Ipsum.simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specimen
            book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and
          </p>
        </div>
      </div>
      <div class="d-flex justify-content-between align-items-end">
        <ProductListTitle title="Kategoriyadagi top tavarlar" />
      </div>
      <div class="product-grid stock-page__products">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </div>
    </div>
  </div>
</template>
<script>
import ProductCard from "../../components/cards/ProductCard.vue";
import ProductListTitle from "../../components/ProductList-title.vue";
export default {
  // async asyncData({ $axios, params, store }) {
  //   const [productsData] = await Promise.all([
  //     store.dispatch("fetchProducts/getProducts"),
  //   ]);
  //   console.log(productsData);
  //   const products = productsData?.products?.data;
  //   return {
  //     products,
  //   };
  // },
  // async mounted() {
  //   const [productsData] = await Promise.all([
  //     this.$store.dispatch("fetchProducts/getProducts"),
  //   ]);
  // },
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
}
.stock-page__image img {
  width: 100%;
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
