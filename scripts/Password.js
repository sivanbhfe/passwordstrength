// 'Password' as a functional component to render the password input element
// TODO 3: Style Password component using styles written in external stylesheet (external styling)
import React from 'react';

const Password = function (props) {
    return (
        <div >
            <input id='password' type='password' placeholder='Type your password here' />
        </div>
    );
}

export default Password;
