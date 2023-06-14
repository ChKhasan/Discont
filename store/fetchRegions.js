export const actions = {
  async getRegions({}) {
    const res = await this.$axios.$get(`/regions`);
    return res;
  },
};
