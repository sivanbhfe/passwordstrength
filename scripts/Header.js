// 'Header' as a functional component to display the heading text
// TODO 2: Style Header component using styles written in external stylesheet (external styling)
import React from 'react';

const Header = function () {
    return (
        <div>
            <h2 style={{marginTop:'10px',}}>Password Strength Meter</h2>
        </div>
    );
}

export default Header;