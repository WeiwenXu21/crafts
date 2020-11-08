import React from 'react';
// import logo from './logo.svg';
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
      <button id="single">Try another one!</button>
      </div>
      <img src={image.secure_url} alt='' />
    </div>
  )
