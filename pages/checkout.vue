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
              <a-form-model-item class="mb-3">
                <a-input placeholder="Telefon raqamingiz*" v-model="form.name" />
              </a-form-model-item>
              <div class="checkout-input-grid">
                <a-form-model-item class="mb-0">
                  <a-input placeholder="Telefon raqamingiz*" v-model="form.name" />
                </a-form-model-item>
                <a-form-model-item class="mb-0">
                  <a-input placeholder="Telefon raqamingiz*" v-model="form.name" />
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
                  <div class="pay-card" @click="paymentElement = 'apelsin'">
                    <span v-if="paymentElement == 'apelsin'" class="step-active"
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
                  <div class="pay-card" @click="paymentElement = 'uzcard'">
                    <span v-if="paymentElement == 'uzcard'" class="step-active"
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
                  <div class="pay-card" @click="paymentElement = 'click'">
                    <span v-if="paymentElement == 'click'" class="step-active"
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
                  <div class="pay-card" @click="paymentElement = 'payme'">
                    <span v-if="paymentElement == 'payme'" class="step-active"
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
                  <div class="pay-card" @click="paymentElement = 'humocard'">
                    <span v-if="paymentElement == 'humocard'" class="step-active"
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
                :class="{ 'active-radio': deliveryService }"
                @click="deliveryService = true"
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
                :class="{ 'active-radio': !deliveryService }"
                @click="deliveryService = false"
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
            <div class="add-adress-btn"  @click="visible = true">
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
              <nuxt-link to="/">Sotib olishda muammoga duch keldizmi?</nuxt-link>
            </div>
            <div class="checkout-btn">
              Xaridni rasmiylashtirish
            </div>
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
                <p>5 230 000 so’m</p></span
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
                v-for="product in $store.state.cart"
                :key="product.id"
              >
                <div class="checkout-info-product-card-img">
                  <img :src="product.images[0].sm_img" alt="" />
                </div>
                <div class="checkout-info-product-card-body">
                  <p>{{ product?.info?.name?.ru }}</p>
                  <span>Soni: {{ product.count }} dona</span>
                  <h5>
                    {{
                      `${product.price * product.count}`.replace(
                        /\B(?=(\d{3})+(?!\d))/g,
                        " "
                      )
                    }}
                    сўм
                  </h5>
                </div>
              </div>
              <!-- <div class="checkout-info-product-card">
                <div class="checkout-info-product-card-img">
                  <img src="../assets/images/BASKET.png" alt="" />
                </div>
                <div class="checkout-info-product-card-body">
                  <p>Смартфон Samsung Galaxy A04e 3/64Gb Тўқ сариқ A04e 3/64Gb</p>
                  <span>Soni: 1 dona</span>
                  <h5>1 788 000 сўм</h5>
                </div>
              </div>
              <div class="checkout-info-product-card">
                <div class="checkout-info-product-card-img">
                  <img src="../assets/images/BASKET.png" alt="" />
                </div>
                <div class="checkout-info-product-card-body">
                  <p>Смартфон Samsung Galaxy A04e 3/64Gb Тўқ сариқ A04e 3/64Gb</p>
                  <span>Soni: 1 dona</span>
                  <h5>1 788 000 сўм</h5>
                </div>
              </div> -->
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
  </div>
