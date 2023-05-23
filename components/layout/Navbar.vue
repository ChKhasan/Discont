<template lang="html">
  <div class="header-navbar">
    <div class="container_xl">
      <div class="d-flex header-navbar_container">
        <div class="d-flex align-items-center">
          <nuxt-link to="/"><span v-html="navLogo" class="nav_logo"></span></nuxt-link>
          <button class="catalog-btn" @click="catalogMenu = !catalogMenu">
            <span v-html="navCategory"></span>Katalog
          </button>
          <div class="search_input_container">
            <input type="text" placeholder="Noutbuk ..." />
            <span class="search-btn">
              <span v-html="navMic"></span>
              Qidiruv
            </span>
          </div>
        </div>
        <div class="header-navbar_navbar d-flex">
          <ul class="d-flex justify-content-between w-100 align-items-center">
            <li><span class="nav-icons" v-html="navOrder"></span>Buyurtmalar</li>
            <li><span class="nav-icons" v-html="navLike"></span> Sevimlilar</li>
            <li><span class="nav-icons" v-html="navBasket"></span>Savatcha</li>
            <li><span class="nav-icons" v-html="navComp"></span>Solishtirish</li>
            <li
              class="nav_profile flex-row"
              @click="$router.push('/profile/personal-info')"
            >
              <span v-html="navUser"></span>
              <p>profil</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Transition duration="550" name="nested">
      <div class="catalog-menu-container outer" v-if="catalogMenu">
        <div class="position-relative w-100 inner">
          <div class="catalog-menu-left-bg"></div>
          <div class="container_xl position-relative" style="z-index: 2">
            <div class="catalog-menu-content">
              <div class="catalog-menu-list">
                <ul>
                  <li class="catalog-menu-list-active">Электроника</li>
                  <li>Дом и сад</li>
                  <li>Детские товары</li>
                  <li>Бытовая техника</li>
                  <li>Спорт и отдых</li>
                  <li>Строительство и ремонт</li>
                  <li>Автотовары</li>
                  <li>Хобби и творчество</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      catalogMenu: false,
      navLogo: require("../../assets/svg/green-logo.svg?raw"),
      navMic: require("../../assets/svg/mic.svg?raw"),
      navSearch: require("../../assets/svg/search.svg?raw"),
      navLike: require("../../assets/svg/Heart.svg?raw"),
      navBasket: require("../../assets/svg/Buy.svg?raw"),
      navComp: require("../../assets/Buy.svg?raw"),
      navOrder: require("../../assets/svg/Order_light.svg?raw"),
      navUser: require("../../assets/svg/User_alt_light.svg?raw"),
      navCategory: require("../../assets/svg/category_menu.svg?raw"),
    };
  },
  watch: {
    catalogMenu(val) {
      if (val) {
        document.body.style.height = "100vh";
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.height = "auto";
        document.body.style.overflow = "auto";
      }
    },
  },
};
</script>
<style lang="css">
/* .nav-icons svg path {
  fill: #1f8a70;
} */
.header-navbar {
  position: relative;
}
.catalog-menu-container {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
  top: 100%;
  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(2.5px);
  position: absolute;
}
.catalog-menu-content {
  padding-top: 32px;
  margin-top: 63px;
  background: #fff;
  height: 100vh;
  width: 70%;
}
.catalog-menu-left-bg {
  position: absolute;
  width: 50%;
  background: #fff;
  top: 0;
  left: -100px;
  height: 100%;
}
.catalog-menu-list {
  max-width: 253px;
}
.catalog-menu-list ul {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 12px;
}
.catalog-menu-list ul li {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 15.6428px;
  line-height: 20px;
  display: flex;
  align-items: center;
  letter-spacing: 0.195536px;
  color: #5f5f5f;
  padding: 12px;
  border-radius: 11.7321px;
  cursor: pointer;
  transition: 0.3s;
}
.catalog-menu-list-active {
  background: #f7f7f7;
  color: #1f8a70 !important;
}
.catalog-menu-list ul li:hover {
  background: #f7f7f7;
  color: #1f8a70;
}
.nested-enter-active,
.nested-leave-active {
  transition: all 0.3s ease-in-out;
}
/* delay leave of parent element */
.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  opacity: 0;
}
.nested-enter-active {
  transition: all 0.3s ease-in-out;
}
/* we can also transition nested elements using nested selectors */
/* .nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.3s ease-in-out;
} */
.nested-leave-active .inner {
  animation: bounce-in 0.5s reverse;
}
/* delay enter of nested element */
.nested-enter-active .inner {
  animation: bounce-in 0.5s;
  transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  transition: all 0.3s ease-in-out;

  /*
  	Hack around a Chrome 96 bug in handling nested opacity transitions.
    This is not needed in other browsers or Chrome 99+ where the bug
    has been fixed.
  */
  opacity: 0.001;
}
@keyframes bounce-in {
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(40px);
  }
  100% {
    transform: translateX(0px);
  }
}
</style>
