<template>
  <div class="wrap">
    <div class="container_xl">
      <div class="top">
        <h4 class="title">{{ product?.info?.name?.ru }}</h4>
        <div class="flexer">
          <div class="left">
            <div class="stars">
              <div v-if="product?.info?.stars != null">
                <a-rate v-model="product.info.stars" />
              </div>
            </div>
            <p class="reviews">(12 ta feedbacks)</p>
          </div>
          <div class="right">
            <div class="bottom">
              <button>
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.1695 0C13.237 0 12.3457 0.223898 11.5205 0.665519C10.9588 0.96608 10.4428 1.36542 10 1.83921C9.5572 1.36542 9.0412 0.96608 8.47946 0.665519C7.65423 0.223898 6.76297 0 5.83043 0C2.61555 0 0 2.73943 0 6.10663C0 8.49155 1.2026 11.0245 3.57435 13.6353C5.55464 15.8152 7.97913 17.6322 9.66429 18.7728L10 19L10.3357 18.7728C12.0209 17.6323 14.4454 15.8152 16.4257 13.6353C18.7974 11.0245 20 8.49155 20 6.10663C20 2.73943 17.3845 0 14.1695 0ZM15.5294 12.7421C13.7596 14.6903 11.6038 16.3464 10 17.4549C8.39616 16.3464 6.24037 14.6903 4.4706 12.7421C2.32499 10.3804 1.23711 8.14789 1.23711 6.10663C1.23711 3.45388 3.29769 1.29571 5.83047 1.29571C7.28866 1.29571 8.62817 1.99725 9.50544 3.2204L10 3.90993L10.4946 3.2204C11.3718 1.99725 12.7113 1.29571 14.1695 1.29571C16.7023 1.29571 18.7629 3.45388 18.7629 6.10663C18.7629 8.14789 17.675 10.3804 15.5294 12.7421Z"
                    fill="#00B2A9"
                  />
                  <path
                    d="M15.5294 12.7421C13.7596 14.6903 11.6038 16.3464 10 17.4549C8.39616 16.3464 6.24037 14.6903 4.4706 12.7421C2.32499 10.3804 1.23711 8.14789 1.23711 6.10663C1.23711 3.45388 3.29769 1.29571 5.83047 1.29571C7.28866 1.29571 8.62817 1.99725 9.50544 3.2204L10 3.90993L10.4946 3.2204C11.3718 1.99725 12.7113 1.29571 14.1695 1.29571C16.7023 1.29571 18.7629 3.45388 18.7629 6.10663C18.7629 8.14789 17.675 10.3804 15.5294 12.7421Z"
                    fill="#00B2A9"
                  />
                </svg>

                Sevimlilarga
              </button>
              <button>
                <svg
                  width="21"
                  height="19"
                  viewBox="0 0 21 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.05 5.27778H19.95C20.58 5.27778 21 4.85556 21 4.22222C21 3.58889 20.58 3.16667 19.95 3.16667H1.05C0.420002 3.16667 1.90735e-06 3.58889 1.90735e-06 4.22222C1.90735e-06 4.85556 0.420002 5.27778 1.05 5.27778Z"
                    fill="#00B2A9"
                  />
                  <path
                    d="M4.2 8.44444C4.515 8.44444 4.725 8.33889 4.935 8.12778C5.355 7.70555 5.355 7.07222 4.935 6.65L2.52 4.22222L4.935 1.79444C5.355 1.37222 5.355 0.738889 4.935 0.316667C4.515 -0.105556 3.885 -0.105556 3.465 0.316667L0.315001 3.48333C-0.105 3.90556 -0.105 4.53889 0.315001 4.96111L3.465 8.12778C3.675 8.33889 3.885 8.44444 4.2 8.44444Z"
                    fill="#00B2A9"
                  />
                  <path
                    d="M16.8 19C17.115 19 17.325 18.8944 17.535 18.6833L20.685 15.5167C21.105 15.0944 21.105 14.4611 20.685 14.0389L17.535 10.8722C17.115 10.45 16.485 10.45 16.065 10.8722C15.645 11.2944 15.645 11.9278 16.065 12.35L18.48 14.7778L16.065 17.2056C15.645 17.6278 15.645 18.2611 16.065 18.6833C16.275 18.8944 16.485 19 16.8 19Z"
                    fill="#00B2A9"
                  />
                  <path
                    d="M1.05 15.8333H19.95C20.58 15.8333 21 15.4111 21 14.7778C21 14.1444 20.58 13.7222 19.95 13.7222H1.05C0.420002 13.7222 1.90735e-06 14.1444 1.90735e-06 14.7778C1.90735e-06 15.4111 0.420002 15.8333 1.05 15.8333Z"
                    fill="#00B2A9"
                  />
                </svg>

                Taqqoslash
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-5 col-xs-12 images">
          <div class="world">
            <div thumbsSlider="" class="swiper mySwiper">
              <div class="swiper-wrapper flex-column">
                <div
                  class="swiper-slide"
                  v-for="img in product?.images"
                  :key="img.id"
                >
                  <img :src="img?.sm_img" />
                </div>
              </div>
            </div>
            <div
              style="
                --swiper-navigation-color: #fff;
                --swiper-pagination-color: #fff;
              "
              class="swiper mySwiper2"
            >
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide"
                  v-for="img in product?.images"
                  :key="img.id"
                >
                  <img :src="img?.sm_img" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xs-12 stats">
          <div class="widther">
            <div class="specs">
              <p class="lil">Махсулот хакида кискача</p>

              <div
                class="spec"
                v-for="characteristic in productCharacteristic"
                :key="characteristic.id"
              >
                <p class="question">
                  {{ characteristic?.characteristic?.name?.ru }}
                </p>
                <p class="answer">{{ characteristic?.name?.ru }}</p>
              </div>
              <p
                class="all"
                @click="allCharacteristic"
                v-if="
                  productCharacteristic?.length <
                  product?.characteristic_options?.length
                "
              >
                Barcha xarakteristikalar
              </p>
            </div>
            <div class="colors">
              <p class="lil">Цвета</p>
              <div class="grid">
                <div class="color"></div>
                <div class="color"></div>
              </div>
            </div>
            <div
              class="variations"
              v-for="(atribut, atributIndex) in productAttributes"
              :key="atributIndex"
            >
              <p class="lil">{{ atribut?.title?.ru }}</p>
              <div class="grid">
                <div
                  class="variation"
                  v-for="(option, optionIndex) in atribut?.options"
                  @click="$router.push(`/product/${option?.slug}`)"
                  :class="{
                    'active-attribute': option?.active,
                    'disabled-attribute': !option?.available,
                  }"
                  :key="optionIndex"
                >
                  {{ option?.title?.ru }}
                </div>
              </div>
            </div>
            <div class="counter">
              <p class="lil">Кол-во</p>
              <div class="grid">
                <div class="number">
                  <button><a-icon type="minus" /></button>
                  1
                  <button><a-icon type="plus" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-xs-12 order">
          <div class="cardo">
            <div class="cardo__header">
              <div class="discount">
                <p class="tag">-12%</p>
                <p class="dis__price">10 540 000 so’m</p>
                <p class="dis__txt">Chegirma narxida</p>
              </div>

              <p class="price" v-if="product?.price">
                {{
                  product?.price
                    .replace(".", ",")
                    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
                }}
                so’m
              </p>

              <p class="delivery">Yetkazib berish - 0 so’m (21-may)</p>

              <p class="coin">
                <img src="@/assets/images/coin.svg" alt="" /> +5 ta dis coin
              </p>
            </div>

            <div class="buttons">
              <button class="cart">Savatchaga solish</button>
              <button class="click">Birgina click orqali sotib olish</button>
            </div>
          </div>

          <div class="credit">
            <p>Муддатли тўлов 139 333 сўмдан / 24 ой</p>
            <button>Xalol bo’lib to’lashga olish</button>
          </div>

          <div class="credit__items">
            <div>
              <img src="@/assets/images/credit-1.svg" alt="" />
              <p>100 % Halol nasiya savdo</p>
            </div>
            <div>
              <img src="@/assets/images/credit-2.svg" alt="" />
              <p>Hech qanday penyalarsiz</p>
            </div>
            <div>
              <img src="@/assets/images/credit-3.svg" alt="" />
              <p>1 yil kafolat va service</p>
            </div>
          </div>
        </div>
      </div>
      <div class="tabs">
        <div class="butns">
          <button
            :class="{ active: aboutHandle }"
            @click="
              (aboutHandle = true),
                (specsHandle = false),
                (locationsHandle = false),
                (reviewsHandle = false)
            "
          >
            Mahsulot haqida
          </button>
          <button
            :class="{ active: specsHandle }"
            @click="
              (specsHandle = true),
                (aboutHandle = false),
                (locationsHandle = false),
                (reviewsHandle = false)
            "
          >
            Xarakteristikalari
          </button>
          <button
            :class="{ active: locationsHandle }"
            @click="
              (locationsHandle = true),
                (specsHandle = false),
                (aboutHandle = false),
                (reviewsHandle = false)
            "
          >
            Дўконларда мавжудлиги
          </button>
          <button
            :class="{ active: reviewsHandle }"
            @click="
              (reviewsHandle = true),
                (specsHandle = false),
                (locationsHandle = false),
                (aboutHandle = false)
            "
          >
            Мижозларнинг шарҳлари
          </button>
        </div>
        <div class="contents">
          <div :class="{ active: aboutHandle }" class="about">
            <div class="about__wrap">
              <h4 class="paragraph">Основные характеристики</h4>
              <p>
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem
                Ipsum.is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently
              </p>
            </div>
          </div>
          <div :class="{ active: specsHandle }" class="specifications">
            <div class="spec__wrap">
              <div class="items">
                <h4 class="paragraph">Основные характеристики</h4>
                <div class="grider">
                  <div class="item">
                    <p class="question">Бренд</p>
                    <p class="answer">Xiaomi</p>
                  </div>
                  <div class="item">
                    <p class="question">Бренд</p>
                    <p class="answer">Xiaomi</p>
                  </div>
                  <div class="item">
                    <p class="question">Бренд</p>
                    <p class="answer">Xiaomi</p>
                  </div>
                </div>
              </div>
              <div class="items">
                <h4 class="paragraph">Питание</h4>
                <div class="grider">
                  <div class="item">
                    <p class="question">Бренд</p>
                    <p class="answer">Xiaomi</p>
                  </div>
                  <div class="item">
                    <p class="question">Бренд</p>
                    <p class="answer">Xiaomi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div :class="{ active: locationsHandle }" class="locations">
            <table>
              <thead>
                <tr>
                  <th>
                    <p>Manzil</p>
                  </th>
                  <th>
                    <p>Ish vaqti</p>
                  </th>
                  <th>
                    <p>Telefon raqami</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="cyber">
                      <div class="img">
                        <img src="@/assets/images/logo/map.svg" alt="" />
                      </div>
                      <p>
                        Фарғона вилояти, Маргилон ш. Тошлоқ тумани, Алишер
                        Навоий кўчаси, 94 уй. Мўлжал: "Tabassum" мехмонхонаси
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="cyber">
                      <div class="img">
                        <img src="@/assets/images/logo/clock.svg" alt="" />
                      </div>
                      <p>09:00 - 20:30</p>
                    </div>
                  </td>
                  <td>
                    <div class="cyber">
                      <div class="img">
                        <img src="@/assets/images/logo/call.svg" alt="" />
                      </div>
                      <p>+998 55 503 6006</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="cyber">
                      <div class="img">
                        <img src="@/assets/images/logo/map.svg" alt="" />
                      </div>
                      <p>
                        Фарғона вилояти, Маргилон ш. Тошлоқ тумани, Алишер
                        Навоий кўчаси, 94 уй. Мўлжал: "Tabassum" мехмонхонаси
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="cyber">
                      <div class="img">
                        <img src="@/assets/images/logo/clock.svg" alt="" />
                      </div>
                      <p>09:00 - 20:30</p>
                    </div>
                  </td>
                  <td>
                    <div class="cyber">
                      <div class="img">
                        <img src="@/assets/images/logo/call.svg" alt="" />
                      </div>
                      <p>+998 55 503 6006</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div :class="{ active: reviewsHandle }" class="reviews">
            <div class="reviews__left">
              <div class="review">
                <p class="name">Abdulloh Aliyev</p>
                <div class="flex">
                  <div class="stars">
                    <img src="@/assets/images/Star.svg" alt="" />
                    <img src="@/assets/images/Star.svg" alt="" />
                    <img src="@/assets/images/Star.svg" alt="" />
                    <img src="@/assets/images/Star.svg" alt="" />
                    <img src="@/assets/images/Star.svg" alt="" />
                  </div>
                  <p class="date">16 октября 2023 г.</p>
                </div>
                <div class="txt">
                  <p>
                    Нам телефончик очень понравились, покупкой довольны и всем
                    советуем к приобретению. Главное, пользоваться только
                    проверенными магазинами! Мы покупали почти на 30% дешевле в
                    магазине SHOPMEONLINE RU Единственное, у них доставка
                    долгая, так как товар везут с других стран, ждали 12 дней,
                    ну ничего, главное, что всё приходит вовремя и за очень
                    приятную цену.😍
                  </p>
                </div>
              </div>
            </div>
            <div class="reviews__right">
              <div class="leave">
                <p class="leave__title">
                  <img src="@/assets/images/like.svg" alt="" />
                  O’z fikr va izohlaringizni qoldiring
                </p>
                <button class="leave__btn">Baho qoldirish</button>
              </div>
              <div class="rating">
                <img src="@/assets/images/cheat.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="other">
        <h4>O’xshash tovarlar</h4>

        <div class="other__grid">
          <ProductCardVue />
          <ProductCardVue />
          <ProductCardVue />
          <ProductCardVue />
        </div>
      </div>
      <ApplicationBanner class="app" />
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/swiper-bundle.js";
import "swiper/swiper-bundle.min.css";

