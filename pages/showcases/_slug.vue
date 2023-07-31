<template lang="html">
  <div class="categories-page-inner">
    <div class="container_xl">
      <div>
        <div class="page-breadcrumb">
          <nuxt-link :to="localePath('/')">Diskont main page</nuxt-link>
          <nuxt-link :to="localePath('/')">
            {{ showcases?.name }}
          </nuxt-link>
        </div>
        <div class="d-flex justify-content-between align-items-end showcases_top">
          <div class="d-flex categories-page-title">
            <MainTitle :title="showcases?.name" class="mb-0" />
            <span class="align-items-end">{{ showcases?.products?.length }} товаров</span>
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
      <div class="categories-page-inner-grid">
        <div class="categories-filter-list">
          <div class="categories-list-inner px-0">
            <h5>Категория</h5>
            <!-- <div v-for="firstCategory in allCategories" :key="firstCategory?.id">
              <nuxt-link
                :to="`/categories-inner/${firstCategory?.slug}`"
                :class="{
                  'active-category': $route.params.index == firstCategory?.slug,
                }"
                class="first-category"
                >{{ firstCategory?.name }}</nuxt-link
              >
              <Transition name="bounce">
                <ul
                  class="categories-list-inner"
                  v-if="
                    (firstCategory?.children.length > 0 &&
                      firstCategory?.slug == $route.params.index) ||
                    firstCategory.children.find(
                      (item) => item.slug == $route.params.index
                    ) ||
                    firstCategory.children.find((item) =>
                      item.children.find((elem) => elem.slug == $route.params.index)
                    )
                  "
                >
                  <li
                    v-for="middCategory in firstCategory?.children"
                    :key="middCategory?.id"
                  >
                    <span
                      :class="{
                        'active-category': $route.params.index == middCategory?.slug,
                      }"
                      @click="$router.push(`/categories-inner/${middCategory?.slug}`)"
                      >{{ middCategory?.name }}</span
                    >
                    <div
                      class="child-categories-list"
                      v-if="
                        middCategory?.slug == $route.params.index ||
                        middCategory?.children.find(
                          (item) => item.slug == $route.params.index
                        )
                      "
                    >
                      <nuxt-link
                        v-if="middCategory?.children.length > 0"
                        v-for="childs in middCategory?.children"
                        :to="`/categories-inner/${childs?.slug}`"
                        :class="{
                          'active-category': $route.params.index == childs?.slug,
                        }"
                        :key="childs.id"
                        >{{ childs?.name }}</nuxt-link
                      >
                    </div>
                  </li>
                </ul>
              </Transition>
            </div> -->

            <span class="categories-list_show-more">Показать еще</span>
          </div>
          <div class="filter-range">
            <h5>Категория</h5>

            <a-slider
              range
              :step="10000"
              :max="20000000"
              :min="10000"
              v-model="sliderValue"
              :default-value="[10000, 20000000]"
              @change="onChangeSlider"
              @afterChange="onAfterChange"
            />
            <div class="filter-slider-inputs">
              <span>
                <input type="text" v-model="sliderValue[0]" placeholder="от" />
                <span></span>
              </span>
              <span>
                <input type="text" placeholder="до" v-model="sliderValue[1]" />
                <span></span>
              </span>
            </div>
          </div>
        </div>
        <div class="categories-products showcases_products">
          <div class="categories-card-grid" v-if="showcases?.products.length > 0">
            <ProductCard
              v-for="product in showcases?.products"
              :key="product.id"
              :product="product"
            />
          </div>
          <div class="comments-empty" v-else>
            <img src="../../assets/images/comments-empty.png" alt="" />
            <h4>Mahsulot topilmadi</h4>
          </div>
          <div
            class="categories-products-show-more"
            v-if="showcases?.products.length > 30"
          >
            Показать еще 44
          </div>
          <div class="products-pagination" v-if="showcases?.products.length > 30">
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
              DISKONT предлагает: мебель для гостиной, шкафы и комоды, кровати и матрасы,
              мягкую мебель, стулья, кресла и столы, садовую мебель и мебель для офиса.
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
export default {
  data() {
    return {
      showAllAtr: [],
      sliderValue: [10000, 10000000],
      arrow: require("../../assets/svg/dropdown-icon.svg?raw"),
      filterX: require("../../assets/svg/selected-filter-x.svg?raw"),
      value: "all",
      disabled: false,
      filterOptions: [],
      products: [],
      atr: [],
      atributDrop: [],
      status: [
        {
          value: "all",
          label: "Barchasi",
        },
      ],
    };
  },
  async asyncData({ params, query, store, i18n }) {
    const [showcasesData] = await Promise.all([
      store.dispatch("fetchShowcases/getShowcasesBySlug", {
        slug: params.slug,
        params: {
          params: { ...query },
          headers: {
            Language: i18n.locale,
          },
        },
      }),
    ]);
    const showcases = showcasesData?.showcase;

    return {
      showcases,
    };
  },
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
    showAllAtributs(id) {
      if (!this.showAllAtr.includes(id)) {
        this.showAllAtr.push(id);
      }
    },

    atributDropAction(id) {
      if (!this.atributDrop.includes(id)) {
        this.atributDrop.push(id);
      } else {
        this.atributDrop = this.atributDrop.filter((item) => item != id);
      }
    },
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
    async deleteFilterItem(id) {
      let atr = await this.$route.query.attributes.split(",");
      atr.splice(atr.indexOf(`${id}`), 1);
      let query = { ...this.$route.query, attributes: atr.join(",") };

      await this.$router.replace({
        path: `/categories-inner/${this.$route.params.index}`,
        query: query,
      });
      if (!Object.keys(query).includes("attributes")) {
        this.filterOptions = [];
      }
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
      if (val == 0) this.filterOptions = [];
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
  },
};
</script>
<style lang="css">
@import "../../assets/css/pages/categories.css";
.showcases_top {
  margin-bottom: 32px;
}
.showcases_products {
  padding-top: 64px;
}
</style>
