<template lang="html">
  <div class="home-banner">
    <img :src="banner[0]?.lg_img?.ru" alt="" />
  </div>
</template>
<script>
export default {
  props: ["banner"],
};
</script>
<style lang="css">
.home-banner {
  width: 100%;
  max-height: 250px;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 50px;
}
</style>
