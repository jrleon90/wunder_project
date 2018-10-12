import React from 'react';

const ProgressBar = (props) => {
    const style = {
        width: props.complete
    }
    return (
        <div className="progress">
            <div className="progress-bar" style={style}>{props.complete}</div>
        </div>
    )
}

export default ProgressBar;