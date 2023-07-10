<template lang="html">
  <div class="categories-page-inner">
    <div class="container_xl">
      <div>
        <div class="page-breadcrumb">
          <nuxt-link to="/">Diskont main page</nuxt-link>
          <nuxt-link to="/">
            Smartfonlar
            <span v-html="arrow"></span>
          </nuxt-link>
        </div>
        <div class="d-flex categories-page-title">
          <MainTitle :title="categoryChilds?.name?.ru" />
          <span>8 288 товаров</span>
        </div>
        <div>
          <CategoriesTabCarousel>
            <div class="swiper-slide d-inline">
              <span class="categories-tab-link">Ayollar uchun smartfonlar</span>
            </div>
            <div class="swiper-slide d-inline">
              <span class="categories-tab-link">Bolalar uchun smartfonlar</span>
            </div>
            <div class="swiper-slide d-inline">
              <span class="categories-tab-link">Ximoyalangan smartfonlar</span>
            </div>
            <div class="swiper-slide d-inline">
              <span class="categories-tab-link">Yengil smartfonlar</span>
            </div>
            <div class="swiper-slide d-inline">
              <span class="categories-tab-link">Защищенные смартфоны</span>
            </div>
            <div class="swiper-slide d-inline">
              <span class="categories-tab-link">Смартфоны с мощным аккумулятором</span>
            </div>
            <div class="swiper-slide d-inline">
              <span class="categories-tab-link">Смартфоны с хорошей камерой</span>
            </div>
            <div class="swiper-slide d-inline">
              <span class="categories-tab-link">с большой памятью</span>
            </div>
            <div class="swiper-slide d-inline">
              <span class="categories-tab-link">с большой памятью</span>
            </div>

            <div class="swiper-slide d-inline">
              <span class="categories-tab-link">Ayollar uchun smartfonlar</span>
            </div>
            <div class="swiper-slide d-inline">
              <span class="categories-tab-link">Bolalar uchun smartfonlar</span>
            </div>
            <div class="swiper-slide d-inline">
              <span class="categories-tab-link">Ximoyalangan smartfonlar</span>
            </div>
            <div class="swiper-slide d-inline">
              <span class="categories-tab-link">Yengil smartfonlar</span>
            </div>
            <div class="swiper-slide d-inline">
              <span class="categories-tab-link">Защищенные смартфоны</span>
            </div>
            <div class="swiper-slide d-inline">
              <span class="categories-tab-link">Смартфоны с мощным аккумулятором</span>
            </div>
            <div class="swiper-slide d-inline">
              <span class="categories-tab-link">Смартфоны с хорошей камерой</span>
            </div>
            <div class="swiper-slide d-inline">
              <span class="categories-tab-link">с большой памятью</span>
            </div>
            <div class="swiper-slide d-inline">
              <span class="categories-tab-link">с большой памятью</span>
            </div>
          </CategoriesTabCarousel>
        </div>
        <div class="mt-4">
          <CategoriesInnerBannerCarousel>
            <div class="swiper-slide">
              <CategoriesInnerBanner />
            </div>
            <div class="swiper-slide">
              <CategoriesInnerBanner />
            </div>
            <div class="swiper-slide">
              <CategoriesInnerBanner />
            </div>
            <div class="swiper-slide">
              <CategoriesInnerBanner />
            </div>
            <div class="swiper-slide">
              <CategoriesInnerBanner />
            </div>
          </CategoriesInnerBannerCarousel>
        </div>
      </div>
      <div class="categories-page-inner-grid">
        <div class="categories-filter-list">
          <div class="categories-list-inner">
            <h5>Категория</h5>
            <nuxt-link
              :to="`/categories/${
                categoryChilds?.parent?.parent?.name?.ru
                  ? categoryChilds?.parent?.parent?.slug
                  : categoryChilds?.parent?.slug
              }`"
              >{{
                categoryChilds?.parent?.parent?.name?.ru
                  ? categoryChilds?.parent?.parent?.name?.ru
                  : categoryChilds?.parent?.name?.ru
              }}</nuxt-link
            >
            <ul class="categories-list-inner">
              <li>
                <span
                  :class="{
                    'active-category':
                      $route.params.index ==
                      (!categoryChilds?.parent?.parent?.slug && categoryChilds.slug),
                  }"
                  @click="
                    $router.push(
                      `/categories-inner/${
                        categoryChilds?.parent?.slug
                          ? categoryChilds?.parent?.slug
                          : categoryChilds?.slug
                      }`
                    )
                  "
                  >{{
                    categoryChilds?.parent?.parent?.name?.ru
                      ? categoryChilds?.parent?.name?.ru
                      : categoryChilds?.name?.ru
                  }}</span
                >
                <div class="child-categories-list">
                  <nuxt-link
                    v-if="categoryChilds?.children.length === 0"
                    :to="`/categories-inner/${categoryChilds?.slug}`"
                    :class="{
                      'active-category': $route.params.index == categoryChilds?.slug,
                    }"
                    >{{ categoryChilds?.name?.ru }}</nuxt-link
                  >
                  <nuxt-link
                    v-else
                    v-for="childs in categoryChilds?.children"
                    :to="`/categories-inner/${childs?.slug}`"
                    :class="{ 'active-category': $route.params.index == childs?.slug }"
                    :key="childs.id"
                    >{{ childs?.name?.ru }}</nuxt-link
                  >
                </div>
              </li>
            </ul>
            <span class="categories-list_show-more">Показать еще</span>
          </div>
          <div class="filter-range">
            <h5>Категория</h5>

            <a-slider
              range
              :step="10000"
              :max="20000000"
              :min="10000"
              :default-value="[10000, 20000000]"
              @change="onChangeSlider"
              @afterChange="onAfterChange"
            />
            <div class="filter-slider-inputs">
              <span>
                <input type="text" placeholder="от" />
                <span>₽</span>
              </span>
              <span>
                <input type="text" placeholder="до" />
                <span>₽</span>
              </span>
            </div>
          </div>
          <div v-for="attribit in attributes" :key="attribit.id">
            <h5>{{ attribit?.name?.ru }}</h5>
            <div class="categories-checkbox-list">
              <a-checkbox
                class="filter-checkbox"
                v-for="option in attribit.options"
                :key="option.id"
                :checked="$route.query?.attributes?.includes(option.id)"
                @change="onChange(option.id)"
                >{{ option?.name?.ru }}
              </a-checkbox>

              <span class="categories-list_show-more">Показать еще</span>
            </div>
          </div>
        </div>
        <div class="categories-products">
          <div class="d-flex justify-content-between w-100">
            <div class="select-filters">
              <span
                v-for="filterItem in filterOptions"
                :key="filterItem.id"
                @click="deleteFilterItem(filterItem.id)"
                >{{ filterItem?.name?.ru }}<span v-html="filterX"></span
              ></span>
              <div
                class="clear-filter"
                @click="clearFilter"
                v-if="Object.keys($route.query).length > 0"
              >
                Filtrni tozalash
              </div>
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
          <div class="categories-card-grid" v-if="products.length > 0">
            <ProductCard
              v-for="product in products"
              :key="product.id"
              :product="{
                ...product?.default_product,
                info: {
                  name: product?.name,
                },
              }"
            />
          </div>
          <div class="comments-empty" v-else>
            <img src="../../assets/images/comments-empty.png" alt="" />
            <h4>Mahsulot topilmadi</h4>
          </div>
          <div class="categories-products-show-more" v-if="products.length > 30">
            Показать еще 44
          </div>
          <div class="products-pagination" v-if="products.length > 30">
            <a-pagination size="small" :default-current="6" :total="500" />
          </div>
        </div>
      </div>
      <div class="categories-page-inner-grid">
        <span></span>
        <div>
          <div class="categories-page-info">
            <h5>
              ШИРОКИЙ АССОРТИМЕНТ МЕБЕЛИ В ТАШКЕНТЕ ПРЕДСТАВЛЕН В ИНТЕРНЕТ-МАГАЗИНЕ
              DISKONT (ТАШКЕНТ, УЗБЕКИСТАН) ПО ВЫГОДНЫМ ЦЕНАМ ОТ ПРОИЗВОДИТЕЛЯ.
            </h5>
            <p>
              DISKONT предлагает: мебель для гостиной, шкафы и комоды, кровати и
              матрасы, мягкую мебель, стулья, кресла и столы, садовую мебель и мебель для
              офиса.
            </p>
            <p>
              В нашем интернет-магазине представлен широкий ассортимент предметов мебели
              на любой вкус и бюджет. Мы предлагаем удобный выбор непосредственно на
              сайте, минуя долгие утомительные разъезды по множеству мебельных магазинов и
              рынков Ташкента, где можно купить хорошую недорогую мебель. Но! Поскольку их
              ассортимент сильно отличается, и вы вынуждены тратить время и силы на
              перемещения из одной точки Ташкента в другую. А на DISKONT собраны лучшие
              предложения многих производителей по выгодным ценам! Покупая мебель у нас вы
              гарантированно получаете качественный товар, оперативную доставку и сборку
              мебели у вас дома.
            </p>
            <p>
              Модельный ряд мебели пополняется практически ежедневно, следите за нашими
              новостями и подписывайтесь на нашу рассылку в форме ниже.
            </p>
            <p>
              Условия доставки вашего заказа: мы доставляем заказанные товары по Ташкенту
              и в радиусе 5 км от большой кольцевой дороги.
            </p>
            <p>
              Форма оплаты заказа: вы производите оплату своего заказа при его получении
              наличными, пластиковой картой или перечислением (просим уточнить возможность
              безналичной оплаты у консультанта).
            </p>
            <p>
              Оформить заказ можно через Telegram или позвонив в нашу единую службу
              поддержки по номеру 200 7 002. Добро пожаловать в интернет-магазин товаров
              для дома DISKONT!
            </p>
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
import CategoriesCard from "../../components/cards/CategoriesCard.vue";
import ProductCard from "../../components/cards/ProductCard.vue";
import CategoriesAppCard from "../../components/categories/categories-app-banner.vue";
import CategoriesInnerBannerCarousel from "../../components/categories/categoriesInner-banner-carousel.vue";
import CategoriesInnerBanner from "../../components/categories/categoriesInner-banner.vue";
import CategoriesTabCarousel from "../../components/categories/categoriesInner-tab-carousel.vue";
export default {
  data() {
    return {
      arrow: require("../../assets/svg/dropdown-icon.svg?raw"),
      filterX: require("../../assets/svg/selected-filter-x.svg?raw"),
      value: "all",
      disabled: false,
      filterOptions: [],
      products: [],
      atr: [],
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
    };
  },
  async asyncData({ $axios, params, query, store }) {
    const [categoriesData, categoryChildsData, productsData] = await Promise.all([
      $axios.$get(`/categories`, {
        params: {
          limit: 10,
        },
      }),
      $axios.$get(`/categories/${params.index}`),
      store.dispatch("fetchProducts/getProducts", {
        limit: 12,
      }),
    ]);
    const categories = categoriesData?.categories?.data;
    const categoryChilds = categoryChildsData?.category;
    const products = categoryChildsData?.product_infos;
    const attributes = categoryChildsData?.attributes;
    const options = [];
    categoryChildsData?.attributes.forEach((item) => {
      options.push(...item.options);
    });
    const filterOptions = [];
    if (query.attributes) {
      let atr = query.attributes.split(",");
      atr.forEach((item) => {
        let findItem = options.find((elem) => elem.id == item);
        filterOptions.push(findItem);
      });
    }
    const allInfo = categoryChildsData;
    const productsOthers = productsData?.products?.data;
    return {
      categoryChilds,
      products,
      attributes,
      allInfo,
      options,
      filterOptions,
      categories,
      productsOthers,
    };
  },

  mounted() {},
  computed: {
    filterAtributs() {
      let arr = [];
      if (this.$route.query?.attributes) {
        arr = this.$route.query?.attributes.split(",");
      }
      return arr.length;
    },
  },
  methods: {
    clearFilter() {
      this.$router.replace({
        path: `/categories-inner/${this.$route.params.index}`,
        query: {},
      });
      this.filterOptions = [];
    },
    async __GET_PRODUCTS() {
      const data = await this.$axios.$get(`/categories/${this.$route.params.index}`, {
        params: { ...this.$route.query },
      });
      this.products = data?.product_infos;
    },
    async onChange(value) {
      let atr = [];
      if (this.$route.query.attributes) {
        atr = await this.$route.query.attributes.split(",");
      }
      if (atr.includes(`${value}`)) {
        atr.splice(atr.indexOf(`${value}`), 1);
      } else {
        atr.push(value);
      }
      let string = await atr.join(",");
      if (!this.$route.query.attributes || this.$route.query.attributes != string) {
        let query = { ...this.$route.query, attributes: string };
        await this.$router.replace({
          path: `/categories-inner/${this.$route.params.index}`,
          query: query,
        });
      }
      this.filterOptions = [];
      if (this.$route.query.attributes) {
        let filterAtr = this.$route.query.attributes.split(",");
        filterAtr.forEach((item) => {
          let findItem = this.options.find((elem) => elem.id == item);
          this.filterOptions.push(findItem);
        });
      }
    },
    onChangeSlider(val) {},
    async deleteFilterItem(id) {
      let atr = await this.$route.query.attributes.split(",");
      atr.splice(atr.indexOf(`${id}`), 1);
      let query = { ...this.$route.query, attributes: atr.join(",") };
      await this.$router.replace({
        path: `/categories-inner/${this.$route.params.index}`,
        query: query,
      });
    },
    async onAfterChange(value) {
      if (
        !this.$route.query.max_price ||
        this.$route.query.min_price != value[0] ||
        this.$route.query.max_price != value[1]
      ) {
        let query = { ...this.$route.query, min_price: value[0], max_price: value[1] };
        await this.$router.replace({
          path: `/categories-inner/${this.$route.params.index}`,
          query: query,
        });
        this.__GET_PRODUCTS();
      }
    },
  },
  watch: {
    filterAtributs(val) {
      this.__GET_PRODUCTS();
      if (val == 0 && this.$route.query.attributes == "") {
        let query = { ...this.$route.query };
        delete query.attributes;
        this.$router.replace({
          path: `/categories-inner/${this.$route.params.index}`,
          query: query,
        });
      }
      if (val > 0) {
        this.filterOptions = [];
        if (this.$route.query.attributes) {
          let filterAtr = this.$route.query.attributes.split(",");
          filterAtr.forEach((item) => {
            let findItem = this.options.find((elem) => elem.id == item);
            this.filterOptions.push(findItem);
          });
        }
      }
    },
  },
  components: {
    MainTitle,
    CategoriesCard,
    ProductCard,
    CategoriesAppCard,
    CategoriesInnerBannerCarousel,
    CategoriesInnerBanner,
    CategoriesTabCarousel,
  },
};
</script>
<style lang="css">
@import "../../assets/css/pages/categories.css";

.comments-empty h4 {
  font-family: var(--SF_500);
  font-style: normal;
  font-weight: 510;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  color: #000000;
  margin-bottom: 32px;
  margin-top: 32px;
}

.active-category {
  color: #000 !important;
}
.text-test {
  color: red;
}
</style>
