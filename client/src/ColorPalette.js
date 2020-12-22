// ES5
// var Vibrant = require('node-vibrant')
// ES6
// import * as Vibrant from 'node-vibrant'
// TypeScript
// import Vibrant = require('node-vibrant')
import React from 'react';
// import logo from './logo.svg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
// <FontAwesomeIcon icon={faTimesCircle} size='2x' />
// function sampleColor(image) {
//   // Using builder
//   // Vibrant.from(image.secure_url).getPalette((err, palette) => console.log(palette))
//   var v = new Vibrant(image.secure_url,{quality:1});
//   return v
// }



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
      <div></div>
    </div>
  )
