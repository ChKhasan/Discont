<template lang="html">
  <div style="margin-top: 170px">
    <Header />
    <Nuxt />
    <Footer />
    <Transition name="bounce-toast">
      <Vnotification
        v-if="buyToast"
        title="Mahsulot savatchaga muvaffaqiyatli qo’shildi. "
        @click="toastClose()"
      >
        <span v-html="iconBuy"></span>
      </Vnotification>
      <Vnotification
        v-if="likeToast"
        title="Mahsulot Like ga muvaffaqiyatli qo’shildi. "
        @click="toastClose()"
      >
        <span v-html="iconLike"></span>
      </Vnotification>
      <Vnotification
        v-if="compToast"
        title="Mahsulot Taqqoslash ga muvaf-faqiyatli qo’shildi. "
        @click="toastClose()"
      >
        <span v-html="iconComp"></span>
      </Vnotification>
    </Transition>
  </div>
</template>
<script>
import Footer from "../components/layout/Footer.vue";
import Header from "../components/layout/Header.vue";

export default {
  data() {
    return {
      buyToast: false,
      likeToast: false,
      compToast: false,
      afterReload: false,
      iconBuy: require("../assets/svg/toast-buy.svg?raw"),
      iconLike: require("../assets/svg/toast-like.svg?raw"),
      iconComp: require("../assets/svg/toast-comparison.svg?raw"),
    };
  },
  async mounted() {
    // await this.$store.dispatch("fetchProducts/getProducts", {
    //   type: "bestsellers",
    //   limit: 6,
    // }),
    //   await this.$store.dispatch("fetchProducts/getProducts", {
    //     limit: 10,
    //   }),
    //   await this.$store.dispatch("fetchProducts/getProducts", {
    //     type: "popular",
    //     limit: 6,
    //   }),
    //   await this.$store.dispatch("fetchCategories/getCategories", {
    //     limit: 6,
    //   }),
    //   await this.$store.dispatch("fetchBrands/getBrands", {
    //     limit: 10,
    //     top: 1,
    //   }),
    //   await this.$store.dispatch("fetchPosts/getPosts", {
    //     limit: 10,
    //   }),
    //   await this.$store.dispatch("fetchProducts/getShowcases", {
    //     limit: 4,
    //   }),
    //   await this.$store.dispatch("fetchBanners/getBanners", {
    //     type: "main",
    //   });
    await this.$store.commit("reloadStore");
    this.afterReload = true;
    this.$store.commit("authHandler");
    this.$store.dispatch("profileInfo");
  },
  computed: {
    storeCartLength() {
      return this.$store.state.cart.length;
    },
    storeLikeLength() {
      return this.$store.state.like.length;
    },
    storeCompLength() {
      return this.$store.state.comparison.length;
    },
    localStorageHandler() {
      if (process.client) {
        let cart = JSON.parse(localStorage.getItem("like"));
        return cart.length;
      }
    },
  },
  methods: {
    toastClose() {
      this.buyToast = false;
      this.likeToast = false;
      this.compToast = false;
    },
  },
  watch: {
    buyToast(val) {
      if (val) {
        setTimeout(() => {
          this.buyToast = false;
        }, 2000);
      }
    },
    likeToast(val) {
      if (val) {
        setTimeout(() => {
          this.likeToast = false;
        }, 2000);
      }
    },
    compToast(val) {
      if (val) {
        setTimeout(() => {
          this.compToast = false;
        }, 2000);
      }
    },
    storeLikeLength(newVal, oldVal) {
      if (newVal > oldVal && this.afterReload) {
        this.likeToast = true;
      }
    },

    storeCompLength(newVal, oldVal) {
      if (newVal > oldVal && this.afterReload) {
        this.compToast = true;
      }
    },
    storeCartLength(newVal, oldVal) {
      if (newVal > oldVal && this.afterReload) {
        this.buyToast = true;
      }
    },
  },
  components: { Header, Footer },
};
</script>
<style lang="css">
.bounce-toast-enter-active {
  animation: bounce-toast-in 0.5s;
}
.bounce-toast-leave-active {
  animation: bounce-toast-in 0.5s reverse;
}
@keyframes bounce-toast-in {
  0% {
    right: -100%;
    opacity: 0;
  }
  50% {
    right: 160px;
    opacity: 1;
  }
  100% {
    right: 144px;
  }
}
</style>
