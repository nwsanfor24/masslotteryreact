import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import { DataGrid } from '@material-ui/data-grid';

class Table extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
            this.props.rest.unshift(nextProps.newPost);
        }
    }

    getInitialState() {
        return {
            rest: null
        };
    }

    renderTableData() {
        this.getInitialState();
        return this.state.rest.map(post => {
            const { id, draws, drawNumber, bonus, drawDate, winningNumbers } = post
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{draws}</td>
                    <td>{drawNumber}</td>
                    <td>{bonus}</td>
                    <td>{drawDate}</td>
                    <td>{winningNumbers}</td>
                </tr>
            )
        })
    }

    renderTableHeader() {
        const header = Object.keys({ 'key': this.props.posts[0] })
        if (window.UndefinedVariable) {
            Object.assign(window.UndefinedVariable, {})
        }
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    render() {
        return (
            <div style={{ height: 400, width: '100%' }}>
                <h1>Posts</h1>
                <table id='posts'>
                    <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

Table.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
};

const mapStateToProps = state => ({
    posts: state.props.items,
    newPost: state.props.item
});


export default connect(mapStateToProps, { fetchPosts })(Table);