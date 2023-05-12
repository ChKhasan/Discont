<template lang="html">
  <div ref="navScroll" class="nav_scroll">
    <div class="header-top d-flex">
      <div class="container_xl w-100">
        <div class="d-flex justify-content-between">
          <ul class="d-flex align-items-center">
            <li>Do’konlar manzili</li>
            <li>Biz haqimizda</li>
            <li>Vakansiyalar</li>
            <li>Yuridik shaxslar uchun</li>
          </ul>
          <div class="d-flex header-top__right">
            <p>Aloqa markazi: +712077788</p>
            <p>O’Z | ENG | РУ</p>
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
  mounted() {
    var header = this.$refs.navScroll;

    window.addEventListener("scroll", () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > this.lastScrollTop) {
        header.style.top = "-104px";
        header.style.background = "#04babe";
        header.style.marginTop = "0";
      } else if (document.documentElement.scrollTop == 0) {
        header.style.marginTop = "0";
        header.style.boxShadow = "none";
        header.style.background = "#04babe";
      } else {
        header.style.top = "0";
        header.style.boxShadow = " 0 0.5rem 1rem rgb(0 0 0 / 15%)";
        header.style.background = "#fff";
        header.style.marginTop = "0";
      }
      this.lastScrollTop = scrollTop;
    });
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
</style>
