export const actions = {
  async getBrands({}, payload) {
    const res = await this.$axios.$get(`/brands`, { params: payload });
    return res;
  },
  async getBrandsBySlug({}, id) {
    const res = await this.$axios.$get(`/brands/${id}`);
    return res;
  },
};
