import React from 'react';

class Box extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <div style={{
                    body: `${this.props.draws}`
                }} 
                className="box">
                    <button onClick={() => {this.props.handleClick()}}>This is a Test</button>
                </div>
            </div>
        )
    }
}

export default Box;