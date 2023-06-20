// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react';
import logHtml from '../../../login/index.html'
import { AuthContext } from '../../context/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';





const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';


    useEffect(() => {

        const handleMessage = (event) => {
            setLoginError('');


            console.log(event.data)
            signIn(event.data.email, event.data.password)
                .then(result => {
                    const user = result.user;
                    console.log(user);
                    navigate(from, { replace: true });
                })
                .catch(error => {
                    console.log(error.message);
                    setLoginError(error.message)
                }
                );
        };
        window.addEventListener('message', handleMessage);
        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, []);
    return (
        <div  >
            <iframe className=' w-full h-screen ' scrolling='no' src={logHtml} title="External HTML"></iframe>
            {/* {loginError && <p className=' text-red-500'>{loginError}</p>} */}


        </div>
    );
};

export default Login;