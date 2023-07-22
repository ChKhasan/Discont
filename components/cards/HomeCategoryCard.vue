<template lang="html">
  <div class="h-category-card" @click="$router.push(`/categories/${category.slug}`)">
    <div class="h-category-card-title">
      <h4>{{ category?.name }}</h4>
    </div>
    <div class="h-category-card-img">
      <img v-if="category?.sm_img" :src="category?.sm_img" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  props: ["category"],
};
</script>
<style lang="css">
.h-category-card {
  padding: 22px;
  background: #f5f5f5;
  border-radius: 20px;
  height: 120px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
}
.h-category-card-img {
  position: absolute;
  right: 0;
  top: 22px;
  height: 100%;
  width: 115px;
}
.h-category-card-img img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}

.h-category-card-title h4 {
  font-family: var(--SB_500);
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: -0.2px;
  color: #000000;
  width: 70%;
  position: relative;
  z-index: 2;
}
</style>
