import React, { ComponentPropsWithoutRef, ElementType } from 'react'
import s from './Typography.module.scss'

type Props<T extends ElementType = 'p'> = {
  as?: T
  variant?:
    | 'large'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'regular16'
    | 'regularBold16'
    | 'regular14'
    | 'regularMedium14'
    | 'regularBold14'
    | 'small'
    | 'smallSemiBold'
    | 'regularLink'
    | 'smallLink'
  children: string
  textAlign?: 'start' | 'center' | 'end' | 'left' | 'right'
  className?: string
} & ComponentPropsWithoutRef<T>

const Typography = <T extends ElementType = 'p'>(
  props: Props<T> & Omit<ComponentPropsWithoutRef<T>, keyof Props<T>>,
) => {
  const {
    as,
    variant = 'regular16',
    children,
    textAlign = 'start',
    className,
  } = props
  const Component = as || 'p'

  return (
    <Component
      style={{ textAlign }}
      className={`${s.typography} ${s[variant]} ${className}`}
    >
      {children}
    </Component>
  )
}

export default Typography
