import React from 'react'
import './FloatingDiv.css'
const FloatingDiv = ({image , text1 ,text2}) => {
  return (
    <div className='floatingDiv'>
        <img src={image} alt="" />
        <p>
            {text1}
            <br />
           {text2}
        </p>

    </div>
  )
}

export default FloatingDiv