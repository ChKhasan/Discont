<template lang="html">
  <div class="categories-page">
    <div class="container_xl">
      <div class="categories-page-grid">
        <div class="categories-list">
          <h5>Категория</h5>
          <ul>
            <li
              v-for="category in categories"
              :key="category.id"
              @click="$router.push(`/categories/${category?.slug}`)"
            >
              <span>{{ category?.name?.ru }}</span>
              <div
                class="child-categories-list"
                v-if="
                  category?.slug == $route.params.index && category?.children.length > 0
                "
              >
                <nuxt-link to="/" v-for="childs in category?.children" :key="childs.id">{{
                  childs?.name?.ru
                }}</nuxt-link>
              </div>
            </li>
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
              <MainTitle :title="categoryChilds?.name?.ru" />
              <span>8 288 товаров</span>
            </div>
          </div>
          <div class="categories-card-grid">
            <CategoriesCard
              v-for="category in categoryChilds?.children"
              :key="category.id"
              :category="category"
            />
          </div>
        </div>
      </div>
      <div class="">
        <div class="d-flex justify-content-between align-items-end">
          <MainTitle title="Kategoriyadagi top tavarlar" />
        </div>
        <div class="product-grid">
          <ProductCard v-for="product in products" :key="product.id" :product="product" />
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
          Ташкента в другую. А на DISKONT собраны лучшие предложения многих
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
export default {
  data() {
    return {
      arrow: require("../../assets/svg/dropdown-icon.svg?raw"),
      //   categoryChilds: [],
    };
  },
  async asyncData({ $axios, params,store }) {
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
    const products = productsData?.products?.data;
    return {
      categories,
      categoryChilds,
      products,
    };
  },

  components: { MainTitle, CategoriesCard, ProductCard, CategoriesAppCard },
};
</script>
<style lang="css">
@import "../../assets/css/pages/categories.css";
</style>
