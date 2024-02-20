import s from './SignUp.module.scss'
import { useForm, SubmitHandler } from "react-hook-form"
import {z} from 'zod'
import { zodResolver} from "@hookform/resolvers/zod";
import {SignUpForm} from "@/common/components/features/auth/SignUpForm";

type Props = {}

const SignUpSchema = z.object({
  username: z.string().min(3).max(10),
  email: z.string().email(),
  password: z.string().min(5).max(15),
  passwordConfirm: z.string().min(5).max(15)
})
type SignUpSchemaType = z.infer<typeof SignUpSchema>;
const SignUp = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema)})
  const onSubmit: SubmitHandler<SignUpSchemaType> = (data) => console.log(data)

  return (
    <section className={s.signup}>
       <SignUpForm
           register={register}
           handleSubmit={handleSubmit}
           onSubmit={onSubmit}
           errors={errors}
       />
    </section>
  )
}

export default SignUp