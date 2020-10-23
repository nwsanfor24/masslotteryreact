import { FETCH_DRAWS } from './types';

export const fetchActions = () => dispatch => {
    fetch('https://www.masslottery.com/rest/keno/getDrawsByDateRange?startDate=2020-10-21&endDate=2020-10-21', {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(dispatch)
    })
        .then(res => res.json())
        .then(draw =>
            dispatch({
                type: FETCH_DRAWS,
                payload: draw
            })
        );
};