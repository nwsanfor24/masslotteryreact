import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from "../actions/index";
import Box from '../components/box.js';


class BoxCon extends React.Component {
    render() {
        return(
            <Box handleClick={this.props.loadData} draws={this.props.draws}>
                
            </Box>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, actionCreators)(BoxCon);