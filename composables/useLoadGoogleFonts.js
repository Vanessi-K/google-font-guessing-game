export function useLoadGoogleFonts(fonts, weight) {
    fonts.forEach((font) => {
        let loadFontWeight = font + ':' + weight
        WebFont.load({
            google: {
                families: [loadFontWeight]
            }
        });
    })
}