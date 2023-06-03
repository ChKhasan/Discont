<template lang="html">
  <div style="margin-top: 170px">
    <Header />
    <Nuxt />
    <Footer />
    <Transition name="bounce-toast">
      <Vnotification v-if="buyToast" />
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
      afterReload: false,
    };
  },
  async mounted() {
    await this.$store.commit("reloadStore");
    this.afterReload = true;
    this.$store.commit("authHandler");
  },
  computed: {
    storeCartLength() {
      return this.$store.state.cart.length;
    },
    storeLikeLength() {
      return this.$store.state.like.length;
    },
    localStorageHandler() {
      if (process.client) {
        let cart = JSON.parse(localStorage.getItem("like"));
        return cart.length;
      }
    },
  },
  watch: {
    localStorageHandler(val) {
      console.log(val);
    },

    storeLikeLength(newVal, oldVal) {
      if (newVal > oldVal && this.afterReload) {
        this.buyToast = true;
      }
    },
    buyToast(val) {
      if (val) {
        setTimeout(() => {
          this.buyToast = false;
        }, 1000);
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
