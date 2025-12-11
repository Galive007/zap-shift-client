import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import { Link } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const { registerUser } = useAuth()
    const handleRegistration = (data) => {
        // console.log('data',data);
        console.log('data', data);

        registerUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='lg:w-1/2 pr-3 md:pr-0'>
            <h1 className='text-2xl 
         font-extrabold'>Create an Account</h1>
            <p>Register with ZapShift</p>
            <form onSubmit={handleSubmit(handleRegistration)}>
                {/* <h1 className='text-center font-bold text-2xl'>Registration</h1> */}
                <fieldset className="fieldset">
                    {/* Name */}
                    <label className="label">Name</label>
                    <input type="text" {...register('name', { required: true })} className="input w-full" placeholder="Your Name" />

                    {/* image */}
                    <label className="label">Image</label>
                    <input type="file" {...register('photo', { required: true })} className="file-input w-full" />

                    {/* email */}
                    <label className="label">Email</label>
                    <input type="email" {...register('email', { required: true })} className="input w-full" placeholder="Email" />

                    {/* password */}
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
                    <p>Already Have An Account.Please...... <Link className='underline hover:text-blue-600' to='/login'>Login</Link></p>
                    <button className="btn  text-primary btn-secondary mt-4">Registration</button>
                </fieldset>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register; <h1>This is Register</h1>