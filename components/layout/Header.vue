<template lang="html">
  <div ref="navScroll" class="nav_scroll">
    <div class="header-top d-flex">
      <div class="container_xl w-100">
        <div class="d-flex justify-content-between">
          <ul class="d-flex align-items-center">
            <li><span v-html="location" class="nav-location"></span> Toshkent</li>
            <li>Do’konlar manzili</li>
            <li>Biz haqimizda</li>
          </ul>
          <div class="d-flex header-top__right">
            <a href="tel:+998990118934">+998 99 011 89 34</a>
            <p class="d-flex align-items-center">
              <span class="header-lang-active" style="margin-right: 3px">O’Z</span> |
              <span style="margin-right: 3px; margin-left: 3px">ENG</span> |
              <span style="margin-right: 3px">РУ</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <Navbar />
      <CategoryList />
    </div>
  </div>
</template>
<script>
import CategoryList from "./CategoryList.vue";
import Navbar from "./Navbar.vue";

export default {
  data() {
    return {
      location: require("../../assets/svg/header-location.svg?raw"),
    };
  },
  computed: {
    routerName() {
      return this.$route.path;
    },
  },
  mounted() {
    var header = this.$refs.navScroll;

    window.addEventListener("scroll", () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > this.lastScrollTop) {
        header.style.top = "-104px";
        // header.style.background = "#04babe";
        header.style.marginTop = "0";
      } else if (document.documentElement.scrollTop == 0) {
        header.style.marginTop = "0";
        header.style.boxShadow = "none";
        // header.style.background = "#04babe";
      } else {
        header.style.top = "0";
        header.style.boxShadow = " 0 0.5rem 1rem rgb(0 0 0 / 15%)";
        header.style.background = "#fff";
        header.style.marginTop = "0";
      }
      this.lastScrollTop = scrollTop;
    });
  },
  watch: {
    routerName() {
      var header = this.$refs.navScroll;
      header.style.top = "0";
      header.style.marginTop = "0";
      header.style.boxShadow = "none";
    },
  },
  components: { Navbar, CategoryList },
};
</script>
<style lang="css">
.nav_scroll {
  transition: all 0.5s !important;
  height: auto;
  background-color: transparent;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000 !important;
}
.nav-location {
  margin-right: 10px;
}
</style>
