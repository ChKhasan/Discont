<template lang="html">
  <div class="page-container">
    <div class="container_xl">
      <div class="page-breadcrumb">
        <nuxt-link to="/">Diskont main page</nuxt-link>
        <nuxt-link to="/">
          Barcha yangiliklar
          <span v-html="arrow"></span>
        </nuxt-link>
      </div>
      <div class="d-flex page-container-title">
        <div class="d-flex align-items-end">
          <MainTitle title="Barcha yangiliklar" />
          <span class="d-flex align-items-end">8 288 товаров</span>
        </div>
      </div>
      <div class="posts-page-body" v-if="posts.length > 0">
        <PostCard v-for="post in posts" :key="post.id" :post="post" />
      </div>
      <div class="empty-box-app" v-else>
        <img src="../assets/images/comments-empty.png" alt="" />
        <h2>Yangiliklar mavjud emas</h2>
        <!-- <p>
          Mahsulot sahifasida ♡ tugmasini bosing va <br />
          o'zingizga yoqqan narsani shu yerga qo'shing.
        </p> -->
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
    };
  },
  async asyncData({ store }) {
    const [posts1] = await Promise.all([
      store.dispatch("fetchPosts/getPosts", {
        limit: 4,
      }),
    ]);
    const posts = posts1?.posts?.data;
    return {
      posts,
    };
  },
  components: { MainTitle, CategoriesAppCard, ProductCard },
};
</script>
<style lang="css">
@import "../assets/css/pages/comparison.css";
.posts-page-body {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 26px;
  margin-bottom: 60px;
}
</style>
