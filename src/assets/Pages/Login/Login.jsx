// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import logHtml from '../../../login/index.html'





const Login = () => {
    useEffect(() => {

        const handleMessage = (event) => {
            console.log(event.data)



        };
        window.addEventListener('message', handleMessage);
        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, []);
    return (
        <div  >
            <iframe className=' w-full h-screen ' scrolling='no' src={logHtml} title="External HTML"></iframe>


        </div>
    );
};

export default Login;