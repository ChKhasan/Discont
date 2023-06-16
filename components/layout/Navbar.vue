<template lang="html">
  <div class="header-navbar">
    <div class="container_xl">
      <div class="d-flex header-navbar_container">
        <div class="d-flex align-items-center">
          <nuxt-link to="/"><span v-html="navLogo" class="nav_logo"></span></nuxt-link>
          <button class="catalog-btn" @click="catalogMenu = !catalogMenu">
            <span v-if="catalogMenu"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="12"
                viewBox="0 0 11 12"
                fill="none"
              >
                <path
                  d="M2.25649 11.0884C1.74652 11.5984 0.919684 11.5984 0.409708 11.0884C-0.100267 10.5784 -0.100267 9.75161 0.409708 9.24163L3.61608 6.03527L0.744068 3.16326C0.217105 2.63629 0.217106 1.78192 0.744069 1.25495C1.27103 0.727992 2.12541 0.727991 2.65237 1.25495L5.52438 4.12696L8.74054 0.910808C9.25051 0.400833 10.0773 0.400833 10.5873 0.910808C11.0973 1.42078 11.0973 2.24762 10.5873 2.75759L7.37117 5.97375L10.2432 8.84576C10.7701 9.37272 10.7701 10.2271 10.2432 10.7541C9.71621 11.281 8.86183 11.281 8.33487 10.7541L5.46286 7.88205L2.25649 11.0884Z"
                  fill="#fff"
                /></svg
            ></span>
            <span v-else v-html="navCategory"></span>

            Katalog
          </button>
          <div class="search_input_container">
            <input type="text" placeholder="Search ..." />
            <span class="search-btn">
              <span v-html="navMic"></span>
              Qidiruv
            </span>
          </div>
        </div>
        <div class="header-navbar_navbar d-flex">
          <ul class="d-flex justify-content-between w-100 align-items-center">
            <li>
              <!-- <span class="count-index">12</span> -->
              <span class="nav-icons" v-html="navOrder"></span>Buyurtmalar
            </li>
            <li @click="$router.push('/likes')">
              <span class="count-index" v-if="$store.state.like.length > 0">{{
                $store.state.like.length
              }}</span>

              <span class="nav-icons" v-html="navLike"></span> Sevimlilar
            </li>
            <li @click="$router.push('/basket')">
              <span class="count-index" v-if="$store.state.cart.length > 0">{{
                $store.state.cart.length
              }}</span>

              <span class="nav-icons" v-html="navBasket"></span>Savatcha
            </li>
            <li @click="$router.push('/comparison')">
              <span class="count-index" v-if="$store.state.comparison.length > 0">{{
                $store.state.comparison.length
              }}</span>
              <span class="nav-icons" v-html="navComp"></span>Solishtirish
            </li>
            <li class="nav_profile flex-row" @click="toProfile(true)">
              <span v-html="navUser"></span>
              <p>
                {{
                  $store.state.auth && $store.state.profile.name
                    ? $store.state.profile.name
                    : "profil"
                }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Transition duration="550" name="nested">
      <div class="catalog-menu-container outer" v-if="catalogMenu">
        <div class="position-relative w-100 inner">
          <div class="catalog-menu-left-bg"></div>
          <div class="container_xl d-flex position-relative" style="z-index: 2">
            <div class="catalog-menu-content">
              <div class="catalog-menu-list">
                <ul>
                  <li
                    v-for="category in categories"
                    :key="category?.id"
                    @mouseover="targetCategory(category)"
                    :class="{
                      'catalog-menu-list-active': activeCategory?.id == category?.id,
                    }"
                  >
                    {{ category?.name?.ru
                    }}<span v-if="activeCategory?.id == category?.id"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="12"
                        viewBox="0 0 8 12"
                        fill="none"
                      >
                        <path
                          d="M0.800427 0.286251C0.617141 0.469593 0.514176 0.718224 0.514176 0.977469C0.514176 1.23671 0.617141 1.48535 0.800427 1.66869L4.9976 5.86586L0.800427 10.063C0.707049 10.1532 0.632567 10.2611 0.581328 10.3804C0.530089 10.4997 0.503118 10.628 0.50199 10.7578C0.500862 10.8876 0.5256 11.0163 0.574758 11.1365C0.623917 11.2566 0.696512 11.3658 0.788309 11.4576C0.880106 11.5494 0.989265 11.622 1.10942 11.6711C1.22957 11.7203 1.35831 11.745 1.48813 11.7439C1.61794 11.7428 1.74623 11.7158 1.86551 11.6646C1.98479 11.6133 2.09268 11.5388 2.18286 11.4455L7.07125 6.55708C7.25454 6.37373 7.3575 6.1251 7.3575 5.86586C7.3575 5.60661 7.25454 5.35798 7.07125 5.17464L2.18286 0.286251C1.99952 0.102965 1.75089 0 1.49165 0C1.2324 0 0.983769 0.102965 0.800427 0.286251Z"
                          fill="#1F8A70"
                        /></svg
                    ></span>
                  </li>
                </ul>
              </div>
              <div class="catalog-menu-body">
                <div class="d-flex categories-page-title mt-0 mb-5 align-items-end">
                  <MainTitle :title="activeCategory?.name?.ru" />
                  <span class="d-flex align-items-end">8 288 товаров</span>
                </div>
                <div class="catalog-menu-items">
                  <ul
                    v-for="categoryChild in activeCategory?.children"
                    :key="categoryChild?.id"
                  >
                    <h4>{{ categoryChild?.name?.ru }}</h4>
                    <nuxt-link
                      :to="`/categories-inner/${lastChild?.slug}`"
                      v-for="lastChild in categoryChild?.children"
                      :key="lastChild?.id"
                    >
                      {{ lastChild?.name?.ru }}
                    </nuxt-link>
                  </ul>
                  <!-- <ul v-for="categoryChild in activeCategory?.children" :key="categoryChild?.id">
                    <h4>Телефоны и смарт-часы</h4>
                    <li>Смартфоны</li>
                    <li>Мобильные телефоны</li>
                    <li>SIM-карты</li>
                    <li>Смарт-часы</li>
                    <li>Фитнес-браслеты</li>
                    <li>Ремешки для смарт-часов и фитнес-браслетов</li>
                  </ul>
                  <ul>
                    <h4>Телефоны и смарт-часы</h4>
                    <li>Смартфоны</li>
                    <li>Мобильные телефоны</li>
                    <li>SIM-карты</li>
                    <li>Смарт-часы</li>
                    <li>Фитнес-браслеты</li>
                    <li>Ремешки для смарт-часов и фитнес-браслетов</li>
                  </ul>
                  <ul>
                    <h4>Телефоны и смарт-часы</h4>
                    <li>Смартфоны</li>
                    <li>Мобильные телефоны</li>
                    <li>SIM-карты</li>
                    <li>Смарт-часы</li>
                    <li>Фитнес-браслеты</li>
                    <li>Ремешки для смарт-часов и фитнес-браслетов</li>
                  </ul>
                  <ul>
                    <h4>Телефоны и смарт-часы</h4>
                    <li>Смартфоны</li>
                    <li>Мобильные телефоны</li>
                    <li>SIM-карты</li>
                    <li>Смарт-часы</li>
                    <li>Фитнес-браслеты</li>
                    <li>Ремешки для смарт-часов и фитнес-браслетов</li>
                  </ul>
                  <ul>
                    <h4>Телефоны и смарт-часы</h4>
                    <li>Смартфоны</li>
                    <li>Мобильные телефоны</li>
                    <li>SIM-карты</li>
                    <li>Смарт-часы</li>
                    <li>Фитнес-браслеты</li>
                    <li>Ремешки для смарт-часов и фитнес-браслетов</li>
                  </ul> -->
                </div>
              </div>
            </div>
            <div class="close-space" @click="catalogMenu = false"></div>
          </div>
        </div>
      </div>
    </Transition>
    <!-- chech number -->
    <a-modal
      v-model="visibleCheck"
      :body-style="{ padding: '32px', borderRadius: '14px' }"
      centered
      :closable="false"
      width="670px"
      @ok="handleOk"
    >
      <div class="vmodal-anim-header">
        <img class="shadow-ell-1" src="../../assets/images/Ellipse 57.png" alt="" />
        <img class="shadow-ell-2" src="../../assets/images/Ellipse 59.png" alt="" />
        <h5>Akauntingizga kiring yoki ro’yxatdan o’ting</h5>
        <span @click="handleOk"
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
          :model="formCheckNumber"
          ref="ruleFormCheckNumber"
          :rules="rulesCheckNumber"
          layout="vertical"
        >
          <a-form-model-item
            class="form-item register-input mb-0 pb-0"
            label="Telefon raqamingiz"
            prop="phone_number"
          >
            <span class="position-relative d-flex align-items-center justify-content-end">
              <!-- <span class="position-absolute number-error" v-if="checkNumberError"
                >Raqam noto’g’ri kiritildi</span
              > -->
              <the-mask
                @keyup.enter="submitCheckNumber()"
                :mask="['+998 (##) ### ## ##', '+998 (##) ### ## ##']"
                placeholder="+998 (__) ___ __ __"
                v-model="formCheckNumber.phone_number"
              />
            </span>
            <!-- <a-input v-model="form.name" placeholder="Telefon raqamingiz" /> -->
          </a-form-model-item>
        </a-form-model>
      </div>
      <div class="vmodal-btn vmodal-btn-height" @click="submitCheckNumber()">
        Akauntga Kirish
      </div>
      <!-- <div class="vmodal-btn-outline" @click="visibleLogin = true">Manzilni qo’shish</div> -->
      <template slot="footer"> <h3></h3></template>
    </a-modal>
    <!-- chech number -->
    <!-- check number forget password -->
    <a-modal
      v-model="visibleForgetPass"
      :body-style="{ padding: '32px', borderRadius: '14px' }"
      centered
      :closable="false"
      width="670px"
      @ok="handleOkForgetPass"
    >
      <div class="vmodal-anim-header">
        <img class="shadow-ell-1" src="../../assets/images/Ellipse 57.png" alt="" />
        <img class="shadow-ell-2" src="../../assets/images/Ellipse 59.png" alt="" />
        <h5>Akauntingizga kiring yoki ro’yxatdan o’ting</h5>
        <span @click="handleOkForgetPass"
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
          :model="formCheckNumber"
          ref="ruleFormCheckNumber"
          :rules="rulesCheckNumber"
          layout="vertical"
        >
          <a-form-model-item
            class="form-item register-input mb-0 pb-0"
            label="Telefon raqamingiz"
            prop="phone_number"
          >
            <span class="position-relative d-flex align-items-center justify-content-end">
              <the-mask
                @keyup.enter="submitForgetPass()"
                :mask="['+998 (##) ### ## ##', '+998 (##) ### ## ##']"
                placeholder="+998 (__) ___ __ __"
                v-model="formCheckNumber.phone_number"
              />
            </span>
          </a-form-model-item>
        </a-form-model>
      </div>
      <div class="vmodal-btn vmodal-btn-height" @click="submitForgetPass()">
        Akauntga Kirish
      </div>
      <!-- <div class="vmodal-btn-outline" @click="visibleLogin = true">Manzilni qo’shish</div> -->
      <template slot="footer"> <h3></h3></template>
    </a-modal>
    <!-- check number forget password -->
    <!-- login profile  -->
    <a-modal
      v-model="visibleLogin"
      :body-style="{ padding: '32px', borderRadius: '14px' }"
      centered
      :closable="false"
      width="670px"
      @ok="handleOkLogin"
    >
      <div class="vmodal-header auth-modal">
        <h5>Akauntingizga kiring yoki ro’yxatdan o’ting</h5>
        <span @click="handleOkLogin"
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
          :model="formLogin"
          ref="ruleFormLogin"
          :rules="rulesLogin"
          layout="vertical"
        >
          <a-form-model-item
            class="form-item register-input mb-3 pb-0"
            label="Telefon raqamingiz"
          >
            <the-mask
              class="disabled"
              v-model="formLogin.phone_number"
              :mask="['+998 (##) ### ## ##', '+998 (##) ### ## ##']"
              placeholder="+998 (__) ___ __ __"
            />
          </a-form-model-item>
          <a-form-model-item
            class="form-item register-input mb-0 pb-0"
            label="Parol"
            :class="{ sms_code_error: loginPassError }"
            prop="password"
          >
            <a-input
              v-model="formLogin.password"
              type="password"
              placeholder="Password"
            />
            <span class="sms_code_error_text" v-if="loginPassError"
              >Parol noto’g’ri kiritildi</span
            >
          </a-form-model-item>
        </a-form-model>
      </div>
      <div class="vmodal-btn vmodal-btn-height" @click="submitLogin()">
        Akauntga Kirish
      </div>
      <div class="vmodal-forget-password" @click="forgetPassword()">
        Parolni unutdingizmi?
      </div>
      <template slot="footer"> <h3></h3></template>
    </a-modal>
    <!-- login profile  -->
    <!-- login width sm  -->
    <a-modal
      v-model="visibleSms"
      :body-style="{ padding: '32px', borderRadius: '14px' }"
      centered
      :closable="false"
      width="670px"
      @ok="handleOkSms"
    >
      <div class="vmodal-header auth-modal">
        <h5>Akauntingizga kiring yoki ro’yxatdan o’ting</h5>
        <span @click="handleOkSms"
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
          :model="formSms"
          ref="ruleFormSms"
          :rules="rulesSms"
          layout="vertical"
        >
          <a-form-model-item
            class="form-item register-input mb-3 pb-0 sms_code_number"
            label="Telefon raqamingiz"
            @keyup.enter="submitSms()"
          >
            <the-mask
              class="disabled"
              @keyup.enter="submitSms()"
              v-model="formSms.phone_number"
              :mask="['+998 (##) ### ## ##', '+998 (##) ### ## ##']"
              placeholder="+998 (__) ___ __ __"
            />
            <span class="change_number" @click="replaceNumber()">O’zgartirish</span>
          </a-form-model-item>
          <a-form-model-item
            class="form-item register-input mb-0 pb-0"
            :class="{ sms_code_error: smsCodeError }"
            label="Sms kodni kiriting"
            prop="sms_code"
          >
            <a-input
              @keyup.enter="submitSms()"
              v-model="formSms.sms_code"
              type="text"
              placeholder="sms"
            />
            <span class="sms_code_error_text" v-if="smsCodeError">Ko’d notogri</span>
          </a-form-model-item>
        </a-form-model>
      </div>
      <div class="vmodal-btn vmodal-btn-height" @click="submitSms()">
        Sms kodni yuborish
      </div>
      <div class="vmodal-forget-password" @click="again_sms_code()">
        Ko’dni qayta yuborish
      </div>
      <template slot="footer"> <h3></h3></template>
    </a-modal>
    <!-- login width sm  -->
    <!-- profile user name  -->
    <a-modal
      v-model="visibleName"
      :body-style="{ padding: '32px', borderRadius: '14px' }"
      centered
      :closable="false"
      width="670px"
      @ok="handleOkName"
    >
      <div class="vmodal-header auth-modal">
        <h5>Akkauntingizga ro‘yxatdan o‘ting</h5>
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
        <a-form-model
          :model="formName"
          ref="ruleFormName"
          :rules="rulesName"
          layout="vertical"
        >
          <a-form-model-item
            class="form-item register-input mb-3 pb-0"
            label="Ismingizni kiriting"
            prop="name"
          >
            <a-input v-model="formName.name" type="text" placeholder="Name" />
          </a-form-model-item>
          <a-form-model-item
            class="form-item register-input mb-0 pb-0"
            label="Telefon raqamingiz"
          >
            <the-mask
              class="disabled"
              v-model="formName.phone_number"
              :mask="['+998 (##) ### ## ##', '+998 (##) ### ## ##']"
              placeholder="+998 (__) ___ __ __"
            />
          </a-form-model-item>
        </a-form-model>
      </div>
      <div class="vmodal-btn vmodal-btn-height" @click="submitName()">
        Akkauntga kirish
      </div>
      <template slot="footer"> <h3></h3></template>
    </a-modal>
    <!-- profile user name  -->
    <!-- access profile register  -->
    <a-modal
      v-model="visibleSuccess"
      :body-style="{ padding: '32px', borderRadius: '14px' }"
      centered
      :closable="false"
      width="671px"
      @ok="handleOkSuccess"
    >
      <div class="vmodal-header">
        <h5></h5>
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
      <div class="vmodal-body success-vmodal">
        <img src="../../assets/images/modal-success.png" alt="" />
        <p>Siz muvaffaqiyatli ro’yxatdan o’tdingiz. Haridlarda davom eitng.</p>
      </div>
      <div class="vmodal-btn" @click="handleOkSuccess()">Haridni davom ettirish</div>
      <template slot="footer"> <h3></h3></template>
    </a-modal>
    <!-- access profile register  -->
  </div>
