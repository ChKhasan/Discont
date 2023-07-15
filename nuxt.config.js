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
      { name: "csrf-token", content: "{{ csrf_token() }}" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  css: [
    "@/assets/css/app.css",
    "ant-design-vue/dist/antd.css",
    "@/assets/css/main.css",
  ],

  plugins: [
    { src: "~plugins/antdv.js" },
    { src: "~plugins/v-mask.js", ssr: false },
  ],

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
    baseURL: "https://api.e-shop.ndc.uz/api",
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
