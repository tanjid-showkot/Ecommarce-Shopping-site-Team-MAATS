// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider } from 'firebase/auth';
import { toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';





const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn, providerLogin } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = data => {
        setLoginError('');

        signIn(data.Email, data.Password)
            .then(res => {
                const user = res.user;

                toast("Login Successfully")
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });

    }
    const handleGoogleLogin = () => {
        providerLogin(new GoogleAuthProvider())
            .then(res => {
                const user = res.user;

                toast("Login Successfully")
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });
    }




    return (
        <div className='h-[1000px] flex justify-center items-center' >
            <div className='bg-white h-[600px] w-[500px]'>
                <h1 className='text-center text-4xl m-14 font-bold text-primary'>LogIn</h1>
                <div className='flex justify-center items-center'>
                    <form className='w-96 ms-0' onSubmit={handleSubmit(handleLogin)}>

                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("Email", { required: "Email Address is required" })} type="Email" placeholder="Enter Your Email here" className="input input-bordered w-full " />
                            {errors.Email && <p className='text-red-500 text-center'>{errors.Email?.message}</p>}

                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input  {...register("Password", { required: " password is recquired" })} type="Password" placeholder="Enter Your Password here" className="input input-bordered w-full " />
                            {errors.Password && <p className='text-red-500 text-center'>{errors.Password?.message}</p>}
                            <label className="label flex justify-end">
                                <button onClick={() => window.my_modal_5.showModal()}>Forgot Your Password?</button>
                                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                    <form method="dialog" className="modal-box">
                                        <h3 className="font-bold text-lg">Hey Man!</h3>
                                        <p className="py-4">Life is not a bed of roses. Think again? its must be your ex name. </p>
                                        <div className="modal-action">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn">Close</button>
                                        </div>
                                    </form>
                                </dialog>

                            </label>

                        </div>


                        <input className=' btn btn-active btn-primary text-white mt-6 w-full' type="submit" />

                        <p className='text-center'>New to MAATS commerce <Link className=' text-secondary hover:text-primary' to="/signup">create a new account</Link> </p>
                        <div>
                            {
                                loginError && <p className='text-red-500 text-center'>{loginError}</p>
                            }
                        </div>

                    </form>

                </div>
                <div className="divider  me-9 ms-9">OR</div>
                <div className='flex justify-center pe-12 ps-12 mt-8  w-full'>
                    <button onClick={handleGoogleLogin} className='btn btn-outline w-full'>Sign In with Google</button>
                </div>



            </div>
        </div>
    );
};

export default Login;