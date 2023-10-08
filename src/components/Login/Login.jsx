import SocialLogin from "../SocialLogin/SocialLogin";

import logImg from '../../assets/login.jpg'

const Login = () => {

  const handellogin = (e) => {
    e.preventDefault();
    
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
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        password
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " name="password" type="password" placeholder="password.." />
    </div>
    <input className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline font-bold" type='submit'  value='log in' />
  </form>
  <SocialLogin />
            </div>
 
  
</div>
        </div>
    );
};

export default Login;