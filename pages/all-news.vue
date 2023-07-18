<template lang="html">
  <div class="page-container">
    <div class="container_xl">
      <div class="page-breadcrumb">
        <nuxt-link to="/">Diskont main page</nuxt-link>
        <nuxt-link to="/"> Barcha yangiliklar </nuxt-link>
      </div>
      <div class="d-flex page-container-title">
        <div class="d-flex align-items-end">
          <MainTitle title="Barcha yangiliklar" />
          <span class="d-flex align-items-end">{{ totalCount }} yangiliklar</span>
        </div>
      </div>
      <div class="posts-page-body" v-if="posts.length > 0">
        <PostCard v-for="post in posts" :key="post.id" :post="post" />
      </div>
      <div class="empty-box-app" v-else>
        <img src="../assets/images/comments-empty.png" alt="" />
        <h2>Yangiliklar mavjud emas</h2>
      </div>
      <div class="products-pagination">
        <a-pagination
          size="small"
          v-model.number="current"
          :total="50"
          :page-size.sync="params.pageSize"
        />
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
import PostCard from "../components/cards/PostCard.vue";
export default {
  data() {
    return {
      arrow: require("../assets/svg/dropdown-icon.svg?raw"),
      deleteIcon: require("../assets/svg/Delete.svg?raw"),
      current: 1,
      params: {
        page: 1,
        pageSize: 16,
      },
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
  async asyncData({ store, route }) {
    const [posts1] = await Promise.all([
      store.dispatch("fetchPosts/getPosts", {
        limit: 4,
        page: route.query.page,
        pageSize: route.query.pageSize,
      }),
    ]);
    const posts = posts1?.posts?.data;
    const totalCount = posts1?.posts?.total;
    return {
      posts,
      totalCount,
    };
  },
  async mounted() {
    if (
      !Object.keys(this.$route.query).includes("page") ||
      !Object.keys(this.$route.query).includes("per_page")
    ) {
      await this.$router.replace({
        path: "all-news",
        query: { page: this.params.page, per_page: this.params.pageSize },
      });
    }
    // this[dataFunc]();
    this.current = Number(this.$route.query.page);
    this.params.pageSize = Number(this.$route.query.per_page);
  },
  methods: {
    async __GET_NEWS() {
      try {
        const data = this.$store.dispatch("fetchPosts/getPosts", {
          limit: 4,
          page: this.$route.query.page,
          pageSize: this.$route.query.pageSize,
        });
        this.posts = data?.posts?.data;
        this.totalCount = data?.posts?.total;
      } catch (e) {}
    },
    async changePagination(val, url, dataFunc) {
      if (this.$route.query.page != val) {
        await this.$router.replace({
          path: url,
          query: {
            ...this.$route.query,
            page: val,
            per_page: this.params.pageSize,
          },
        });
        // this[dataFunc]();
      }
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
  watch: {
    async current(val) {
      this.changePagination(val, "/all-news", "__GET_NEWS");
    },
  },
  components: { MainTitle, CategoriesAppCard, ProductCard, PostCard },
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
