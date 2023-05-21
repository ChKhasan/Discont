export default {
  head: {
    title: "Diskont",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  css: ["@/assets/css/app.css", "ant-design-vue/dist/antd.css"],

  plugins: [{ src: "~plugins/antdv.js" }],

  components: true,

  buildModules: ["@nuxtjs/svg"],

  modules: ["bootstrap-vue/nuxt", "@nuxtjs/axios"],
  // server: {
  //   port: 8000,
  //   host: "localhost",
  // },
  axios: {
    credentials: false,
    init(axios) {
      axios.defaults.withCredentials = true;
    },
    baseURL: "https://test.loftcity.uz/api",
  },
  build: {
    babel: {
      compact: true,
    },
    vendor: ["aos"],
    standalone: true,
    extend(config, ctx) {
      config.externals = [
        {
          encoding: "encoding",
        },
      ];
    },
  },
};
