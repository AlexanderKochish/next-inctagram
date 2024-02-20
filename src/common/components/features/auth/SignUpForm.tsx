import s from './SignUpForm.module.scss'
import Image from 'next/image'
import googleIcon from '../../../../../public/google-svgrepo-com 1.png'
import gitIcon from '../../../../../public/google-svgrepo-com 2.png'
import { Button } from '@/common/components/ui/Button/Button'
import Link from 'next/link'
import Typography from '@/common/components/ui/Typography/Typography'
import {TextField} from "@/common/components/ui/TextField/TextField";

type Props = {
    register: any,
    handleSubmit: any,
    onSubmit: any,
    errors: any,
}
export const SignUpForm = (props: Props) => {
    const { register, handleSubmit, onSubmit, errors } = props
    return (
            <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                <Typography as='h1' variant='h1' textAlign='center'>Sign Up</Typography>
                <div className={s.form_network}>
                    <div>
                        <Image src={gitIcon} width={36} height={36} alt='git icon'/>
                    </div>
                    <div>
                        <Image src={googleIcon} width={36} height={36} alt='google icon'/>
                    </div>
                </div>
                <TextField
                    {...register('username')}
                    label={'Username'}
                    type={'text'}
                    error={errors.username?.message}
                />
                <TextField
                    {...register('email')}
                    label={'Email'}
                    type={'email'}
                    error={errors.email?.message}
                />
                <TextField
                    {...register('password')}
                    label={'Password'}
                    type={'password'}
                    error={errors.password?.message}
                />
                <TextField
                    {...register('passwordConfirm')}
                    label={'Password confirm'}
                    type={'password'}
                    error={errors.passwordConfirm?.message}
                />
                <div className={s.politics}>
                    <input type="checkbox" />
                    <p>I agree to the <Typography as='span' variant='smallLink'>Terms of Service</Typography> and <Typography as='span' variant='smallLink'>Privacy Policy</Typography></p>
                </div>
                <Button fullWidth>Sign Up</Button>
                <div className={s.footer}>
                    <p>Do you have an account?</p>
                    <Link href={'/auth/login'}>
                        <Button variant='link' fullWidth>Sign In</Button>
                    </Link>
                </div>
            </form>
    )
}