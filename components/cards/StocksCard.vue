<template lang="html">
  <div class="stocks-card" @click="$router.push('/stock/1')">
    <div class="stocks-card-img">
      <img src="../../assets/images/stocks-card.png" alt="" />
    </div>

    <div class="stocks-card-body">
      <span>
        <div
          class="stocks-card-type"
          :class="{ 'stocks-card-type-new': true }"
          v-if="typeStatus"
        >
          Yangi aksiya
        </div></span
      >

      <h2>Maishiy texnika va uy jihozlari uchun aksiyalar</h2>

      <p>02 maydan 02 iyungacha</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["typeStatus"],
};
</script>
<style lang="css">
.stocks-card {
  background: #ffffff;
  border: 1px solid #eaeaea;
  box-shadow: 0px 14px 26px rgba(0, 0, 0, 0.03);
  border-radius: 17.0888px;
  padding: 20px;
  transition: 0.3s ease-out;
}

.stocks-card:hover .stocks-card-img img {
  transform: scale(1.1);
}

.stocks-card-img {
  height: 292px;
  width: 100%;
  border-radius: 17.0888px;
  overflow: hidden;
}

.stocks-card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.3s ease-out;
}

.stocks-card-body {
  margin-top: 13px;
  display: flex;
  flex-direction: column;
}

.stocks-card-body h2 {
  font-family: var(--SB_600);
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  height: 52px;
  display: flex;
  align-items: center;
  color: #1c1f22;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  text-overflow: ellipsis;
  cursor: pointer;
}

.stocks-card-body h2:hover {
  color: var(--color_dark_green);
}

.stocks-card-body p {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  margin-top: 7px;
  color: #1c1f22;
}

.stocks-card-type {
  border-radius: 5px;
  transform: matrix(1, 0, -0.24, 0.97, 0, 0);
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  display: inline-flex;
  align-items: center;
  padding: 0 17px;
}

.stocks-card-type-new {
  background: #1f8a70;
  color: #fff;
}

.stocks-card-type-seasonal {
  background: radial-gradient(98.96% 220.15% at 98.96% 100%, #ffdd6a 0%, #fbc100 100%);
  color: #ff3a3a;
}
</style>
