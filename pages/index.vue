<template>
  <div>
    <div class="container_xl">
      <div class="home-banner-container">
        <BannerCarousel>
          <div class="swiper-slide">
            <img src="../assets/images/iPhone (2) 1.png" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="../assets/images/iPhone (2) 1.png" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="../assets/images/iPhone (2) 1.png" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="../assets/images/iPhone (2) 1.png" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="../assets/images/iPhone (2) 1.png" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="../assets/images/iPhone (2) 1.png" alt="" />
          </div>
        </BannerCarousel>
        <BannerCarouselRight>
          <div class="swiper-slide">
            <DayProductCard />
          </div>
          <div class="swiper-slide">
            <DayProductCard />
          </div>
          <div class="swiper-slide">
            <DayProductCard />
          </div>
          <div class="swiper-slide">
            <DayProductCard />
          </div>
          <div class="swiper-slide">
            <DayProductCard />
          </div>
          <div class="swiper-slide">
            <DayProductCard />
          </div>
        </BannerCarouselRight>
      </div>
      <div class="home-categories mb-120">
        <MainTitle title="Kategoriyalar" />
        <div class="category-grid">
          <HomeCategoryCard
            v-for="category in categories"
            :key="category.id"
            :category="category"
          />
        </div>
      </div>
    </div>
    <div class="container_xl product_container">
      <div class="">
        <div class="d-flex justify-content-between align-items-end">
          <MainTitle :title="showcases[0]?.name?.ru" />
          <nuxt-link class="to-page-underline" to="/">Все товары</nuxt-link>
        </div>
        <div class="product-grid">
          <ProductCard
            v-for="product in showcases[0]?.products"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </div>
    <div class="container_xl product_container">
      <div class="">
        <div class="d-flex justify-content-between align-items-end">
          <MainTitle :title="showcases[1]?.name?.ru" />
          <nuxt-link class="to-page-underline" to="/">Все товары</nuxt-link>
        </div>
        <div class="product-grid">
          <ProductCard
            v-for="product in showcases[1]?.products"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </div>
    <div class="container_xl">
      <HomeBanner />
    </div>
    <div class="container_xl">
      <MainTitle :title="showcases[2]?.name?.ru" />
      <div class="mb-120">
        <div class="products-grid-6">
          <ProductCard
            v-for="product in showcases[2]?.products"
            :key="product.id"
            :product="product"
          />
          <span class="grid-banner-card-1 d-flex">
            <V2ProductCard :variant="true" />
          </span>
          <span class="grid-banner-card-2 d-flex">
            <V2ProductCard :variant="false" />
          </span>
        </div>
      </div>
    </div>
    <div class="container_xl product_container">
      <div class="">
        <div class="d-flex justify-content-between align-items-end">
          <MainTitle :title="showcases[3]?.name?.ru" />
          <nuxt-link class="to-page-underline" to="/">Все товары</nuxt-link>
        </div>
        <div class="">
          <ProductCarousel>
            <div
              class="swiper-slide"
              v-for="product in showcases[3]?.products"
              :key="product.id"
            >
              <ProductCard :product="product" />
            </div>
          </ProductCarousel>
        </div>
      </div>
    </div>
    <div class="container_xl product_container">
      <div class="">
        <div class="d-flex justify-content-between align-items-end">
          <MainTitle :title="showcases[4]?.name?.ru" />
          <nuxt-link class="to-page-underline" to="/">Все товары</nuxt-link>
        </div>
        <div class="">
          <ProductCarousel2>
            <div
              class="swiper-slide"
              v-for="product in showcases[4]?.products"
              :key="product.id"
            >
              <ProductCard :product="product" />
            </div>
          </ProductCarousel2>
        </div>
      </div>
    </div>
    <!-- <div class="container_xl">
      <div class="">
        <MainBigTitle title="Eng arzon !" />
        <div class="h-catalog-tab">
          <ul>
            <li><span>Uy uchun</span>Uy uchun</li>
            <li><span>Telefonlar</span>Telefonlar</li>
            <li><span>Sport buyumlari</span> Sport buyumlari</li>
            <li><span>Oshxona uchun</span> Oshxona uchun</li>
            <li><span>Uy uchun</span>Uy uchun</li>
            <li><span>Telefonlar</span>Telefonlar</li>
            <li><span>Sport buyumlari</span> Sport buyumlari</li>
            <li><span>Oshxona uchun</span> Oshxona uchun</li>
          </ul>
        </div>
        <ProductCarousel>
          <div class="swiper-slide">
            <ProductCard />
          </div>
          <div class="swiper-slide">
            <ProductCard />
          </div>
          <div class="swiper-slide">
            <ProductCard />
          </div>
          <div class="swiper-slide">
            <ProductCard />
          </div>
          <div class="swiper-slide">
            <ProductCard />
          </div>
          <div class="swiper-slide">
            <ProductCard />
          </div>
          <div class="swiper-slide">
            <ProductCard />
          </div>
          <div class="swiper-slide">
            <ProductCard />
          </div>
          <div class="swiper-slide">
            <ProductCard />
          </div>
          <div class="swiper-slide">
            <ProductCard />
          </div>
        </ProductCarousel>
      </div>
    </div> -->
    <div class="container_xl">
      <MainTitle title="Top brendlar" />
      <div class="mb-120">
        <BrandCarousel>
          <div class="swiper-slide" v-for="brand in brands" :key="brand.id">
            <BrandCard :brand="brand" />
          </div>
        </BrandCarousel>
      </div>
    </div>
    <!-- <div class="container_xl mb-120">
      <DiscountCarousel />
    </div> -->
    <!-- <div class="container_xl">
      <MainTitle :title="showcases[5]?.name?.ru" />
      <div class="v-card-products-grid mb-120">
        <div class="v-card-grid">
          <VProductCard />
          <VProductCard />
        </div>
        <div class="products-grid-5">
          <ProductCard
            v-for="product in showcases[5]?.products"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </div> -->
    <div class="container_xl">
      <MainTitle :title="showcases[5]?.name?.ru" />
      <div class="mb-120">
        <div class="products-grid-6">
          <ProductCard
            v-for="product in showcases[5]?.products"
            :key="product.id"
            :product="product"
          />

          <span class="grid-banner-card-1">
            <VProductCard />
          </span>
          <span class="grid-banner-card-2">
            <VProductCard />
          </span>
        </div>
      </div>
    </div>
    <div class="container_xl mb-120">
      <div class="d-flex justify-content-between align-items-end">
        <MainTitle title="Yangiliklar va bloglar" />
        <nuxt-link class="to-page-underline" to="/all-news">Все блоги</nuxt-link>
      </div>
      <PostsCarousel>
        <div class="swiper-slide" v-for="post in posts" :key="post.id">
          <PostCard :post="post" />
        </div>
      </PostsCarousel>
    </div>
    <div class="container_xl mb-120">
      <DiscontBanner />
    </div>
    <div class="container_xl mb-120">
      <ApplicationBanner />
    </div>
    <div class="container_xl mb-120">
      <div class="home-bottom-desc">
        <p>
          m Ipsum is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it to make a
          type specimen book. It has survived not only five centuries, but also the leap
          into electronic typesetting, remaining essentially unchanged. It was popularised
          in the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like Aldus
          PageMaker including versionm Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only five
          centuries, but also the leap into electronic typesetting, remaining simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown printer
          took a galley of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with the
          release of Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including version
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import BannerCarousel from "../components/Banner-carousel.vue";
import HomeCategoryCard from "../components/cards/HomeCategoryCard.vue";
import ProductCard from "../components/cards/ProductCard.vue";
import VProductCard from "../components/cards/VProductCard.vue";
import V2ProductCard from "../components/cards/V2ProductCard.vue";
import DiscountCarousel from "../components/discount-carousel.vue";
import MainTitle from "../components/Main-title.vue";
import MainBigTitle from "../components/Main-big-title.vue";
import ProductCarousel from "../components/product-carousel.vue";
import ProductCarousel2 from "../components/product-carousel2.vue";
import HomeBanner from "../components/HomeBanner.vue";
import BannerCarouselRight from "../components/Banner-carousel-right.vue";
import BrandCard from "../components/cards/BrandCard.vue";
import BrandCarousel from "../components/brand-carousel.vue";
import PostCard from "../components/cards/PostCard.vue";
import DiscontBanner from "../components/discont-banner.vue";
import ApplicationBanner from "../components/application-banner.vue";
import DayProductCard from "../components/cards/DayProductCard.vue";
import PostsCarousel from "../components/posts-carousel.vue";
export default {
  name: "IndexPage",
  data() {
    return {
      bestsellersProducts: [],
      topProducts: [],
      categories: [],
      byCategoryProducts: [],
      brands: [],
      posts: [],
    };
  },
  async asyncData({ $axios, store }) {
    const [
      products,
      byCategory,
      topProductsData,
      categories1,
      brands1,
      posts1,
      showcasesData,
      bannersData,
    ] = await Promise.all([
      store.dispatch("fetchProducts/getProducts", {
        type: "bestsellers",
        limit: 6,
      }),
      store.dispatch("fetchProducts/getProducts", {
        limit: 10,
      }),
      store.dispatch("fetchProducts/getProducts", {
        type: "popular",
        limit: 6,
      }),
      store.dispatch("fetchCategories/getCategories", {
        limit: 6,
      }),
      store.dispatch("fetchBrands/getBrands", {
        limit: 10,
        top: 1,
      }),
      store.dispatch("fetchPosts/getPosts", {
        limit: 10,
      }),
      store.dispatch("fetchProducts/getShowcases", {
        limit: 4,
      }),
      store.dispatch("fetchBanners/getBanners", {
        type: "main",
      }),
    ]);
    const bestsellersProducts = products?.products?.data;
    const byCategoryProducts = byCategory?.products?.data;
    const topProducts = topProductsData?.products?.data;
    const categories = categories1?.categories?.data;
    const brands = brands1?.brands;
    const posts = posts1?.posts?.data;
    const showcases = showcasesData.showcases;
    const banners = bannersData;
    return {
      bestsellersProducts,
      byCategoryProducts,
      topProducts,
      categories,
      brands,
      posts,
      showcases,
      banners,
    };
  },
  mounted() {
    this.$store.dispatch("fetchBrands/getBrands", {
      limit: 10,
    });

    this.$axios.$get("https://pga.pythonanywhere.com/api/news/");
  },
  components: {
    BannerCarousel,
    ProductCard,
    MainTitle,
    DiscountCarousel,
    HomeCategoryCard,
    VProductCard,
    ProductCarousel,
    ProductCarousel2,
    MainBigTitle,
    HomeBanner,
    BannerCarouselRight,
    BrandCard,
    V2ProductCard,
    PostCard,
    DiscontBanner,
    ApplicationBanner,
    DayProductCard,
    PostsCarousel,
  },
};
</script>
<style>
@import "../assets/css/pages/main-page.css";
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-bottom: 0;
}
.banner-carousel .banner {
  width: 100%;
  height: 354px !important;
  background: red;
}
/* .home-banner-container .swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
} */
.products-grid-6 {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 20px;
}
.grid-banner-card-1 {
  grid-row-start: 1;
  grid-column-start: 1;
  grid-column-end: 2;
}
.grid-banner-card-2 {
  grid-row-start: 2;
  grid-column-start: 1;
  grid-column-end: 2;
}
</style>