</template>
<script>
import MainTitle from "../Main-title.vue";
import Vnotification from "../vnotification.vue";

export default {
  data() {
    return {
      visibleSuccess: false,
      catalogMenu: false,
      visibleCheck: false,
      visibleLogin: false,
      visibleSms: false,
      visibleName: false,
      formLogin: {
        phone_number: "",
        password: "",
      },
      formCheckNumber: {
        phone_number: "",
      },
      formName: {
        name: "",
      },
      formSms: {
        phone_number: "",
        sms_code: "",
      },
      rulesLogin: {
        password: [
          {
            required: true,
            message: "Password is required",
            trigger: "change",
          },
        ],
      },
      rulesCheckNumber: {
        phone_number: [
          {
            required: true,
            message: "Number is required",
            trigger: "change",
          },
          { min: 9, message: "Raqam noto’g’ri kiritildi", trigger: "blur" },
        ],
      },
      rulesSms: {
        sms_code: [
          {
            required: true,
            message: "sms code is required",
            trigger: "change",
          },
        ],
      },
      rulesName: {
        name: [
          {
            required: true,
            message: "Name is required",
            trigger: "change",
          },
        ],
      },
      navLogo: require("../../assets/svg/green-logo.svg?raw"),
      navMic: require("../../assets/svg/mic.svg?raw"),
      navSearch: require("../../assets/svg/search.svg?raw"),
      navLike: require("../../assets/svg/Heart.svg?raw"),
      navBasket: require("../../assets/svg/Buy.svg?raw"),
      navComp: require("../../assets/Buy.svg?raw"),
      navOrder: require("../../assets/svg/Order_light.svg?raw"),
      navUser: require("../../assets/svg/User_alt_light.svg?raw"),
      navCategory: require("../../assets/svg/category_menu.svg?raw"),
      arrow: require("../../assets/svg/dropdown-icon.svg?raw"),
      categories: [],
      activeCategory: null,
      targetPage: false,
      smsCodeError: false,
      loginPassError: false,
      checkNumberError: false,
      visibleForgetPass: false,
    };
  },
  async fetch() {
    const [categoriesData] = await Promise.all([
      this.$store.dispatch("fetchCategories/getCategories", {
        limit: 6,
      }),
    ]);

    this.categories = categoriesData?.categories?.data;
    this.activeCategory = categoriesData?.categories?.data[0];
    console.log(this.categories);
  },
  computed: {
    routerPath() {
      return this.$route.path;
    },
    authVisible() {
      return this.$store.state.authVisible;
    },
    localStoreLength() {
      // let cart = JSON.parse(localStorage.getItem("cart"));
      // return cart.length;
    },
  },
  mounted() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    console.log(cart);
  },
  methods: {
    handleOkForgetPass() {
      this.visibleForgetPass = false;
    },
    replaceNumber() {
      this.visibleSms = false;
      this.visibleCheck = true;
    },
    toProfile(name) {
      this.targetPage = name;
      if (this.$store.state.auth) {
        this.$router.push("/profile/personal-info");
      } else {
        this.$store.commit("authVisibleChange", true);
      }
    },
    forgetPassword() {
      this.formCheckNumber.phone_number = `998${this.formCheckNumber.phone_number}`;
      this.visibleLogin = false;
      this.visibleForgetPass = true;
    },
    targetCategory(obj) {
      this.activeCategory = obj;
    },
    handleOkSuccess() {
      this.visibleSuccess = false;
    },
    handleOk() {
      this.visibleCheck = false;
    },
    handleOkLogin() {
      this.visibleLogin = false;
      this.$store.commit("authVisibleChange", false);
    },
    handleOkSms() {
      this.visibleSms = false;
    },
    handleOkName() {
      this.visibleName = false;
    },
    submitCheckNumber() {
      console.log(this.formCheckNumber);
      const data = {
        phone_number:
          this.formCheckNumber.phone_number.length == 9
            ? `998${this.formCheckNumber.phone_number}`
            : this.formCheckNumber.phone_number,
      };
      this.$refs["ruleFormCheckNumber"].validate((valid) => {
        if (valid) {
          this.__CHECK_NUMBER(data);
        } else {
          return false;
        }
      });
    },
    submitForgetPass() {
      const data = {
        phone_number:
          this.formCheckNumber.phone_number.length == 9
            ? `998${this.formCheckNumber.phone_number}`
            : this.formCheckNumber.phone_number,
      };
      console.log("out");
      this.$refs["ruleFormCheckNumber"].validate((valid) => {
        if (valid) {
          console.log("in");

          this.__FORGET_PASSWORD(data);
        } else {
          return false;
        }
      });
    },
    submitSms() {
      const data = {
        phone_number:
          this.formSms.phone_number.length == 9
            ? `998${this.formSms.phone_number}`
            : this.formSms.phone_number,
        sms_code: this.formSms.sms_code,
      };
      this.formName.phone_number =
        this.formSms.phone_number.length == 9
          ? `998${this.formSms.phone_number}`
          : this.formSms.phone_number;
      this.$refs["ruleFormSms"].validate((valid) => {
        if (valid) {
          this.__REGISTER_SMS(data);
        } else {
          return false;
        }
      });
    },
    submitLogin() {
      const data = {
        phone_number: `998${this.formLogin.phone_number}`,
        password: this.formLogin.password,
      };
      this.$refs["ruleFormLogin"].validate((valid) => {
        if (valid) {
          this.__LOGIN(data);
        } else {
          return false;
        }
      });
    },
    submitName() {
      const data = {
        name: this.formName.name,
      };
      this.$refs["ruleFormName"].validate((valid) => {
        if (valid) {
          this.__PROFILE_NAME(data);
        } else {
          return false;
        }
      });
    },
    async __REGISTER_SMS(formData) {
      try {
        const data = await this.$store.dispatch(
          "fetchAuth/postRegisterWithSms",
          formData
        );
        console.log(data);
        localStorage.setItem("dis_auth_token", data.token);
        this.$store.commit("authHandler");

        this.visibleSms = false;
        this.visibleName = true;
        this.smsCodeError = false;
      } catch (e) {
        console.log(e);
        if (e.response.status == 422) this.smsCodeError = true;
      }
    },
    // putProfileName
    async __PROFILE_NAME(formData) {
      try {
        const data = await this.$store.dispatch("fetchAuth/putProfileName", formData);
        console.log(this.$route);
        // if (this.$route.name != "basket" && this.targetPage) {
        //   this.$router.push("/profile/personal-info");
        // } else {
        //   this.$router.push("/checkout");
        // }
        this.$store.dispatch("profileInfo");
        this.visibleName = false;
        this.visibleSuccess = true;
      } catch (e) {
        console.log(e);
      }
    },
    again_sms_code() {
      const data = {
        phone_number:
          this.formCheckNumber.phone_number.length == 9
            ? `998${this.formCheckNumber.phone_number}`
            : this.formCheckNumber.phone_number,
      };

      this.__FORGET_PASSWORD(data);
    },
    async __FORGET_PASSWORD(formData) {
      try {
        const data = await this.$store.dispatch(
          "fetchAuth/postCheckNumberForget",
          formData
        );
        this.handleOkForgetPass();
        this.visibleSms = true;
        this.formLogin.phone_number =
          this.formCheckNumber.phone_number.length == 9
            ? `998${this.formCheckNumber.phone_number}`
            : this.formCheckNumber.phone_number;
        this.formSms.phone_number =
          this.formCheckNumber.phone_number.length == 9
            ? `998${this.formCheckNumber.phone_number}`
            : this.formCheckNumber.phone_number;
      } catch (e) {
        console.log(e);
      }
    },
    async __CHECK_NUMBER(formData) {
      try {
        const data = await this.$store.dispatch("fetchAuth/postCheckNumber", formData);
        if (data?.authorized) {
          this.visibleLogin = true;
        } else {
          this.visibleSms = true;
        }
        this.formLogin.phone_number =
          this.formCheckNumber.phone_number.length == 9
            ? `998${this.formCheckNumber.phone_number}`
            : this.formCheckNumber.phone_number;
        this.formSms.phone_number =
          this.formCheckNumber.phone_number.length == 9
            ? `998${this.formCheckNumber.phone_number}`
            : this.formCheckNumber.phone_number;
      } catch (e) {
        console.log(e);
      }
    },
    async __LOGIN(formData) {
      try {
        const data = await this.$store.dispatch("fetchAuth/postLogin", formData);
        localStorage.setItem("dis_auth_token", data.token);
        this.$store.commit("authHandler");
        this.$store.dispatch("profileInfo");
        this.$store.commit("authVisibleChange", false);
        if (this.$route.name != "basket" && this.targetPage) {
          this.$router.push("/profile/personal-info");
        } else {
          this.$router.push("/checkout");
        }
        this.loginPassError = false;
        this.visibleLogin = false;
      } catch (e) {
        if (e.response.status == 422) {
          this.loginPassError = true;
        }
      }
    },
  },
  watch: {
    authVisible(val) {
      this.visibleCheck = val;
    },
    routerPath() {
      (this.formLogin = {
        phone_number: "",
        password: "",
      }),
        (this.formCheckNumber = {
          phone_number: "",
        }),
        (this.formName = {
          name: "",
        }),
        (this.formSms = {
          phone_number: "",
          sms_code: "",
        }),
        (this.targetPage = false);
      this.catalogMenu = false;

      document.body.style.height = "auto";
      document.body.style.overflow = "auto";
    },
    visibleCheck(val) {
      this.$store.commit("authVisibleChange", val);
      if (val) this.visibleLogin = false;
    },
    visibleLogin(val) {
      this.$store.commit("authVisibleChange", val);
      if (val) this.visibleCheck = false;
    },
    visibleSms(val) {
      if (val) this.visibleCheck = false;
    },
    catalogMenu(val) {
      if (val) {
        document.body.style.height = "100vh";
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.height = "auto";
        document.body.style.overflow = "auto";
      }
    },
  },
  components: { MainTitle, Vnotification },
};
</script>
<style lang="css">
/* .nav-icons svg path {
  fill: #1f8a70;
} */
.close-space {
  width: 33%;
}
.header-navbar {
  position: relative;
}
.catalog-menu-body .main-title {
  margin-bottom: 0 !important;
}
.catalog-menu-body > span {
  margin-left: 32px;
}
.catalog-menu-container {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
  top: 100%;
  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(2.5px);
  position: absolute;
}
.catalog-menu-content {
  padding-top: 32px;
  margin-top: 63px;
  background: #fff;
  height: 100vh;
  width: 77%;
  padding-right: 65px;
  display: flex;
}
.catalog-menu-left-bg {
  position: absolute;
  width: 50%;
  background: #fff;
  top: 0;
  left: -100px;
  height: 100%;
}
.catalog-menu-list {
  max-width: 253px;
  margin-right: 28px;
}
.catalog-menu-list ul {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 12px;
}
.catalog-menu-list ul li {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 15.6428px;
  line-height: 20px;
  display: flex;
  align-items: center;
  letter-spacing: 0.195536px;
  color: #5f5f5f;
  padding: 12px;
  border-radius: 11.7321px;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  justify-content: space-between;
}

