export const actions = {
  async getProducts({}, payload) {
    const res = await this.$axios.$get(`/products`, { params: payload });
    return res;
  },
  async getProductsById({}, id) {
    const res = await this.$axios.$get(
      `https://test.loftcity.uz/api/admin/products/${id}`
    );
    return res;
  },
};
