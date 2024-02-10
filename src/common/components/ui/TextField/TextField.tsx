import React, { ComponentPropsWithoutRef, ElementType } from 'react'
import s from './TextField.module.scss'

type Props<T extends ElementType = 'input'> = {
    as?: T,
    placeholder?: string,
    type?: string,
    variant?: 'default'
} & ComponentPropsWithoutRef<T>

export const Input = <T extends ElementType = 'input'>(
    props: Props<T> & Omit<ComponentPropsWithoutRef<T>, keyof Props<T>>
) => {
    const { as, variant = 'default', ...rest } = props
    const Component = as || 'input'
  return (
    <Component className={`${s.input} ${s[variant]}`} {...rest}/>
  )
}