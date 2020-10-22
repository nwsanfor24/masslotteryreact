import React from 'react';

class Box extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <button onClick={() => { this.props.handleClick() }}>This is a Test</button>
            </div>
        )
    }
}

export default Box;