import ProductCardVue from "../../components/cards/ProductCard.vue";
import applicationBannerVue from "../../components/application-banner.vue";

export default {
  name: "DiscontSlug",

  components: {
    ProductCardVue,
    applicationBannerVue,
  },

  data() {
    return {
      value: 2,
      product: {},
      productCharacteristic: [],
      productAttributes: [],
      aboutHandle: true,
      specsHandle: false,
      locationsHandle: false,
      reviewsHandle: false,
    };
  },
  // async asyncData({ store, params }) {
  //   const [productData] = await Promise.all([
  //     store.dispatch("fetchProducts/getProductsBySlug", params.index),
  //   ]);
  //   const product = productData.product;
  //   const productCharacteristic = productData?.product?.characteristic_options.splice(
  //     0,
  //     4
  //   );
  //   const productAttributes = productData?.attributes;
  //   return {
  //     product,
  //     productCharacteristic,
  //     productAttributes,
  //   };
  // },
  // async fetch() {
  //   const [productData] = await Promise.all([
  //     this.$store.dispatch("fetchProducts/getProductsBySlug", this.$route.params.index),
  //   ]);
  //   this.product = productData.product;
  //   this.productCharacteristic = productData?.product?.characteristic_options.splice(
  //     0,
  //     4
  //   );
  //   this.productAttributes = productData?.attributes;
  // },
  async mounted() {
    const [productData] = await Promise.all([
      this.$store.dispatch(
        "fetchProducts/getProductsBySlug",
        this.$route.params.index
      ),
    ]);
    this.product = productData.product;
    this.productCharacteristic =
      productData?.product?.characteristic_options.splice(0, 4);
    this.productAttributes = productData?.attributes;
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 16,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
      direction: "vertical",
    });
    var swiper2 = new Swiper(".mySwiper2", {
      loop: true,
      spaceBetween: 10,
      thumbs: {
        swiper: swiper,
      },
    });
  },

  methods: {
    swiperReload() {
      var swiper = new Swiper(".mySwiper", {
        spaceBetween: 16,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
        direction: "vertical",
      });
      var swiper2 = new Swiper(".mySwiper2", {
        loop: true,
        spaceBetween: 10,
        thumbs: {
          swiper: swiper,
        },
      });
    },
    allCharacteristic() {
      this.productCharacteristic = [...this.product?.characteristic_options];
      this.swiperReload();
    },
  },
};
</script>

