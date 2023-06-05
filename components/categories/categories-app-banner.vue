<template lang="html">
  <div class="application-banner">
    <div class="application-banner-info application-banner-info-2">
      <h2>Заказывайте в новом приложении Маркета и получайте бонусы</h2>
      <p>Diskont скачать мобильное приложение</p>
      <div class="app-btn-container app-btn-container-2">
        <span class="app-btns"
          ><img src="../../assets/images/Store ggp.png" alt=""
        /></span>
        <span class="app-btns"
          ><img src="../../assets/images/Store as.png" alt=""
        /></span>
        <img class="app-qr-code-2" src="../../assets/images/image 34.png" alt="" />
        <p>Наведите камеру на QR-код, чтобы скачать</p>
      </div>
    </div>
    <div class="application-banner-images">
      <div class="application-banner-container application-banner-container-2">
        <img src="../../assets/images/app-aimg.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css">
.application-banner {
  padding: 72px 0;
  display: flex;
  overflow: hidden;
}
.application-banner-info h2 {
  font-family: var(--SB_500);
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  color: #030303;
}
.application-banner-info p {
  font-family: var(--SF_400);
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #020105;
  margin-top: 16px;
}

.app-btn-container {
  margin-top: 24px;
  display: flex;
  align-items: center;
}

.app-btns:first-child {
  margin-right: 24px;
}
.app-qr-code {
  margin-left: 75px;
}
.app-qr-code-2 {
  margin-left: 20px;
  width: 75px;
  height: 75px;
}
.app-btn-container-2 p {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #727474;
  margin-left: 20px;
}

.application-banner-info-2 {
  width: 38%;
  position: relative;
}
.application-banner-images {
  display: flex;
  justify-content: center;
  width: 48%;
}
.application-banner-container {
  position: relative;
  max-width: 33%;
  height: 100%;
  width: 100%;
}
.application-banner-container img {
  position: absolute;
}
.application-banner-container-2 img:first-child {
  bottom: -110px;
  right: 0;
}
</style>
