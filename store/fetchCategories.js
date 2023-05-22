export const actions = {
  async getCategories({}, payload) {
    const res = await this.$axios.$get(`/categories`, { params: payload });
    return res;
  },
  async getCategoriesBySlug({}, id) {
    const res = await this.$axios.$get(`/categories/${id}`);
    return res;
  },
};
