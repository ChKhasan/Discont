<template lang="html">
  <div class="page-container">
    <div class="container_xl">
      <div class="page-breadcrumb">
        <nuxt-link :to="localePath('/')">{{ $store.state.translations["main.home-page"] }}</nuxt-link>
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
        <ProductListTitle title="Aksiyadagi mahsulotlar" />
      </div>
      <div class="categories-products categories-page-inner-grid">
        <div class="categories-filter-list">
          <div>
            <h5>{{ $store.state.translations["main.categories"] }}</h5>
            <div
              v-for="firstCategory in allCategories"
              :key="firstCategory?.id"
              class="categories-list-box"
            >
              <nuxt-link
                :to="
                  localePath(
                    `/stock/${$route.params.index}?category=${firstCategory?.slug}`
                  )
                "
                :class="{
                  'active-category': $route.query?.category == firstCategory?.slug,
                }"
                class="first-category"
                >{{ firstCategory?.name }}</nuxt-link
              >
              <ul
                class="categories-list-inner"
                v-if="
                  (firstCategory?.children.length > 0 &&
                    firstCategory?.slug == $route.query?.category) ||
                  firstCategory.children.find(
                    (item) => item.slug == $route.query?.category
                  ) ||
                  firstCategory.children.find((item) =>
                    item.children.find((elem) => elem.slug == $route.query?.category)
                  )
                "
              >
                <li
                  v-for="middCategory in firstCategory?.children"
                  :key="middCategory?.id"
                >
                  <span
                    :class="{
                      'active-category': $route.query?.category == middCategory?.slug,
                    }"
                    @click="
                      $router.push(
                        `/stock/${$route.params.index}?category=${middCategory?.slug}`
                      )
                    "
                    >{{ middCategory?.name }}</span
                  >
                  <div
                    class="child-categories-list"
                    v-if="
                      middCategory?.slug == $route.query?.category ||
                      middCategory?.children.find(
                        (item) => item.slug == $route.query?.category
                      )
                    "
                  >
                    <nuxt-link
                      v-if="middCategory?.children.length > 0"
                      v-for="childs in middCategory?.children"
                      :to="
                        localePath(
                          `/stock/${$route.params.index}?category=${childs?.slug}`
                        )
                      "
                      class="mb-0"
                      :class="{
                        'active-category': $route.query?.category == childs?.slug,
                      }"
                      :key="childs.id"
                      >{{ childs?.name }}</nuxt-link
                    >
                  </div>
                </li>
                <!-- <li>
                  <span
                    :class="{
                      'active-category':
                        $route.params.index ==
                        (!categoryChilds?.parent?.parent?.slug && categoryChilds.slug),
                    }"
                    @click="
                      $router.push(
                        categoryChilds?.parent?.parent.id
                          ? `/categories-inner/${categoryChilds?.parent?.slug}`
                          : `/categories-inner/${categoryChilds?.slug}`
                      )
                    "
                    >{{
                      categoryChilds?.parent?.parent?.name
                        ? categoryChilds?.parent?.name
                        : categoryChilds?.name
                    }}</span
                  >
                  <div class="child-categories-list">
                    <nuxt-link
                      v-if="
                        categoryChilds?.parent?.parent?.name &&
                        categoryChilds?.children.length == 0
                      "
                      :to="`/categories-inner/${categoryChilds?.slug}`"
                      :class="{
                        'active-category': $route.params.index == categoryChilds?.slug,
                      }"
                      >{{ categoryChilds?.name }}</nuxt-link
                    >
                    <nuxt-link
                      v-if="categoryChilds?.children.length > 0"
                      v-for="childs in categoryChilds?.children"
                      :to="`/categories-inner/${childs?.slug}`"
                      :class="{ 'active-category': $route.params.index == childs?.slug }"
                      :key="childs.id"
                      >{{ childs?.name }}</nuxt-link
                    >
                  </div>
                </li> -->
              </ul>
            </div>

            <!-- <span class="categories-list_show-more">{{ $store.state.translations["main.show-more"] }}</span> -->
          </div>
        </div>
        <div class="categories-card-grid" v-if="promotion?.products.length > 0">
          <ProductCard
            v-for="product in promotion?.products"
            :key="product.id"
            :product="{
              ...product,
              ...product?.default_product,
            }"
          />
        </div>
        <div class="comments-empty" v-else>
          <img src="../../assets/images/comments-empty.png" alt="" />
          <h4>Mahsulot topilmadi</h4>
        </div>
        <div class="categories-products-show-more" v-if="promotion?.products.length > 30">
          {{ $store.state.translations["main.show-more"] }} 44
        </div>
        <div class="products-pagination" v-if="promotion?.products.length > 30">
          <a-pagination size="small" :default-current="6" :total="500" />
        </div>
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
    const allCategories = promotionsData?.categories;

    return {
      promotion,
      allCategories,
    };
  },
  computed: {
    currentQuery() {
      return this.$route.query?.category;
    },
  },
  mounted() {
    this.$store.dispatch("fetchPromotions/getPromotionsBySlug", {
      slug: this.$route.params.index,
      params: {
        headers: {
          Language: this.$i18n.locale,
        },
      },
    });
  },
  watch: {
    async currentQuery(val) {
      const [promotionsData] = await Promise.all([
        this.$store.dispatch("fetchPromotions/getPromotionsBySlug", {
          slug: this.$route.params.index,
          params: {
            params: {
              ...this.$route.query,
            },
            headers: {
              Language: this.$i18n.locale,
            },
          },
        }),
      ]);
      this.promotion = promotionsData?.promotion;
      this.allCategories = promotionsData?.categories;
    },
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
@import "../../assets/css/pages/categories.css";

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
