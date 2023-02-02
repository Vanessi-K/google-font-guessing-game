import { defineStore, acceptHMRUpdate } from 'pinia'

export const useGameStore = defineStore('GameStore', {
    state() {
        return {
            currentPoints: 0,
            guessedFonts: 0,
        }
    },
    getters: {},
    actions: {
        addPoints(points) {
            this.currentPoints = this.currentPoints + points
        },
        addGuessedFont() {
            this.guessedFonts = this.guessedFonts + 1
        }
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useGameStore, import.meta.hot))
}