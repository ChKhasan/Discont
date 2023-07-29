<template lang="html">
  <div class="wrap product-page">
    <div class="container_xl">
      <div class="top">
        <h4 class="title" v-if="skeleton">
          <b-skeleton width="40%" height="100%"></b-skeleton>
        </h4>
        <h4 class="title" v-else>{{ product?.info?.name }}</h4>
        <div class="flexer">
          <div class="left">
            <div class="stars">
              <div v-if="product?.info?.stars != null">
                <a-rate v-model="product.info.stars" disabled />
              </div>
            </div>
            <p class="reviews" v-if="product?.info?.stars != null">
              (12 ta feedbacks)
            </p>
          </div>
          <div class="right">
            <div class="bottom">
              <button
                :class="{
                  'active-like-comp-btn': $store.state.like.includes(
                    product?.id
                  ),
                }"
                @click="
                  $store.commit('addToStore', { id: product?.id, name: 'like' })
                "
              >
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.1695 0C13.237 0 12.3457 0.223898 11.5205 0.665519C10.9588 0.96608 10.4428 1.36542 10 1.83921C9.5572 1.36542 9.0412 0.96608 8.47946 0.665519C7.65423 0.223898 6.76297 0 5.83043 0C2.61555 0 0 2.73943 0 6.10663C0 8.49155 1.2026 11.0245 3.57435 13.6353C5.55464 15.8152 7.97913 17.6322 9.66429 18.7728L10 19L10.3357 18.7728C12.0209 17.6323 14.4454 15.8152 16.4257 13.6353C18.7974 11.0245 20 8.49155 20 6.10663C20 2.73943 17.3845 0 14.1695 0ZM15.5294 12.7421C13.7596 14.6903 11.6038 16.3464 10 17.4549C8.39616 16.3464 6.24037 14.6903 4.4706 12.7421C2.32499 10.3804 1.23711 8.14789 1.23711 6.10663C1.23711 3.45388 3.29769 1.29571 5.83047 1.29571C7.28866 1.29571 8.62817 1.99725 9.50544 3.2204L10 3.90993L10.4946 3.2204C11.3718 1.99725 12.7113 1.29571 14.1695 1.29571C16.7023 1.29571 18.7629 3.45388 18.7629 6.10663C18.7629 8.14789 17.675 10.3804 15.5294 12.7421Z"
                    fill="#C7C7C7"
                  />
                  <path
                    d="M15.5294 12.7421C13.7596 14.6903 11.6038 16.3464 10 17.4549C8.39616 16.3464 6.24037 14.6903 4.4706 12.7421C2.32499 10.3804 1.23711 8.14789 1.23711 6.10663C1.23711 3.45388 3.29769 1.29571 5.83047 1.29571C7.28866 1.29571 8.62817 1.99725 9.50544 3.2204L10 3.90993L10.4946 3.2204C11.3718 1.99725 12.7113 1.29571 14.1695 1.29571C16.7023 1.29571 18.7629 3.45388 18.7629 6.10663C18.7629 8.14789 17.675 10.3804 15.5294 12.7421Z"
                    fill="#C7C7C7"
                  />
                </svg>

                Sevimlilarga
              </button>
              <button
                :class="{
                  'active-like-comp-btn': $store.state.comparison.includes(
                    product?.id
                  ),
                }"
                @click="
                  $store.commit('addToStore', {
                    id: product?.id,
                    name: 'comparison',
                  })
                "
              >
                <svg
                  width="21"
                  height="19"
                  viewBox="0 0 21 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.05 5.27778H19.95C20.58 5.27778 21 4.85556 21 4.22222C21 3.58889 20.58 3.16667 19.95 3.16667H1.05C0.420002 3.16667 1.90735e-06 3.58889 1.90735e-06 4.22222C1.90735e-06 4.85556 0.420002 5.27778 1.05 5.27778Z"
                    fill="#C7C7C7"
                  />
                  <path
                    d="M4.2 8.44444C4.515 8.44444 4.725 8.33889 4.935 8.12778C5.355 7.70555 5.355 7.07222 4.935 6.65L2.52 4.22222L4.935 1.79444C5.355 1.37222 5.355 0.738889 4.935 0.316667C4.515 -0.105556 3.885 -0.105556 3.465 0.316667L0.315001 3.48333C-0.105 3.90556 -0.105 4.53889 0.315001 4.96111L3.465 8.12778C3.675 8.33889 3.885 8.44444 4.2 8.44444Z"
                    fill="#C7C7C7"
                  />
                  <path
                    d="M16.8 19C17.115 19 17.325 18.8944 17.535 18.6833L20.685 15.5167C21.105 15.0944 21.105 14.4611 20.685 14.0389L17.535 10.8722C17.115 10.45 16.485 10.45 16.065 10.8722C15.645 11.2944 15.645 11.9278 16.065 12.35L18.48 14.7778L16.065 17.2056C15.645 17.6278 15.645 18.2611 16.065 18.6833C16.275 18.8944 16.485 19 16.8 19Z"
                    fill="#C7C7C7"
                  />
                  <path
                    d="M1.05 15.8333H19.95C20.58 15.8333 21 15.4111 21 14.7778C21 14.1444 20.58 13.7222 19.95 13.7222H1.05C0.420002 13.7222 1.90735e-06 14.1444 1.90735e-06 14.7778C1.90735e-06 15.4111 0.420002 15.8333 1.05 15.8333Z"
                    fill="#C7C7C7"
                  />
                </svg>

                Taqqoslash
              </button>
            </div>
          </div>
        </div>
        <div class="flexer__mobile">
          <div class="available-sale">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <circle cx="10.0029" cy="10.0466" r="9.99707" fill="#16C67A" />
                <path
                  d="M15.6536 6.27082L7.90429 14.8278L4.35254 10.9059L5.26308 9.90041L7.90429 12.8098L14.743 5.26538L15.6536 6.27082Z"
                  fill="white"
                /></svg
              >Sotuvda mavjud
            </p>
            <span>Код: {{ product?.id }}</span>
          </div>
          <div class="buttons__mobile">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
              >
                <rect
                  x="2.35115"
                  y="2.35091"
                  width="11.6667"
                  height="9.33333"
                  rx="2"
                  stroke="#1F8A70"
                  stroke-width="2"
                />
                <rect
                  x="14.0178"
                  y="16.3509"
                  width="11.6667"
                  height="9.33333"
                  rx="2"
                  stroke="#1F8A70"
                  stroke-width="2"
                />
                <path
                  d="M23.8344 4.68425L25.3428 6.19263C25.7984 6.64824 25.7984 7.38693 25.3428 7.84254L23.8344 9.35092M18.6845 7.01758L25.0011 7.01758"
                  stroke="#1F8A70"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M4.20123 18.6842L2.69286 20.1926C2.23725 20.6482 2.23725 21.3869 2.69286 21.8425L4.20123 23.3509M9.35115 21.0176L3.03457 21.0176"
                  stroke="#1F8A70"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
              >
                <path
                  d="M8.78621 4.38706C4.09172 5.89939 2.41789 11.0103 3.85012 15.4819C6.15399 22.6524 16.0342 28.029 16.0342 28.029C16.0342 28.029 25.9878 22.5697 28.2169 15.4819C29.6478 11.0103 27.9633 5.89939 23.2688 4.38706C20.8021 3.59553 17.9763 4.10275 16.0342 5.6044C13.9812 4.06004 11.2556 3.59019 8.78621 4.38706Z"
                  stroke="#1F8A70"
                  stroke-width="2.14333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  opacity="0.4"
                  d="M21.3734 8.94376C22.8016 9.4056 23.8108 10.6803 23.9322 12.1766"
                  stroke="#1F8A70"
                  stroke-width="1.18649"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-5 col-xs-12 images">
          <div class="world" v-if="skeleton">
            <div thumbsSlider="" class="swiper mySwiper">
              <div class="swiper-wrapper flex-column">
                <div
                  class="swiper-slide"
                  v-for="img in [1, 2, 3, 4]"
                  :key="img"
                >
                  <b-skeleton height="100%" width="100%"></b-skeleton>
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
                  v-for="img in [1, 2, 3, 4]"
                  :key="img"
                >
                  <b-skeleton height="100%" width="100%"></b-skeleton>
                </div>
              </div>
            </div>
          </div>

          <div class="world" v-else>
            <div thumbsSlider="" class="swiper mySwiper">
              <div class="swiper-wrapper flex-column">
                <div
                  class="swiper-slide"
                  v-for="img in product?.images"
                  :key="img.id"
                >
                  <img :src="img?.md_img" />
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
                  <img :src="img?.md_img" />
                </div>
              </div>
            </div>
          </div>
          <div class="available-sale">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <circle cx="10.0029" cy="10.0466" r="9.99707" fill="#16C67A" />
                <path
                  d="M15.6536 6.27082L7.90429 14.8278L4.35254 10.9059L5.26308 9.90041L7.90429 12.8098L14.743 5.26538L15.6536 6.27082Z"
                  fill="white"
                /></svg
              >Sotuvda mavjud
            </p>
            <span>Код: {{ product?.id }}</span>
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
                  {{ characteristic?.characteristic?.name }}
                </p>
                <p class="answer">{{ characteristic?.name }}</p>
              </div>
              <p
                class="all"
                @click="scrollElement('characteristic')"
                v-if="
                  productCharacteristic?.length <
                  product?.characteristic_options?.length
                "
              >
                Barcha xarakteristikalar
              </p>
            </div>

            <div v-if="skeleton" class="colors">
              <p class="lil">
                <b-skeleton height="100%" width="20%"></b-skeleton>
              </p>
              <div class="grid">
                <div
                  v-for="colorOption in [1, 2, 3, 4]"
                  :key="colorOption"
                  class="disabled-attribute color"
                >
                  <span
                    ><b-skeleton height="100%" width="100%"></b-skeleton
                  ></span>
                </div>
              </div>
            </div>
            <div
              v-else
              class="colors"
              v-for="(
                atributColor, atributColorIndex
              ) in productAttributes.filter((item) => item.title == 'Цвет')"
              :key="atributColorIndex"
            >
              <p class="lil">{{ atributColor?.title }}</p>
              <div class="grid">
                <div
                  class="color"
                  v-for="colorOption in atributColor?.options"
                  :key="colorOption?.id"
                  @click="$router.push(`/product/${colorOption?.slug}`)"
                  :class="{
                    'active-attribute': colorOption?.active,
                    'disabled-attribute': !colorOption?.available,
                  }"
                >
                  <span
                    :style="{ 'background-color': colorOption?.title }"
                  ></span>
                </div>
              </div>
            </div>
            <div
              v-if="skeleton"
              class="variations"
              v-for="(atribut, atributIndex) in [1, 2]"
              :key="atribut"
            >
              <p class="lil">
                <b-skeleton width="50%" height="100%"></b-skeleton>
              </p>
              <div class="grid">
                <div
                  class="variation disabled-attribute"
                  v-for="(option, optionIndex) in [9, 8, 7, 6]"
                  :key="option"
                >
                  <b-skeleton width="40px"></b-skeleton>
                </div>
              </div>
            </div>
            <div
              class="variations"
              v-for="(atribut, atributIndex) in productAttributes.filter(
                (item) => item.title != 'Цвет'
              )"
              :key="atributIndex"
            >
              <p class="lil">{{ atribut?.title }}</p>
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
                  {{ option?.title }}
                </div>
              </div>
            </div>
            <div
              class="counter"
              v-if="$store.state.cart.find((item) => item.id == product?.id)"
            >
              <p class="lil">Кол-во</p>
              <div class="grid">
                <div class="number">
                  <button
                    @click="
                      $store.commit('productCountDown', { id: product?.id })
                    "
                  >
                    <a-icon type="minus" />
                  </button>
                  {{
                    $store.state.cart.find((item) => item.id == product?.id)
                      ?.count
                  }}
                  <button
                    @click="
                      $store.commit('productCountUp', { id: product?.id })
                    "
                  >
                    <a-icon type="plus" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-xs-12 order">
          <div class="cardo">
            <div class="cardo__header">
              <div class="discount" v-if="product?.discount">
                <p class="tag">
                  {{
                    product?.discount?.amount
                      ? `${product?.discount?.amount} so'm`
                      : `-${product?.discount?.percent}%`
                  }}
                </p>
                <p class="dis__price" v-if="product?.price">
                  {{ product?.price }}
                </p>
                <p class="dis__txt">Chegirma narxida</p>
              </div>
              <p class="price" v-if="skeleton">
                <b-skeleton width="50%" height="100%"> </b-skeleton>
              </p>
              <p class="price" v-if="product?.price && !skeleton">
                {{ productPrice(product) }}
                so’m
              </p>

              <p class="delivery">Yetkazib berish - 0 so’m (21-may)</p>

              <p class="coin">
                <img src="@/assets/images/coin.svg" alt="" /> +5 ta dis coin
              </p>
            </div>

            <div class="buttons">
              <button
                v-if="!$store.state.cart.find((item) => item.id == product?.id)"
                class="cart"
                @click="
                  $store.commit('addToCart', {
                    obj: { id: product?.id, count: 1 },
                    name: 'cart',
                  })
                "
              >
                <p>Savatchaga solish</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                >
                  <path
                    d="M1.29175 0.708252L3.02508 1.00825L3.82758 10.5691C3.89175 11.3499 4.54425 11.9491 5.32758 11.9466H14.4184C15.1659 11.9483 15.8001 11.3983 15.9059 10.6583L16.6967 5.19325C16.7851 4.58242 16.3609 4.01575 15.7509 3.92742C15.6976 3.91992 3.30341 3.91575 3.30341 3.91575"
                    stroke="#1F8A70"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.7709 6.99552H13.0817"
                    stroke="#1F8A70"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.96199 14.8354C5.21283 14.8354 5.41533 15.0388 5.41533 15.2888C5.41533 15.5396 5.21283 15.7429 4.96199 15.7429C4.71116 15.7429 4.50866 15.5396 4.50866 15.2888C4.50866 15.0388 4.71116 14.8354 4.96199 14.8354Z"
                    fill="#1F8A70"
                    stroke="#1F8A70"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.3623 14.8354C14.6131 14.8354 14.8164 15.0388 14.8164 15.2888C14.8164 15.5396 14.6131 15.7429 14.3623 15.7429C14.1114 15.7429 13.9089 15.5396 13.9089 15.2888C13.9089 15.0388 14.1114 14.8354 14.3623 14.8354Z"
                    fill="#1F8A70"
                    stroke="#1F8A70"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button class="click" @click="visibleOc = true">
                Hoziroq sotib olish
              </button>
            </div>
          </div>

          <div class="credit">
            <p>Муддатли тўлов</p>
            <!-- <p>Муддатли тўлов 139 333 сўмдан / 24 ой</p> -->
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
        <div class="butns" id="characteristic">
          <button
            :class="{ active: tabHandle == 'desc' }"
            @click="tabHandle = 'desc'"
          >
            Mahsulot haqida
          </button>
          <button
            :class="{ active: tabHandle == 'characteristic' }"
            @click="tabHandle = 'characteristic'"
          >
            Xarakteristikalari
          </button>
          <button
            :class="{ active: tabHandle == 'location' }"
            @click="tabHandle = 'location'"
          >
            Дўконларда мавжудлиги
          </button>
          <button
            :class="{ active: tabHandle == 'comment' }"
            @click="tabHandle = 'comment'"
          >
            Мижозларнинг шарҳлари
          </button>
        </div>
        <div class="contents">
          <div v-if="tabHandle == 'desc'" class="about">
            <div class="about__wrap">
              <h4 class="paragraph">Описание</h4>
              <p v-html="product?.info?.desc"></p>
            </div>
          </div>
          <div
            :class="{ active: specsHandle }"
            class="specifications"
            v-if="tabHandle == 'characteristic'"
          >
            <div class="spec__wrap">
              <div class="items">
                <h4 class="paragraph">Основные характеристики</h4>
                <div class="grider">
                  <div class="spec">
                    <p class="question">Бренд</p>
                    <p class="answer">Xiaomi</p>
                  </div>
                  <div class="spec">
                    <p class="question">Бренд</p>
                    <p class="answer">Xiaomi</p>
                  </div>
                  <div class="spec">
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
          <div
            :class="{ active: locationsHandle }"
            class="locations"
            v-if="tabHandle == 'location'"
          >
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
          <div class="reviews" v-if="tabHandle == 'comment'">
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
                <button class="leave__btn" @click="commentOpen()">
                  Baho qoldirish
                </button>
              </div>
              <div class="rating">
                <img src="@/assets/images/cheat.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="other pb-5">
        <h4>O’xshash tovarlar</h4>
        <ProductCarousel>
          <div
            class="swiper-slide"
            v-for="product in productsOthers"
            :key="product.id"
          >
            <ProductCardVue :product="product" />
          </div>
        </ProductCarousel>
      </div>
      <ApplicationBanner class="app" />
      <a-modal
        v-model="visibleOc"
        :body-style="{ padding: '32px', borderRadius: '14px' }"
        centered
        :closable="false"
        width="670px"
        @ok="handleOkName"
      >
        <div class="vmodal-header auth-modal oc-modal-header">
          <h5>Birgina click orqali sotib olish</h5>
          <span @click="handleOkName"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M17.9958 1.98438L2.00391 17.9762"
                stroke="#1F8A70"
                stroke-width="3.28586"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.0003 17.9861L1.99512 1.97754"
                stroke="#1F8A70"
                stroke-width="3.28586"
                stroke-linecap="round"
                stroke-linejoin="round"
              /></svg
          ></span>
        </div>
        <div class="vmodal-body">
          <div class="oc-product">
            <div class="oc-product-img" v-if="product?.images?.length > 0">
              <img :src="product?.images[0]?.md_img" alt="" />
            </div>

            <div class="oc-product-body">
              <div>
                <h5>{{ product?.info?.name }}</h5>
                <Transition name="oc-bounce">
                  <p class="oc-code" v-if="callBox">
                    Tovar kodi: <span>{{ product?.id }}</span>
                  </p>
                </Transition>
              </div>
              <div
                class="d-flex flex-column align-items-center justify-content-center oc-counter-box"
              >
                <div class="oc-product-counter">
                  <button @click="formOc.count > 1 && formOc.count--">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="2"
                      viewBox="0 0 12 2"
                      fill="none"
                    >
                      <path
                        d="M1 2C0.734784 2 0.48043 1.89464 0.292893 1.70711C0.105357 1.51957 0 1.26522 0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0L11 0C11.2652 0 11.5196 0.105357 11.7071 0.292893C11.8946 0.48043 12 0.734784 12 1C12 1.26522 11.8946 1.51957 11.7071 1.70711C11.5196 1.89464 11.2652 2 11 2H1Z"
                        fill="#1F8A70"
                      />
                    </svg>
                  </button>
                  {{ formOc.count }}
                  <button @click="formOc.count++">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M5.5 0C5.68234 0 5.8572 0.0724328 5.98614 0.201364C6.11507 0.330295 6.1875 0.505164 6.1875 0.6875V4.8125H10.3125C10.4948 4.8125 10.6697 4.88493 10.7986 5.01386C10.9276 5.1428 11 5.31766 11 5.5C11 5.68234 10.9276 5.8572 10.7986 5.98614C10.6697 6.11507 10.4948 6.1875 10.3125 6.1875H6.1875V10.3125C6.1875 10.4948 6.11507 10.6697 5.98614 10.7986C5.8572 10.9276 5.68234 11 5.5 11C5.31766 11 5.1428 10.9276 5.01386 10.7986C4.88493 10.6697 4.8125 10.4948 4.8125 10.3125V6.1875H0.6875C0.505164 6.1875 0.330295 6.11507 0.201364 5.98614C0.0724328 5.8572 0 5.68234 0 5.5C0 5.31766 0.0724328 5.1428 0.201364 5.01386C0.330295 4.88493 0.505164 4.8125 0.6875 4.8125H4.8125V0.6875C4.8125 0.505164 4.88493 0.330295 5.01386 0.201364C5.1428 0.0724328 5.31766 0 5.5 0Z"
                        fill="#1F8A70"
                      />
                    </svg>
                  </button>
                </div>
                <p>{{ productPrice(product) }} so’mdan/donasi</p>
              </div>
            </div>
          </div>
          <a-form-model
            v-if="!callBox"
            :model="formOc"
            ref="ruleFormOcClick"
            :rules="rulesName"
            layout="vertical"
          >
            <div class="oc-modal-form">
              <a-form-model-item
                class="form-item register-input mb-0 pb-0"
                label="Ismingizni kiriting"
                prop="name"
              >
                <a-input v-model="formOc.name" type="text" placeholder="Name" />
              </a-form-model-item>
              <a-form-model-item
                class="form-item register-input mb-0 pb-0"
                label="Telefon raqamingiz"
                prop="phone_number"
              >
                <a-input
                  v-model="formOc.phone_number"
                  v-mask="'+998 ## ### ## ##'"
                  placeholder="+998 (__) ___ __ __"
                />
              </a-form-model-item>
            </div>
          </a-form-model>
        </div>
        <div
          class="vmodal-btn vmodal-btn-height oc-product-btn"
          v-if="!callBox"
          @click="submitName()"
        >
          Ma`lumotlarni yuborish
        </div>
        <div
          class="vmodal-forget-password"
          v-if="!callBox"
          @click="callBox = true"
        >
          O’zim bog’lanaman
        </div>
        <a href="#">
          <Transition name="oc-bounce">
            <div class="oc-product-call" v-if="callBox">
              <span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                >
                  <path
                    d="M30.0367 11.4363C29.045 11.2531 28.1342 11.886 27.9454 12.8541C27.7565 13.8222 28.3914 14.7674 29.3562 14.9568C32.2609 15.5231 34.5038 17.7716 35.0723 20.6862V20.6883C35.2341 21.5273 35.9727 22.1373 36.8234 22.1373C36.9375 22.1373 37.0516 22.1269 37.1678 22.1061C38.1326 21.9125 38.7675 20.9694 38.5787 19.9992C37.7301 15.646 34.3793 12.2837 30.0367 11.4363Z"
                    fill="#1F8A70"
                  />
                  <path
                    d="M29.9064 4.18254C29.4416 4.11592 28.9748 4.25332 28.6034 4.54895C28.2217 4.84875 27.9831 5.28178 27.9312 5.76686C27.8212 6.74744 28.5287 7.63433 29.508 7.74467C36.2615 8.49832 41.5107 13.7593 42.2701 20.5338C42.3718 21.4415 43.1332 22.1265 44.042 22.1265C44.1104 22.1265 44.1768 22.1223 44.2453 22.114C44.7204 22.0619 45.1437 21.8267 45.4425 21.4519C45.7392 21.0772 45.874 20.6108 45.8201 20.1341C44.874 11.6816 38.3321 5.12147 29.9064 4.18254Z"
                    fill="#1F8A70"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.9841 27.0258C31.2947 35.3341 33.18 25.7223 38.4714 31.01C43.5727 36.1099 46.5047 37.1317 40.0414 43.5932C39.2318 44.2438 34.088 52.0714 16.0109 33.9993C-2.06844 15.925 5.7546 10.7759 6.40541 9.96656C12.8844 3.48718 13.8885 6.43621 18.9898 11.5361C24.2812 16.826 14.6735 18.7175 22.9841 27.0258Z"
                    fill="#1F8A70"
                  /></svg
              ></span>
              <div class="call-number">
                <p>Call centre Diskont:</p>
                <h4>71 207 77 88</h4>
              </div>
            </div>
          </Transition>
        </a>
        <template slot="footer"> <h3></h3></template>
      </a-modal>
    </div>
    <Transition name="bounce-toast">
      <Vnotification
        v-if="compToast"
        title="Buyurtma muvaffaqiyatli jo'natildi. "
        @click="toastClose()"
      >
        <span v-html="iconComp"></span>
      </Vnotification>
    </Transition>
    <a-modal
      v-model="visibleComment"
      :body-style="{ padding: '24px', borderRadius: '14px' }"
      centered
      :closable="false"
      width="804px"
      @ok="handleOkComment"
    >
      <div class="vmodal-header comment-modal-header">
        <h5>Yangi sharh</h5>
        <span @click="handleOkComment"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M17.9958 1.98438L2.00391 17.9762"
              stroke="#1F8A70"
              stroke-width="3.28586"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.0003 17.9861L1.99512 1.97754"
              stroke="#1F8A70"
              stroke-width="3.28586"
              stroke-linecap="round"
              stroke-linejoin="round"
            /></svg
        ></span>
      </div>
      <div class="vmodal-body">
        <a-form-model
          :model="formComment"
          ref="ruleFormComment"
          :rules="rulesComment"
          layout="vertical"
        >
          <a-form-item prop="comment">
            <a-input v-model="formComment.comment" type="textarea" rows="10" />
          </a-form-item>
        </a-form-model>
      </div>
      <div class="comment-modal-btns">
        <div class="comment-rate">
          <p>Sizning Bahoyingiz:</p>
          <a-rate v-model="formComment.stars" />
        </div>
        <div
          class="comment-btn comment-btn-close"
          @click="visibleComment = false"
        >
          Bekor qilish
        </div>
        <div class="comment-btn" @click="submitComment()">Fikr qoldiring</div>
      </div>
      <template slot="footer"> <h3></h3></template>
    </a-modal>
    <a-modal
      v-model="visibleSuccess"
      :body-style="{ padding: '32px', borderRadius: '14px' }"
      centered
      :closable="false"
      width="671px"
      @ok="handleOkSuccess"
    >
      <div class="vmodal-header">
        <h5>Yangi sharh</h5>
        <span @click="handleOkSuccess"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M17.9958 1.98438L2.00391 17.9762"
              stroke="#1F8A70"
              stroke-width="3.28586"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.0003 17.9861L1.99512 1.97754"
              stroke="#1F8A70"
              stroke-width="3.28586"
              stroke-linecap="round"
              stroke-linejoin="round"
            /></svg
        ></span>
      </div>
      <div class="vmodal-body comment-modal-success">
        <img src="../../assets/images/modal-success.png" alt="" />
        <p>Заказ оформлен. Мы свяжемся с вами в ближайшее время</p>
      </div>
      <div class="vmodal-btn" @click="handleOkSuccess">Yaxshi raxmat</div>
      <template slot="footer"> <h3></h3></template>
    </a-modal>
  </div>
</template>

<script>
import Swiper from "swiper/swiper-bundle.js";
import "swiper/swiper-bundle.min.css";
import ProductCardVue from "../../components/cards/ProductCard.vue";
import applicationBannerVue from "../../components/application-banner.vue";
import ProductCarousel from "../../components/product-carousel.vue";

export default {
  name: "DiscontSlug",

  components: {
    ProductCardVue,
    applicationBannerVue,
    ProductCarousel,
  },

  data() {
    return {
      skeleton: false,
      count: 1,
      callBox: false,
      visibleSuccess: false,
      visibleComment: false,
      commentStarts: 2,
      iconComp: require("../../assets/svg/toast-comparison.svg?raw"),
      compToast: false,
      visibleOc: false,
      product: {},
      productCharacteristic: [],
      productAttributes: [],
      tabHandle: "desc",
      productsOthers: [],
      formComment: {
        user_id: null,
        product_id: null,
        comment: "",
        stars: 0,
      },
      formOc: {
        name: "",
        phone_number: "",
        product_id: null,
        count: 1,
      },
      rulesComment: {
        comment: [
          {
            required: true,
            message: "This field is required",
            trigger: "change",
          },
        ],
      },
      rulesName: {
        name: [
          {
            required: true,
            message: "This field is required",
            trigger: "change",
          },
        ],
        phone_number: [
          {
            required: true,
            message: "This field is required",
            trigger: "change",
          },
          { min: 9, message: "Length should be 9", trigger: "blur" },
        ],
      },
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
    this.skeleton = true;
    const [productData, productsData] = await Promise.all([
      this.$store.dispatch("fetchProducts/getProductsBySlug", {
        id: this.$route.params.index,
        params: {
          headers: {
            Language: this.$i18n.locale,
          },
        },
      }),

      this.$store.dispatch("fetchProducts/getProducts", {
        params: { limit: 12 },
        headers: {
          Language: this.$i18n.locale,
        },
      }),
    ]);
    this.skeleton = false;
    this.product = productData.product;
    console.log(this.product);
    this.productsOthers = productsData?.products?.data;
    this.productCharacteristic =
      productData?.product?.characteristic_options.splice(0, 4);
    this.productAttributes = productData?.attributes;

    setTimeout(() => {
      this.swiperReload();
    }, 1000);
  },

  methods: {
    scrollElement(id) {
      const element = document.getElementById(id);
      this.tabHandle = id;
      element.scrollIntoView({ block: "center", behavior: "smooth" });
    },
    handleOkSuccess() {
      this.visibleSuccess = false;
    },
    handleOkComment() {
      this.visibleComment = false;
    },
    toastClose() {
      this.compToast = false;
    },
    commentOpen() {
      if (this.$store.state.auth) {
        this.visibleComment = true;
      } else {
        this.$store.commit("authVisibleChange", true);
      }
    },
    productPrice(product) {
      console.log(product);
      let price =
        product?.discount?.amount || product?.discount?.percent
          ? product?.discount?.amount
            ? product?.real_price - product?.discount?.amount
            : product?.real_price -
              (product?.real_price / 100) * product?.discount?.percent
          : product?.real_price;
      // .replace(".", ",")
      // .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      return `${price}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    submitComment() {
      this.formComment.product_id = this.product.id;
      this.formComment.user_id = this.$store.state.profile.id;
      if (this.formComment.product_id && this.formComment.user_id) {
        this.$refs["ruleFormComment"].validate((valid) => {
          if (valid) {
            console.log(this.formComment);
            this.__POST_COMMENT(this.formComment);
          } else {
            return false;
          }
        });
      }
    },
    submitName() {
      const data = {
        ...this.formOc,
        phone_number: this.formOc.phone_number
          .split(" ")
          .join("")
          .replace("+", ""),
        product_id: this.product.id,
      };
      this.$refs["ruleFormOcClick"].validate((valid) => {
        if (valid) {
          this.__POST_ORDER(data);
        } else {
          return false;
        }
      });
    },
    handleOkName() {
      this.visibleOc = false;
    },
    async __POST_COMMENT(formData) {
      try {
        const data = await this.$store.dispatch(
          "fetchProducts/postProductComment",
          {
            data: formData,
          }
        );
        this.visibleComment = false;
      } catch (e) {
        console.log(e);
      }
    },
    async __POST_ORDER(formData) {
      try {
        const data = await this.$store.dispatch(
          "fetchAuth/postClickOrder",
          formData
        );
        this.visibleOc = false;
        // this.compToast = true;
        this.visibleSuccess = true;
      } catch (e) {
        console.log(e);
      }
    },
    swiperReload() {
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 5,
        spaceBetween: 12,
        freeMode: true,
        watchSlidesProgress: true,
        direction: "horizontal",
        breakoints: {
          1024: {
            direction: "vertical",
            spaceBetween: 16,
            slidesPerView: 4,
          },
        },
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
  watch: {
    visibleOc(val) {
      if (!val) this.count = 1;
    },
    compToast(val) {
      if (val) {
        setTimeout(() => {
          this.compToast = false;
        }, 2000);
      }
    },
  },
};
</script>

