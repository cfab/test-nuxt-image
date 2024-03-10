// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/image"],
  // following config is not working on netlify
  image: {
    provider: "ipx",
    // ipx: {
    //   domains: ['https://test-nuxt-image.netlify.app'], // Replace with your Netlify domain
    //   // Your IPX configuration options
    // },
  },
})
