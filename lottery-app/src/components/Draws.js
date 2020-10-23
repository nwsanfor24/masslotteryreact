import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchActions } from '../actions/fetchActions';

class Draws extends Component {
    componentDidMount() {
        this.props.fetchActions();
    }

    render() {
        if (this.props.data) {
            var drawItems = this.props.data.map(draw => (
                <div key={draw.id}>
                    <h2>{draw.winningNumbers}</h2>
                    <h3>{draw.bonus}</h3>
                </div>
            ));
        }

        return (
            <div>
                <h1>Draws</h1>
                {drawItems}
            </div>
        );
    }
}

Draws.propTypes = {
    fetchActions: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    draws: state.draws
});

export default connect(mapStateToProps, { fetchActions })(Draws);