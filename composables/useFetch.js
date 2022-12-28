import {ref} from 'vue'

export async function useFetch(url) {
    const data = ref(null)
    const error = ref(null)

    async function doFetch() {
        data.value = null
        error.value = null

        await fetch(url)
            .then((res) => res.json())
            .then((json) => (data.value = json))
            .catch((err) => (error.value = err))
    }

    await doFetch()

    return {data, error}
}