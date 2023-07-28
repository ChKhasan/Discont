<template lang="html">
  <div class="checkout-page">
    <div class="container_xl">
      <div class="checkout-container">
        <div class="check-form-block">
          <div class="checkout-step-title">
            <span
              v-if="form.phone_number && form.name && form.last_name"
              class="step-active"
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
            <span v-else>1</span>
            <h4>Ma`lumotlaringizni kiriting</h4>
          </div>
          <a-form-model :model="form" ref="ruleForm" :rules="rules" layout="vertical">
            <div class="checkout-form">
              <a-form-model-item class="mb-3" prop="phone_number">
                <a-input
                  v-mask="'+998 ## ### ## ##'"
                  placeholder="Telefon raqamingiz*"
                  v-model="form.phone_number"
                />
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
            <div v-if="form.delivery_method == 'courier'">
              <h6>Sizning manzillaringiz ro’yxati</h6>
              <div class="radio-card radio-card-horizontal mb-3">
                <span> </span>
                <div class="radio-card-body">
                  <h5>
                    Tashkent, Mirzo Ulug’bek tumani Tamarakhonum ko’chasi 2chi qavat 8A uy
                  </h5>
                </div>
              </div>
              <div class="radio-card radio-card-horizontal mb-3">
                <span> </span>
                <div class="radio-card-body">
                  <h5>
                    Tashkent, Mirzo Ulug’bek tumani Tamarakhonum ko’chasi 2chi qavat 8A uy
                  </h5>
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
            </div>
            <div class="bottom-text">
              <span>
                <a-checkbox @change="onChange"> </a-checkbox>
                <p>
                  Barcha ma`lumotlarni tasdiqlayman, <span>foydalanish</span> va
                  <span @click="visibleConsent = true">sotib olish shartlariga</span>
                  roziman
                </p></span
              >
              <span class="checkout-prob" @click="visibleCheckoutProblem = true"
                >Sotib olishda muammoga duch keldizmi?</span
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
                  <p>{{ product?.info?.name }}</p>
                  <span
                    >Soni:
                    {{ $store.state.cart.find((item) => item.id == product.id)?.count }}
                    dona</span
                  >
                  <h5>
                    {{
                      `${
                        product.real_price *
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
    <!-- <a-modal
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
            :class="{ 'select-placeholder': form.region_id == null }"
          >
            <a-select
              class="checkout-select"
              v-model="form.region_id"
              placeholder="Viloyatni tanlang"
            >
              <a-select-option v-for="(region, index) in regions" :key="region.id">
                {{ region.name }}
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
                <a-select-option v-for="(city, index) in cities" :key="city.id">
                  {{ city.name }}
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
                <a-select-option v-for="(category, index) in regions" :key="category.id">
                  {{ category.name }}
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
    </a-modal> -->
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
          <div class="modal-select-grid">
            <a-form-model-item
              class="form-item mb-0 pb-0"
              :class="{ 'select-placeholder': form.name == '' }"
            >
              <a-select
                class="checkout-select mb-0"
                v-model="form.name"
                placeholder="Shaharni tanlang"
              >
                <a-select-option v-for="(city, index) in cities" :key="city.id">
                  {{ city.name }}
                </a-select-option>
              </a-select>
            </a-form-model-item>
            <a-form-model-item
              class="form-item mb-0 pb-0"
              :class="{ 'select-placeholder': form.name == '' }"
            >
              <a-select
                class="checkout-select mb-0"
                v-model="form.name"
                placeholder="Tumanni tanlang"
              >
                <a-select-option v-for="(category, index) in regions" :key="category.id">
                  {{ category.name }}
                </a-select-option>
              </a-select>
            </a-form-model-item>
            <a-form-model-item class="form-item mb-0 pb-0">
              <a-input
                class="checkout-textarea"
                v-model="form.name"
                placeholder="Ko’cha uy va manzil haqida ma’lumot"
              />
            </a-form-model-item>
            <a-form-model-item class="form-item mb-0 pb-0">
              <a-input
                class="checkout-textarea"
                v-model="form.name"
                placeholder="Ko’cha uy va manzil haqida ma’lumot"
              />
            </a-form-model-item>
            <a-form-model-item class="form-item mb-0 pb-0">
              <a-input
                class="checkout-textarea"
                v-model="form.name"
                placeholder="Ko’cha uy va manzil haqida ma’lumot"
              />
            </a-form-model-item>
            <a-form-model-item class="form-item mb-0 pb-0">
              <a-input
                class="checkout-textarea"
                v-model="form.name"
                placeholder="Ko’cha uy va manzil haqida ma’lumot"
              />
            </a-form-model-item>
            <a-form-model-item class="form-item mb-0 pb-0">
              <a-input
                class="checkout-textarea"
                v-model="form.name"
                placeholder="Ko’cha uy va manzil haqida ma’lumot"
              />
            </a-form-model-item>
          </div>
        </a-form-model>
      </div>
      <div class="vmodal-btn adress-modal-btn">Manzilni qo’shish</div>
      <template slot="footer"> <h3></h3></template>
    </a-modal>
    <a-modal
      v-model="visibleSuccess"
      :body-style="{ padding: 0, borderRadius: '4px', overflow: 'hidden' }"
      centered
      :closable="false"
      width="590px"
      @ok="handleOk"
    >
      <div class="vmodal-header so-modal-header">
        <h5>Заказ принят</h5>
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
      <div class="vmodal-body os-vmodal">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
        >
          <circle cx="40" cy="40" r="40" fill="#F4F5F5" />
          <path
            d="M38.1475 46.5859C37.3665 47.367 36.1002 47.367 35.3191 46.5859L30.0833 41.3501C29.5587 40.8255 29.5587 39.9748 30.0833 39.4501C30.608 38.9255 31.4587 38.9255 31.9833 39.4501L35.3191 42.7859C36.1002 43.567 37.3665 43.567 38.1475 42.7859L48.0167 32.9168C48.5413 32.3921 49.392 32.3921 49.9167 32.9168C50.4413 33.4415 50.4413 34.2921 49.9167 34.8168L38.1475 46.5859Z"
            fill="#009A10"
          />
        </svg>
        <p>Заказ №32839 оформлен. Мы свяжемся с вами в ближайшее время</p>
        <div class="os-vmodal-btns">
          <button class="vmodal-btn os-vmodal-btn-close" @click="handleOk">
            Продолжить покупку
          </button>
          <button class="vmodal-btn os-vmodal-btn" @click="$router.push('/')">
            Перейти к просмотру
          </button>
        </div>
      </div>
      <template slot="footer"> <h3></h3></template>
    </a-modal>
    <a-modal
      v-model="visibleCheckoutProblem"
      :body-style="{ padding: '32px', borderRadius: '14px', overflow: 'hidden' }"
      centered
      :closable="false"
      width="571px"
      @ok="handleOkProblem"
    >
      <div class="checkout-problems">
        <h4>Sotib olishda muammoga duch keldizmi?</h4>
        <p>Biz bilan bog’laning</p>
        <a href="tel:+998990118934">+998 (99) 011 89 34</a>
      </div>
      <template slot="footer"> <h3></h3></template>
    </a-modal>
    <a-modal
      v-model="visibleConsent"
      :body-style="{
        padding: '18px',
        borderRadius: '12px',
        overflow: 'hidden',
        background: '#F1F1F1',
      }"
      centered
      :closable="false"
      width="361px"
      @ok="handleOkConsent"
    >
      <div class="checkout-consent">
        <h4>Diskont sotib olish qoidalariga rozilik kiritasizmi?</h4>
        <p>foydalanish va sotib olish shartlariga shartlari</p>
        <button>Ha, Qoidalar bilan tanishdim</button>
      </div>
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
      visibleConsent: false,
      visibleCheckoutProblem: false,
      visibleSuccess: false,
      typePayment: null,
      paymentElement: "payme",
      deliveryService: true,
      visible: false,
      regions: [],
      cities: [],
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
    this.__GET_REGIONS();
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
    handleOkConsent() {
      this.visibleConsent = false;
    },
    handleOkProblem() {
      this.visibleCheckoutProblem = false;
    },
    async __GET_PROFILE_INFO() {
      const profileData = await this.$store.dispatch("fetchAuth/getProfileInfo");
      this.profile = profileData?.user;
      this.form = {
        ...this.form,
        name: this.profile.name ? this.profile.name : "",
        phone_number: this.profile.login ? `+${this.profile.login}` : "",
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
    async __GET_REGIONS() {
      const data = await this.$store.dispatch("fetchRegions/getRegions", {
        headers: {
          Language: this.$i18n.locale,
        },
      });
      this.regions = data?.regions;
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
  watch: {
    "form.region_id"(val) {
      this.cities = this.regions.find((item) => item.id == val).districts;
    },
  },
};
</script>
<style lang="css">
@import "../assets/css/pages/checkout.css";
.so-modal-header {
  padding: 22px 20px 24px 40px;
  background: #f7f7f7;
}
.os-vmodal {
  padding: 40px;
  margin-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  background-color: #fff;
}
.os-vmodal p {
  color: #020105;
  text-align: center;
  font-family: var(--SB_500);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 133.333% */
  width: 75%;
  margin-top: 24px;
}
.os-vmodal-btns {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
  margin-top: 40px;
}
.os-vmodal-btn,
.os-vmodal-btn-close {
  font-size: 16px;
  font-family: var(--SB_500);
  border: none;
  margin-top: 0;
  height: 52px;
}
.os-vmodal-btn-close {
  background: #f4f5f5;
  color: #000;
}
.checkout-problems {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.checkout-problems h4 {
  color: #000;
  font-family: var(--SB_600);
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 24px;
}
.checkout-problems p {
  color: #000;
  text-align: center;
  font-family: var(--SB_400);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 12px;
}
.checkout-problems a {
  color: var(--color_dark_green);
  font-family: var(--SB_700);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration-line: underline;
}
.checkout-consent {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 32px;
}
.checkout-consent h4 {
  color: #000;
  font-family: var(--SB_600);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.checkout-consent p {
  color: var(--color_dark_green);
  font-family: var(--SB_400);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  text-decoration-line: underline;
}
.checkout-consent button {
  border-radius: 12px;
  background: #fff;
  width: 100%;
  padding-top: 13px;
  padding-bottom: 14px;
  color: var(--color_dark_green);
  font-family: var(--SB_700);
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: none;
}
</style>
