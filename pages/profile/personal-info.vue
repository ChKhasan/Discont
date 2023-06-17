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
                    <!-- <a-input v-model="form.phone_number" placeholder="Number" /> -->
                    <the-mask
                      class="w-100 ant-input"
                      v-model="form.phone_number"
                      :mask="['+998 (##) ### ## ##', '+998 (##) ### ## ##']"
                      placeholder="+998 (__) ___ __ __"
                    />
                  </a-form-model-item>
                  <a-form-model-item class="form-item mb-0" label="Email">
                    <a-input v-model="form.email" placeholder="Email" />
                  </a-form-model-item>
                </div>
                <h4 class="form-title">Manzil</h4>
                <div class="form-grid-3">
                  <a-form-model-item
                    class="form-item mb-0"
                    label="Viloyat yoki shahar"
                    :class="{ 'select-placeholder': form.region_id == '' }"
                  >
                    <a-select
                      class="checkout-select"
                      v-model="form.region_id"
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
                  <a-form-model-item
                    class="form-item mb-0"
                    label="Tuman"
                    :class="{ 'select-placeholder': form.district_id == '' }"
                  >
                    <a-select
                      class="checkout-select"
                      v-model="form.district_id"
                      placeholder="Tuman"
                      :disabled="cities.length == 0"
                    >
                      <a-select-option v-for="(city, index) in cities" :key="city?.id">
                        {{ city?.name?.ru }}
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
                    <a-input-password
                      v-model="last_password"
                      placeholder="Last password"
                    />
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
                    :class="{ password_repeat_error: passwordConfirmationError }"
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
import ProfileMenu from "../../components/profile-menu.vue";

export default {
  middleware: "auth",
  data() {
    return {
      profileEdit: false,
      last_password: "",
      edit: require("../../assets/svg/Edit.svg?raw"),
      arrow: require("../../assets/svg/dropdown-icon.svg?raw"),
      save: require("../../assets/svg/Stroke 3.svg?raw"),
      form: {
        name: "",
        password: "",
        password_confirmation: "",
        phone_number: "",
        address: "",
        postcode: "",
        region_id: "",
        district_id: "",
        email: "",
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
      cities: {},
      passwordConfirmationError: false,
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
      try {
        const profileData = await this.$store.dispatch("fetchAuth/getProfileInfo");
        this.profile = profileData?.user;
        this.form = {
          name: this.profile.name ? this.profile.name : "",
          address: this.profile.address ? this.profile.address : "",
          postcode: this.profile.postcode ? this.profile.postcode : "",
          email: this.profile.email ? this.profile.email : "",
          phone_number: this.profile.login ? this.profile.login : "",
          region_id: this.profile.region_id ? this.profile.region_id : "",
          district_id: this.profile.district_id ? this.profile.district_id : "",
        };
      } catch (e) {
        if (e.response.status == 401) this.$store.commit("logout");
      }
    },
    async __GET_REGIONS() {
      const data = await this.$store.dispatch("fetchRegions/getRegions");
      this.regions = data?.regions;
      console.log(data);
    },
    async __EDIT_PROFILE_INFO(dataForm) {
      try {
        const data = await this.$store.dispatch("fetchAuth/putProfileInfo", dataForm);
        this.profileEdit = false;
        this.__GET_PROFILE_INFO();
      } catch (e) {
        console.log(e);
      }
    },
    submitForm() {
      if (this.form.password != this.form.password_confirmation) {
        this.passwordConfirmationError = true;
      } else {
        const data = {
          ...this.form,
          phone_number: `998${this.form.phone_number}`,
        };
        this.$refs["ruleForm"].validate((valid) => {
          if (valid) {
            this.passwordConfirmationError = false;
            console.log(this.form);
            this.__EDIT_PROFILE_INFO(data);
          } else {
            return false;
          }
        });
      }
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
    "form.region_id"(val) {
      this.cities = this.regions.find((item) => item.id == val)?.districts;
      console.log(this.cities);
    },
  },
  components: { ProfileMenu },
};
</script>
<style lang="css">
@import "../../assets/css/pages/profile-page.css";
@import "../../assets/css/pages/checkout.css";
.ant-form-explain {
  display: none;
}
.password_repeat_error input {
  border: 1px solid #ffc0c0 !important;
}
</style>
