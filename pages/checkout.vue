<template lang="html">
  <div class="checkout-page">
    <div class="container_xl">
      <div class="checkout-container">
        <div class="check-form-block">
          <div class="checkout-step-title">
            <span v-if="true">1</span>
            <span v-else class="step-active"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="9"
                viewBox="0 0 13 9"
                fill="none"
              >
                <path
                  d="M12.8148 0.767054L12.2128 0.181052C11.9648 -0.0603507 11.56 -0.0603507 11.3098 0.181052L4.99759 6.3279L1.69096 3.10901C1.44297 2.86758 1.03811 2.86758 0.787992 3.10901L0.185988 3.69502C-0.0619959 3.93645 -0.0619959 4.33054 0.185988 4.57402L4.54399 8.81635C4.66906 8.9381 4.83012 9 4.99335 9C5.15657 9 5.31977 8.9381 5.44274 8.81635L12.8084 1.64609C13.0628 1.40056 13.0628 1.00851 12.8148 0.767054Z"
                  fill="white"
                /></svg
            ></span>
            <h4>Ma`lumotlaringizni kiriting</h4>
          </div>
          <a-form-model :model="form" ref="ruleForm" :rules="rules" layout="vertical">
            <div class="checkout-form">
              <a-form-model-item class="mb-3" prop="phone_number">
                <a-input placeholder="Telefon raqamingiz*" v-model="form.phone_number" />
              </a-form-model-item>
              <div class="checkout-input-grid">
                <a-form-model-item class="mb-0" prop="name">
                  <a-input placeholder="Ismingiz (to’liq)*" v-model="form.name" />
                </a-form-model-item>
                <a-form-model-item class="mb-0" prop="last_name">
                  <a-input
                    placeholder="Familiyangiz (to’liq)*"
                    v-model="form.last_name"
                  />
                </a-form-model-item>
              </div>
            </div>
          </a-form-model>
          <div class="checkout-step-title">
            <span>2</span>
            <h4>Ma`lumotlaringizni kiriting</h4>
          </div>
          <div class="radio-card-grid">
            <div class="radio-card">
              <span :class="{ 'active-radio': typePayment }" @click="typePayment = true">
              </span>
              <div class="radio-card-body">
                <h6>Naqd pul bilan to’lash</h6>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever since the
                  1500s, when an unknown Lorem Ipsum has been the industry's standard
                </p>
              </div>
            </div>
            <div class="radio-card">
              <span
                :class="{ 'active-radio': !typePayment }"
                @click="typePayment = false"
              >
              </span>
              <div class="radio-card-body">
                <h6>Bank kartasi orqali to’lash</h6>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever since the
                  1500s, when an unknown Lorem Ipsum has been the industry's standard
                </p>
                <div class="pay-cards-grid" v-if="!typePayment">
                  <div class="pay-card" @click="form.payment_method = 'uzum'">
                    <span v-if="form.payment_method == 'uzum'" class="step-active"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="9"
                        viewBox="0 0 13 9"
                        fill="none"
                      >
                        <path
                          d="M12.8148 0.767054L12.2128 0.181052C11.9648 -0.0603507 11.56 -0.0603507 11.3098 0.181052L4.99759 6.3279L1.69096 3.10901C1.44297 2.86758 1.03811 2.86758 0.787992 3.10901L0.185988 3.69502C-0.0619959 3.93645 -0.0619959 4.33054 0.185988 4.57402L4.54399 8.81635C4.66906 8.9381 4.83012 9 4.99335 9C5.15657 9 5.31977 8.9381 5.44274 8.81635L12.8084 1.64609C13.0628 1.40056 13.0628 1.00851 12.8148 0.767054Z"
                          fill="white"
                        /></svg
                    ></span>
                    <span v-else></span>
                    <img src="../assets/images/apelsin.uz.png" alt="" />
                  </div>
                  <div class="pay-card" @click="form.payment_method = 'cash'">
                    <span v-if="form.payment_method == 'cash'" class="step-active"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="9"
                        viewBox="0 0 13 9"
                        fill="none"
                      >
                        <path
                          d="M12.8148 0.767054L12.2128 0.181052C11.9648 -0.0603507 11.56 -0.0603507 11.3098 0.181052L4.99759 6.3279L1.69096 3.10901C1.44297 2.86758 1.03811 2.86758 0.787992 3.10901L0.185988 3.69502C-0.0619959 3.93645 -0.0619959 4.33054 0.185988 4.57402L4.54399 8.81635C4.66906 8.9381 4.83012 9 4.99335 9C5.15657 9 5.31977 8.9381 5.44274 8.81635L12.8084 1.64609C13.0628 1.40056 13.0628 1.00851 12.8148 0.767054Z"
                          fill="white"
                        /></svg
                    ></span>
                    <span v-else></span>
                    <img src="../assets/images/uzcard.uz.png" alt="" />
                  </div>
                  <div class="pay-card" @click="form.payment_method = 'click'">
                    <span v-if="form.payment_method == 'click'" class="step-active"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="9"
                        viewBox="0 0 13 9"
                        fill="none"
                      >
                        <path
                          d="M12.8148 0.767054L12.2128 0.181052C11.9648 -0.0603507 11.56 -0.0603507 11.3098 0.181052L4.99759 6.3279L1.69096 3.10901C1.44297 2.86758 1.03811 2.86758 0.787992 3.10901L0.185988 3.69502C-0.0619959 3.93645 -0.0619959 4.33054 0.185988 4.57402L4.54399 8.81635C4.66906 8.9381 4.83012 9 4.99335 9C5.15657 9 5.31977 8.9381 5.44274 8.81635L12.8084 1.64609C13.0628 1.40056 13.0628 1.00851 12.8148 0.767054Z"
                          fill="white"
                        /></svg
                    ></span>
                    <span v-else></span>
                    <img src="../assets/images/click.uz.png" alt="" />
                  </div>
                  <div class="pay-card" @click="form.payment_method = 'payme'">
                    <span v-if="form.payment_method == 'payme'" class="step-active"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="9"
                        viewBox="0 0 13 9"
                        fill="none"
                      >
                        <path
                          d="M12.8148 0.767054L12.2128 0.181052C11.9648 -0.0603507 11.56 -0.0603507 11.3098 0.181052L4.99759 6.3279L1.69096 3.10901C1.44297 2.86758 1.03811 2.86758 0.787992 3.10901L0.185988 3.69502C-0.0619959 3.93645 -0.0619959 4.33054 0.185988 4.57402L4.54399 8.81635C4.66906 8.9381 4.83012 9 4.99335 9C5.15657 9 5.31977 8.9381 5.44274 8.81635L12.8084 1.64609C13.0628 1.40056 13.0628 1.00851 12.8148 0.767054Z"
                          fill="white"
                        /></svg
                    ></span>
                    <span v-else></span>
                    <img src="../assets/images/payme.uz.png" alt="" />
                  </div>
                  <div class="pay-card" @click="form.payment_method = 'payze'">
                    <span v-if="form.payment_method == 'payze'" class="step-active"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="9"
                        viewBox="0 0 13 9"
                        fill="none"
                      >
                        <path
                          d="M12.8148 0.767054L12.2128 0.181052C11.9648 -0.0603507 11.56 -0.0603507 11.3098 0.181052L4.99759 6.3279L1.69096 3.10901C1.44297 2.86758 1.03811 2.86758 0.787992 3.10901L0.185988 3.69502C-0.0619959 3.93645 -0.0619959 4.33054 0.185988 4.57402L4.54399 8.81635C4.66906 8.9381 4.83012 9 4.99335 9C5.15657 9 5.31977 8.9381 5.44274 8.81635L12.8084 1.64609C13.0628 1.40056 13.0628 1.00851 12.8148 0.767054Z"
                          fill="white"
                        /></svg
                    ></span>
                    <span v-else></span>
                    <img src="../assets/images/humocard.uz.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="checkout-step-title">
            <span>3</span>
            <h4>Yetkazib berish usulini tanlang</h4>
          </div>
          <div class="radio-card-grid-horizontal">
            <div class="radio-card radio-card-horizontal">
              <span
                :class="{ 'active-radio': form.delivery_method == 'pickup' }"
                @click="form.delivery_method = 'pickup'"
              >
              </span>
              <div class="radio-card-body">
                <h6>Diskont do’konlaridan borib olib ketish</h6>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever since the
                </p>
              </div>
            </div>
            <div class="radio-card radio-card-horizontal">
              <span
                :class="{ 'active-radio': form.delivery_method == 'courier' }"
                @click="form.delivery_method = 'courier'"
              >
              </span>
              <div class="radio-card-body">
                <h6>Diskont yetkazib berish xizmati</h6>
                <p>Lorem Ipsum has been the industry's stand</p>
              </div>
            </div>
          </div>
          <div class="adress-space">
            <h6>Sizning manzillaringiz ro’yxati</h6>
            <div class="radio-card radio-card-horizontal mb-3">
              <span> </span>
              <div class="radio-card-body">
                <h6>
                  Tashkent, Mirzo Ulug’bek tumani Tamarakhonum ko’chasi 2chi qavat 8A uy
                </h6>
              </div>
            </div>
            <div class="radio-card radio-card-horizontal mb-3">
              <span> </span>
              <div class="radio-card-body">
                <h6>
                  Tashkent, Mirzo Ulug’bek tumani Tamarakhonum ko’chasi 2chi qavat 8A uy
                </h6>
              </div>
            </div>
            <div class="add-adress-btn" @click="visible = true">
              <span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <path
                    d="M5.82927 14.1069V0.892578H9.17017V14.1069H5.82927ZM0.892578 9.17017V5.82927H14.1069V9.17017H0.892578Z"
                    fill="white"
                  /></svg
              ></span>
              Yangi Manzil qo’shish
            </div>
            <div class="bottom-text">
              <span>
                <a-checkbox @change="onChange"> </a-checkbox>
                <p>
                  Barcha ma`lumotlarni tasdiqlayman, <span>foydalanish</span> va
                  <span>sotib olish shartlariga</span>
                  roziman
                </p></span
              >
              <nuxt-link :to="localePath('/')"
                >Sotib olishda muammoga duch keldizmi?</nuxt-link
              >
            </div>
            <div class="checkout-btn" @click="submit()">Xaridni rasmiylashtirish</div>
          </div>
        </div>
        <div class="checkout-info-block">
          <div class="checkout-info">
            <div class="checkout-info-header">
              <h4>Sizning buyurtmangiz</h4>
              <h5>Savatchaga o’tish</h5>
            </div>
            <div class="checkout-info-body">
              <span
                ><p>Tovarlar</p>
                <p>
                  {{
                    products.reduce((summ, item) => {
                      return (
                        summ +
                        item.price *
                          $store.state.cart.find((elem) => elem.id == item.id)?.count
                      );
                    }, 0)
                  }}
                  so’m
                </p></span
              >
              <span
                ><p>Скидка</p>
                <p>5 230 000 so’m</p></span
              >
              <span
                ><p>Yetkazib berish</p>
                <p>30 000 so’m</p></span
              >
            </div>
            <div class="checkout-info-products">
              <div
                class="checkout-info-product-card"
                v-for="product in products"
                :key="product.id"
              >
                <div class="checkout-info-product-card-img">
                  <img :src="product.images[0].sm_img" alt="" />
                </div>
                <div class="checkout-info-product-card-body">
                  <p>{{ product?.info?.name?.ru }}</p>
                  <span
                    >Soni:
                    {{ $store.state.cart.find((item) => item.id == product.id)?.count }}
                    dona</span
                  >
                  <h5>
                    {{
                      `${
                        product.price *
                        $store.state.cart.find((item) => item.id == product.id)?.count
                      }`.replace(/\B(?=(\d{3})+(?!\d))/g, " ")
                    }}
                    сўм
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a-modal
      v-model="visible"
      :body-style="{ padding: '32px', borderRadius: '14px' }"
      centered
      :closable="false"
      width="804px"
      @ok="handleOk"
    >
      <div class="vmodal-header">
        <h5>Yangi manzil qo’shish</h5>
        <span @click="handleOk"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M17.9958 1.98438L2.00391 17.9762"
              stroke="#1F8A70"
              stroke-width="3.28586"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.0003 17.9861L1.99512 1.97754"
              stroke="#1F8A70"
              stroke-width="3.28586"
              stroke-linecap="round"
              stroke-linejoin="round"
            /></svg
        ></span>
      </div>
      <div class="vmodal-body">
        <a-form-model :model="form" ref="ruleFormFaq" :rules="rules" layout="vertical">
          <a-form-model-item
            class="form-item mb-0 pb-0"
            :class="{ 'select-placeholder': form.name == '' }"
          >
            <a-select
              class="checkout-select"
              v-model="form.name"
              placeholder="Viloyatni tanlang"
            >
              <a-select-option
                v-for="(category, index) in categories"
                :key="category.value"
              >
                {{ category.label }}
              </a-select-option>
            </a-select>
          </a-form-model-item>
          <div class="modal-select-grid">
            <a-form-model-item
              class="form-item mb-0 pb-0"
              :class="{ 'select-placeholder': form.name == '' }"
            >
              <a-select
                class="checkout-select"
                v-model="form.name"
                placeholder="Shaharni tanlang"
              >
                <a-select-option
                  v-for="(category, index) in categories"
                  :key="category.value"
                >
                  {{ category.label }}
                </a-select-option>
              </a-select>
            </a-form-model-item>
            <a-form-model-item
              class="form-item mb-0 pb-0"
              :class="{ 'select-placeholder': form.name == '' }"
            >
              <a-select
                class="checkout-select"
                v-model="form.name"
                placeholder="Tumanni tanlang"
              >
                <a-select-option
                  v-for="(category, index) in categories"
                  :key="category.value"
                >
                  {{ category.label }}
                </a-select-option>
              </a-select>
            </a-form-model-item>
          </div>

          <a-form-model-item class="form-item mb-0 pb-0">
            <a-input
              class="checkout-textarea"
              type="textarea"
              rows="5"
              v-model="form.name"
              placeholder="Ko’cha uy va manzil haqida ma’lumot"
            />
          </a-form-model-item>
        </a-form-model>
      </div>
      <div class="vmodal-btn">Manzilni qo’shish</div>
      <template slot="footer"> <h3></h3></template>
    </a-modal>
    <a-modal
      v-model="visibleSuccess"
      :body-style="{ padding: '32px', borderRadius: '14px' }"
      centered
      :closable="false"
      width="671px"
      @ok="handleOk"
    >
      <div class="vmodal-header">
        <h5></h5>
        <span @click="handleOk"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M17.9958 1.98438L2.00391 17.9762"
              stroke="#1F8A70"
              stroke-width="3.28586"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.0003 17.9861L1.99512 1.97754"
              stroke="#1F8A70"
              stroke-width="3.28586"
              stroke-linecap="round"
              stroke-linejoin="round"
            /></svg
        ></span>
      </div>
      <div class="vmodal-body success-vmodal">
        <img src="../assets/images/modal-success.png" alt="" />
        <p>Siz muvaffaqiyatli zakaz berdingiz. Haridlarda davom eting.</p>
      </div>
      <div class="vmodal-btn" @click="$router.push('/')">Haridni davom ettirish</div>
      <template slot="footer"> <h3></h3></template>
    </a-modal>
  </div>
</template>
<script>
export default {
  layout: "checkoutLayout",
  data() {
    return {
      form: {
        name: "",
        delivery_method: "pickup",
        phone_number: "",
        region_id: null,
        district_id: null,
        address: null,
        postcode: null,
        email: null,
        comments: null,
        payment_method: "cash",
        products: [],
        amount: "",
        last_name: "",
      },
      visibleSuccess: false,
      typePayment: true,
      paymentElement: "payme",
      deliveryService: true,
      visible: false,
      categories: [
        {
          label: "Toshkent shahar",
          value: "asfdsadf",
        },
        {
          label: "Toshkent viloyati",
          value: "asfdasdsadf",
        },
        {
          label: "Qashqadaryo",
          value: "asfd24sadf",
        },
        {
          label: "Surxandaryo",
          value: "asf2344dsadf",
        },
        {
          label: "Jizzax",
          value: "asfdsase3adf",
        },
      ],
      products: [],
      rules: {
        name: [
          {
            required: true,
            message: "This field is required",
            trigger: "change",
          },
        ],
        last_name: [
          {
            required: true,
            message: "This field is required",
            trigger: "change",
          },
        ],
        phone_number: [
          {
            required: true,
            message: "This field is required",
            trigger: "change",
          },
        ],
      },
    };
  },
  mounted() {
    this.$store.commit("reloadStore");
    let storeProducts = JSON.parse(localStorage.getItem("cart"));
    this.__GET_PROFILE_INFO();
    if (storeProducts.length > 0) {
      this.skeletonLoad = true;
      this.__GET_PRODUCTS_BY_ID({ products: storeProducts.map((item) => item.id) });
    }
  },
  methods: {
    submit() {
      const data = {
        ...this.form,
        products: this.products.map((item) => {
          return {
            count: this.$store.state.cart.find((elem) => elem.id == item.id)?.count,
            product_id: item.id,
            price: item.price,
          };
        }),
        amount: this.products.reduce((summ, item) => {
          return (
            summ +
            item.price * this.$store.state.cart.find((elem) => elem.id == item.id)?.count
          );
        }, 0),
      };

      this.$refs["ruleForm"].validate((valid) => {
        valid ? this.__POST_ORDER(data) : false;
      });
    },
    async __GET_PROFILE_INFO() {
      const profileData = await this.$store.dispatch("fetchAuth/getProfileInfo");
      this.profile = profileData?.user;
      this.form = {
        ...this.form,
        name: this.profile.name ? this.profile.name : "",
        phone_number: this.profile.login ? this.profile.login : "",
      };
    },
    async __GET_PRODUCTS_BY_ID(dataForm) {
      const data = await this.$store.dispatch("fetchProducts/getProductsById", {
        data: dataForm,
        params: {
          headers: {
            Language: this.$i18n.locale,
          },
        },
      });
      this.products = data?.products;
    },
    async __POST_ORDER(formData) {
      try {
        const data = await this.$store.dispatch("fetchAuth/postOrder", formData);
        this.visibleSuccess = true;
        localStorage.setItem("cart", JSON.stringify([]));
        this.$store.commit("reloadStore");
        this.$router.push("/");
      } catch (e) {
        console.log(e);
      }
    },
    handleOk() {
      this.visible = false;
      this.visibleSuccess = false;
    },
    onChange(e) {
      console.log(`checked = ${e.target.checked}`);
    },
  },
};
</script>
<style lang="css">
@import "../assets/css/pages/checkout.css";
</style>
