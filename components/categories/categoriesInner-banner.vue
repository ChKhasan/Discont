<template lang="html">
  <div class="categories-inner-banner">
    <a :href="banner?.link">
      <img :src="banner?.lg_img" alt="" />
    </a>
  </div>
</template>
<script>
export default {
  props: ["banner"],
};
</script>
<style lang="css">
.categories-inner-banner {
  border-radius: 12px;
  height: 143px;
  overflow: hidden;
}
</style>
