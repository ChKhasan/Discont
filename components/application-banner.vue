<template lang="html">
  <div class="categories-application-banner">
    <div class="categories-application-banner-info">
      <h2>Заказывайте в новом приложении Маркета и получайте бонусы</h2>
      <p>Diskont скачать мобильное приложение</p>
      <div class="app-btn-container">
        <span class="app-btns"><img src="../assets/images/Store.png" alt="" /></span>
        <span class="app-btns"><img src="../assets/images/Store (1).png" alt="" /></span>
        <img class="app-qr-code" src="../assets/images/image 34.png" alt="" />
        <p>Наведите камеру на QR-код, чтобы скачать</p>
      </div>
    </div>
    <div class="categories-application-banner-images">
      <div class="categories-application-banner-container">
        <img src="../assets/images/iPhone 14 Pro Mockup (1)@3x 1.png" alt="" />
        <img src="../assets/images/ff 1.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css">
.categories-application-banner {
  background: #f9f9f9;
  border-radius: 24px;
  padding: 72px 96px;
  display: flex;
}
.categories-application-banner-info h2 {
  font-family: var(--SB_500);
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 56px;
  color: #030303;
}
.categories-application-banner-info p {
  font-family: var(--SF_400);
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
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
.app-btn-container p {
  font-family: var(--TT_neue_400);
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  color: #727474;
  margin-left: 20px;
}
.categories-application-banner-info {
  width: 60%;
  position: relative;
}
.categories-application-banner-images {
  display: flex;
  justify-content: center;
  width: 40%;
}
.categories-application-banner-container {
  position: relative;
  max-width: 33%;
  height: 100%;
  width: 100%;
}
.categories-application-banner-container img {
  position: absolute;
}
.categories-application-banner-container img:first-child {
  top: -136px;
  left: -152px;
}
.categories-application-banner-container img:last-child {
  top: -180px;
  right: -229px;
}
</style>
