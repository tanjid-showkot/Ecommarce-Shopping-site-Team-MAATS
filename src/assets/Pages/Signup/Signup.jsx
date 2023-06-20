import React, { useContext, useState } from 'react';
import { set, useForm } from "react-hook-form"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-hot-toast';

const Signup = () => {
    const { register, handleSubmit } = useForm()
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('')
    const onSubmit = (data) => {
        setSignUpError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                toast("User Created Successfully")
                console.log(user);
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => { })
                    .catch(error => { console.log(error.message) })
            })
            .catch(error => {
                console.log(error);
                setSignUpError(error.message)
            }
            );

    }

    return (
        <div className=' mt-11 mb-52'>
            <div className=' w-[500px] h-[700px] bg-base-100 p-12 mx-auto'>
                <h1 className=' m-4 text-center text-primary font-bold text-3xl'>Sign Up</h1>
                <form className=' p-6' onSubmit={handleSubmit(onSubmit)}>
                    <label className='text-primary font-bold text-xl '>Name</label>

                    <input className=' w-full mt-5 mb-5 rounded border-2 border-primary h-16' {...register("name")} />



                    <label className='text-primary font-bold text-xl'>Email</label>

                    <input type='email' className=' w-full mt-5 mb-5 rounded border-2 border-primary h-16' {...register("email")} />

                    <label className='text-primary font-bold text-xl'>Password</label>

                    <input type='password' className=' w-full mt-5 mb-5 rounded border-2 border-primary h-16' {...register("password")} />
                    {signUpError && <p className=' text-red-500'>{signUpError}</p>}

                    <input className='p-6 w-full btn btn-primary text-center text-white' type="submit" value="Sign Up" />
                    <div className=' text-right hover:text-primary'>
                        <Link to={'/login'} href="">Already have an account?</Link>
                    </div>
                </form>
                <div className="divider">OR</div>
                <div className="px-6 sm:px-0 mx-auto max-w-sm">
                    <button type="button" className="text-white w-full mx-auto  bg-primary hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2"><svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Sign up with Google<div></div></button>
                </div>


            </div>
        </div>
    );
};

export default Signup;
