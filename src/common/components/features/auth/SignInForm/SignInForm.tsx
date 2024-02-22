import {Card} from "@/common/components/ui/Card/Card";
import Typography from "@/common/components/ui/Typography/Typography";
import s from "./SignInForm.module.scss";
import Image from "next/image";
import gitIcon from "../../../../../../public/google-svgrepo-com 2.png";
import googleIcon from "../../../../../../public/google-svgrepo-com 1.png";
import {SignInSchema, SignInSchemaType} from "@/common/model/signInSchema";
import {SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {TextField} from "@/common/components/ui/TextField/TextField";
import Link from "next/link";
import {Button} from "@/common/components/ui/Button/Button";
import style from '../SignUpForm/SignUpForm.module.scss'

type Props = {
    disabled?: boolean,
    onSubmit: (data: SignInSchemaType) => void
}
export const SignInForm = ({ disabled, onSubmit }: Props) => {
    const {
        register,
        formState: {errors},
        handleSubmit
    } = useForm<SignInSchemaType>({mode: 'onBlur', resolver: zodResolver(SignInSchema)})

    const onSubmitHandler: SubmitHandler<SignInSchemaType> = (data: SignInSchemaType) => {
        onSubmit(data)
    }
    return (
        <Card className={style.form}>
            <Typography as="h1" variant="h1" textAlign="center">
                Sign Up
            </Typography>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <div className={style.form_network}>
                    <div>
                        <Image src={gitIcon} width={36} height={36} alt="git icon" />
                    </div>
                    <div>
                        <Image src={googleIcon} width={36} height={36} alt="google icon" />
                    </div>
                </div>
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
                <div className={s.forgot_password}>
                    <Typography variant='small' as='a' href={'/'}>
                        Forgot Password
                    </Typography>
                </div>
                <Button disabled={disabled} fullWidth>
                    Sign Up
                </Button>
                <div className={s.footer}>
                    <p>Do you have an account?</p>
                    <Link href={'/auth/login'}>
                        <Button variant="link" fullWidth>
                            Sign In
                        </Button>
                    </Link>
                </div>
            </form>
        </Card>
    );
};
