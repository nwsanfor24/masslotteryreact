import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from "../actions/index";
import MUIDataTable from "mui-datatables";
// import Box from '../components/box.js';


class BoxCon extends React.Component {
    render() {
        const columns = ["Draw", "Draw Number", "Bonus", "Draw Date", "Winning Numbers"];

        const data = [];

        const options = {
            filter: true,
            pageLength: 10,
            filterType: 'dropdown',
            responsive: 'stacked'
        };

        return (
            <MUIDataTable
                title={"Massachusetts Lottery"}
                data={data}
                columns={columns}
                options={options}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, actionCreators)(BoxCon);