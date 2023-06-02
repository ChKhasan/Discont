<template lang="html">
  <div class="personal-info">
    <div class="container_xl">
      <div class="page-breadcrumb">
        <nuxt-link to="/">Diskont main page</nuxt-link>
        <nuxt-link to="/">
          Smartfonlar
          <span v-html="arrow"></span>
        </nuxt-link>
      </div>
      <div><MainTitle title="Каталог Apple" /></div>
      <div class="profile-page-grid">
        <div>
          <div class="profile-menu">
            <nuxt-link
              to="/profile/personal-info"
              :class="{ 'profile-menu-active': $route.name == 'profile-personal-info' }"
              ><span v-html="profileInfo"></span> Shaxsiy ma`lumotlarim
            </nuxt-link>
            <nuxt-link
              to="/profile/my-pay"
              :class="{ 'profile-menu-active': $route.name == 'profile-my-pay' }"
              ><span v-html="piecePay"></span> Bo’lib to’lash</nuxt-link
            >
            <nuxt-link
              to="/profile/my-orders"
              :class="{ 'profile-menu-active': $route.name == 'profile-my-orders' }"
              ><span v-html="myOrders"></span>Mening buyurtmaalrim</nuxt-link
            >
            <nuxt-link
              to="/profile/my-comments"
              :class="{ 'profile-menu-active': $route.name == 'profile-my-comments' }"
              ><span v-html="myComments"></span>Mening izohlarim</nuxt-link
            >
            <div class="profile-exit"><span v-html="logout"></span>Chiqish</div>
          </div>
        </div>
        <div>
          <div class="my-comments-grid" v-if="empty">
            <ProfileCommentCard />
            <ProfileCommentCard />
            <ProfileCommentCard />
            <ProfileCommentCard />
            <ProfileCommentCard />
          </div>
          <div class="comments-empty" v-else>
            <img src="../../assets/images/comments-empty.png" alt="" />
            <h4>
              Mahsulotlarga baho qo’ysangiz <br />
              shu yerda paydo boladi
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MyOrdersCard from "../../components/cards/MyOrdersCard.vue";
import ProfileCommentCard from "../../components/cards/ProfileCommentCard.vue";

export default {
  middleware: "auth",

  data() {
    return {
      empty: true,
      profileInfo: require("../../assets/svg/profile-info.svg?raw"),
      myOrders: require("../../assets/svg/my-orders.svg?raw"),
      myComments: require("../../assets/svg/my-comments.svg?raw"),
      piecePay: require("../../assets/svg/piece-pay.svg?raw"),
      edit: require("../../assets/svg/Edit.svg?raw"),
      logout: require("../../assets/svg/Logout.svg?raw"),
      arrow: require("../../assets/svg/dropdown-icon.svg?raw"),
    };
  },
  mounted() {},
  components: { MyOrdersCard, ProfileCommentCard },
};
</script>
<style lang="css">
@import "../../assets/css/pages/profile-page.css";
.my-comments-grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 31px;
}
.comments-empty {
  width: 100%;
  height: calc(100vh - 400px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.comments-empty h4 {
  font-family: var(--SF_500);
  font-style: normal;
  font-weight: 510;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  color: #000000;
  margin-bottom: 32px;
  margin-top: 32px;
}
</style>
