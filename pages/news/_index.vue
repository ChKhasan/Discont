<template lang="html">
  <div class="comparison-page">
    <div class="container_xl">
      <div class="page-breadcrumb">
        <nuxt-link to="/">Diskont main page</nuxt-link>
        <nuxt-link to="/">
          Yangilik
          <span v-html="arrow"></span>
        </nuxt-link>
      </div>
      <div class="d-flex comparison-page-title">
        <div class="d-flex align-items-end">
          <MainTitle title="Yangilik" />
          <span class="d-flex align-items-end">21.05.2023</span>
        </div>
      </div>
      <div class="post-page-body">
        <div class="post-page-img">
          <img src="../../assets/images/image 317.png" alt="" />
        </div>
        <div class="post-page-info">
          <h1>Diskont konditsioner o’rnatish xizmati.</h1>
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
            th
          </p>
        </div>
      </div>
      <div class="last-news">
        <h2>So’nggi yangiliklar</h2>
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
import CategoriesAppCard from "../../components/categories/categories-app-banner.vue";
import ProductCard from "../../components/cards/ProductCard.vue";
export default {
  data() {
    return {
      arrow: require("../../assets/svg/dropdown-icon.svg?raw"),
      deleteIcon: require("../../assets/svg/Delete.svg?raw"),
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
@import "../../assets/css/pages/comparison.css";
.post-page-img {
  height: 372px;
  display: inline-flex;
  overflow: hidden;
  border-radius: 24px;
  margin-bottom: 6px;
}
.post-page-img img {
  height: 100%;
  object-fit: cover;
}
.post-page-info {
  width: 90%;
  margin-bottom: 64px;
}
.post-page-info h1 {
  font-family: var(--SB_500);
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 130%;
  color: #000000;
  margin-bottom: 24px;
}
.post-page-info p {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #696969;
}
.last-news h2{
  font-family: var(--SB_600);
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 130%;
  color: #000000;
}
</style>
