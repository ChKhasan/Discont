<template lang="html">
  <div>
    <div class="footer">
      <div class="container_xl">
        <div class="footer-box">
          <div class="mobile-menu">
            <div class="footer_menu footer_drop">
              <h4 @click="dropAction(1)">
                Kompaniya
                <span
                  v-html="dropArrow"
                  :class="{ rotate180: activeDrop.includes(1) }"
                ></span>
              </h4>
              <ul
                class="footer-drop-board mt-0"
                :class="{ 'height-auto': activeDrop.includes(1) }"
              >
                <div class="mt-3">
                  <li>
                    <nuxt-link :to="localePath('/info/about-b2b')"
                      >B2B savdosi</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link :to="localePath('/info/about-us')"
                      >Biz haqimizda</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link :to="localePath('/')"
                      >Yangiliklar va sharxlar</nuxt-link
                    >
                  </li>
                </div>
              </ul>
            </div>
            <div class="footer_menu footer_drop">
              <h4
                @click="activeDrop = 2"
                :class="{ rotate180: activeDrop == 2, 'mt-0': activeDrop != 2 }"
              >
                Маълумот
                <span v-html="dropArrow"></span>
              </h4>
              <ul
                class="footer-drop-board mt-0"
                :class="{ 'height-auto': activeDrop == 2 }"
              >
                <div class="mt-3">
                  <li>
                    <nuxt-link :to="localePath('/info/delivery')"
                      >Yetkazib berish</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link :to="localePath('/')">Bonus tizimi</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link :to="localePath('/info/working')"
                      >Diskontda ishlash</nuxt-link
                    >
                  </li>
                </div>
              </ul>
            </div>
            <div class="footer_menu footer_drop">
              <h4
                @click="activeDrop = 3"
                :class="{ rotate180: activeDrop == 3, 'mt-0': activeDrop != 3 }"
              >
                Haridorga yordam <span v-html="dropArrow"></span>
              </h4>
              <ul
                class="footer-drop-board mt-0"
                :class="{ 'height-auto': activeDrop == 3 }"
              >
                <div class="mt-3">
                  <li>
                    <nuxt-link :to="localePath('/info/trade-nation')"
                      >Muddatli to'lov</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link :to="localePath('/')"
                      >Mahsulotni qaytarish</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link :to="localePath('/info/warranty')"
                      >mahsulotlar uchun kafolat</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link :to="localePath('/')"
                      >Ko'p beriladigan savollar</nuxt-link
                    >
                  </li>
                </div>
              </ul>
            </div>
          </div>
          <div class="main_info d-flex flex-column">
            <span class="footer-logo" v-html="footerLogo"></span>
            <span class="footer-tel"
              ><p>Телефон поддержки</p>
              <a href="tel:+998712077788"> +998 (71) 207 77 88</a></span
            >
            <nuxt-link class="footer-links" :to="localePath('/')"
              ><span v-html="footerLocation"></span> Бизнинг доконлар</nuxt-link
            >
            <nuxt-link class="footer-links" :to="localePath('/')"
              ><span v-html="footerEmail" style="margin-right: 7px"></span
              >Info@diskont.com</nuxt-link
            >
          </div>
          <div class="footer_menu footer_list">
            <h4>Kompaniya</h4>
            <ul>
              <li>
                <nuxt-link :to="localePath('/info/about-b2b')"
                  >B2B savdosi</nuxt-link
                >
              </li>
              <li>
                <nuxt-link :to="localePath('/info/about-us')"
                  >Biz haqimizda</nuxt-link
                >
              </li>
              <li>
                <nuxt-link :to="localePath('/')"
                  >Yangiliklar va sharxlar</nuxt-link
                >
              </li>
            </ul>
          </div>
          <div class="footer_menu footer_list">
            <h4>Маълумот</h4>
            <ul>
              <li>
                <nuxt-link :to="localePath('/info/delivery')"
                  >Yordam berish</nuxt-link
                >
              </li>
              <li>
                <nuxt-link :to="localePath('/')">Bonus tizimi</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="localePath('/info/working')"
                  >Diskontda ishlash</nuxt-link
                >
              </li>
            </ul>
          </div>
          <div class="footer_menu footer_list">
            <h4>Haridorga yordam</h4>
            <ul>
              <li>
                <nuxt-link :to="localePath('/info/trade-nation')"
                  >Muddatli to'lov</nuxt-link
                >
              </li>
              <li>
                <nuxt-link :to="localePath('/')"
                  >Mahsulotni qaytarish</nuxt-link
                >
              </li>
              <li>
                <nuxt-link :to="localePath('/info/warranty')"
                  >Mahsulotlar uchun kafolat</nuxt-link
                >
              </li>
              <li>
                <nuxt-link :to="localePath('/')"
                  >Ko'p beriladigan savollar</nuxt-link
                >
              </li>
            </ul>
          </div>
          <div class="footer_menu footer-payment">
            <h4>To'lov turlari</h4>
            <p>To’lov tizimi</p>
            <div class="payment-types">
              <!-- <span>
                <img src="../../assets/images/apelsin.uz.png" alt="" />
              </span> -->
              <!-- <span>
                <img src="../../assets/images/uzcard.uz.png" alt="" />
              </span> -->
              <span>
                <img src="../../assets/images/click.uz.png" alt="" />
              </span>
              <span>
                <img src="../../assets/images/payme.uz.png" alt="" />
              </span>
              <span>
                <img src="../../assets/images/uzum.png" alt="" />
              </span>
              <!-- <span>
                <img src="../../assets/images/humocard.uz.png" alt="" />
              </span> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container_xl">
        <div class="d-flex justify-content-between">
          <p class="footer-date">
            2016-2023 © Diskont.uz Barcha huquqlar himoyalangan.
          </p>
          <p class="foooter-bottom-text cursor-pointer">Публичная оферта</p>
          <p class="cursor-pointer foooter-bottom-text">
            Политика конфиденциальности
          </p>
          <p>
            <span v-html="footerBottom"></span> Веб сайт сделано на компании
            АББА
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dropArrow: `<svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="12"
                    viewBox="0 0 20 12"
                    fill="none"
                  >
                    <path
                      d="M9.11612 10.8839C9.60427 11.372 10.3957 11.372 10.8839 10.8839L18.8388 2.92893C19.327 2.44078 19.327 1.64932 18.8388 1.16116C18.3507 0.67301 17.5592 0.67301 17.0711 1.16116L10 8.23223L2.92893 1.16117C2.44078 0.67301 1.64932 0.67301 1.16116 1.16117C0.67301 1.64932 0.67301 2.44078 1.16116 2.92893L9.11612 10.8839ZM8.75 9L8.75 10L11.25 10L11.25 9L8.75 9Z"
                      fill="black"
                    /></svg
                >`,
      footerLogo: require("../../assets/svg/footer-logo.svg?raw"),
      footerLocation: require("../../assets/svg/footer-location.svg?raw"),
      footerEmail: require("../../assets/svg/footer-email.svg?raw"),
      footerBottom: require("../../assets/svg/footer-bottom.svg?raw"),
      activeDrop: [],
    };
  },
  methods: {
    dropAction(id) {
      if (this.activeDrop.find(id)) {
        this.activeDrop = this.activeDrop.filter((item) => item.id != id);
      } else {
        this.activeDrop.push(id);
      }
    },
  },
};
</script>
<style lang="css">
.footer-box {
  display: flex;
  justify-content: space-between;
}
.footer-payment p {
  display: none;
  color: #828282;
  font-family: var(--SB_400);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.footer-drop-board {
  max-height: 0;
  overflow: hidden;
  position: relative;
  transition: max-height 0.25s ease-out;
}
.footer_drop h4 {
  display: flex;
  justify-content: space-between;
}
.mobile-menu {
  display: none;
  flex-direction: column;
  gap: 40px;
}
@media (max-width: 576px) {
  .mobile-menu {
    display: flex;
  }
  .foooter-bottom-text {
    display: none;
  }
  .footer-date {
    display: none;
  }
  .footer-box {
    flex-direction: column;
    justify-content: space-between;
  }
  .footer_list {
    display: none;
  }
  .footer-logo {
    display: none;
  }
  .footer-payment h4 {
    display: none;
  }
  .footer-payment p {
    display: block;
  }
  .footer .payment-types {
    margin-top: 16px;
  }
  .footer .payment-types img {
    width: 108px;
    height: 57px;
  }
  .footer-box {
    gap: 56px;
  }
  .payment-types {
    display: flex;
    align-items: center;
    gap: 12px !important;
    flex-wrap: wrap;
  }
  .payment-types span {
    border-radius: 12px;
    background: #f8f8f8;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .payment-types img {
    width: 80px !important;
  }
}
</style>
