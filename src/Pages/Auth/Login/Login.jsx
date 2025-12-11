import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import { Link, useNavigate } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const navigation=useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm()


    const { signinUser } = useAuth()
    const handleLogin = (data) => {
        console.log('data', data);
        signinUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
                navigation('/')
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='lg:w-1/2'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-extrabold'>Welcome Back</h1>
            <p>Login with ZapShift</p>
            <div>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" {...register('email', { required: true })} className="input w-full" placeholder="Email" />

                        <label className="label">Password</label>
                        <input type="password" {...register('password', {
                            required: true,
                            minLength: 6,
                            pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/
                        })} className="input" placeholder="Password" />
                        {errors.password?.type === 'required' && <p className='text-red-600'>Password Is Required.</p>}
                        {errors.password?.type === 'minLength' && <p className='text-red-600'>Password must be at least 6 characters.</p>}
                        {errors.password?.type === 'pattern' && <p className='text-red-600'>Password must include at least one uppercase letter, one lowercase letter, one digit, and one special character.</p>}
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <p>New To Zap Shift.Please.....<Link className='underline hover:text-blue-600' to='/register'>Registration</Link></p>
                        <button className="btn mt-4 text-primary btn-secondary">Login</button>
                    </fieldset>
                </form>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;