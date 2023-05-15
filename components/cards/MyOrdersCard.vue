<template lang="html">
  <div class="my-orders-card">
    <div class="my-orders-card-header">
      <h4>#986250233</h4>
      <span
        >Narxi:
        <p>14 540 000 so’m</p></span
      >
    </div>
    <div class="my-orders-card-body">
      <p>Nomi: Samsung kir yuvish mashinasi</p>
    </div>
    <div class="my-orders-card-footer">
      <div class="d-flex">
        <div class="my-orders-card-status">
          <span></span>
          <p>Olib ketildi</p>
        </div>
        <div class="order-date">21.05.2022</div>
      </div>
      <span v-html="arrow"></span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arrow: require("../../assets/svg/dropdown-icon.svg?raw"),
    };
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
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}
.my-orders-card-header h4 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 17.9395px;
  line-height: 22px;
  color: #000000;
}
.my-orders-card-header span {
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  display: flex;
  align-items: center;
}
.my-orders-card-header span p {
  font-weight: 500;
  margin-left: 4px;
}
.my-orders-card-body p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: rgba(0, 0, 0, 0.5);
}
.my-orders-card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 48px;
}
.my-orders-card-footer .my-orders-card-status {
  display: flex;
  align-items: center;
}
.my-orders-card-footer .my-orders-card-status span {
  display: flex;
  background: #16d884;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  margin-right: 7px;
}
.my-orders-card-footer .my-orders-card-status p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  color: #16d884;
}
.my-orders-card-footer .order-date {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: rgba(0, 0, 0, 0.5);
  margin-left: 47px;
}
.my-orders-card-footer > span svg {
  width: 20px;
  height: 10px;
}
</style>
