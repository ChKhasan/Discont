export const actions = {
  async postLogin({}, data) {
    const res = await this.$axios.$post(`/auth/login`, data);
    return res;
  },
  async postCheckNumber({}, data) {
    const res = await this.$axios.$post(`/auth/check`, data);
    return res;
  },
  async postRegisterWithSms({}, data) {
    const res = await this.$axios.$post(`/auth/register`, data);
    return res;
  },
  async postOrder({}, data) {
    const res = await this.$axios.$post(`/order`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("dis_auth_token")}`,
      },
    });
    return res;
  },
};
