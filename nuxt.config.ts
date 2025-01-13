// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  content: {
    markdown: {
      remarkPlugins: {
        "remark-emoji": {
          emoticon: true,
        },
      },
      anchorLinks: true,
      toc: {
        depth: 3,
        searchDepth: 3,
      },
    },
  },
  modules: ["@nuxt/content", "@vueuse/nuxt"],
});