</template>
<script>
export default {
  layout: "checkoutLayout",
  data() {
    return {
      form: {
        name: "",
      },
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
      rules: {
        name: [
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
  },
  methods: {
    handleOk() {
      this.visible = false;
    },
    onChange(e) {
      console.log(`checked = ${e.target.checked}`);
    },
  },
};
</script>
<style lang="css">
.checkout-page {
  padding-top: 75px;
}
.checkout-container {
  display: grid;
  grid-template-columns: 8fr 5.2fr;
  grid-gap: 24px;
  padding-bottom: 120px;
}
.checkout-step-title {
  font-family: var(--SB_600);
  font-style: normal;
  font-size: 18px;
  line-height: 23px;
  color: #000000;
  display: flex;
  margin-bottom: 34px;
}
.checkout-step-title span {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  border: 1.27273px solid #1f8a70;
  font-family: var(--SB_400);
  font-style: normal;
  font-size: 16px;
  line-height: 20px;
  color: #1f8a70;
  margin-right: 20px;
}
.checkout-form {
  margin-bottom: 63px;
}

.checkout-form input {
  font-family: var(--SB_400);
  font-style: normal;
  font-size: 14px;
  line-height: 18px;
  color: #808080;
  padding: 18px 22px;
  border: 1px solid #f1f1f1;
  border-radius: 12px;
  background-color: #fff;
  height: 56px;
}
.checkout-input-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
}
.radio-card-grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  margin-bottom: 63px;
}
.radio-card-grid-horizontal {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
  margin-bottom: 60px;
}
.radio-card {
  padding: 18px 24px;
  background: #ffffff;
  border: 1px solid #f1f1f1;
  border-radius: 12px;
  display: flex;
  align-items: center;
}
.radio-card > span {
  display: flex;
  width: 28px;
  height: 28px;
  min-width: 28px;
  max-height: 28px;
  border: 1px solid #1f8a70;
  border-radius: 50%;
  position: relative;
  align-items: center;
  justify-content: center;
  margin-right: 70px;
  cursor: pointer;
}
.radio-card-horizontal span {
  margin-right: 24px;
}
.active-radio::after {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  background: #1f8a70;
  border-radius: 50%;
}
/* .radio-card > span::after {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  background: #1f8a70;
  border-radius: 50%;
} */
.radio-card-body h6 {
  font-family: var(--SB_500);
  font-style: normal;
  font-size: 14px;
  line-height: 18px;
  color: #000000;
}
.radio-card-body p {
  font-family: var(--SB_400);
  font-style: normal;
  font-size: 14px;
  line-height: 21px;
  color: rgba(0, 0, 0, 0.7);
  margin-top: 14px;
}

.pay-cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 150px);
  grid-gap: 10px;
  margin-top: 14px;
  width: 80%;
}
.pay-card {
  height: 52px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  background: #ffffff;
  border: 1px solid #f1f1f1;
  border-radius: 10px;
  justify-content: space-between;
  cursor: pointer;
}
.pay-card > span {
  background: #ffffff;
  border: 1px solid #f1f1f1;
  width: 21px;
  height: 21px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pay-card img {
  width: 82px;
  object-fit: contain;
}
.adress-space h6 {
  font-family: var(--SB_400);
  font-style: normal;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  margin-bottom: 32px;
}
.add-adress-btn span {
  display: flex;
  width: 37px;
  height: 37px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background: #1f8a70;
  margin-right: 24px;
}
.add-adress-btn {
  margin-top: 20px;
  cursor: pointer;
  background: #fbfbfb;
  border-radius: 12px;
  padding-top: 18px;
  padding-bottom: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--SB_600);
  font-style: normal;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #1f8a70;
}
.bottom-text {
  display: flex;
  flex-direction: column;
  margin-top: 60px;
}
.bottom-text > span {
  display: flex;
}
.bottom-text > span p {
  margin-left: 13px;
}
.bottom-text a {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #1f8a70;
  text-decoration: underline;
  margin-top: 18px;
}
.bottom-text p {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
}
.bottom-text p span {
  color: #1f8a70;
  text-decoration: underline;
  cursor: pointer;
}
.checkout-btn {
  background: #1f8a70;
  border-radius: 12px;
  padding-top: 15px;
  padding-bottom: 15px;
  font-family: var(--SB_600);
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  color: #ffffff;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  cursor: pointer;
}
.checkout-info {
  padding: 28px;
  border: 1px solid #f1f1f1;
  border-radius: 16px;
}
.checkout-info-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 14px;
  margin-bottom: 14px;
  border-bottom: 1px solid #f1f1f1;
}
.checkout-info-header h4 {
  font-family: var(--SB_600);
  font-style: normal;
  font-size: 20px;
  line-height: 150%;
  color: #000000;
}
.checkout-info-header h5 {
  font-family: var(--SB_500);
  font-style: normal;
  font-size: 18px;
  line-height: 20px;
  text-align: right;
  color: #1f8a70;
}
.checkout-info-body span {
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
}
.checkout-info-body span:last-child {
  margin-bottom: 28px;
}
.checkout-info-body {
  border-bottom: 1px solid #f1f1f1;
}
.checkout-info-body span p {
  font-family: var(--SB_500);
  font-style: normal;
  font-size: 18px;
  line-height: 150%;
  color: #000000;
}
.checkout-info-product-card .checkout-info-product-card-img {
  width: 118px;
  height: 118px;
  padding: 12px 0;
  background: rgba(217, 217, 217, 0.2);
  border-radius: 7.46835px;
}
.checkout-info-product-card-img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.checkout-info-product-card {
  display: flex;
}
.checkout-info-product-card-body p {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #000000;
}
.checkout-info-product-card-body span {
  font-family: var(--SB_400);
  font-style: normal;
  font-size: 12px;
  line-height: 150%;
  color: #a2a2a2;
}
.checkout-info-product-card-body {
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 24px;
}
.checkout-info-product-card-body h5 {
  font-family: var(--SB_700);
  font-style: normal;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
}
.checkout-info-products {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 28px;
  margin-top: 28px;
}

