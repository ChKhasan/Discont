<template lang="html">
  <div class="discont-banner">
    <div>
      <div class="discont-banner-header d-flex align-items-end">
        <h4>Diskont halol bo’lib to’lash</h4>
        <p>Nasiya savdo haqida</p>
      </div>
      <div class="discont-banner-body">
        <p>
          Assalomu alaykum! Birinchi bor savol yuboryapman, xatolar bo‘lsa oldindan uzr.
          Men nasiya savdo bilan shug‘ullanaman. Savolim: 1). Nasiyaga mol berayotganimda
          xaridordan boshiga qancha pul bera olishiga qarab qolgan summaga qarab so‘ngi
          narxni belgilayman. Masalan 10 so‘mlik molni boshiga 2 so‘m bersa 13 so‘m. Agar
          4 bersa 11 so‘m. Albatta u bilan kelishgach. Shu ishim joizmi?
        </p>
      </div>
    </div>
    <div class="discont-banner-footer">
      <div>Operator bilan aloqa</div>
      <div>Barcha shartlari</div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css">
.discont-banner {
  overflow: hidden;
  height: 329px;
  display: flex;
  flex-direction: column;
  padding: 36px;
  border-radius: 16px;
  background: linear-gradient(90deg, #09454f 0%, #068f96 100%);
  justify-content: space-between;
}
.discont-banner-header h4 {
  font-family: var(--SB_600);
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  color: #ffffff;
  margin-right: 21px;
}
.discont-banner-header p {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  display: flex;
  align-items: flex-end;
}
.discont-banner-body {
  width: 60%;
  margin-top: 26px;
}
.discont-banner-body p {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
}
.discont-banner-footer {
  display: flex;
}
.discont-banner-footer div {
  padding: 10px 24px;
  font-family: "Inter";
  font-style: normal;
  border-radius: 11.0445px;
  font-weight: 500;
  font-size: 13.8056px;
  line-height: 17px;
}
.discont-banner-footer div:first-child {
  color: #333c4c;
  background: #fff;
  margin-right: 28px;
}
.discont-banner-footer div:last-child {
  border: 0.764706px solid #ffffff;
  background: linear-gradient(90deg, #09454f 0%, #068f96 100%);
  color: #fff;
}
</style>
