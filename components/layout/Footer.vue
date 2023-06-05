<template lang="html">
  <div>
    <div class="footer">
      <div class="container_xl">
        <div class="d-flex justify-content-between">
          <div class="main_info d-flex flex-column">
            <span v-html="footerLogo"></span>
            <span class="footer-tel"
              ><p>Телефон поддержки</p>
              <a href="tel:+998712077788"> +998 (71) 207 77 88</a></span
            >
            <nuxt-link class="footer-links" to="/"
              ><span v-html="footerLocation"></span> Бизнинг доконлар</nuxt-link
            >
            <nuxt-link class="footer-links" to="/"
              ><span v-html="footerEmail" style="margin-right: 7px"></span
              >Info@diskont.com</nuxt-link
            >
          </div>
          <div class="footer_menu">
            <h4>Компания</h4>
            <ul>
              <li>
                <nuxt-link to="/">B2B савдоси</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/">Биз ҳақимизда</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/">Биз ҳақимизда</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/">IMEI ни текшириш</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="footer_menu">
            <h4>Маълумот</h4>
            <ul>
              <li>
                <nuxt-link to="/">Бепул етказиб бериш</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/">Биз ҳақимизда</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/">Бонус тизими</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/">Дисконтда ишлаш</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="footer_menu">
            <h4>Ҳаридорга ёрдам</h4>
            <ul>
              <li>
                <nuxt-link to="/">Муддатли толов</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/">Махсулотни кайтариш</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/">Махсулотлар учун кафолат</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/">Коп сораладиган саволлар</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="footer_menu">
            <h4>Толов турлари</h4>
            <div class="payment-types">
              <img src="../../assets/images/apelsin.uz.png" alt="" />
              <img src="../../assets/images/uzcard.uz.png" alt="" />
              <img src="../../assets/images/click.uz.png" alt="" />
              <img src="../../assets/images/payme.uz.png" alt="" />
              <img src="../../assets/images/humocard.uz.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container_xl">
        <div class="d-flex justify-content-between">
          <p>2016-2023 © Diskont.uz Барча ҳуқуқлар ҳимояланган.</p>
          <p>Публичная оферта</p>
          <p>Политика конфиденциальности</p>
          <p><span v-html="footerBottom"></span> Веб сайт сделано на компании АББА</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      footerLogo: require("../../assets/svg/footer-logo.svg?raw"),
      footerLocation: require("../../assets/svg/footer-location.svg?raw"),
      footerEmail: require("../../assets/svg/footer-email.svg?raw"),
      footerBottom: require("../../assets/svg/footer-bottom.svg?raw"),
    };
  },
};
</script>
<style lang=""></style>
