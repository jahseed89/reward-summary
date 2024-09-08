import { ButtonProps } from '@/@types'
import React from 'react'

const Button = ({children, disable, additionalStyles, onClick}: ButtonProps) => {
  return (
    <button className={`text-white-100 bg-blue-100 disabled:bg-blue-50 rounded text-sm py-3 md:py-4 lg:py-2 w-[100%] ${additionalStyles}`} disabled={disable} onClick={onClick} type='submit'>{children}</button>
  )
}

export default Button