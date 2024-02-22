import React, {
  Component,
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
  forwardRef,
} from 'react'
import s from './Card.module.scss'
import clsx from 'clsx'

type Props<T extends ElementType = 'div'> = {
  as?: T
  children?: ReactNode
  className?: string
} & ComponentPropsWithoutRef<T>
export const Card = forwardRef(
  ({ children, as, className, ...rest }: Props) => {
    const Component = as || 'div'
    const finallyStyle = clsx(s.card, className)
    return (
      <Component {...rest} className={finallyStyle}>
        {children}
      </Component>
    )
  },
)
