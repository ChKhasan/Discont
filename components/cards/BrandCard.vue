<template lang="html">
  <div class="brand-card" @click="$router.push(`/brand-categories/${brand?.slug}`)">
    <!-- <img v-if="brand?.logo" :src="brand?.logo" alt="" /> -->
    <img src="../../assets/images/image 56.png" alt="" />
  </div>
</template>
<script>
export default {
  props: ["brand"],
};
</script>
<style lang="css">
.brand-card {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #f2f2f2;
  border-radius: 20px;
  height: 106px;
  cursor: pointer;
}
</style>
