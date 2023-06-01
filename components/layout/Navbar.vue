<template lang="html">
  <div class="header-navbar">
    <div class="container_xl">
      <div class="d-flex header-navbar_container">
        <div class="d-flex align-items-center">
          <nuxt-link to="/"><span v-html="navLogo" class="nav_logo"></span></nuxt-link>
          <button class="catalog-btn" @click="catalogMenu = !catalogMenu">
            <span v-html="navCategory"></span>Katalog
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
            <li class="nav_profile flex-row" @click="visible = true">
              <span v-html="navUser"></span>
              <p>profil</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Transition duration="550" name="nested">
      <div class="catalog-menu-container outer" v-if="catalogMenu">
        <div class="position-relative w-100 inner">
          <div class="catalog-menu-left-bg"></div>
          <div class="container_xl position-relative" style="z-index: 2">
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
                    {{ category?.name?.ru }}
                  </li>
                  <!-- <li>Дом и сад</li>
                  <li>Детские товары</li>
                  <li>Бытовая техника</li>
                  <li>Спорт и отдых</li>
                  <li>Строительство и ремонт</li>
                  <li>Автотовары</li>
                  <li>Хобби и творчество</li> -->
                </ul>
              </div>
              <div class="catalog-menu-body">
                <div class="d-flex categories-page-title mt-0 mb-5 align-items-end">
                  <MainTitle :title="activeCategory?.name?.ru" />
                  <span class="d-flex align-items-end">8 288 товаров</span>
                </div>
                <div class="catalog-menu-items">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
    <a-modal
      v-model="visible"
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
              <!-- <span class="position-absolute number-error"
                >Raqam noto’g’ri kiritildi</span
              > -->
              <the-mask
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
        Manzilni qo’shish
      </div>
      <div class="vmodal-btn-outline" @click="visibleLogin = true">Manzilni qo’shish</div>
      <template slot="footer"> <h3></h3></template>
    </a-modal>
    <a-modal
      v-model="visibleLogin"
      :body-style="{ padding: '32px', borderRadius: '14px' }"
      centered
      :closable="false"
      width="670px"
      @ok="handleOkLogin"
    >
      <div class="vmodal-header">
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
              v-model="formLogin.phone_number"
              :mask="['+998 (##) ### ## ##', '+998 (##) ### ## ##']"
              placeholder="+998 (__) ___ __ __"
            />
          </a-form-model-item>
          <a-form-model-item class="form-item register-input mb-0 pb-0" label="Parol">
            <a-input
              v-model="formLogin.password"
              type="password"
              placeholder="Telefon raqamingiz"
            />
          </a-form-model-item>
        </a-form-model>
      </div>
      <div class="vmodal-btn vmodal-btn-height" @click="submitLogin()">
        Akauntga Kirish
      </div>
      <div class="vmodal-forget-password">Parolni unutdingizmi?</div>
      <template slot="footer"> <h3></h3></template>
    </a-modal>
  </div>
</template>
<script>
import MainTitle from "../Main-title.vue";

export default {
  data() {
    return {
      catalogMenu: false,
      visible: false,
      visibleLogin: false,
      formLogin: {
        phone_number: "",
        password: "",
      },
      formCheckNumber: {
        phone_number: "",
      },
      formRegisterWidthSms: {
        phone_number: "",
        sms_code: "",
      },
      rulesLogin: {
        name: [{}],
      },
      rulesCheckNumber: {
        phone_number: [
          {
            required: true,
            trigger: "change",
          },
        ],
      },
      rulesRegisterWidthSms: {
        name: [{}],
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
      categories: [],
      activeCategory: null,
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
  },
  computed: {
    routerPath() {
      return this.$route.path;
    },
  },
  methods: {
    targetCategory(obj) {
      this.activeCategory = obj;
    },
    handleOk() {
      this.visible = false;
    },
    handleOkLogin() {
      this.visibleLogin = false;
    },
    submitCheckNumber() {
      const data = {
        phone_number: `998${this.formCheckNumber.phone_number}`,
      };
      this.$refs["ruleFormCheckNumber"].validate((valid) => {
        if (valid) {
          this.__CHECK_NUMBER(data);
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
    async __CHECK_NUMBER(formData) {
      try {
        const data = await this.$store.dispatch("fetchAuth/postCheckNumber", formData);
      } catch (e) {
        console.log(e);
      }
    },
    async __LOGIN(formData) {
      try {
        const data = await this.$store.dispatch("fetchAuth/postLogin", formData);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    },
  },
  watch: {
    routerPath() {
      this.catalogMenu = false;
      document.body.style.height = "auto";
      document.body.style.overflow = "auto";
    },
    visible(val) {
      if (val) this.visibleLogin = false;
    },
    visibleLogin(val) {
      if (val) this.visible = false;
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
  components: { MainTitle },
};
</script>
<style lang="css">
/* .nav-icons svg path {
  fill: #1f8a70;
} */
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
.catalog-menu-items ul li {
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
</style>
