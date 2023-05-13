<template lang="html">
  <div class="categoies-card">
    <div class="categoies-card-img">
      <img src="../../assets/images/dfzgdxhg 1.png" alt="" />
    </div>
    <div class="categoies-card-title"><h6>Смартфоны</h6></div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css">
.categoies-card {
  background: #fcfcfc;
  border: 1px solid #f2f2f2;
  border-radius: 12px;
  height: 252px;
  padding: 31px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.categoies-card-img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  max-height: 131px;
}
.categoies-card-title {
  display: flex;
  justify-content: center;
  margin-top: 32px;
}
.categoies-card-title h4 {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #1c1f22;
}
</style>
