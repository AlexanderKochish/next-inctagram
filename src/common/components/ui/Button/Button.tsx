import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import s from './Button.module.scss'

type Props<T extends ElementType = 'button'> = {
    as?: T,
    variant?: 'primary' | 'secondary' | 'outline' | 'text',
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
  return (
    <Component className={`${s[variant]} ${fullWidth? s.fullWidth : ''} ${className}`} {...rest}>
      { children }
    </Component>
  )
}