<template lang="html">
  <div class="layout-back">
    <Header />
    <Nuxt />
    <CheckOutFooter />
  </div>
</template>
<script>
import CheckOutFooter from "../components/layout/CheckOutFooter.vue";
import Header from "../components/layout/Header.vue";

export default {
  mounted() {
    this.$store.commit("reloadStore");
    this.$store.dispatch("dicoinInfo");
    this.$store.dispatch("profileInfo");
  },
  components: { Header, CheckOutFooter },
};
</script>
<style>
@media screen and (max-width: 1024px) {
  .check__wrap {
    margin-top: 60px;
  }
}
</style>
