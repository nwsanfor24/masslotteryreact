import { fetchActions } from '../actions/fetchActions';

const initialState = {
    draws: fetchActions,
    draw: {}
};

function fetchFunction(state = initialState, action) {
    
    return state;
}

export default fetchFunction;