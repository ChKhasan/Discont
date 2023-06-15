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
              ><span v-html="myOrders"></span>Mening buyurtmalarim</nuxt-link
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
          <div class="personal-info-grid" v-if="!profileEdit">
            <div class="personal-info-card">
              <div class="personal-info-card-header">
                <h3>Shaxsiy ma’lumotlarim</h3>

                <span class="personal-info-edit-btn" @click="profileEdit = true"
                  ><span v-html="edit"></span> O’zgartirish
                </span>
              </div>
              <div class="personal-info-card-body">
                <div>
                  <div>
                    <p>
                      Ф.И.О:<span>{{ profile?.name ? profile?.name : "-----" }}</span>
                    </p>
                    <p>
                      E-mail:<span>{{ profile?.email ? profile?.email : "-----" }}</span>
                    </p>
                    <p>Пароль:<span>12****AA</span></p>
                  </div>
                </div>
                <div>
                  <div>
                    <p>
                      Телефон:<span>{{
                        profile?.login ? `${profile?.login}` : "-----"
                      }}</span>
                    </p>
                    <p>
                      Адресс:<span>{{
                        profile?.address ? profile?.address : "-----"
                      }}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="personal-info-card">
              <div class="personal-info-card-header2">
                <h3>Уведомления или новости</h3>

                <span class="personal-info-edit-btn"> </span>
              </div>
              <div class="personal-info-card-body2">
                <p>Получайте информацию об акциях и скидках</p>

                <span>
                  <a-switch default-checked @change="onChange" /><span class="sms-title"
                    >через СМС</span
                  ></span
                >
              </div>
            </div>
          </div>
          <a-form-model ref="ruleForm" :model="form" :rules="rules" v-if="profileEdit">
            <div class="personal-info-card">
              <div
                class="personal-info-card-header2 d-flex align-items-center justify-content-between"
              >
                <h3>Ma’lumotlarni ozgartirish</h3>

                <span class="personal-info-save-btn" @click="submitForm()"
                  ><span v-html="save"></span> Saqlash</span
                >
              </div>
              <div class="personal-info-card-body2">
                <h4 class="form-title">Shaxsiy</h4>
                <div class="form-grid-3">
                  <a-form-model-item class="form-item mb-0" label="Ism" prop="name">
                    <a-input v-model="form.name" placeholder="Name" />
                  </a-form-model-item>
                  <a-form-model-item class="form-item mb-0" label="Telefon raqam">
                    <a-input v-model="form.phone_number" placeholder="Number" />
                  </a-form-model-item>
                  <a-form-model-item class="form-item mb-0" label="Email">
                    <a-input v-model="form.name" placeholder="Email" />
                  </a-form-model-item>
                </div>
                <h4 class="form-title">Manzil</h4>
                <div class="form-grid-3">
                  <a-form-model-item class="form-item mb-0" label="Viloyat yoki shahar">
                    <a-select
                      class="checkout-select"
                      v-model="form.region"
                      placeholder="Viloyatni tanlang"
                    >
                      <a-select-option
                        v-for="(region, index) in regions"
                        :key="region?.id"
                      >
                        {{ region?.name?.ru }}
                      </a-select-option>
                    </a-select>
                  </a-form-model-item>
                  <a-form-model-item class="form-item mb-0" label="Tuman"  :class="{ 'select-placeholder': form.region == '' }">
                    <a-select
                      class="checkout-select"
                      v-model="form.region"
                      placeholder="Tuman"
                    >
                      <a-select-option
                        v-for="(region, index) in regions"
                        :key="region?.id"
                      >
                        {{ region?.name?.ru }}
                      </a-select-option>
                    </a-select>
                  </a-form-model-item>
                  <a-form-model-item
                    class="form-item mb-0"
                    label="Ko’cha va uy raqamingiz"
                  >
                    <a-input v-model="form.address" placeholder="Adress" />
                  </a-form-model-item>
                </div>
                <h4 class="form-title">Password</h4>
                <div class="form-grid-3">
                  <a-form-model-item class="form-item mb-0" label="Hozirgi parolingiz">
                    <a-input-password v-model="form.name" placeholder="Last password" />
                  </a-form-model-item>
                  <a-form-model-item
                    class="form-item mb-0"
                    label="Yangi parol"
                    prop="password"
                  >
                    <a-input-password
                      v-model="form.password"
                      placeholder="New password"
                    />
                  </a-form-model-item>
                  <a-form-model-item
                    class="form-item mb-0"
                    label="Yangi parolni takrorlang"
                    prop="password_confirmation"
                  >
                    <a-input-password
                      v-model="form.password_confirmation"
                      placeholder="New password"
                    />
                  </a-form-model-item>
                </div>
              </div>
            </div>
          </a-form-model>
          <div class="personal-info-banner" v-if="!profileEdit">
            <h4>Sizning Diskoinlaringiz soni</h4>
            <p>
              dustry. Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambleddustry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <nuxt-link to="/">Moree about Dicoins</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  middleware: "auth",
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
        password: "",
        password_confirmation: "",
        phone_number: "",
        address: "",
        postcode: "",
        region: ''
      },
      regions: [],
      rules: {
        name: [
          { required: true, message: "Please input Activity name", trigger: "blur" },
        ],
        password: [
          { required: true, message: "Please input Activity name", trigger: "blur" },
        ],
        password_confirmation: [
          { required: true, message: "Please input Activity name", trigger: "blur" },
        ],
      },
      profile: {},
    };
  },
  computed: {
    checkAuth() {
      return this.$store.state.auth;
    },
  },

  async mounted() {
    this.__GET_PROFILE_INFO();
    this.__GET_REGIONS();
  },
  methods: {
    async __GET_PROFILE_INFO() {
      const profileData = await this.$store.dispatch("fetchAuth/getProfileInfo");
      this.profile = profileData?.user;
      this.form = {
        ...this.form,
        name: this.profile.name ? this.profile.name : "",
        // address: this.profile.address ? this.profile.address : "",
        postcode: this.profile.postcode ? this.profile.postcode : "",
        name: this.profile.name ? this.profile.name : "",
      };
    },
    async __GET_REGIONS() {
      const data = await this.$store.dispatch("fetchRegions/getRegions");
      this.regions = data?.regions;
      console.log(data);
    },
    async __PROFILE_INFO(dataForm) {
      try {
        const data = await this.$store.dispatch("fetchAuth/putProfileInfo", dataForm);
        this.profileEdit = false;
      } catch (e) {
        console.log(e);
      }
    },
    submitForm() {
      console.log(this.form);
      this.$refs["ruleForm"].validate((valid) => {
        if (valid) {
          this.__PROFILE_INFO(this.form);
        } else {
          return false;
        }
      });
    },
    onChange(checked) {
      console.log(`a-switch to ${checked}`);
    },
  },
  watch: {
    checkAuth(val) {
      if (!val) {
        this.$router.push("/");
      }
    },
  },
};
</script>
<style lang="css">
@import "../../assets/css/pages/profile-page.css";
.ant-form-explain {
  display: none;
}
</style>
