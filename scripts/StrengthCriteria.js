// 'StrengthCriteria' as a functional component to render the list of criteria for analyzing a strong password
// TODO 5: Style StrengthCriteria component using styles written in this file (inline styling)
import React from 'react';

const StrengthCriteria = function () {
    return (
        <div >
            <span style={{fontSize: '15px', color:'#aaa'}} id='checkCharLength'>
                Minimum 8 characters long
                    </span><br />
            <span style={{fontSize: '15px', color:'#aaa'}} id='checkCapitalLetter'>
                Atleast 1 capital letter
                    </span><br />
            <span style={{fontSize: '15px', color:'#aaa'}} id='checkNumber'>
                Atleast 1 number
                    </span><br />
            <span style={{fontSize: '15px', color:'#aaa'}} id='checkSpecialChar'>
                Atleast 1 special character
                    </span><br />
        </div>
    );
}

export default StrengthCriteria;