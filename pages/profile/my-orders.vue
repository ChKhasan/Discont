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
          <div class="my-orders-grid">
            <div>
              <MyOrdersCard />
              <MyOrdersCard />
              <MyOrdersCard />
              <MyOrdersCard />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MyOrdersCard from "../../components/cards/MyOrdersCard.vue";

export default {
  data() {
    return {
      profileEdit: false,
      profileInfo: require("../../assets/svg/profile-info.svg?raw"),
      myOrders: require("../../assets/svg/my-orders.svg?raw"),
      myComments: require("../../assets/svg/my-comments.svg?raw"),
      piecePay: require("../../assets/svg/piece-pay.svg?raw"),
      edit: require("../../assets/svg/Edit.svg?raw"),
      logout: require("../../assets/svg/Logout.svg?raw"),
      arrow: require("../../assets/svg/dropdown-icon.svg?raw"),
      save: require("../../assets/svg/Stroke 3.svg?raw"),
      form: {
        name: "",
        region: undefined,
        date1: undefined,
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      rules: {
        name: [
          { required: true, message: "Please input Activity name", trigger: "blur" },
          { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
        ],
        region: [
          { required: true, message: "Please select Activity zone", trigger: "change" },
        ],
        date1: [{ required: true, message: "Please pick a date", trigger: "change" }],
        type: [
          {
            type: "array",
            required: true,
            message: "Please select at least one activity type",
            trigger: "change",
          },
        ],
        resource: [
          {
            required: true,
            message: "Please select activity resource",
            trigger: "change",
          },
        ],
        desc: [
          { required: true, message: "Please input activity form", trigger: "blur" },
        ],
      },
    };
  },
  mounted() {
    console.log(this.$route);
  },
  methods: {
    onChange(checked) {
      console.log(`a-switch to ${checked}`);
    },
  },
  components: { MyOrdersCard },
};
</script>
<style lang="css">
@import "../../assets/css/pages/profile-page.css";
.my-orders-grid {
  display: grid;
  grid-template-columns: 8.2fr 4fr;
}
</style>
