import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
// <FontAwesomeIcon icon={faTimesCircle} size='2x' />
export default props =>
  props.images.map((image, i) =>
    <div key={i} className='fadein'>
      <div
        onClick={() => props.removeImage(image.public_id)}
        className='delete'
      >
      <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  )
