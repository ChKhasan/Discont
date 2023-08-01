<template lang="html">
  <div>
    <div class="footer footer-checkout">
      <div class="container_xl">
        <div class="d-flex justify-content-between">
          <div class="hey chekout-footer-head d-flex">
            <span v-html="footerLogo"></span>
            <p>
              2016-2023 © diskont.uz. Barcha huquqlar himoyalangan.  Tovarlarning
              ko‘rsatilgan qiymati va ularni sotib olish shartlari joriy sanaga amal
              qiladi
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container_xl">
        <div class="hey d-flex justify-content-between">
          <p>2016-2023 © Diskont.uz Barcha huquqlar himoyalangan.</p>
          <p class="cursor-pointer">Ommaviy oferta</p>
          <p class="cursor-pointer">Maxfiylik siyosati</p>
          <p><span v-html="footerBottom"></span> Veb-sayt ABBA tomonidan yaratilgan</p>
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
<style>
@media screen and (max-width: 1024px) {
  .hey {
    flex-direction: column;
    gap: 16px;
  }
}
</style>
