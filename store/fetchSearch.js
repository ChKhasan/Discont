export const actions = {
  async getSearch({}, payload) {
    const res = await this.$axios.$get(`/search`, { params: payload });
    return res;
  },
};
