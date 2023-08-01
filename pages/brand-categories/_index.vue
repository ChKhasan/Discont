<template lang="html">
  <div class="categories-page-inner">
    <div class="container_xl">
      <div>
        <div class="page-breadcrumb">
          <nuxt-link :to="localePath('/')">Diskont main page</nuxt-link>
          <nuxt-link :to="localePath('/')"> {{ brand?.name }} </nuxt-link>
        </div>
        <div class="d-flex categories-page-title justify-content-between">
          <div class="d-flex justify-content-between">
            <MainTitle :title="`Каталог ${brand?.name}`" />
            <span>{{ brandProducts?.length }} tovar</span>
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
      </div>
      <div class="categories-page-inner-grid">
        <div class="categories-filter-list">
          <div class="categories-list">
            <h5>Kategoriyalar</h5>
            <ul>
              <li v-for="brand in brandsAll" :key="brand?.id">
                <span
                  @click="$router.push(localePath(`/brand-categories/${brand?.slug}`))"
                  :class="{ 'active-brand': $route.params.index == brand?.slug }"
                  >{{ brand?.name }}</span
                >
              </li>
            </ul>
            <!-- <span
              class="categories-list_show-more"
              @click="showAll"
              v-if="brands?.length < brandsAll?.length"
              >Показать еще</span
            > -->
          </div>
          <div class="filter-range">
            <h5>Narxi</h5>
            <a-slider
              range
              :step="10"
              :default-value="[20, 50]"
              @change="onChange"
              @afterChange="onAfterChange"
            />
            <div class="filter-slider-inputs">
              <span>
                <input type="text" placeholder="от" />
                <span></span>
              </span>
              <span>
                <input type="text" placeholder="до" />
                <span></span>
              </span>
            </div>
          </div>
        </div>
        <div class="categories-products">
          <div class="d-flex justify-content-end w-100"></div>
          <div class="categories-card-grid" v-if="brandProducts.length > 0">
            <ProductCard
              v-for="product in brandProducts"
              :product="{
                ...product?.default_product,
                info: {
                  name: product?.name,
                },
              }"
              :key="product?.id"
            />
          </div>
          <div class="comments-empty" v-else>
            <img src="../../assets/images/comments-empty.png" alt="" />
            <h4>Mahsulot topilmadi</h4>
          </div>
          <div class="categories-products-show-more" v-if="false">Показать еще 44</div>
          <div class="products-pagination" v-if="false">
            <a-pagination size="small" :default-current="6" :total="500" />
          </div>
        </div>
      </div>
      <div class="">
        <div class="d-flex justify-content-between align-items-end">
          <MainTitle title="Kategoriyadagi top tavarlar" />
        </div>
        <div class="product-grid">
          <!-- <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard /> -->
        </div>
      </div>
      <div class="categories-page-info">
        <h5>
          ШИРОКИЙ АССОРТИМЕНТ МЕБЕЛИ В ТАШКЕНТЕ ПРЕДСТАВЛЕН В ИНТЕРНЕТ-МАГАЗИНЕ DISKONT
          (ТАШКЕНТ, УЗБЕКИСТАН) ПО ВЫГОДНЫМ ЦЕНАМ ОТ ПРОИЗВОДИТЕЛЯ.
        </h5>
        <p>
          DISKONT предлагает: мебель для гостиной, шкафы и комоды, кровати и матрасы,
          мягкую мебель, стулья, кресла и столы, садовую мебель и мебель для офиса.
        </p>
        <p>
          В нашем интернет-магазине представлен широкий ассортимент предметов мебели на
          любой вкус и бюджет. Мы предлагаем удобный выбор непосредственно на сайте, минуя
          долгие утомительные разъезды по множеству мебельных магазинов и рынков Ташкента,
          где можно купить хорошую недорогую мебель. Но! Поскольку их ассортимент сильно
          отличается, и вы вынуждены тратить время и силы на перемещения из одной точки
          Ташкента в другую. А на DISKONT собраны лучшие предложения многих производителей
          по выгодным ценам! Покупая мебель у нас вы гарантированно получаете качественный
          товар, оперативную доставку и сборку мебели у вас дома.
        </p>
        <p>
          Модельный ряд мебели пополняется практически ежедневно, следите за нашими
          новостями и подписывайтесь на нашу рассылку в форме ниже.
        </p>
        <p>
          Условия доставки вашего заказа: мы доставляем заказанные товары по Ташкенту и в
          радиусе 5 км от большой кольцевой дороги.
        </p>
        <p>
          Форма оплаты заказа: вы производите оплату своего заказа при его получении
          наличными, пластиковой картой или перечислением (просим уточнить возможность
          безналичной оплаты у консультанта).
        </p>
        <p>
          Оформить заказ можно через Telegram или позвонив в нашу единую службу поддержки
          по номеру 200 7 002. Добро пожаловать в интернет-магазин tovarlar для дома
          DISKONT!
        </p>
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
      // brands: [],
      // brandProducts: [],
      // brandsAll: [],
      // brand: {},
      status: [
        {
          value: "all",
          label: "Barchasi",
        },
      ],
    };
  },
  async asyncData({ store, params, i18n }) {
    const [brandsData, brandData] = await Promise.all([
      store.dispatch("fetchBrands/getBrands"),
      store.dispatch("fetchBrands/getBrandsBySlug", {
        id: params.index,
        params: {
          headers: {
            Language: i18n.locale,
          },
        },
      }),
    ]);
    let brands = [...brandsData.brands?.data];
    let brandsAll = brandsData.brands?.data;
    brands = [...brandsData.brands?.data];
    brands = [...brands.splice(0, 6)];
    let brandProducts = brandData.products?.data;
    let brand = brandData.brand;
    return {
      brandsAll,
      brands,
      brandProducts,
      brand,
    };
  },
  methods: {
    onChange(value) {
      console.log("change: ", value);
    },
    onAfterChange(value) {
      console.log("afterChange: ", value);
    },
    showAll() {
      this.brands = this.brandsAll;
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
.active-brand {
  color: #09454f !important;
}
</style>
