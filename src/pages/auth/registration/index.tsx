import React, { useState } from 'react'
import s from './SignUp.module.scss'
import Image from 'next/image'
import googleIcon from '../../../../public/google-svgrepo-com 1.png'
import gitIcon from '../../../../public/google-svgrepo-com 2.png'
import { Button } from '@/common/components/ui/Button/Button'
import Link from 'next/link'
import Typography from '@/common/components/ui/Typography/Typography'
import { EyeNoneIcon, EyeOpenIcon } from '@radix-ui/react-icons'

type Props = {}

const SignUp = (props: Props) => {
  const[showPassword, setShowPassword] = useState<boolean>(false)
  const[showConfPass, setConfPass] = useState<boolean>(false)

  return (
    <section className={s.signup}>
      <form className={s.form}>
        <Typography as='h1' variant='h1' textAlign='center'>Sign Up</Typography>
        <div className={s.form_network}>
          <div>
            <Image src={gitIcon} width={36} height={36} alt='git icon'/>
          </div>
          <div>
            <Image src={googleIcon} width={36} height={36} alt='google icon'/>
          </div>
        </div>
        <label className={s.label}>Username</label>
        <input type="text" className={s.input}/>
        <label className={s.label}>Email</label>
        <input type="email" className={s.input}/>
        <label className={s.label}>Password</label>
        <div className={s.password_wrapper} tabIndex={0}>
          <input type={showPassword? 'text' : 'password'}/>
          {showPassword? 
          <EyeOpenIcon width={24} height={24} onClick={() => setShowPassword(false)}/> 
          : 
          <EyeNoneIcon width={24} height={24} onClick={() => setShowPassword(!showPassword)}/>}
        </div>
        <label className={s.label}>Password confirmation</label>
        <div className={s.password_wrapper} tabIndex={0}>
          <input type={showConfPass? 'text' : 'password'}/>
          {showConfPass? 
          <EyeOpenIcon width={24} height={24} onClick={() => setConfPass(false)}/> 
          : 
          <EyeNoneIcon width={24} height={24} onClick={() => setConfPass(!showConfPass)}/>}
        </div>
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
    </section>
  )
}

export default SignUp