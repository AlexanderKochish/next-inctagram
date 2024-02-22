import { ReactNode } from 'react'
import s from './Dialog.module.scss'
import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import { DialogClose } from './DialogClose/DialogClose'

type Props = {
  title?: string
  trigger?: ReactNode
  className?: string
  children?: ReactNode
}
const DialogModal = ({
  trigger,
  children,
  className,
  title,
  ...rest
}: Props) => {
  return (
    <Dialog.Root {...rest}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={s.DialogOverlay} />
        <Dialog.Content className={s.DialogContent}>
          {title && (
            <div className={s.title}>
              <h2>{title}</h2>
              <DialogClose>
                <Cross2Icon className={s.close_icon} />
              </DialogClose>
            </div>
          )}
          <div className={s.description}>{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default DialogModal
