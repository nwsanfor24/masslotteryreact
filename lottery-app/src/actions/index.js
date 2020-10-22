import axios from 'axios';

export function loadData() {
    return (dispatch) => {
        return axios.get("https://www.masslottery.com/rest/keno/getDrawsByDateRange?startDate=2020-10-21&endDate=2020-10-21")
        .then((response) => {
            dispatch(changeData(response.data.draws))
            console.log(response.data.draws)
        })
    }
}

export function changeData(draws) {
    return {
        type: "CHANGE_DATA",
        draws: draws
    }
}