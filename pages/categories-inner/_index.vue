<template lang="html">
  <div class="categories-page-inner">
    <div class="container_xl">
      <div>
        <div class="categories-breadcrumb">
          <nuxt-link to="/">Diskont main page</nuxt-link>
          <nuxt-link to="/">
            Smartfonlar
            <span v-html="arrow"></span>
          </nuxt-link>
        </div>
        <div class="d-flex categories-page-title">
          <MainTitle title="Smartfonlar" />
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
              <span class="categories-tab-link">goodbek</span>
            </div>
            <div class="swiper-slide d-inline">
              <span class="categories-tab-link">goodbek</span>
            </div>
            <div class="swiper-slide d-inline">
              <span class="categories-tab-link">goodbek</span>
            </div>

            <div class="swiper-slide d-inline">
              <span class="categories-tab-link">goodbek</span>
            </div>
            <div class="swiper-slide d-inline">
              <span class="categories-tab-link">goodbek</span>
            </div>
            <div class="swiper-slide d-inline">
              <span class="categories-tab-link">goodbek</span>
            </div>

            <div class="swiper-slide d-inline">
              <span class="categories-tab-link">goodbek</span>
            </div>
            <div class="swiper-slide d-inline">
              <span class="categories-tab-link">goodbek</span>
            </div>
            <div class="swiper-slide d-inline">
              <span class="categories-tab-link">goodbek@1312</span>
            </div>
            <div class="swiper-slide d-inline">
              <span class="categories-tab-link">goodbek123123</span>
            </div>
            <div class="swiper-slide d-inline">
              <span class="categories-tab-link categories-tab-link-last"
                >goodbek00000</span
              >
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
            <span class="categories-list_show-more">Показать еще</span>
          </div>
          <h5>Диагональ</h5>
          <div class="categories-checkbox-list">
            <a-checkbox class="filter-checkbox" @change="onChange"> 6,36" </a-checkbox>
            <a-checkbox class="filter-checkbox" @change="onChange"> 6,36" </a-checkbox>
            <a-checkbox class="filter-checkbox" @change="onChange"> 6,36" </a-checkbox>
            <a-checkbox class="filter-checkbox" @change="onChange"> 6,36" </a-checkbox>
            <a-checkbox class="filter-checkbox" @change="onChange"> 6,36" </a-checkbox>
            <a-checkbox class="filter-checkbox" @change="onChange"> 6,36" </a-checkbox>
            <span class="categories-list_show-more">Показать еще</span>
          </div>
        </div>
        <div class="categories-products">
          <div class="d-flex justify-content-end w-100">
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
      value: "all",
      disabled: false,
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
  methods: {
    onChange(value) {
      console.log("change: ", value);
    },
    onAfterChange(value) {
      console.log("afterChange: ", value);
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
.categories-page-inner-grid {
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-gap: 22px;
}
.categories-filter-select {
  margin-bottom: 24px;
}
.categories-filter-select .ant-select-selection {
  background: #ffffff;
  border: 1px solid #f5f5f5;
  border-radius: 12px;
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  display: flex;
  align-items: center;
  height: 40px;
  color: #333333;
}
.categories-filter-select .ant-select-arrow {
  background: rgba(181, 181, 181, 0.1);
  border-radius: 52px;
  display: flex;
  align-items: center;
  width: 18px;
  height: 18px;
  justify-content: center;
}
.categories-filter-select .ant-select-arrow i {
  color: black;
}
.categories-filter-select .ant-select-arrow i svg {
  width: 8px;
  height: 8px;
}
.categories-filter-list h5 {
  font-family: var(--SB_600);
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #333333;
  margin-bottom: 15px;
}
.filter-checkbox .ant-checkbox-checked .ant-checkbox-inner {
  background-color: #1f8a70;
  border-color: #1f8a70;
  border-radius: 4px;
}
.filter-checkbox .ant-checkbox-inner {
  border-radius: 4px;
  width: 18px;
  height: 18px;
}
.filter-checkbox .ant-checkbox-wrapper:hover .ant-checkbox-inner,
.filter-checkbox .ant-checkbox:hover .ant-checkbox-inner,
.filter-checkbox .ant-checkbox-input:focus + .ant-checkbox-inner {
  border-color: #1f8a70;
}
.filter-checkbox .ant-checkbox-checked::after {
  border-color: #1f8a70;
}
.filter-checkbox {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  margin-bottom: 14px;
  color: #333333;
}
.ant-checkbox-wrapper + .ant-checkbox-wrapper {
  margin-left: 0;
}
.filter-range {
  margin-bottom: 27px;
}
.categories-checkbox-list {
  margin-bottom: 31px;
}
.filter-slider-inputs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin-top: 14px;
}
.filter-slider-inputs input {
  padding: 6px 8px;
  border: 0.916364px solid #eef1f2;
  height: 35px;
  border-radius: 7.33091px;
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 12.8291px;
  line-height: 18px;
  display: flex;
  align-items: center;
  letter-spacing: -0.256582px;
  color: #000;
}
.filter-slider-inputs input::placeholder {
  color: #d4dadf;
}
.filter-slider-inputs input:focus {
  outline: none;
}
.filter-slider-inputs > span {
  position: relative;
  display: flex;
  align-items: center;
}
.filter-slider-inputs > span > span {
  position: absolute;
  right: 7px;
  color: #d4dadf;
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 12.8291px;
  line-height: 18px;
  display: flex;
  align-items: center;
  letter-spacing: -0.256582px;
}
.categories-products-show-more {
  background: #f6f7f9;
  border: 1px solid #f6f7f9;
  border-radius: 12px;
  padding-top: 12px;
  padding-bottom: 12px;
  width: 100%;
  font-family: var(--SB_600);
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #1f8a70;
  display: flex;
  justify-content: center;
  cursor: pointer;
}
.categories-products-grid {
  margin-bottom: 74px;
}
.products-pagination {
  display: flex;
  justify-content: center;
  margin-top: 18px;
}
.categories-products {
  margin-bottom: 90px;
}
.ant-pagination-item {
  border: none;

  margin-right: 0;
}
.ant-pagination.mini .ant-pagination-item a {
  font-family: var(--SB_600);
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 50px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #1c1f22;
}
.ant-pagination.mini .ant-pagination-item {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.ant-pagination {
  display: flex;
  align-items: center;
}
.ant-pagination-item-active a {
  color: #1f8a70 !important;
}
.ant-pagination-item-link{
  display: flex !important;
  align-items: center !important;
}
.ant-pagination-disabled {
  opacity: 0 !important; 
}
</style>
