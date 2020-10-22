// import { combineReducers } from 'redux';
// import postReducer from './postReducer';

// export default combineReducers({
//     posts: postReducer
// });

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