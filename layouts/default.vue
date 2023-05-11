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
  components: { Header, Footer },
};
</script>
<style lang=""></style>
