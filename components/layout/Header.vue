<template lang="html">
  <div ref="navScroll" class="nav_scroll">
    <div class="header-top d-flex">
      <div class="container_xl w-100">
        <div class="d-flex justify-content-between">
          <ul class="d-flex align-items-center">
            <li><span v-html="location" class="nav-location"></span> Toshkent</li>
            <li>Do’konlar manzili</li>
            <li @click="$router.push(localePath('/info/about-us'))">Biz haqimizda</li>
          </ul>
          <div class="d-flex header-top__right">
            <a href="tel:+998712077788">+998 71 207 77 88</a>
            <p class="d-flex align-items-center lang_locales">
              <span
                v-for="locale in locales"
                :class="{ 'header-lang-active': $i18n.locale == locale.code }"
                :key="locale.id"
                @click="$router.push(switchLocalePath(locale.code))"
                >{{ locale.name }}</span
              >
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
      locales: [
        { id: 1, code: "uz", name: "O'Z" },
        {
          id: 2,
          code: "en",
          name: "ENG",
        },
        {
          id: 3,
          code: "ru",
          name: "Ру",
        },
      ],
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
.lang_locales span {
  padding-right: 7px;
  margin-right: 5px;
  position: relative;
}

.lang_locales span::after {
  content: "|";
  position: absolute;
  right: -1px;
}
.lang_locales span:last-child::after {
  display: none;
}
.lang_locales span:last-child {
  padding-right: 0;
  margin-right: 0;
}
</style>
