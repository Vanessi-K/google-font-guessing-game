// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        // The private keys which are only available server-side
        googleApiKey: '',
        // Keys within public are also exposed client-side
        public: {
        }
    }
})
