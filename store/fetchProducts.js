export const actions = {
  async getProducts({}, payload) {
    const res = await this.$axios.$get(`/products`, { ...payload });
    return res;
  },
  async getShowcases({}, payload) {
    const res = await this.$axios.$get(`/showcases`, { ...payload });
    return res;
  },
  async getProductsById({}, payload) {
    const res = await this.$axios.$post(`/get_products`, payload.data, {
      ...payload.params,
    });

    return res;
  },
  async postProductComment({}, payload) {
    const res = await this.$axios.$post(`/comments`, payload.data);

    return res;
  },
  async getComparionsProductsById({}, payload) {
    const res = await this.$axios.$post(`/comparison`, payload.data, {
      ...payload.params,
    });
    return res;
  },
  async getProductsBySlug({}, payload) {
    const res = await this.$axios.$get(`/products/${payload.id}`, {
      ...payload.params,
    });
    return res;
  },
};
