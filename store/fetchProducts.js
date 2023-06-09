export const actions = {
  async getProducts({}, payload) {
    const res = await this.$axios.$get(`/products`, { params: payload });
    return res;
  },
  async getShowcases({}) {
    const res = await this.$axios.$get(`/showcases`);
    return res;
  },
  async getProductsById({}, data) {
    const res = await this.$axios.$post(`/get_products`, data);
    return res;
  },
  async getComparionsProductsById({}, data) {
    const res = await this.$axios.$post(`/comparison`, data);
    return res;
  },
  async getProductsBySlug({}, id) {
    const res = await this.$axios.$get(`/products/${id}`);
    return res;
  },
};
