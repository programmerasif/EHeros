import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { FcGoogle } from 'react-icons/fc';
import Swal from 'sweetalert2';

import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
  
    const navigate = useNavigate()
    const { googleSignin, setloading } = useContext(AuthContext)
    
    
    const handelGoogleLogin = () => {
      googleSignin()
        .then((result) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'LogIn Succesfull',
            showConfirmButton: false,
            timer: 1500
          });
          
          const user = result.user;
          console.log(user);
        })
        .catch((error) => {
          const err = error.message;
          console.log(err);
        });
    }
  
    return (
     
        
        <button className=" text-black font-bold bg-gray-200 w-full flex justify-center items-center gap-3 py-2 mt-5 rounded-md" onClick={handelGoogleLogin}> <span className="text-3xl"><FcGoogle /></span> Google</button>
      
    );
  };
  

export default SocialLogin;