<style scoped>
@import "../../assets/css/pages/product.css";
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
  height: 515px;
  width: 80%;
}
.mySwiper2 .swiper-slide {
  border-radius: 20px;
  overflow: hidden;
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
  padding: 8px 14px;
  color: #c7c7c7;
  border: 0.797059px solid #f1f1f1;
  border-radius: 7.97059px;
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
  /* max-width: 50%; */
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
  cursor: pointer;
  padding: 4px;
}
.color span {
  /* background: black; */
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 4.854px;
}
.color:nth-child(2) span {
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
  color: var(--color_dark_green);
  padding: 12px 34px;
  border: 1px solid #f1f1f1;
  border-radius: 77px;
}
.butns button.active {
  background: var(--color_dark_green);
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
  /* display: none !important; */
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
  color: var(--color_dark_green);
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
.comment-btn {
  max-height: 52px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  color: #fff;
  font-family: var(--SB_500);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 111.111% */
  letter-spacing: -0.36px;
  border-radius: 8px;
  background: var(--color_green);
  cursor: pointer;
  justify-content: center;
  min-height: 52px;
}
.comment-btn-close {
  color: var(--color_dark_green);
  background: #eaeaea;
}
.comment-modal-header {
  margin-bottom: 32px;
}
.comment-modal-btns {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-gap: 19px;
  margin-top: 16px;
}
.comment-rate {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.comment-modal-btns div p {
  color: var(--qora, #020105);
  font-family: var(--SB_400);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 120% */
  letter-spacing: -0.4px;
}
.available-sale p {
  color: #16c67a;
  font-family: "Inter";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 6px;
  padding-right: 10px;
  border-radius: 68.467px;
  background: #e7f9f1;
}
.available-sale p svg {
  margin-right: 7px;
}
.available-sale {
  display: flex;
  justify-content: flex-start;
  gap: 24px;
  align-items: center;
  margin-top: 24px;
}
.available-sale span {
  color: rgb(0, 0, 0, 0.4);
  font-family: "Inter";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.flexer__mobile {
  display: none;
}
.cart svg {
  display: none;
}
@media screen and (max-width: 1024px) {
  .world {
    flex-direction: column-reverse;
  }
  .title {
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    margin-bottom: 24px;
    color: black;
  }
  .mySwiper2 {
    height: 340px;
    width: 100%;
  }
  .flexer {
    display: none;
  }
  .mySwiper {
    width: 100%;
    height: auto;
  }
  .swiper-wrapper {
    flex-direction: initial !important;
  }
  .flexer__mobile {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
  }
  .available-sale {
    display: none;
  }
  .flexer__mobile .available-sale {
    gap: 18px;
    margin: 0;
    display: flex;
  }
  .buttons__mobile {
    display: flex;
    align-items: center;
    gap: 18px;
  }
  .flexer__mobile button {
    background: transparent;
    border: none;
  }
  .stats {
    margin-top: 48px;
    margin-bottom: 48px;
    padding: 0;
  }
  .wrap {
    overflow: hidden;
  }
  .row {
    margin: 0 !important;
  }
  .widther {
    max-width: 100%;
    gap: 48px;
  }
  .widther .all {
    display: none;
  }
  .colors .grid,
  .variations .grid {
    flex-wrap: nowrap;
    overflow: auto;
  }
  .cardo .price {
    font-size: 13px;
    font-weight: 500;
    line-height: 16px;
    margin: 0;
  }
  .delivery,
  .coin {
    display: none;
  }
  .cardo {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .buttons {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .cart {
    margin-bottom: 0;
    border-radius: 8px;
    background: #ebebeb;
    width: 36px;
    height: 36px;
  }
  .cart svg {
    display: flex;
  }
  .cart p {
    display: none;
  }
  .click {
    width: 147px;
    height: 36px;
    font-size: 14px;
  }
  .order {
    padding: 0;
  }
  .credit {
    display: none;
  }
  .butns {
    flex-wrap: nowrap;
    overflow: scroll;
    gap: 16px;
  }
  .butns button {
    white-space: nowrap;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .butns button.active {
    background: #1f8a70;
  }
  .about::v-deep p {
    color: #414141;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
  .spec__wrap {
    grid-template-columns: repeat(1, 1fr);
  }
  .spec .question {
    color: #727474;
  }
  .tabs {
    padding-bottom: 48px;
  }
  .counter {
    display: none;
  }
  tr {
    display: flex;
    flex-direction: column;
    width: max-content;
    margin-bottom: 18px;
    border-bottom: 1px solid #e1e1e1;
  }
  tbody td {
    padding-bottom: 18px;
  }
  thead {
    display: none;
  }
  .reviews {
    display: flex;
    flex-direction: column-reverse;
  }
  .rating img {
    width: 100%;
  }
  .other {
    margin-bottom: 16px;
    padding-bottom: 16px !important;
  }
  .other h4 {
    font-size: 18px;
    font-weight: 600;
    line-height: 150%;
    margin-bottom: 14px;
  }
  .app {
    padding: 16px;
    margin-bottom: 0;
  }
}
</style>
