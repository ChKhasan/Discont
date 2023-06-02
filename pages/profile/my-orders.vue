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
            <div class="profile-exit" @click="$store.commit('logout')">
              <span v-html="logout"></span>Chiqish
            </div>
          </div>
        </div>
        <div>
          <div class="my-orders-grid" v-if="empty">
            <div class="order-card-grid">
              <MyOrdersCard v-for="order in orders" :key="order.id" :order="order" />
            </div>
            <!-- <div>
              <div class="orders-price-card">
                <div class="orders-price-card-top">
                  <div class="orders-price-card-header">
                    <h5>Jami qiymat:</h5>
                    <h5>1 450 800 so’m</h5>
                  </div>
                  <div class="orders-price-card-body">
                    <div>
                      <span>#986250233</span>
                      <p>-15% (75 000 so’m)</p>
                    </div>
                    <div>
                      <span>#986250233</span>
                      <p>-15% (75 000 so’m)</p>
                    </div>
                    <div>
                      <span>#986250233</span>
                      <p>-15% (75 000 so’m)</p>
                    </div>
                  </div>
                </div>
                <div class="orders-price-card-footer">
                  <div class="orders-ticket-btn">Chekni yuklab olish</div>
                </div>
              </div>
            </div> -->
          </div>
          <div class="orders-empty" v-else>
            <img src="../../assets/images/orders-empty.png" alt="" />
            <h4>Sizda hali buyurtmalar mavjud emas</h4>
            <p>
              xaridlar qilishni davom ettiring bu yerda <br />
              paydo boladi
            </p>
            <nuxt-link to="/">Xaridni qilish</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MyOrdersCard from "../../components/cards/MyOrdersCard.vue";
import moment from "moment";
export default {
  middleware: "auth",

  data() {
    return {
      empty: true,
      orders: [],
      profileInfo: require("../../assets/svg/profile-info.svg?raw"),
      myOrders: require("../../assets/svg/my-orders.svg?raw"),
      myComments: require("../../assets/svg/my-comments.svg?raw"),
      piecePay: require("../../assets/svg/piece-pay.svg?raw"),
      edit: require("../../assets/svg/Edit.svg?raw"),
      logout: require("../../assets/svg/Logout.svg?raw"),
      arrow: require("../../assets/svg/dropdown-icon.svg?raw"),
    };
  },
  mounted() {
    this.__GET_PROFILE_INFO();
  },
  methods: {
    moment,
    async __GET_PROFILE_INFO() {
      const profileData = await this.$store.dispatch("fetchAuth/getProfileInfo");
      this.orders = profileData?.user?.orders;
    },
  },
  components: { MyOrdersCard },
};
</script>
<style lang="css">
@import "../../assets/css/pages/profile-page.css";
.my-orders-grid {
  /* display: grid;
  grid-template-columns: 8.2fr 4fr;
  grid-gap: 21px; */
}
.order-card-grid {
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 24px;
}
.orders-price-card {
  border: 1px solid #f1f1f1;
  border-radius: 16px;
  position: sticky;
  top: 180px;
  /* padding: 20px; */
}
.orders-price-card-top {
  padding: 20px 36px 32px 36px;
}
.orders-price-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f1f1f1;
  padding-bottom: 32px;
}
.orders-price-card-header h5 {
  font-family: var(--SF_500);
  font-style: normal;
  font-weight: 510;
  font-size: 18px;
  line-height: 21px;
  color: #09454f;
}
.orders-price-card-body {
  padding-top: 32px;
  display: grid;
  grid-gap: 16px;
}
.orders-price-card-body > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.orders-price-card-body > div span {
  font-family: var(--SF_400);
  font-style: normal;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
}
.orders-price-card-body > div p {
  font-family: var(--SF_300);
  font-style: normal;
  font-weight: 274;
  font-size: 14px;
  line-height: 17px;
  text-align: right;
  color: #000000;
}
.orders-price-card-footer {
  padding: 0 20px 20px 20px;
}
.orders-ticket-btn {
  background: #f5f5f5;
  border-radius: 10px;
  padding-top: 12px;
  padding-bottom: 12px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #09454f;
  cursor: pointer;
}
.orders-empty {
  width: 100%;
  height: calc(100vh - 400px);
  display: flex;
  max-height: 720px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.orders-empty h4 {
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
.orders-empty p {
  font-family: var(--SF_300);
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  letter-spacing: 0.025em;
  color: rgba(0, 0, 0, 0.75);
  margin-bottom: 32px;
}
.orders-empty a {
  background: #00b2a9;
  border-radius: 58px;
  padding: 12px 24px;
  font-family: var(--SF_600);
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  letter-spacing: 0.025em;
  color: #ffffff;
}
</style>
