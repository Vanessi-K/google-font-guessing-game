// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        // The private keys which are only available server-side

        // Keys within public are also exposed client-side
        public: {
            googleApiKey: '',
            mostPopularFontsNumber: 10,
            displayFontWeight: 'regular',
        }
    }
})
