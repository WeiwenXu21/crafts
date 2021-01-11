// ES5
// var Vibrant = require('node-vibrant')
// ES6
import * as Vibrant from 'node-vibrant'
// TypeScript
// import Vibrant = require('node-vibrant')
import React from 'react';



export default props =>
  props.images.map((image, i) =>
    <div key={i} className='fadein'>
      <div
        onClick={() => props.removeImage(image.public_id)}
        className='delete'
      >
      <button id="single">Try another one!</button>
      </div>
      <img src={image.secure_url} alt='' onError={() => props.onError(image.public_id)}/>
    </div>
  )
