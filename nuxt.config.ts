export default {
    runtimeConfig: {
        public: {
            googleApiKey: '',
            mostPopularFontsNumber: 100,
            optionFontsNumber: 3,
            displayFontWeight: 'regular',
            guessFontBonusPointsTimeInMilliSeconds: 5000,
            basisPoints: 3
        }
    },
    css: [
        '~/assets/styles/app.css',
    ],
    modules:['@pinia/nuxt'],
    imports: {
        dirs: ['stores']
    },
    app: {
        head: {
            title: 'Guess The Google Font',
            meta: [
                {name: 'viewport', content: 'width=device-width, initial-scale=1'}
            ],
            link: [
                { rel:'stylesheet', type:'text/css', href:'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css' }
            ],
            script: [
                {src: 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js'},
                {src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js'}
            ]
        }
    }
}
