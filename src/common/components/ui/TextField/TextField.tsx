import {ComponentPropsWithoutRef, forwardRef, useState} from 'react'
import s from './TextField.module.scss'
import clsx from "clsx";
import {EyeNoneIcon, EyeOpenIcon, MagnifyingGlassIcon} from "@radix-ui/react-icons";

type Props = {
    placeholder?: string
    type?: 'search' | 'email' | 'password' | 'text'
    variant?: 'default'
    label?: string
    onValueChange?: (value: string) => void
    error?: string
} & ComponentPropsWithoutRef<'input'>

// eslint-disable-next-line react/display-name
export const TextField = forwardRef<HTMLInputElement, Props>((
    props: Props,
    ref
) => {
    const[isVisible, setIsVisible] = useState<boolean>(true)

    const { placeholder,error,type = 'text', variant = 'default', label, ...rest } = props
    const Component = 'input'
    const finishClassName = clsx(s.default, s[variant])
    const errorClassName = error? clsx(s.input_wrapper, s.error) : s.input_wrapper
  return (
    <div className={s.wrapper}>
        {label && <label className={s.label}>
            {label}
        </label>}
        {type === 'text'&&<div className={errorClassName}>
            <input className={finishClassName} ref={ref} type={type}
                   placeholder={placeholder} {...rest}/>
        </div> }
        {type === 'search'&&<div className={errorClassName}>
                <div className={s.input_icon}>
                    <MagnifyingGlassIcon/>
                </div>
                <input className={finishClassName} ref={ref} type={type}
                       placeholder={placeholder} {...rest}/>
            </div> }

        {type === 'password' && <div className={errorClassName}>
            <input className={finishClassName} ref={ref} type={isVisible ? type : 'text'}
                   placeholder={placeholder} {...rest}/>

            <div className={s.input_icon} onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? <EyeNoneIcon/> : <EyeOpenIcon/>}
            </div>
        </div>}

        {type === 'email' && <div className={errorClassName}>
            <input className={finishClassName} ref={ref} type={type} placeholder={placeholder} {...rest}/>
        </div>}
        {error && <span className={s.input_error}>{error}</span>}
    </div>
  )
})