.catalog-menu-list-active {
  background: #f7f7f7;
  color: #1f8a70 !important;
}
.catalog-menu-list ul li:hover {
  background: #f7f7f7;
  color: #1f8a70;
}
.nested-enter-active,
.nested-leave-active {
  transition: all 0.3s ease-in-out;
}
/* delay leave of parent element */
.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  opacity: 0;
}
.nested-enter-active {
  transition: all 0.3s ease-in-out;
}
/* we can also transition nested elements using nested selectors */
/* .nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.3s ease-in-out;
} */
.nested-leave-active .inner {
  animation: bounce-in 0.5s reverse;
}
/* delay enter of nested element */
.nested-enter-active .inner {
  animation: bounce-in 0.5s;
  transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  transition: all 0.3s ease-in-out;

  /*
  	Hack around a Chrome 96 bug in handling nested opacity transitions.
    This is not needed in other browsers or Chrome 99+ where the bug
    has been fixed.
  */
  opacity: 0.001;
}
@keyframes bounce-in {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  50% {
    transform: translateX(40px);
    opacity: 1;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}
.catalog-menu-items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 60px;
}
.catalog-menu-items ul {
  display: flex;
  flex-direction: column;
}
.catalog-menu-items ul h4 {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  letter-spacing: 0.2px;
  color: #001a34;
}
.catalog-menu-items ul a {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  letter-spacing: 0.2px;
  color: #5f5f5f;
  margin-top: 8px;
}
.vmodal-anim-header {
  height: 285px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.vmodal-anim-header h5 {
  font-family: var(--SB_600);
  font-style: normal;
  font-size: 32px;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.02em;
  color: #09454f;
  position: relative;
  display: flex;
  justify-content: center;
  width: 70%;
}
.vmodal-anim-header span,
.vmodal-anim-header img {
  position: absolute;
}
.vmodal-anim-header span {
  top: 45px;
  right: 45px;
  cursor: pointer;
}
.vmodal-anim-header .shadow-ell-1 {
  right: 50px;
}
.vmodal-anim-header .shadow-ell-2 {
  left: 50px;
}
.vmodal-btn-outline {
  border: 2px solid #1f8a70;
  border-radius: 16px;
  height: 59px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--SB_500);
  font-style: normal;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #1f8a70;
  margin-top: 10px;
  cursor: pointer;
}
.vmodal-btn-height {
  height: 59px !important;
}
.register-input input {
  height: 60px;
  background: #f9f9f9;
  padding-left: 22px;
  border-radius: 16px;
  width: 100%;
}
.register-input input:focus {
  outline: none;
}
.register-input label {
  font-family: var(--SB_400);
  font-style: normal;
  font-size: 16px;
  line-height: 20px;
  text-align: right;
  color: #7b7b7b;
  margin-bottom: 6px !important;
  padding-bottom: 0 !important;
}
.number-error {
  font-family: var(--SB_400);
  font-style: normal;
  font-size: 14px;
  text-align: right;
  right: 21px;
  color: #ff3f3f;
}
.vmodal-forget-password {
  font-family: var(--SB_500);
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.02em;
  color: #06858c;
  margin-top: 22px;
  display: flex;
  justify-content: center;
  cursor: pointer;
}
.ant-form-item-required::before {
  display: none;
}
.count-index {
  width: 19px;
  height: 19px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ff3a55;
  font-family: var(--SB_700);
  font-style: normal;
  font-size: 10px;
  line-height: 120%;
  color: #ffffff;
  right: 2px;
  top: -6px;
  position: absolute;
}
.auth-modal {
  margin-bottom: 40px;
}
.register-input .has-error {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
}
.register-input .has-error span {
  width: 100%;
}
.register-input .ant-form-explain {
  position: absolute;
  right: 21px;
  font-family: var(--SB_500);
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: right;
  letter-spacing: 0.05em;
  color: #ff4f2d;
}
.register-input .has-error input,
.sms_code_error input {
  border: 1px solid #ffc0c0 !important;
}
.sms_code_number .ant-form-item-children,
.sms_code_error .ant-form-item-children {
  display: flex;
  align-items: center;
}
.sms_code_number .change_number {
  position: absolute;
  right: 20px;
  font-family: var(--SB_500);
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: right;
  letter-spacing: 0.05em;
  color: #387eca;
  cursor: pointer;
}
.sms_code_error .sms_code_error_text {
  position: absolute;
  right: 20px;
  font-family: var(--SB_500);
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: right;
  letter-spacing: 0.05em;
  color: #ff4f2d;
}
</style>
