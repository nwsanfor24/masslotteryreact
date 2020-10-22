let defaultState = {
    draws: "draws"
}

const mainReducer = (state = defaultState, action) => {
    if (action.type === "CHANGE_DATA") {
        return {
            ...state,
            draws: action.draws
        }
    } else {
        return {
            ...state
        }
    }
}

export default mainReducer;