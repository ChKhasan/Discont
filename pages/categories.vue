<template lang="html">
  <div class="categories-page">
    <div class="container_xl">
      <div class="categories-page-grid">
        <div class="categories-list">
          <h5>Категория</h5>
          <ul>
            <li>
              <span>Televizor</span>
              <div class="child-categories-list">
                <nuxt-link to="/">Smart TV</nuxt-link>
                <nuxt-link to="/">Televizor</nuxt-link>
                <nuxt-link to="/">Smart TV</nuxt-link>
              </div>
            </li>
            <li><span>Smartfonlar</span></li>
            <li><span>Samokatlar</span></li>
            <li><span>Planshetlar</span></li>
            <li><span>Televizor</span></li>
            <li><span>Televizor</span></li>
            <li><span>Smartfonlar</span></li>
            <li><span>Planshetlar</span></li>
          </ul>
          <span class="categories-list_show-more">Показать еще</span>
        </div>
        <div>
          <div>
            <div class="page-breadcrumb">
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
          </div>
          <div class="categories-card-grid">
            <CategoriesCard />
            <CategoriesCard />
            <CategoriesCard />
            <CategoriesCard />
            <CategoriesCard />
            <CategoriesCard />
            <CategoriesCard />
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
import MainTitle from "../components/Main-title.vue";
import CategoriesCard from "../components/cards/CategoriesCard.vue";
import ProductCard from "../components/cards/ProductCard.vue";
import CategoriesAppCard from "../components/categories/categories-app-banner.vue";
export default {
  data() {
    return {
      arrow: require("../assets/svg/dropdown-icon.svg?raw"),
    };
  },
  components: { MainTitle, CategoriesCard, ProductCard, CategoriesAppCard },
};
</script>
<style lang="css">
@import "../assets/css/pages/categories.css";
</style>
