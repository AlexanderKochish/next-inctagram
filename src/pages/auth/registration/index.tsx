import s from './SignUp.module.scss'
import { SignUpForm } from '@/common/components/features/auth/SignUpForm'

type Props = {}

const SignUp = (props: Props) => {
  return (
    <section className={s.signup}>
      <SignUpForm onSubmit={() => null} />
    </section>
  )
}

export default SignUp
