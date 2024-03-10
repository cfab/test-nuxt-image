// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/image"],
  // following config is not working on netlify or vercel
  // empty config for image is working out of the box for netlify and vercel

 // image: {
   // provider: "ipx",
    // ipx: {
    //   domains: ['https://test-nuxt-image.netlify.app'], // Replace with your Netlify domain
    //   // Your IPX configuration options
    // },
  //},
})
