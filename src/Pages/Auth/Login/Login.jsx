import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const {register,handleSubmit,formState:{errors}}=useForm()


    const {signinUser}=useAuth()
    const handleLogin=(data)=>{
        console.log('data',data);
        signinUser(data.email,data.password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error);
        })
    }

    return (
        <div>
            <h1 className='text-4xl font-extrabold'>Welcome Back</h1>
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
                        <button className="btn btn-primary mt-4">Registration</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;