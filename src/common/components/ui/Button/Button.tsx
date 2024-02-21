import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import s from './Button.module.scss'
import clsx from 'clsx'

type Props<T extends ElementType = 'button'> = {
    as?: T,
    variant?: 'primary' | 'secondary' | 'outline' | 'link',
    fullWidth?: boolean,
    children: ReactNode,
    className?: string
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(
  props: Props<T> & Omit<ComponentPropsWithoutRef<T>, keyof Props<T>>) => {
  const { 
    as, 
    fullWidth, 
    variant = 'primary', 
    className, 
    children,
    ...rest
  } = props
  
  const Component = as || 'button'
  const finishClassName = clsx(`${s.button} ${s[variant]} ${fullWidth? s.fullWidth : ''} ${className}`)
  
  return (
    <Component className={finishClassName} {...rest}>
      { children }
    </Component>
  )
}