<style scoped>
.wrap {
  padding-top: 32px;
  min-height: 100vh;
  color: black;
}
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.swiper {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiper2 {
  height: 580px;
  width: 80%;
}
.mySwiper2 .swiper-slide {
  border-radius: 20px;
}
.mySwiper {
  width: 20%;
  height: 480px;
  box-sizing: border-box;
  padding: 10px 0;
  padding: 0;
}

.mySwiper .swiper-slide {
  height: 25%;
  width: 100px;
  opacity: 0.4;
  padding: 8px 0;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
  border: 1px solid #1f8a70;
  border-radius: 10px;
}
.world {
  display: flex;
  gap: 16px;
}
.colors img {
  width: 85px;
  height: auto;
  object-fit: contain;
}
.title {
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 14px;
}
.flexer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
}
.left {
  display: flex;
  align-items: center;
  gap: 8px;
}
.right .bottom {
  display: flex;
  align-items: center;
  gap: 32px;
}
.right button {
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
}

.specs {
  display: flex;
  flex-direction: column;
}
.spec {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.1);
}
.stats .lil {
  font-weight: 700;
  font-size: 19.3083px;
  line-height: 23px;
  margin-bottom: 20px;
  color: black;
}
.colors .lil,
.variations .lil,
.counter .lil {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 14px;
}
.question,
.answer {
  font-weight: 300;
  font-size: 14.4812px;
  line-height: 17px;
  color: black;
}
.top {
  max-width: 50%;
}
.widther {
  max-width: 70%;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 32px;
}

