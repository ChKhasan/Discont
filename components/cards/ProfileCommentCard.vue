<template lang="html">
  <div class="profile-comment-card">
    <div class="profile-comment-card-head">
      <div class="profile-comment-card-img">
        <img src="../../assets/images/comment.png" alt="" />
      </div>

      <div class="profile-comment-card-header">
        <div>
          <h4>Смартфон Samsung Galaxy A53 6/128Gb Тўқ сариқ ранг (Шафтоли)</h4>
          <a-rate disabled style="color: #00b2a9" v-model="value" />
        </div>
        <!-- <div class="profile-comment-card-edit"><span v-html="edit"></span></div> -->
      </div>
    </div>
    <div class="profile-comment-card-body">
      <p>
        <span>Sizning izohingiz:</span> is a long established fact that a reader will be
        distracted by the readable content of a page when looking at its layout. The point
        of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
        as opposed to using 'Content here, content here', making it look like readable
        English. Many desktop publishing packages and web page editors now use Lorem Ipsum
        as their default model text, and
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      edit: require("../../assets/svg/Fill 4.svg?raw"),
      value: 2,
    };
  },
};
</script>
<style lang="css">
.profile-comment-card {
  padding: 17px 16px;
  background: #ffffff;
  border: 1px solid #f1f1f1;
  border-radius: 12px;
}
.profile-comment-card-head {
  display: grid;
  grid-template-columns: 73px auto;
  grid-gap: 24px;
}
.profile-comment-card-header {
  display: flex;
  justify-content: space-between;
}
.profile-comment-card-header h4 {
  font-family: var(--SF_400);
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  margin-bottom: 14px;
}
.profile-comment-card-img {
  width: 73px;
  height: 69px;
  border-radius: 6px;
  object-fit: cover;
}
.profile-comment-card-img img {
  width: 100%;
  height: 100%;
}
.profile-comment-card-body {
  margin-top: 14px;
}
.profile-comment-card-body p {
  font-family: var(--SF_400);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #949494;
}
.profile-comment-card-body p span {
  color: #00b2a9;
}
.profile-comment-card-edit {
  cursor: pointer;
  height: 31.5px;
  width: 31.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(241, 241, 241, 0.4);
  mix-blend-mode: normal;
  border-radius: 10px;
}
</style>
