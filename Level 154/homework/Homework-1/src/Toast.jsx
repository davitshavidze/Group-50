import { useState } from "react"

function Toast({content, expiresIn, background}) {
  return (
    <div style={{backgroundColor: {background}}} className="w-[150px] h-[150px] border-2 border-black rounded flex justify-center items-center">
      {
        setTimeout(() => {
          <h1>{content}</h1>
        }, expiresIn)
      }
    </div>
  )
}

export default Toast