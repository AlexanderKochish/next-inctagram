import React from 'react'
import s from './Button.module.scss'

type Props = {
    text: string;
    clazz: string;
}

const Button = ({ text, clazz }: Props) => {
  
  return (
    <button className={s[clazz]}>{text}</button>
  )
}

export default Button