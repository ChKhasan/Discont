<template lang="html">
  <div class="personal-info">
    <div class="container_xl">
      <div class="page-breadcrumb">
        <nuxt-link to="/">Diskont main page</nuxt-link>
        <nuxt-link to="/">
          Profile
          <span v-html="arrow"></span>
        </nuxt-link>
      </div>
      <div><MainTitle title="Каталог Apple" /></div>
      <div class="profile-page-grid">
        <div>
          <ProfileMenu />

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
import ProfileMenu from "../../components/profile-menu.vue";

export default {
  middleware: "auth",

  data() {
    return {
      empty: true,
      edit: require("../../assets/svg/Edit.svg?raw"),
      arrow: require("../../assets/svg/dropdown-icon.svg?raw"),
    };
  },
  computed: {
    checkAuth() {
      return this.$store.state.auth;
    },
  },
  mounted() {},
  watch: {
    checkAuth(val) {
      if (!val) {
        this.$router.push("/");
      }
    },
  },
  components: { MyOrdersCard, ProfileCommentCard, ProfileMenu },
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
