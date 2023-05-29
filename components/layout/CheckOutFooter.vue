<template lang="html">
  <div>
    <div class="footer footer-checkout">
      <div class="container_xl">
        <div class="d-flex justify-content-between">
          <div class="chekout-footer-head d-flex">
            <span v-html="footerLogo"></span>
            <p>
              2016-2023 © diskont.uz. Барча ҳуқуқлар ҳимояланган. Товарларнинг кўрсатилган
              қиймати ва уларни сотиб олиш шартлари жорий санага амал қилади
            </p>
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
