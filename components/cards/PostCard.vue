<template lang="html">
  <div class="post-card">
    <div class="post-card-img">
      <img v-if="post?.sm_img" :src="post?.sm_img" alt="" />
      <img v-else src="../../assets/images/Rectangle 24083.png" alt="" />
    </div>
    <div class="post-card-body">
      <p v-if="post?.created_at">
        {{ moment(post?.created_at).format("DD.MM.YYYY") }}
      </p>
      <p v-else>27.03.2023</p>
      <h6 v-if="post?.title?.ru" @click="$router.push(`/news/${post?.slug}`)">
        {{ post?.title?.ru }}
      </h6>
      <h6 v-else>Apple запатентовала складной экран смартфона.</h6>
    </div>
  </div>
</template>
<script>
import moment from "moment";
export default {
  props: ["post"],
  methods: {
    moment,
  },
};
</script>
<style lang="css">
.post-card {
}
.post-card-img {
  height: 201px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
}
.post-card-img:hover img {
  transform: scale(1.1);
}
.post-card-img img {
  object-fit: cover;
  transition: 0.3s;
  width: 100%;
  height: 100%;
}
.post-card-body p {
  font-family: var(--SB_500);
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 133.5%;
  color: rgba(0, 0, 0, 0.5);
  margin-top: 14px;
}
.post-card-body h6 {
  cursor: pointer;
  font-family: var(--SB_500);
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 133.5%;
  color: #000000;
  margin-top: 14px;
  letter-spacing: -0.02em;
  color: #000000;
  height: 47px;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  text-overflow: ellipsis;
}
</style>
