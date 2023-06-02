<template lang="html">
  <div style="margin-top: 170px">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Footer from "../components/layout/Footer.vue";
import Header from "../components/layout/Header.vue";

export default {
  mounted() {
    this.$store.commit("reloadStore");
    this.$store.commit("authHandler");
  },
  computed: {
    localStorageHandler() {
      if (process.client) {
        return localStorage.getItem("dis_auth_token");
      }
    },
  },
  watch: {
    localStorageHandler(val) {
      console.log(val);
    },
  },
  components: { Header, Footer },
};
</script>
<style lang=""></style>
