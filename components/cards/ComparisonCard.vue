<template lang="html">
  <div class="comparison-card">
    <div class="comparison-card-head">
      <span class="comparison-delete" v-html="x"></span>
      <div class="comparison-card-head-img">
        <img src="../../assets/images/dfzgdxhg 1.png" alt="" />
      </div>
      <div class="comparison-card-head-body">
        <h5>Холодильник Samsung RB 29 FERNDSA/WT</h5>
        <h4>7 300 000 сум</h4>
        <p><span v-html="star"></span>5.0</p>
      </div>
    </div>
    <div class="comparison-card-body">
      <div class="comparison-card-characteristic">
        <p>Фронтальная камера <span>20MP</span></p>
      </div>
      <div class="comparison-card-characteristic">
        <p>Фронтальная камера <span>20MP</span></p>
      </div>
      <div class="comparison-card-characteristic">
        <p>Фронтальная камера <span>20MP</span></p>
      </div>
      <div class="comparison-card-characteristic">
        <p>Фронтальная камера <span>20MP</span></p>
      </div>
      <div class="comparison-card-characteristic">
        <p>Фронтальная камера <span>20MP</span></p>
      </div>
      <div class="comparison-card-characteristic">
        <p>Фронтальная камера <span>20MP</span></p>
      </div>
      <div class="comparison-card-characteristic">
        <p>Фронтальная камера <span>20MP</span></p>
      </div>
      <div class="comparison-card-characteristic">
        <p>Фронтальная камера <span>20MP</span></p>
      </div>
      <div class="comparison-card-characteristic">
        <p>Фронтальная камера <span>20MP</span></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      star: require("../../assets/svg/product-star.svg?raw"),
      x: require("../../assets/svg/comparisonX.svg?raw"),
    };
  },
};
</script>
<style lang="css">
.comparison-card {
  display: flex;
  flex-direction: column;
  max-width: 390px;
}
.comparison-card-head {
  position: relative;
  padding: 24px;
  border: 1px solid #ebebeb;
  border-radius: 24px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.comparison-card-head-img {
  height: 140px;
  margin-top: 10px;
}
.comparison-card-head-img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.comparison-delete {
  position: absolute;
  top: 20px;
  right: 22px;
  cursor: pointer;
}
.comparison-card-head-body {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.comparison-card-head-body h5 {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #020105;
  max-width: 294px;
  margin-top: 31px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 48px;
}
.comparison-card-head-body h4 {
  font-family: var(--SB_500);
  font-style: normal;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #020105;
  max-width: 294px;
  margin-top: 16px;
}
.comparison-card-head-body p svg path {
  fill: #f6c65c;
}
.comparison-card-head-body p svg {
  margin-right: 5px;
}
.comparison-card-head-body p {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 12px;
  display: flex;
  align-items: center;
  color: #020105;
  margin-top: 17px;
}
.comparison-card-body {
  border: 1px solid #ebebeb;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  padding: 17px 19px;
}
.comparison-card-characteristic {
  padding-bottom: 16px;
  margin-bottom: 22px;
  border-bottom: 1px solid #ebebeb;
}

.comparison-card-characteristic p {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #727474;
  display: flex;
  flex-direction: column;
}
.comparison-card-characteristic p span {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #020105;
  margin-top: 4px;
}
.comparison-card-characteristic:last-child {
  margin-bottom: 0;
  border-bottom: none;
}
</style>