.vmodal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.vmodal-header h5 {
  font-family: var(--SB_600);
  font-style: normal;
  font-size: 24px;
  line-height: 30px;
  color: #000000;
}
.ant-modal-footer {
  display: none !important;
}
.select-placeholder
  .ant-select-selection--single
  .ant-select-selection__rendered
  .ant-select-selection__placeholder {
  display: block !important;
}
.checkout-select .ant-select-selection--single {
  height: 48px;
  background: #f8f8f8;
  border-radius: 12px;
  display: flex;
  align-items: center;
  border: none;
}
.checkout-select .ant-select-selection__rendered {
  width: 100%;
}
.modal-select-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 18px;
}
.vmodal-body {
  margin-top: 32px;
}
.checkout-textarea {
  background: #f8f8f8 !important;
  border-radius: 12px !important;
  border: none !important;
}
.checkout-textarea:focus {
  box-shadow: none !important;
}
.ant-select-focused .ant-select-selection,
.ant-select-selection:focus,
.ant-select-selection:active {
  box-shadow: none !important;
}
.checkout-select {
  margin-bottom: 18px;
}
.checkout-select .ant-select-arrow-icon {
  color: #1f8a70 !important;
}
.ant-select-dropdown--single {
  background: #ffffff !important;
  border: 1px solid #eaeaea !important;
  box-shadow: 0px 12px 53px -6px rgba(9, 69, 79, 0.08) !important;
  border-radius: 8px !important;
}
.ant-select-dropdown-menu-item {
  border-bottom: 1px solid #eaeaea;
  background-color: #fff !important;
  font-family: var(--SB_400) !important;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  padding: 16px 22px !important;
}
.ant-select-dropdown-menu-item:last-child {
  border-bottom: none;
}
.ant-select-dropdown-menu-item:hover:not(.ant-select-dropdown-menu-item-disabled) {
  background-color: #fff !important;
  font-family: var(--SB_400) !important;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #1f8a70 !important;
}
.ant-select-dropdown-menu::-webkit-scrollbar {
  width: 5px;
}
.ant-select-dropdown-menu::-webkit-scrollbar-track {
  border-radius: 10px;
}
.ant-select-dropdown-menu::-webkit-scrollbar-thumb {
  background: #1f8a70;
  border-radius: 10px;
}
.ant-select-dropdown-menu::-webkit-scrollbar-thumb:hover {
  background: #1f8a70;
}
.vmodal-btn {
  background: #1f8a70;
  border-radius: 12px;
  font-family: var(--SB_600);
  font-style: normal;
  font-size: 18px;
  line-height: 23px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  margin-top: 18px;
  height: 48px;
  align-items: center;
  cursor: pointer;
}
.step-active {
  background: #1f8a70 !important;
}
</style>
