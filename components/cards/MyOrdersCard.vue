<template lang="html">
  <div class="my-orders-card">
    <div class="my-orders-card-header">
      <div class="d-flex flex-column">
        <h4>ID заказа {{ order?.id }}</h4>
        <p>Обновлен 8 ноября 2022 г., 13:00</p>
      </div>
      <span>Olib ketildi</span>
    </div>
    <div class="my-orders-card-body" @click="productDrop = !productDrop">
      <div class="order-products">
        <div
          class="order-product"
          v-for="product in order?.products.filter((item, index) => index == 0)"
          :key="product?.product_id"
        >
          <div class="order-product-img">
            <img src="../../assets/images/BASKET.png" alt="" />
          </div>
          <div class="order-product-body">
            <p>
              Смартфон Самсунг Галахй А33 6/128Гб Тўқ сариқ ранг (Ёрқин Шафтоли)Смартфон
              Самсунг Галахй А33 6/128Гб Тўқ сариқ ранг (Ёрқин
            </p>
          </div>
        </div>
      </div>
      <span v-html="arrow" :class="{ rotate180: productDrop }"></span>
    </div>
    <div class="order-products" v-if="productDrop == true">
      <div
        class="order-product"
        v-for="product in order?.products.filter((item, index) => index != 0)"
        :key="product?.product_id"
      >
        <div class="order-product-img">
          <img src="../../assets/images/BASKET.png" alt="" />
        </div>
        <div class="order-product-body">
          <p>
            Смартфон Самсунг Галахй А33 6/128Гб Тўқ сариқ ранг (Ёрқин Шафтоли)Смартфон
            Самсунг Галахй А33 6/128Гб Тўқ сариқ ранг (Ёрқин
          </p>
        </div>
      </div>
    </div>
    <div class="my-orders-card-footer">
      <div>
        <p>Дата заказа</p>
        <span>Вторник, 8 ноября 2022 г., 12:59</span>
      </div>
      <div>
        <p>Способ доставки</p>
        <span>Доствака</span>
      </div>
      <div>
        <p>Способ оплаты</p>
        <span>Payme</span>
      </div>

      <div>
        <p>Сумма заказа</p>
        <span>250 000 сум</span>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
export default {
  props: ["order"],
  data() {
    return {
      arrow: require("../../assets/svg/dropdown-icon.svg?raw"),
      productDrop: false,
    };
  },
  methods: {
    moment,
  },
};
</script>
<style lang="css">
.my-orders-card {
  padding: 22px;
  border: 0.5px solid #f1f1f1;
  border-radius: 16px;
}
.my-orders-card-header {
  display: flex;
  justify-content: space-between;

  margin-bottom: 32px;
}
.my-orders-card-header h4 {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: #000000;
}
.my-orders-card-header span {
  padding: 14px 16px;
  padding-left: 34px;
  background: #fafafa;
  border-radius: 4px;
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #1f8a70;
  position: relative;
  display: flex;
  align-items: center;
  max-height: 42px;
}
.my-orders-card-header span::after {
  content: "";
  position: absolute;
  width: 13px;
  height: 13px;
  background: #1f8a70;
  border-radius: 50%;
  left: 16px;
}
.my-orders-card-header p {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #727474;
  margin-top: 10px;
}
.my-orders-card-body {
  display: flex;
  justify-content: space-between;
}

.my-orders-card-footer {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px;
  margin-top: 48px;
}
.my-orders-card-footer div p {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #727474;
}
.my-orders-card-footer div span {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  margin-top: 4px;
}
.my-orders-card-body > span svg {
  width: 20px;
  height: 10px;
}
.my-orders-card-body > span {
  display: flex;
  align-items: center;
  margin-right: 4px;
}
.order-product {
  display: grid;
  grid-template-columns: 80px auto;
}
.my-orders-card-body {
  margin-bottom: 32px;
}
.order-products {
  width: 90%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 32px;
}
.order-product-img {
  width: 80px;
  height: 80px;
  background: rgba(217, 217, 217, 0.2);
  border-radius: 10px;
}
.order-product-img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.order-product-body {
  padding-left: 24px;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.order-product-body p {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  color: rgba(114, 116, 116, 0.6);
}
</style>
