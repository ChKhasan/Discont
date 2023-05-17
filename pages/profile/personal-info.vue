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
                      Ф.И.О:<span>Muhammadrizoyev Muhammadloiq Muhammadsodiq o’gli</span>
                    </p>
                    <p>E-mail:<span>info@discont.uz</span></p>
                    <p>Пароль:<span>12****AA</span></p>
                  </div>
                </div>
                <div>
                  <div>
                    <p>Телефон:<span>+998(93) 567 93 83</span></p>
                    <p>
                      Адресс:<span>г.Ташкент, р.Шайхантахур,ул.Караташ 11, 100088</span>
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

                <span class="personal-info-save-btn" @click="profileEdit = false"
                  ><span v-html="save"></span> Saqlash</span
                >
              </div>
              <div class="personal-info-card-body2">
                <h4 class="form-title">Shaxsiy</h4>
                <div class="form-grid-3">
                  <a-form-model-item class="form-item mb-0" label="Ism">
                    <a-input v-model="form.name" placeholder="Name" />
                  </a-form-model-item>
                  <a-form-model-item class="form-item mb-0" label="Telefon raqam">
                    <a-input v-model="form.name" placeholder="Number" />
                  </a-form-model-item>
                  <a-form-model-item class="form-item mb-0" label="Email">
                    <a-input v-model="form.name" placeholder="Email" />
                  </a-form-model-item>
                </div>
                <h4 class="form-title">Manzil</h4>
                <div class="form-grid-3">
                  <a-form-model-item class="form-item mb-0" label="Viloyat yoki shahar">
                    <a-input v-model="form.name" placeholder="City" />
                  </a-form-model-item>
                  <a-form-model-item class="form-item mb-0" label="Tuman">
                    <a-input v-model="form.name" placeholder="Adress" />
                  </a-form-model-item>
                  <a-form-model-item
                    class="form-item mb-0"
                    label="Ko’cha va uy raqamingiz"
                  >
                    <a-input v-model="form.name" placeholder="Adress" />
                  </a-form-model-item>
                </div>
                <h4 class="form-title">Password</h4>
                <div class="form-grid-3">
                  <a-form-model-item class="form-item mb-0" label="Hozirgi parolingiz">
                    <a-input-password v-model="form.name" placeholder="Last password" />
                  </a-form-model-item>
                  <a-form-model-item class="form-item mb-0" label="Yangi parol">
                    <a-input-password v-model="form.name" placeholder="New password" />
                  </a-form-model-item>
                  <a-form-model-item
                    class="form-item mb-0"
                    label="Yangi parolni takrorlang"
                  >
                    <a-input-password v-model="form.name" placeholder="New password" />
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
};
</script>
<style lang="css">
@import "../../assets/css/pages/profile-page.css";
</style>
