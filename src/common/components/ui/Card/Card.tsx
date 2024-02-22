import React, {
    ComponentPropsWithoutRef,
    ElementType,
    ReactNode,
    forwardRef
} from 'react'
import s from './Card.module.scss'
import clsx from 'clsx'

type Props = ComponentPropsWithoutRef<'div'>
export const Card =
  ({ className, ...rest }: Props) => {
    const finallyStyle = clsx(s.card, className)
    return <div className={finallyStyle} {...rest} />
}
