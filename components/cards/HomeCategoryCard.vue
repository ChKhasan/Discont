<template lang="html">
  <div class="h-category-card">
    <div class="h-category-card-title">
      <h4>Smartfonlar</h4>
    </div>
    <div class="h-category-card-img">
      <img src="../../assets/images/H62d8be8edb1e4c7f93567e7eb6c5f61e1.png.png" alt="" />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css">
.h-category-card {
  padding: 22px;
  background: #f5f5f5;
  border-radius: 20px;
  height: 120px;
  position: relative;
  cursor: pointer;
}
.h-category-card-img {
  position: absolute;
  right: 0;
  top: 22px;
}
.h-category-card-img img {
  object-fit: contain;
}

.h-category-card-title h4 {
  font-family: "SB_500";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 12px;
  letter-spacing: -0.2px;
  color: #000000;
  width: 70%;
}
</style>
