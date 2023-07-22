export const actions = {
  async getPosts({}, payload) {
    const res = await this.$axios.$get(`/posts`, { ...payload });
    return res;
  },
  async getPostsBySlug({}, id) {
    const res = await this.$axios.$get(`/posts/${id}`);
    return res;
  },
};
