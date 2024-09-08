import { InputElementProps } from '@/@types'
import React from 'react'

const InputElement = ({type, required, value, placeholder,handleChange}: InputElementProps) => {
  return (
    <input className="py-2.5 px-3 mt-2 md:py-3.5 lg:py-2.5" type={type} placeholder={placeholder} required={required} onChange={handleChange} value={value} />
  )
}

export default InputElement