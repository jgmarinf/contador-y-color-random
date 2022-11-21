import React, { useEffect, useState } from 'react'

const Formulario = () => {
    const [text, setText] = useState("text")

    const oe = ()=>{
        text === "text" ? setText("password") : setText("text")
    }


    
  return (
    <div className='Formulario'>
        <input type={`${text}`}></input>
        <button onClick={oe} ></button>
    </div>
  )
}

export default Formulario