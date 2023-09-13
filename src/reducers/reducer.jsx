function reducer(state, action) {
    switch (action.type) {
        case "SUMA_LIKE":
            return {
                ...state,
                isLiked: !state.isLiked,
                likesCount: state.isLiked ? 16 : 17,
            };
        default:
            return state;
    }
}
export default reducer