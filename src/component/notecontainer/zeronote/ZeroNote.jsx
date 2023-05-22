import React from 'react'
import errorimg from '../../../img/errorimg.png'
const style={
    width:'24rem',
    height:'auto',
    objectFit:'cover'
}
const ZeroNote = () => {
  return (
    <div className="zeronote d-flex flex-column justify-content-center align-items-center mt-5">
         <div className="errormsg">
            <h1 className='text-secondary'>You don't have notes</h1>
         </div>
         <div className="img">
            <img src={errorimg} alt="error" style={style} />
         </div>
    </div>
  )
}

export default ZeroNote