export default {
    runtimeConfig: {
        public: {
            googleApiKey: '',
            mostPopularFontsNumber: 10,
            optionFontsNumber: 2,
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
