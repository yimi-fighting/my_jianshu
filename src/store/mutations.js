export default {
    setAuthor: (state, value) => {
        state.author = [...state.author, ...value]
    }
}