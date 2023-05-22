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
        <div class="d-flex categories-page-title justify-content-between">
          <div class="d-flex justify-content-between">
            <MainTitle :title="`Каталог ${brand?.name}`" /> <span>8 288 товаров</span>
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
            <h5>Категория</h5>
            <ul>
              <li v-for="brand in brands" :key="brand.id">
                <span
                  :class="{ 'active-brand': $route.params.index == brand?.slug }"
                  @click="$router.push(`/brand-categories/${brand?.slug}`)"
                  >{{ brand?.name }}</span
                >
              </li>
            </ul>
            <span
              class="categories-list_show-more"
              @click="showAll"
              v-if="brands?.length < brandsAll?.length"
              >Показать еще</span
            >
          </div>
          <div class="filter-range">
            <h5>Категория</h5>
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
                <span>₽</span>
              </span>
              <span>
                <input type="text" placeholder="до" />
                <span>₽</span>
              </span>
            </div>
          </div>
          <h5>ОС тури</h5>
          <div class="categories-checkbox-list">
            <a-checkbox class="filter-checkbox" @change="onChange">
              Android 13
            </a-checkbox>
            <a-checkbox class="filter-checkbox" @change="onChange">
              Android 13
            </a-checkbox>
            <a-checkbox class="filter-checkbox" @change="onChange">
              Android 13
            </a-checkbox>
            <a-checkbox class="filter-checkbox" @change="onChange">
              Android 13
            </a-checkbox>
            <a-checkbox class="filter-checkbox" @change="onChange">
              Android 13
            </a-checkbox>
            <a-checkbox class="filter-checkbox" @change="onChange">
              Android 13
            </a-checkbox>
            <span class="categories-list_show-more">Показать еще</span>
          </div>
          <h5>Аккумулятор ҳажми</h5>
          <div class="categories-checkbox-list">
            <a-checkbox class="filter-checkbox" @change="onChange">
              4250 мА / соат
            </a-checkbox>
            <a-checkbox class="filter-checkbox" @change="onChange">
              4250 мА / соат
            </a-checkbox>
            <a-checkbox class="filter-checkbox" @change="onChange">
              4250 мА / соат
            </a-checkbox>
            <a-checkbox class="filter-checkbox" @change="onChange">
              4250 мА / соат
            </a-checkbox>
            <a-checkbox class="filter-checkbox" @change="onChange">
              4250 мА / соат
            </a-checkbox>
            <a-checkbox class="filter-checkbox" @change="onChange">
              4250 мА / соат
            </a-checkbox>
            <span class="categories-list_show-more"
              >Показать еще <span v-html="arrow"></span
            ></span>
          </div>
          <h5>Диагональ</h5>
          <div class="categories-checkbox-list">
            <a-checkbox class="filter-checkbox" @change="onChange"> 6,36" </a-checkbox>
            <a-checkbox class="filter-checkbox" @change="onChange"> 6,36" </a-checkbox>
            <a-checkbox class="filter-checkbox" @change="onChange"> 6,36" </a-checkbox>
            <a-checkbox class="filter-checkbox" @change="onChange"> 6,36" </a-checkbox>
            <a-checkbox class="filter-checkbox" @change="onChange"> 6,36" </a-checkbox>
            <a-checkbox class="filter-checkbox" @change="onChange"> 6,36" </a-checkbox>
            <span class="categories-list_show-more"
              >Показать еще <span v-html="arrow"></span
            ></span>
          </div>
        </div>
        <div class="categories-products">
          <div class="d-flex justify-content-end w-100"></div>
          <div class="categories-card-grid">
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
            <ProductCard />
            <ProductCard />
          </div>
          <div class="categories-products-show-more">Показать еще 44</div>
          <div class="products-pagination">
            <a-pagination size="small" :default-current="6" :total="500" />
          </div>
        </div>
      </div>
      <div class="">
        <div class="d-flex justify-content-between align-items-end">
          <MainTitle title="Kategoriyadagi top tavarlar" />
        </div>
        <div class="product-grid">
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
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <div class="categories-page-info">
        <h5>
          ШИРОКИЙ АССОРТИМЕНТ МЕБЕЛИ В ТАШКЕНТЕ ПРЕДСТАВЛЕН В ИНТЕРНЕТ-МАГАЗИНЕ HOME24.UZ
          (ТАШКЕНТ, УЗБЕКИСТАН) ПО ВЫГОДНЫМ ЦЕНАМ ОТ ПРОИЗВОДИТЕЛЯ.
        </h5>
        <p>
          Home24.uz предлагает: мебель для гостиной, шкафы и комоды, кровати и матрасы,
          мягкую мебель, стулья, кресла и столы, садовую мебель и мебель для офиса.
        </p>
        <p>
          В нашем интернет-магазине представлен широкий ассортимент предметов мебели на
          любой вкус и бюджет. Мы предлагаем удобный выбор непосредственно на сайте, минуя
          долгие утомительные разъезды по множеству мебельных магазинов и рынков Ташкента,
          где можно купить хорошую недорогую мебель. Но! Поскольку их ассортимент сильно
          отличается, и вы вынуждены тратить время и силы на перемещения из одной точки
          Ташкента в другую. А на home24.uz собраны лучшие предложения многих
          производителей по выгодным ценам! Покупая мебель у нас вы гарантированно
          получаете качественный товар, оперативную доставку и сборку мебели у вас дома.
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
          по номеру 200 7 002. Добро пожаловать в интернет-магазин товаров для дома
          home24.uz!
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
      brands: [],
      brandProducts: [],
      brandsAll: [],
      brand: {},
      status: [
        {
          value: "all",
          label: "Barchasi",
        },
        {
          value: "qwerty1",
          label: "Goodman",
        },
        {
          value: "qwerty2",
          label: "Goodman",
        },
        {
          value: "qwerty3",
          label: "Goodman",
        },
      ],
    };
  },
  async fetch() {
    const [brandsData, brandData] = await Promise.all([
      this.$store.dispatch("fetchBrands/getBrands"),
      this.$store.dispatch("fetchBrands/getBrandsBySlug", this.$route.params.index),
    ]);
    this.brandsAll = brandsData.brands?.data;
    this.brands = [...brandsData.brands?.data];
    this.brands = [...this.brands.splice(0, 6)];
    this.brandProducts = brandData.products?.data;
    this.brand = brandData.brand;
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
  color: #1f8a70 !important;
}
</style>
