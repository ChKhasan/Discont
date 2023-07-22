export const actions = {
  async getShowcases({}, payload) {
    const res = await this.$axios.$get(`/showcases`, { params: payload });
    return res;
  },
  async getShowcasesBySlug({}, payload) {
    const res = await this.$axios.$get(`/showcases/${payload.slug}`,{ params: payload.params });
    return res;
  },
};
