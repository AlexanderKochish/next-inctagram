import React, { ElementType } from 'react'
import s from './Card.module.scss'

type Props<T extends ElementType = 'div'> = {
    as?: T,
    
}

const Card = (props: Props) => {
  return (
    <div>Card</div>
  )
}

export default Card