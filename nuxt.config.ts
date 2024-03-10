// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/image"],
  image: {
    provider: "ipx",
    domains: ['https://test-nuxt-image.netlify.app'], // Replace with your Netlify domain
    ipx: {
      // Your IPX configuration options
    },
  },
})
