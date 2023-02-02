import { defineStore, acceptHMRUpdate } from 'pinia'

export const useGoogleFontStore = defineStore('GoogleFontStore', {
    state() {
        return {

        }
    },
    getters: {},
    actions: {
        getRandomFont(allFonts) {
            let randomIndex = Math.random() * (allFonts.length);
            randomIndex = Math.floor(randomIndex);
            return allFonts[randomIndex].family;
        },
        getUniqueRandomFonts(allFonts, number) {
            let fontsArray = [];
            for(let i = 0; i < number; i++) {
                let randomFont;
                do {
                    randomFont = this.getRandomFont(allFonts);
                } while (!this.fontIsUnique(randomFont, fontsArray));
                fontsArray.push(randomFont)
            }
            return fontsArray;
        },
        fontIsUnique(validationFont, fontGroup) {
            return !fontGroup.includes(validationFont);
        }
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useGoogleFontStore, import.meta.hot))
}