.colors .grid,
.variations .grid {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}
.color {
  width: 50px;
  height: 50px;
  padding: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  background: black;
  cursor: pointer;
}
.color:nth-child(2) {
  background: lightpink;
}
.variation {
  font-weight: 600;
  font-size: 13px;
  line-height: 14px;
  padding: 8px 24px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  cursor: pointer;
  color: black;
}
.all {
  font-weight: 400;
  font-size: 14.4812px;
  line-height: 17px;
  color: #00b2a9;
  cursor: pointer;
}
.number {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  gap: 24px;
  padding: 12px 16px;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: black;
}
.number button {
  color: #9a999b;
  background: transparent;
  border: none;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
}
.cardo {
  box-shadow: 0px 0px 26px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 20px 14px;
  background: white;
  margin-bottom: 18px;
}
.discount {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
}
.tag {
  background: #e90a0a;
  padding: 6px 14px;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
}
.dis__price {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #9c9c9c;
  text-decoration: line-through;
}
.dis__txt {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #9c9c9c;
}
.price {
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 20px;
}
.delivery {
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #9c9c9c;
  margin-bottom: 20px;
}
.coin {
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #1f8a70;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.cart {
  background: #f5f5f5;
  border-radius: 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #1f8a70;
  width: 100%;
  padding: 12px 0;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  border: none;
  margin-bottom: 20px;
}
.click {
  background: #1f8a70;
  border-radius: 10px;
  width: 100%;
  padding: 12px 0;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  border: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: white;
}
.credit {
  background: #ffffff;
  border: 1px solid #f1f1f1;
  border-radius: 12px;
  padding: 14px 20px;
  margin-bottom: 40px;
}
.credit p {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 20px;
}
.credit button {
  background: #f5f5f5;
  border-radius: 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: black;
  width: 100%;
  padding: 12px 0;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  border: none;
}
.credit__items {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.credit__items div {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.credit__items p {
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #707070;
  max-width: 90%;
  margin: 0 auto;
  text-align: center;
}
.credit__items img {
  width: 40px;
  height: 40px;
  object-fit: contain;
}
.active-attribute {
  border: 0.628429px solid #04babe;
}
.disabled-attribute {
  pointer-events: none;
}
.tabs {
  padding: 64px 0 144px 0;
}
.butns {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 32px;
}
.butns button {
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: var(--color_green);
  padding: 12px 34px;
  border: 1px solid #f1f1f1;
  border-radius: 77px;
}
.butns button.active {
  background: var(--color_green);
  color: white;
}
.paragraph {
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: black;
  margin-bottom: 24px;
}
.about p {
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #414141;
}
.about__wrap {
  max-width: 1200px;
}
.about,
.specifications,
.locations,
.reviews {
  display: none !important;
}
.about.active,
.specifications.active,
.locations.active,
.reviews.active {
  display: grid !important;
}
.spec__wrap {
  max-width: 820px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 164px;
  row-gap: 42px;
}
.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}
.item .question {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #727474;
}
.item .answer {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #020105;
}
tr,
td {
  padding-right: 72px;
}
th p {
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  color: #000000;
  opacity: 0.4;
}
thead th {
  padding-bottom: 16px;
}
tbody td {
  padding-bottom: 24px;
}
tbody td p {
  font-weight: 600;
  font-size: 14px;
  line-height: 130%;
  color: #000000;
}
tbody .img {
  background: #fafafa;
  padding: 8px;
  border-radius: 50%;
  display: inline-flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
}
.cyber {
  display: flex;
  align-items: center;
  gap: 16px;
}
.reviews {
  display: grid;
  grid-template-columns: 8fr 2fr;
  gap: 24px;
}
.review {
  background: #ffffff;
  border: 1px solid #f2f2fa;
  border-radius: 12px;
  padding: 18px;
}
.name {
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 22px;
}
.date {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #727474;
}
.flex {
  display: flex;
  align-items: center;
  margin-bottom: 18px;
  gap: 32px;
}
.txt p {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #000000;
}
.leave {
  background: #fcfcfc;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 34px;
}
.leave__title {
  font-weight: 600;
  font-size: 16px;
  line-height: 130%;
  color: #000000;
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 24px;
}
.leave__btn {
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: var(--color_green);
  background: #e7faf5;
  border-radius: 10px;
  padding: 12px 0;
  width: 100%;
  border: none;
}
.other {
  margin-bottom: 120px;
}
.other h4 {
  font-weight: 600;
  font-size: 32px;
  line-height: 130%;
  margin-bottom: 40px;
}
.other__grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}
.app {
  margin-bottom: 120px;
}
</style>
