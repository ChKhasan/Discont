<template lang="html">
  <div style="margin-top: 170px">
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
  },
  components: { Header, CheckOutFooter },
};
</script>
<style lang=""></style>
