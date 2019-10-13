// 'ProgressBar' as a functional component which is initially set at zero progress value
// TODO 4: Style ProgressBar component using styles written in this file (inline styling)
import React from 'react';

const ProgressBar = function () {
    return (
        <div>
            <progress id='progressBar' max='100' value='0' ></progress>
            <span style={{color: '#cd5c5c',padding:'4px'}} id='progressStatus'>Very Weak</span>
        </div>
    );
}

export default ProgressBar;