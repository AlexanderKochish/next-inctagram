import React, { ReactNode } from 'react'
import * as RadixDialog from '@radix-ui/react-dialog'
import s from './DialogClose.module.scss'

type Props = {
  children?: ReactNode
}
export const DialogClose = ({ children }: Props) => {
  return <RadixDialog.Close className={s.Button}>{children}</RadixDialog.Close>
}
