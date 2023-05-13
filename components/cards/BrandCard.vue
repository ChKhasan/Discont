<template lang="html">
  <div class="brand-card" @click="$router.push('/brands')">
    <img src="../../assets/images/image 56.png" alt="" />
  </div>
</template>
<script>
export default {};
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
