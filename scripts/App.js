// 'App' as a class component which encompasses all other components
// TODO 6: Style App component using styles written in external stylesheet (external styling)
import React from 'react';

import Header from './Header.js';
import Password from './Password.js';
import ProgressBar from './ProgressBar.js';
import StrengthCriteria from './StrengthCriteria.js';
import '../index.css';

class App extends React.Component {
  render() {
    return (
    <div style={{width:'400px',background:'#ccc',marginTop:'50px'}}>
      <div style={{width:'200px', marginTop:'10px', background:'#ccc',marginLeft:'20px', height:'300px', align:'center'}} className='main-container'>
        <Header />
        <Password />
        <ProgressBar />
        <StrengthCriteria />
        </div>
      </div>
   
    )
  }
}

export default App;