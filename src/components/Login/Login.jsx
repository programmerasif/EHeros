import SocialLogin from "../SocialLogin/SocialLogin";

import logImg from '../../assets/login.jpg'
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login} = useContext(AuthContext)
    const [err, setError] = useState()
    const navigate = useNavigate()
  const handellogin = (e) => {
        e.preventDefault();
        const form = e.target
        const email = form.username.value;
        const password = form.password.value;
        login(email, password)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              // console.log(user);
              if (user) {
                Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'LogIn Successfull',
                  showConfirmButton: false,
                  timer: 1500
                })
                navigate('/')
              }
            })
            .catch((err) => {
      
              const error = err.message;
              console.log(error);
              setError('Email or Password is worng ')
            });
  }
    return (
        <div className="mt-32 flex md:flex-row flex-col justify-center items-center">
          <div>
        <img src={logImg} alt="" />
          </div>
          <div className="w-full px-5 rounded-md drop-shadow-lg">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <form onSubmit={handellogin}>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        Email
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="username" type="text" placeholder="Username" />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        password
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " name="password" type="password" placeholder="password.." />
    </div>
    <span>{err}</span>
    <input className="cursor-pointer shadow appearance-none border rounded w-full py-2 px-3 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline font-bold" type='submit'  value='log in' />
  </form>
  <SocialLogin />
            </div>
 
  
</div>
        </div>
    );
};

export default Login;