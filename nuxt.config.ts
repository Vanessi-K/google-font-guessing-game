// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//     runtimeConfig: {
//         // The private keys which are only available server-side
//
//         // Keys within public are also exposed client-side
//         public: {
//             googleApiKey: '',
//             mostPopularFontsNumber: 10,
//             displayFontWeight: 'regular',
//         }
//     },
//
// })

export default {
    runtimeConfig: {
        public: {
            googleApiKey: '',
            mostPopularFontsNumber: 10,
            displayFontWeight: 'regular',
        }
    },
    app: {
        head: {
            meta: [
                {name: 'viewport', content: 'width=device-width, initial-scale=1'}
            ],
            script: [
                {src: 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js'}
            ]
        }
    }
}
