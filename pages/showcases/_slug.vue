<template lang="html">
  <div class="categories-page-inner">
    <div class="container_xl">
      <div>
        <div class="page-breadcrumb" v-if="loading">
          <b-skeleton width="20%"></b-skeleton>
        </div>
        <div class="page-breadcrumb" v-else>
          <nuxt-link :to="localePath('/')">{{
            $store.state.translations["main.home-page"]
          }}</nuxt-link>
          <nuxt-link :to="localePath('/')">
            {{ showcases?.name }}
          </nuxt-link>
        </div>
        <div class="d-flex justify-content-between align-items-end showcases_top">
          <div class="d-flex categories-page-title mb-0">
            <b-skeleton width="200px" v-if="loading"></b-skeleton>
            <MainTitle :title="showcases?.name" class="mb-0" v-else />
            <!-- <span class="align-items-end">{{ showcases?.products?.length }} {{ $store.state.translations["category.product-count"] }}</span> -->
          </div>
          <a-select
            v-model="sort"
            class="categories-filter-select mb-0"
            placeholder="Select good person"
            style="width: 252px"
          >
            <a-select-option
              v-for="item in sortItems"
              :key="item?.value"
              :label="item.label"
              :value="item.value"
              >{{ item.label }}
            </a-select-option>
          </a-select>
        </div>
        <div>
          <div class="mobile__filter">
            <button class="sort" @click="sortHande = true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M15.3 5.83333H14.87L15.045 5.66667L14.87 5.5H15.3C15.3374 5.5 15.3671 5.50409 15.3905 5.50999L15.4452 5.56207C15.4921 5.6068 15.5 5.64498 15.5 5.66667C15.5 5.66683 15.5 5.66698 15.5 5.66714C15.4999 5.68891 15.4918 5.72686 15.4452 5.77126L15.3905 5.82335C15.3671 5.82924 15.3374 5.83333 15.3 5.83333ZM13.82 6.83333H14.33L13.3452 7.77126C13.3057 7.80888 13.285 7.8192 13.2763 7.82288C13.2692 7.82593 13.2497 7.83333 13.2 7.83333C13.1503 7.83333 13.1308 7.82593 13.1236 7.82288C13.115 7.8192 13.0943 7.80888 13.0548 7.77126C13.0079 7.72654 13 7.68835 13 7.66667C13 7.64498 13.0079 7.6068 13.0548 7.56207L13.82 6.83333ZM2.7 5.5H13.42L13.595 5.66667L13.42 5.83333H2.7C2.59652 5.83333 2.55214 5.80204 2.53733 5.78793C2.52471 5.77592 2.5 5.74549 2.5 5.66667C2.5 5.58785 2.52471 5.55742 2.53733 5.5454C2.55214 5.53129 2.59652 5.5 2.7 5.5ZM14.33 4.5H13.82L13.0548 3.77126C13.0079 3.72654 13 3.68835 13 3.66667C13 3.64498 13.0079 3.6068 13.0548 3.56207C13.1417 3.47931 13.2583 3.47931 13.3452 3.56207L14.33 4.5ZM2.60951 12.1767C2.63287 12.1708 2.66257 12.1667 2.7 12.1667H3.13L2.955 12.3333L3.13 12.5H2.7C2.66257 12.5 2.63287 12.4959 2.60951 12.49L2.55483 12.4379C2.50786 12.3932 2.5 12.355 2.5 12.3333C2.5 12.3116 2.50786 12.2735 2.55483 12.2287L2.60951 12.1767ZM4.94517 10.4379L4.18 11.1667H3.67L4.65483 10.2287C4.74172 10.146 4.85828 10.146 4.94517 10.2287C4.99214 10.2735 5 10.3116 5 10.3333C5 10.355 4.99214 10.3932 4.94517 10.4379ZM15.3 12.5H4.58L4.405 12.3333L4.58 12.1667H15.3C15.4035 12.1667 15.4479 12.198 15.4627 12.2121C15.4753 12.2241 15.5 12.2545 15.5 12.3333C15.5 12.4122 15.4753 12.4426 15.4627 12.4546C15.4479 12.4687 15.4035 12.5 15.3 12.5ZM3.67 13.5H4.18L4.94517 14.2287C4.99214 14.2735 5 14.3116 5 14.3333C5 14.355 4.99214 14.3932 4.94517 14.4379C4.90567 14.4756 4.88504 14.4859 4.87635 14.4895C4.86916 14.4926 4.8497 14.5 4.8 14.5C4.7503 14.5 4.73084 14.4926 4.72365 14.4895C4.71496 14.4859 4.69433 14.4756 4.65483 14.4379L3.67 13.5Z"
                  fill="black"
                  stroke="black"
                /></svg
              >{{ $store.state.translations["category.sorting"] }}
            </button>
          </div>
        </div>
      </div>
      <div class="">
        <!-- <div class="categories-filter-list">
          <div class="filter-range">
            <h5>{{ $store.state.translations["category.price"] }}</h5>
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
                <input
                  type="text"
                  v-model="sliderValue[0]"
                  placeholder="от"
                  @keyup.enter="onAfterChange(sliderValue)"
                />
                <span></span>
              </span>
              <span>
                <input
                  type="text"
                  placeholder="до"
                  v-model="sliderValue[1]"
                  @keyup.enter="onAfterChange(sliderValue)"
                />
                <span></span>
              </span>
            </div>
          </div>
        </div> -->
        <div class="categories-products showcases_products">
          <div class="categories-card-grid" v-if="loading">
            <div
              class="empty-card"
              v-for="product in [1, 2, 4, 5, 6, 7, 8]"
              :key="product"
            >
              <b-skeleton width="100%" height="100%"></b-skeleton>
            </div>
          </div>
          <div class="products-grid-6" v-if="showcases?.products?.length > 0 && !loading">
            <ProductCard
              v-for="product in products"
              :key="product.id"
              :product="product"
            />
          </div>
          <div class="comments-empty" v-else>
            <nuxt-img format="webp" src="/comments-empty.png" alt="" />
            <h4>{{ $store.state.translations["category.product-not-found"] }}</h4>
          </div>
          <!-- <div
            class="categories-products-show-more"
            v-if="showcases?.products?.length > 30"
          >
            {{ $store.state.translations["main.show-more"] }} 44
          </div> -->
          <div class="products-pagination" v-if="totalPage > params.pageSize">
            <a-pagination
              size="small"
              v-model.number="current"
              :total="totalPage"
              :page-size.sync="params.pageSize"
            />
          </div>
        </div>
      </div>
      <div class="categories-page-inner-grid">
        <span></span>
        <div>
          <!-- <div class="categories-page-info">
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
              поддержки по номеру 200 7 002. Добро пожаловать в интернет-магазин tovarlar
              для дома DISKONT!
            </p>
          </div> -->
        </div>
      </div>
    </div>
    <div class="categories-app-banner-container">
      <!--<div class="container_xl">
        <CategoriesAppCard />
      </div>-->
    </div>
    <div :class="{ show: sortHande }" class="hidden__filter">
      <div class="filter-list">
        <div>
          <div class="filter__header">
            <h5>Saralash</h5>
            <div @click="sortHande = false" class="x">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M4.2213 4.38536C4.15114 4.31 4.09548 4.22054 4.05751 4.12208C4.01954 4.02362 4 3.91809 4 3.81152C4 3.70495 4.01954 3.59943 4.05751 3.50097C4.09548 3.40251 4.15114 3.31305 4.2213 3.23769C4.29146 3.16233 4.37475 3.10256 4.46642 3.06177C4.55809 3.02099 4.65634 3 4.75556 3C4.85478 3 4.95303 3.02099 5.0447 3.06177C5.13636 3.10256 5.21966 3.16233 5.28982 3.23769L13.0562 11.581L20.8226 3.23769C20.8927 3.16233 20.976 3.10256 21.0677 3.06177C21.1594 3.02099 21.2576 3 21.3568 3C21.456 3 21.5543 3.02099 21.646 3.06177C21.7376 3.10256 21.8209 3.16233 21.8911 3.23769C21.9612 3.31305 22.0169 3.40251 22.0549 3.50097C22.0928 3.59943 22.1124 3.70495 22.1124 3.81152C22.1124 3.91809 22.0928 4.02362 22.0549 4.12208C22.0169 4.22054 21.9612 4.31 21.8911 4.38536L14.1232 12.727L21.8911 21.0687C21.9612 21.144 22.0169 21.2335 22.0549 21.332C22.0928 21.4304 22.1124 21.5359 22.1124 21.6425C22.1124 21.7491 22.0928 21.8546 22.0549 21.9531C22.0169 22.0515 21.9612 22.141 21.8911 22.2164C21.8209 22.2917 21.7376 22.3515 21.646 22.3923C21.5543 22.433 21.456 22.454 21.3568 22.454C21.2576 22.454 21.1594 22.433 21.0677 22.3923C20.976 22.3515 20.8927 22.2917 20.8226 22.2164L13.0562 13.8731L5.28982 22.2164C5.21966 22.2917 5.13636 22.3515 5.0447 22.3923C4.95303 22.433 4.85478 22.454 4.75556 22.454C4.65634 22.454 4.55809 22.433 4.46642 22.3923C4.37475 22.3515 4.29146 22.2917 4.2213 22.2164C4.15114 22.141 4.09548 22.0515 4.05751 21.9531C4.01954 21.8546 4 21.7491 4 21.6425C4 21.5359 4.01954 21.4304 4.05751 21.332C4.09548 21.2335 4.15114 21.144 4.2213 21.0687L11.9892 12.727L4.2213 4.38536Z"
                  fill="#020105"
                />
              </svg>
            </div>
          </div>
          <div class="mobile-sorts">
            <div
              class="sort-item"
              v-for="(item, index) in sortItems"
              :key="index"
              @click="sort = item.value"
            >
              <span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <circle cx="14" cy="14" r="13.5" stroke="#1F8A70" />
                </svg>
                <svg
                  v-if="sort == item.value"
                  class="position-absolute"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <circle cx="10" cy="10" r="10" fill="#1F8A70" />
                </svg> </span
              >{{ item.label }}
            </div>
          </div>
          <!-- <span class="categories-list_show-more">{{ $store.state.translations["main.show-more"] }}</span> -->
        </div>
        <div class="categories-atribute-box">
          <button class="confirm" @click="sortHande = false">
            {{ $store.state.translations["category.show-resoult"] }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MainTitle from "../../components/Main-title.vue";
import CategoriesCard from "../../components/cards/CategoriesCard.vue";
import ProductCard from "../../components/cards/ProductCard.vue";
import CategoriesAppCard from "../../components/categories/categories-app-banner.vue";
import global from "../../mixins/global";
export default {
  mixins: [global],
  data() {
    return {
      sortHande: false,
      sortItems: [
        {
          value: "all",
          label: "Все товары",
        },
        {
          value: "popular",
          label: "По популярности",
        },
        {
          value: "cheap",
          label: "Подешевле",
        },
        {
          value: "expensive",
          label: "Подороже",
        },
      ],
      loading: false,
      showAllAtr: [],
      sliderValue: [10000, 10000000],
      arrow: require("../../assets/svg/dropdown-icon.svg?raw"),
      filterX: require("../../assets/svg/selected-filter-x.svg?raw"),
      sort: "all",
      disabled: false,
      filterOptions: [],
      products: [],
      showcases: [],
      atr: [],
      atributDrop: [],
    };
  },
  async asyncData({ params, query, store, i18n }) {
    store.commit("loaderHandler", true);
    const [showcasesData] = await Promise.all([
      store.dispatch("fetchShowcases/getShowcasesBySlug", {
        slug: params.slug,
        params: {
          params: { ...query },
          headers: {
            lang: i18n.locale,
          },
        },
      }),
    ]);
    const showcases = showcasesData?.showcase;
    setTimeout(() => {
      store.commit("loaderHandler", false);
    },0)
    return {
      showcases,
    };
  },
  mounted() {
    this.getFirstData("__GET_PRODUCTS");
    this.sortItems = [
      {
        value: "all",
        label: this.$store.state.translations["category.all"],
      },
      {
        value: "popular",
        label: this.$store.state.translations["category.popular"],
      },
      {
        value: "cheap",
        label: this.$store.state.translations["category.cheap"],
      },
      {
        value: "expensive",
        label: this.$store.state.translations["category.expensive"],
      },
    ];
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
    onChangeSlider(val) {},
    clearFilter() {
      this.$router.replace({
        path: this.$route.path,
        query: {},
      });
      this.filterOptions = [];
    },
    async __GET_PRODUCTS() {
      this.loading = true;
      const data = await this.$store.dispatch("fetchProducts/getProducts", {
        params: { ...this.$route.query, showcase: this.$route.params.slug },
      });
      this.totalPage = data?.products?.total;
      this.products = data?.products?.data;
      this.loading = false;
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
          path: this.$route.path,
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
        path: this.$route.path,
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
          path: this.$route.path,
          query: query,
        });
        this.__GET_PRODUCTS();
      }
    },
  },
  watch: {
    async sort(val) {
      let filterObj = {
        ...this.$route.query,
        sort: val,
      };
      if (val == "all") {
        delete filterObj["sort"];
        await this.$router.replace({
          path: this.$route.path,
          query: { ...filterObj },
        });
      } else {
        if (this.$route.query.sort != filterObj.sort) {
          await this.$router.replace({
            path: this.$route.path,
            query: { ...filterObj },
          });
        }
        this.__GET_PRODUCTS({ ...this.$route.query });
      }
    },
    async current(val) {
      this.changePagination(val, "__GET_PRODUCTS");
    },
    filterAtributs(val) {
      if (val == 0) this.filterOptions = [];
      this.__GET_PRODUCTS();
      if (val == 0 && this.$route.query.attributes == "") {
        let query = { ...this.$route.query };
        delete query.attributes;
        this.$router.replace({
          path: this.$route.path,
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
@import "../../assets/css/pages/main-page.css";

.showcases_top {
  margin-bottom: 32px;
}
.showcases_products {
  /* padding-top: 64px; */
}
@media (max-width: 1024px) {
  .showcases_top {
    margin-bottom: 0;
  }
  .showcases_products {
    padding-top: 24px;
  }
}
</style>
