import React from 'react'
import s from './SignUp.module.scss'
import Image from 'next/image'
import googleIcon from '../../../../public/google-svgrepo-com 1.png'
import gitIcon from '../../../../public/google-svgrepo-com 2.png'
import { Button } from '@/common/components/ui/Button/Button'
import Link from 'next/link'

type Props = {}

const SignUp = (props: Props) => {
  return (
    <section className={s.signup}>
      <form className={s.form}>
        <h1>Sign Up</h1>
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
        <input type="password" className={s.input}/>
        <label className={s.label}>Password confirmation</label>
        <input type="password" className={s.input}/>
        <div className={s.politics}>
          <input type="checkbox" />
          <p>I agree to the Terms of Service and Privacy Policy</p>
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