import React from 'react';
import logo from './logo.svg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faImages, faImage } from '@fortawesome/free-solid-svg-icons'

export default props =>
  <div className='App'>
    <div className='App-header'>
      <h1>Color Palette Inspector</h1>
      <label htmlFor='single'>
          <img src={logo} className="App-logo" alt="logo" />
      </label>
      <input type='file' id='single' onChange={props.onChange} />
    </div>
  </div>


// export default props =>
//   <div className='buttons fadein'>
//     <div className='button'>
//       <label htmlFor='single'>
//         <img src={logo} className="App-logo" alt="logo" />
//       </label>
//       <input type='file' id='single' onChange={props.onChange} />
//     </div>
//   </div>
//
