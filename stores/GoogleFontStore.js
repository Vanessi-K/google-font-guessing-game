import { defineStore, acceptHMRUpdate } from 'pinia'

export const useGoogleFontStore = defineStore('GoogleFontStore', {
    state() {
        return {

        }
    },
    getters: {},
    actions: {}
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useGoogleFontStore, import.meta.hot))
}